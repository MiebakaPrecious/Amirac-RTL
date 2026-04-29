
-- Create app_role enum
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Create user_roles table
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check role without recursive RLS
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Policies for user_roles: users can view their own roles; admins can view all
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

-- Tighten contacts table policies
DROP POLICY IF EXISTS "Only authenticated users can read contacts" ON public.contacts;
DROP POLICY IF EXISTS "Public can submit contact forms" ON public.contacts;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contacts;

-- Public (anon + authenticated) can submit the contact form
CREATE POLICY "Anyone can submit contact form"
ON public.contacts FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only admins can read submitted contacts
CREATE POLICY "Admins can read contacts"
ON public.contacts FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
