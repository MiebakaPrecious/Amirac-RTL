-- Create gallery table for storing images with metadata
CREATE TABLE public.gallery (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  filename TEXT NOT NULL,
  service_group TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for gallery (public read, admin write)
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view gallery images
CREATE POLICY "Gallery images are publicly viewable" 
ON public.gallery 
FOR SELECT 
USING (true);

-- Create contacts table for form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_of_interest TEXT,
  message TEXT,
  register_for_training BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for contacts
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact form" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true);

-- Allow public read access to gallery bucket
CREATE POLICY "Gallery images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'gallery');

-- Allow public upload to gallery bucket (for admin later we can restrict)
CREATE POLICY "Anyone can upload to gallery" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'gallery');