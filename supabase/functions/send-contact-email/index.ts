import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormRequest {
  fullName: string;
  email: string;
  phone?: string;
  serviceOfInterest: string;
  message?: string;
  isTrainingRegistration: boolean;
  trainingMode?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const formData: ContactFormRequest = await req.json();

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.serviceOfInterest) {
      throw new Error("Missing required fields");
    }

    const formType = formData.isTrainingRegistration 
      ? "Training Registration" 
      : "Engineering Services Request";

    const emailSubject = formData.isTrainingRegistration
      ? `New Training Registration: ${formData.serviceOfInterest}`
      : `New Engineering Service Request: ${formData.serviceOfInterest}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">AMIRAC Resources & Technologies</h1>
          <p style="margin: 5px 0 0 0; font-size: 14px;">New ${formType}</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border: 1px solid #dee2e6;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #c4a35a; padding-bottom: 10px;">
            ${formType} Details
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #1e3a5f; width: 40%;">
                Full Name:
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                ${formData.fullName}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #1e3a5f;">
                Email Address:
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                <a href="mailto:${formData.email}" style="color: #1e3a5f;">${formData.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #1e3a5f;">
                Phone Number:
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                ${formData.phone || "Not provided"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #1e3a5f;">
                ${formData.isTrainingRegistration ? "Selected Course:" : "Service Requested:"}
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; color: #c4a35a; font-weight: bold;">
                ${formData.serviceOfInterest}
              </td>
            </tr>
            ${formData.trainingMode ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #1e3a5f;">
                Training Mode:
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                ${formData.trainingMode}
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #1e3a5f; vertical-align: top;">
                ${formData.isTrainingRegistration ? "Additional Notes:" : "Project Description:"}
              </td>
              <td style="padding: 10px 0;">
                ${formData.message || "No additional notes provided"}
              </td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #1e3a5f; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">This email was sent from the Amirac website contact form.</p>
          <p style="margin: 5px 0 0 0;">Please respond to this inquiry promptly.</p>
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Amirac Website <onboarding@resend.dev>",
        to: ["amiractech.ng@gmail.com"],
        subject: emailSubject,
        html: emailHtml,
        reply_to: formData.email,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const emailResponse = await res.json();
    console.log("Contact form email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
