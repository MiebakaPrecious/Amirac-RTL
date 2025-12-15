import industrialValves2 from '@/assets/gallery/Industrial-valves-Pumps-compressor-service-2.jpeg';
import industrialValves4 from '@/assets/gallery/Industrial-valves-Pumps-compressor-service-4.jpeg';

export interface GalleryImage {
  id: string;
  src: string;
  group: string;
  title: string;
  description: string;
}

export interface ServiceGroup {
  slug: string;
  title: string;
  description: string;
}

export const serviceGroups: ServiceGroup[] = [
  {
    slug: 'industrial-valves-pumps-compressors',
    title: 'Industrial Valves, Pumps & Compressor Services',
    description: 'Maintenance, servicing, testing, and performance optimization of industrial valves, pumps, and compressor systems for onshore, offshore, marine, and industrial operations.',
  },
  {
    slug: 'rotating-static-equipment',
    title: 'Rotating & Static Equipment Maintenance',
    description: 'Comprehensive maintenance services for all types of rotating and static industrial equipment.',
  },
  {
    slug: 'heavy-duty-machinery',
    title: 'Heavy Duty Machinery Maintenance',
    description: 'Expert maintenance and repair services for heavy-duty industrial machinery.',
  },
  {
    slug: 'marine-machinery',
    title: 'Marine Machinery Maintenance',
    description: 'Complete marine machinery maintenance services for vessels and offshore platforms.',
  },
  {
    slug: 'welding-training',
    title: 'Welding Training',
    description: 'Professional welding certification programs covering pipe welding, fabrication, and argon welding.',
  },
  {
    slug: 'forklift-training',
    title: 'Forklift Operator Training',
    description: 'Forklift operator certification training and maintenance services.',
  },
  {
    slug: 'electrical-services',
    title: 'Industrial Electrical Services',
    description: 'Complete industrial electrical installation and maintenance services.',
  },
  {
    slug: 'hero',
    title: 'Hero Images',
    description: 'Hero banner images for the website.',
  },
];

// Static gallery images from local assets
export const staticGalleryImages: GalleryImage[] = [
  {
    id: 'static-ivpc-1',
    src: industrialValves2,
    group: 'industrial-valves-pumps-compressors',
    title: 'Industrial Valves, Pumps & Compressor Services',
    description: 'Maintenance, servicing, testing, and performance optimization of industrial valves, pumps, and compressor systems for onshore, offshore, marine, and industrial operations.',
  },
  {
    id: 'static-ivpc-2',
    src: industrialValves4,
    group: 'industrial-valves-pumps-compressors',
    title: 'Industrial Valves, Pumps & Compressor Services',
    description: 'Maintenance, servicing, testing, and performance optimization of industrial valves, pumps, and compressor systems for onshore, offshore, marine, and industrial operations.',
  },
];

// Legacy export for backward compatibility
export const galleryImages = staticGalleryImages;

export const getRandomImages = (count: number, allImages: GalleryImage[] = staticGalleryImages): GalleryImage[] => {
  // Filter out hero images
  const filteredImages = allImages.filter(img => img.group !== 'hero');
  const shuffled = [...filteredImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getImagesByGroup = (allImages: GalleryImage[] = staticGalleryImages): Record<string, GalleryImage[]> => {
  // Filter out hero images
  const filteredImages = allImages.filter(img => img.group !== 'hero');
  return filteredImages.reduce((acc, image) => {
    if (!acc[image.group]) {
      acc[image.group] = [];
    }
    acc[image.group].push(image);
    return acc;
  }, {} as Record<string, GalleryImage[]>);
};

export const getGroupTitle = (slug: string): string => {
  const group = serviceGroups.find(g => g.slug === slug);
  return group?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};
