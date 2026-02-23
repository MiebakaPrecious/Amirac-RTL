import { useState } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { engineeringServices } from '@/utils/servicesData';
import { sendEmailJS } from '@/utils/emailjs';

const engineeringSchema = z.object({
  companyName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  selectedService: z.string().min(1, 'Please select a service'),
  projectDescription: z.string().min(10, 'Please describe your project (at least 10 characters)'),
  preferredContact: z.string().min(1, 'Please select a contact method'),
});

interface EngineeringServicesFormProps {
  onBack: () => void;
}

const EngineeringServicesForm = ({ onBack }: EngineeringServicesFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    selectedService: '',
    projectDescription: '',
    preferredContact: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validated = engineeringSchema.parse(formData);
      setIsSubmitting(true);

      const serviceInfo = `Engineering: ${validated.selectedService}`;
      const messageContent = `Project Description: ${validated.projectDescription}\nPreferred Contact: ${validated.preferredContact}`;
      
      // Save to database
      const { error: dbError } = await supabase.from('contacts').insert({
        full_name: validated.companyName,
        email: validated.email,
        phone: validated.phone,
        service_of_interest: serviceInfo,
        message: messageContent,
        register_for_training: false,
      });

      if (dbError) {
        if (import.meta.env.DEV) console.error('DB error:', dbError.message);
      }

      // Send email via EmailJS
      try {
        await sendEmailJS({
          full_name: validated.companyName,
          email: validated.email,
          phone: validated.phone,
          service_type: 'Engineering Services',
          selected_service: validated.selectedService,
          training_duration: 'N/A',
          training_days: 'N/A',
          training_mode: 'N/A',
          message: `Project Description: ${validated.projectDescription}\nPreferred Contact: ${validated.preferredContact}`,
        });
      } catch (emailError) {
        if (import.meta.env.DEV) console.error('Email error:', emailError);
      }

      toast({
        title: 'Request Submitted!',
        description: 'Your request has been submitted successfully. We will contact you shortly.',
      });
      
      setFormData({
        companyName: '',
        email: '',
        phone: '',
        selectedService: '',
        projectDescription: '',
        preferredContact: '',
      });
      onBack();
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            fieldErrors[error.path[0] as string] = error.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to submit request. Please try again.',
          variant: 'destructive',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card p-8 rounded-lg border border-border">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to options
      </button>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-b border-border pb-4 mb-6">
          <h2 className="text-2xl font-heading font-bold text-primary">
            Engineering Services Request
          </h2>
          <p className="text-muted-foreground mt-1">Request our professional engineering solutions</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Company / Individual Name *
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
            placeholder="Your company or full name"
          />
          {errors.companyName && <p className="text-destructive text-sm mt-1">{errors.companyName}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
              placeholder="Your phone number"
            />
            {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Select Engineering Service *
          </label>
          <select
            value={formData.selectedService}
            onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Select a service</option>
            {engineeringServices.map((service, index) => (
              <option key={index} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.selectedService && <p className="text-destructive text-sm mt-1">{errors.selectedService}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Project Description *
          </label>
          <textarea
            value={formData.projectDescription}
            onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            placeholder="Describe your project requirements, timeline, and any specific needs..."
          />
          {errors.projectDescription && <p className="text-destructive text-sm mt-1">{errors.projectDescription}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Preferred Contact Method *
          </label>
          <select
            value={formData.preferredContact}
            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Select contact method</option>
            <option value="Phone Call">Phone Call</option>
            <option value="Email">Email</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
          {errors.preferredContact && <p className="text-destructive text-sm mt-1">{errors.preferredContact}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Request
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default EngineeringServicesForm;
