-- Drop the broken public read policy
DROP POLICY IF EXISTS "Public can read individual gallery files" ON storage.objects;

-- Recreate with correct USING condition for true public access
CREATE POLICY "Public can read individual gallery files"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'gallery'::text);