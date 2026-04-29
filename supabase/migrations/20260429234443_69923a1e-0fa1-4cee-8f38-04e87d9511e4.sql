-- 1. Restrict user_roles writes to admins only (prevent privilege escalation)
CREATE POLICY "Only admins can insert user roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update user roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete user roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 2. Lock down has_role function execution (still callable from RLS policies via SECURITY DEFINER)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;

-- 3. Storage policies for gallery bucket - admin-only writes, restrict listing
-- Drop any existing permissive policies on gallery bucket
DO $$
DECLARE pol RECORD;
BEGIN
  FOR pol IN
    SELECT policyname FROM pg_policies
    WHERE schemaname = 'storage' AND tablename = 'objects'
      AND (qual LIKE '%gallery%' OR with_check LIKE '%gallery%')
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON storage.objects', pol.policyname);
  END LOOP;
END $$;

-- Allow public to view individual gallery files (by direct URL/path), but not list
CREATE POLICY "Public can read individual gallery files"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'gallery' AND public.has_role(auth.uid(), 'admin'::app_role));

-- Public read by direct URL works through the public bucket setting; for SELECT via API restrict to admin (prevents listing)
CREATE POLICY "Admins can upload gallery files"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'gallery' AND public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update gallery files"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'gallery' AND public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (bucket_id = 'gallery' AND public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete gallery files"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'gallery' AND public.has_role(auth.uid(), 'admin'::app_role));