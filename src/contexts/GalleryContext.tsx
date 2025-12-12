import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface GalleryItem {
  id: string;
  url: string;
  filename: string;
  service_group: string;
  description: string | null;
}

interface GalleryContextType {
  items: GalleryItem[];
  loading: boolean;
  error: string | null;
  getRandomImages: (count: number) => GalleryItem[];
  refetch: () => Promise<void>;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

// Placeholder images until real ones are uploaded
const placeholderImages: GalleryItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=600&h=400&fit=crop', filename: 'equipment-maintenance.jpg', service_group: 'Equipment Maintenance', description: 'Heavy-duty rotating equipment maintenance and repair services' },
  { id: '2', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop', filename: 'industrial-work.jpg', service_group: 'Industrial Services', description: 'Professional industrial machinery installation and maintenance' },
  { id: '3', url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop', filename: 'welding-services.jpg', service_group: 'Welding Services', description: 'Expert pipe welding, fabrication, and argon welding training' },
  { id: '4', url: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&h=400&fit=crop', filename: 'electrical-work.jpg', service_group: 'Electrical Services', description: 'Industrial electrical installation and maintenance' },
  { id: '5', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', filename: 'marine-machinery.jpg', service_group: 'Marine Services', description: 'Marine machinery maintenance and onboard ship services' },
  { id: '6', url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop', filename: 'training-center.jpg', service_group: 'Training Programs', description: 'Technical skills training for marine and industrial operations' },
  { id: '7', url: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=600&h=400&fit=crop', filename: 'pump-maintenance.jpg', service_group: 'Pump Services', description: 'Industrial pump maintenance and refurbishment' },
  { id: '8', url: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&h=400&fit=crop', filename: 'forklift-training.jpg', service_group: 'Forklift Training', description: 'Forklift operator training and certification programs' },
  { id: '9', url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop', filename: 'instrumentation.jpg', service_group: 'Instrumentation', description: 'Instrumentation and control system services' },
];

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<GalleryItem[]>(placeholderImages);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        console.error('Error fetching gallery:', fetchError);
        // Keep placeholder images on error
        return;
      }

      if (data && data.length > 0) {
        setItems(data);
      }
      // If no data, keep placeholders
    } catch (err) {
      console.error('Gallery fetch error:', err);
      setError('Failed to load gallery');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const getRandomImages = (count: number): GalleryItem[] => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  };

  return (
    <GalleryContext.Provider value={{ items, loading, error, getRandomImages, refetch: fetchGallery }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};
