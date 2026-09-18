import React, { FormEvent, useEffect, useState } from 'react';
import { ArrowLeft, Check, Loader, LockKeyhole, LogOut, Save, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Admin: React.FC = () => {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(() => sessionStorage.getItem('admin_session'));
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState('');
  const [isLoadingContent, setIsLoadingContent] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState('');

  const contentApi = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/content-api`;

  useEffect(() => {
    if (!token) return;
    const loadContent = async () => {
      setIsLoadingContent(true);
      try {
        const response = await fetch(contentApi, { headers: { Authorization: `Bearer ${token}`, apikey: import.meta.env.VITE_SUPABASE_ANON_KEY } });
        const result = await response.json() as { content?: unknown; error?: string };
        if (!response.ok || !result.content) throw new Error(result.error ?? t('admin.loadError'));
        setContent(JSON.stringify(result.content, null, 2));
      } catch (loadError) {
        setStatus(loadError instanceof Error ? loadError.message : t('admin.loadError'));
      } finally {
        setIsLoadingContent(false);
      }
    };
    void loadContent();
  }, [token, contentApi, t]);

  const saveContent = async () => {
    setStatus('');
    let parsedContent: unknown;
    try {
      parsedContent = JSON.parse(content);
    } catch {
      setStatus(t('admin.invalidJson'));
      return;
    }

    setIsSaving(true);
    try {
      const response = await fetch(contentApi, { method: 'PUT', headers: { Authorization: `Bearer ${token}`, apikey: import.meta.env.VITE_SUPABASE_ANON_KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ content: parsedContent }) });
      const result = await response.json() as { content?: unknown; error?: string };
      if (!response.ok) throw new Error(result.error ?? t('admin.saveError'));
      setContent(JSON.stringify(result.content, null, 2));
      setStatus(t('admin.saved'));
    } catch (saveError) {
      setStatus(saveError instanceof Error ? saveError.message : t('admin.saveError'));
    } finally {
      setIsSaving(false);
    }
  };

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-login`, {
        method: 'POST',
        headers: {
          apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });
      const result = await response.json() as { token?: string; error?: string };

      if (!response.ok || !result.token) {
        throw new Error(result.error ?? t('admin.invalidPassword'));
      }

      sessionStorage.setItem('admin_session', result.token);
      setToken(result.token);
      setPassword('');
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : t('admin.connectionError'));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem('admin_session');
    setToken(null);
  };

  return (
    <main className="site-shell min-h-screen bg-[var(--paper)] text-[var(--ink)] px-5 py-8 md:px-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <a href="/#main" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted)] hover:text-[var(--signal)] transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t('admin.back')}
        </a>

        {!token ? (
          <section className="min-h-[75vh] flex items-center justify-center">
            <div className="w-full max-w-md border-t-2 border-[var(--ink)] pt-6">
              <LockKeyhole className="w-7 h-7 text-[var(--signal)] mb-6" />
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--signal-dark)] mb-4">{t('admin.label')}</p>
              <h1 className="display-title text-5xl font-bold mb-5">{t('admin.title')}</h1>
              <p className="text-sm leading-relaxed text-[var(--muted)] mb-8">{t('admin.intro')}</p>
              <form onSubmit={login} className="space-y-4">
                <label className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)]" htmlFor="admin-password">{t('admin.password')}</label>
                <input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required className="w-full border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none focus:border-[var(--signal)]" />
                {error && <p role="alert" className="text-sm text-[var(--signal-dark)]">{error}</p>}
                <button type="submit" disabled={isLoading} className="w-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--paper)] hover:bg-[var(--signal)] disabled:opacity-50">{isLoading ? t('admin.checking') : t('admin.signIn')}</button>
              </form>
            </div>
          </section>
        ) : (
          <section className="pt-20 md:pt-28">
            <div className="flex flex-wrap items-start justify-between gap-6 border-b border-[var(--line)] pb-8">
              <div><div className="flex items-center gap-3 mb-5"><ShieldCheck className="w-5 h-5 text-[var(--signal)]" /><p className="font-mono text-xs uppercase tracking-wider text-[var(--signal-dark)]">{t('admin.label')}</p></div><h1 className="display-title text-5xl md:text-7xl font-bold">{t('admin.dashboard')}</h1></div>
              <button type="button" onClick={logout} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted)] hover:text-[var(--signal)]"><LogOut className="w-4 h-4" /> {t('admin.signOut')}</button>
            </div>
            <div className="mt-10 border border-[var(--line)] p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5"><div><h2 className="text-2xl font-semibold mb-2">{t('admin.editorTitle')}</h2><p className="text-sm leading-relaxed text-[var(--muted)]">{t('admin.editorDescription')}</p></div><button type="button" onClick={() => void saveContent()} disabled={isSaving || isLoadingContent || !content} className="inline-flex items-center gap-2 bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--paper)] hover:bg-[var(--signal)] disabled:opacity-50">{isSaving ? <Loader className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} {t('admin.save')}</button></div>
              {isLoadingContent ? <div className="flex items-center gap-2 py-8 text-sm text-[var(--muted)]"><Loader className="w-4 h-4 animate-spin" /> {t('admin.loading')}</div> : <textarea value={content} onChange={(event) => setContent(event.target.value)} spellCheck={false} aria-label={t('admin.editorTitle')} className="min-h-[32rem] w-full resize-y border border-[var(--line)] bg-[var(--paper-deep)] p-4 font-mono text-xs leading-relaxed outline-none focus:border-[var(--signal)]" />}
              {status && <p className="mt-4 flex items-center gap-2 text-sm text-[var(--signal-dark)]"><Check className="w-4 h-4" /> {status}</p>}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Admin;