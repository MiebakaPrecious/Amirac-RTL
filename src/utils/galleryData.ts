import industrialValves2 from '@/assets/gallery/﻿﻿Industrial-valves-Pumps-compressor-service-2.jpeg';
import industrialValves4 from '@/assets/gallery/﻿﻿Industrial-valves-Pumps-compressor-service-4.jpeg';

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
  // Add more service groups here as needed
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'ivpc-1',
    src: industrialValves2,
    group: 'industrial-valves-pumps-compressors',
    title: 'Industrial Valves, Pumps & Compressor Services',
    description: 'Maintenance, servicing, testing, and performance optimization of industrial valves, pumps, and compressor systems for onshore, offshore, marine, and industrial operations.',
  },
  {
    id: 'ivpc-2',
    src: industrialValves4,
    group: 'industrial-valves-pumps-compressors',
    title: 'Industrial Valves, Pumps & Compressor Services',
    description: 'Maintenance, servicing, testing, and performance optimization of industrial valves, pumps, and compressor systems for onshore, offshore, marine, and industrial operations.',
  },
  // Add more images here as needed
];

export const getRandomImages = (count: number): GalleryImage[] => {
  const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, galleryImages.length));
};

export const getImagesByGroup = (): Record<string, GalleryImage[]> => {
  return galleryImages.reduce((acc, image) => {
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
