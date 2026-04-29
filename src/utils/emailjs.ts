import { supabase } from "@/integrations/supabase/client";

export const sendEmailJS = async (templateParams: Record<string, string>) => {
  const { data, error } = await supabase.functions.invoke("send-contact-email", {
    body: templateParams,
  });

  if (error) {
    throw new Error(error.message || "Failed to send email");
  }
  return data;
};
