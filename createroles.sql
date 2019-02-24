create role webuser nologin;
grant webuser to nethopesitrep;

grant usage on schema public to webuser;
grant all on public.reports to webuser;
grant all on public.reports_tags to webuser;
grant all on public.tags to webuser;
