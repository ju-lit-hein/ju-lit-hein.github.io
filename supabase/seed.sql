-- The canonical portfolio seed is kept in the initial migration so a fresh
-- project receives content through `supabase db push` as well as `db reset`.
\ir migrations/20260918000000_create_portfolio_content.sql
