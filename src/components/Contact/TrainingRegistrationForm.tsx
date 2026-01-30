import { useState } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { trainingCourses } from '@/utils/servicesData';

const trainingSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  selectedCourse: z.string().min(1, 'Please select a training course'),
  trainingMode: z.string().min(1, 'Please select a training mode'),
  message: z.string().optional(),
});

interface TrainingRegistrationFormProps {
  onBack: () => void;
}

const TrainingRegistrationForm = ({ onBack }: TrainingRegistrationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedCourse: '',
    trainingMode: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validated = trainingSchema.parse(formData);
      setIsSubmitting(true);

      const serviceInfo = `Training: ${validated.selectedCourse} (${validated.trainingMode})`;
      
      // Save to database
      const { error: dbError } = await supabase.from('contacts').insert({
        full_name: validated.fullName,
        email: validated.email,
        phone: validated.phone,
        service_of_interest: serviceInfo,
        message: validated.message || null,
        register_for_training: true,
      });

      if (dbError) {
        console.error('Database error:', dbError);
      }

      // Send email notification
      try {
        const emailResponse = await supabase.functions.invoke('send-contact-email', {
          body: {
            fullName: validated.fullName,
            email: validated.email,
            phone: validated.phone,
            serviceOfInterest: validated.selectedCourse,
            message: validated.message,
            isTrainingRegistration: true,
            trainingMode: validated.trainingMode,
          },
        });

        if (emailResponse.error) {
          console.error('Email notification error:', emailResponse.error);
        }
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
      }

      toast({
        title: 'Registration Submitted!',
        description: 'Thank you for registering. We will contact you shortly.',
      });
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        selectedCourse: '',
        trainingMode: '',
        message: '',
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
          description: 'Failed to submit registration. Please try again.',
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
            Training Application
          </h2>
          <p className="text-muted-foreground mt-1">Register for our professional training programs</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
            placeholder="Your full name"
          />
          {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName}</p>}
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
            Select Training Course *
          </label>
          <select
            value={formData.selectedCourse}
            onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Select a training course</option>
            {trainingCourses.map((course, index) => (
              <option key={index} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
          {errors.selectedCourse && <p className="text-destructive text-sm mt-1">{errors.selectedCourse}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Preferred Training Mode *
          </label>
          <select
            value={formData.trainingMode}
            onChange={(e) => setFormData({ ...formData, trainingMode: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Select training mode</option>
            <option value="Physical">Physical (On-site)</option>
            <option value="Online">Online (Virtual)</option>
          </select>
          {errors.trainingMode && <p className="text-destructive text-sm mt-1">{errors.trainingMode}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message / Additional Notes
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            placeholder="Any additional information or questions..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-accent text-accent-foreground font-bold rounded-lg shadow-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Registration
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default TrainingRegistrationForm;
