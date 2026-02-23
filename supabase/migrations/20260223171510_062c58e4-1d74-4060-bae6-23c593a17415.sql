
-- Drop any existing overly permissive SELECT policy on contacts
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.contacts;
DROP POLICY IF EXISTS "Anyone can insert contacts" ON public.contacts;
DROP POLICY IF EXISTS "Anyone can read contacts" ON public.contacts;
DROP POLICY IF EXISTS "Anyone can select contacts" ON public.contacts;

-- Allow anyone to INSERT (public contact form submissions)
CREATE POLICY "Public can submit contact forms"
ON public.contacts FOR INSERT
WITH CHECK (true);

-- Restrict SELECT to authenticated users only (admin access)
CREATE POLICY "Only authenticated users can read contacts"
ON public.contacts FOR SELECT
USING (auth.role() = 'authenticated');
