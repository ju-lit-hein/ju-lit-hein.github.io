const corsHeaders = {
  'Access-Control-Allow-Origin': Deno.env.get('SITE_ORIGIN') ?? '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const json = (body: Record<string, unknown>, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { ...corsHeaders, 'Content-Type': 'application/json' },
});

const timingSafeEqual = (left: string, right: string) => {
  const leftBytes = new TextEncoder().encode(left);
  const rightBytes = new TextEncoder().encode(right);
  if (leftBytes.length !== rightBytes.length) return false;

  let difference = 0;
  for (let index = 0; index < leftBytes.length; index += 1) {
    difference |= leftBytes[index] ^ rightBytes[index];
  }
  return difference === 0;
};

const encode = (value: string) => btoa(value).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');

const signSession = async (password: string) => {
  const payload = encode(JSON.stringify({ role: 'admin', exp: Date.now() + 8 * 60 * 60 * 1000 }));
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  const signatureBytes = Array.from(new Uint8Array(signature), (byte) => String.fromCharCode(byte)).join('');
  return `${payload}.${encode(signatureBytes)}`;
};

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const configuredPassword = Deno.env.get('ADMIN_PASSWORD');
  if (!configuredPassword) return json({ error: 'Admin authentication is not configured' }, 500);

  let payload: { password?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  if (typeof payload.password !== 'string' || !timingSafeEqual(payload.password, configuredPassword)) {
    return json({ error: 'Invalid password' }, 401);
  }

  return json({ authenticated: true, token: await signSession(configuredPassword) });
});
