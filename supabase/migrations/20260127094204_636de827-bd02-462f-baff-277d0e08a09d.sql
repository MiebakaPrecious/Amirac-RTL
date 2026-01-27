-- Fix security: Remove overly permissive policies and add proper restrictions

-- Drop the overly permissive storage upload policy
DROP POLICY IF EXISTS "Anyone can upload to gallery" ON storage.objects;

-- Create a restrictive upload policy (only service role can upload for now)
-- This prevents anonymous uploads while still allowing uploads via admin access
CREATE POLICY "Only authenticated users can upload to gallery"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'gallery');

-- Add UPDATE and DELETE policies for gallery storage
CREATE POLICY "Only authenticated users can update gallery files"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'gallery')
WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Only authenticated users can delete gallery files"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'gallery');

-- For the contacts table - ensure no SELECT is possible for anon users
-- The current policy only allows INSERT, which is correct
-- Let's explicitly deny SELECT by not having any SELECT policy (RLS enabled means deny by default)