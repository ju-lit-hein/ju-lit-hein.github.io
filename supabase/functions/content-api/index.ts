const corsHeaders = {
  'Access-Control-Allow-Origin': Deno.env.get('SITE_ORIGIN') ?? '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
};

const json = (body: Record<string, unknown>, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { ...corsHeaders, 'Content-Type': 'application/json' },
});

const decode = (value: string) => {
  const normalized = value.replaceAll('-', '+').replaceAll('_', '/');
  return atob(normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '='));
};

const verifyAdminToken = async (request: Request) => {
  const authorization = request.headers.get('Authorization') ?? '';
  const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : '';
  const password = Deno.env.get('ADMIN_PASSWORD');
  if (!token || !password) return false;

  const [payload, encodedSignature] = token.split('.');
  if (!payload || !encodedSignature) return false;

  try {
    const claims = JSON.parse(decode(payload)) as { role?: string; exp?: number };
    if (claims.role !== 'admin' || !claims.exp || claims.exp < Date.now()) return false;
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
    return await crypto.subtle.verify('HMAC', key, Uint8Array.from(decode(encodedSignature), (character) => character.charCodeAt(0)), new TextEncoder().encode(payload));
  } catch {
    return false;
  }
};

const supabaseRequest = async (method: string, body?: unknown) => {
  const response = await fetch(`${Deno.env.get('SUPABASE_URL')}/rest/v1/portfolio_content?id=eq.default`, {
    method,
    headers: {
      apikey: Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      Authorization: `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''}`,
      'Content-Type': 'application/json',
      ...(method === 'PATCH' ? { Prefer: 'return=representation' } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (!(await verifyAdminToken(request))) return json({ error: 'Unauthorized' }, 401);

  try {
    if (request.method === 'GET') {
      const rows = await supabaseRequest('GET');
      return json({ content: rows[0]?.content ?? null, updatedAt: rows[0]?.updated_at ?? null });
    }
    if (request.method === 'PUT') {
      const payload = await request.json() as { content?: unknown };
      if (!payload.content || typeof payload.content !== 'object' || Array.isArray(payload.content)) return json({ error: 'Content must be a JSON object' }, 400);
      const rows = await supabaseRequest('PATCH', { content: payload.content });
      return json({ content: rows[0]?.content ?? payload.content, updatedAt: rows[0]?.updated_at ?? null });
    }
    return json({ error: 'Method not allowed' }, 405);
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Content request failed' }, 500);
  }
});
