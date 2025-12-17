// Vite-compatible dynamic imports for all gallery images
const imageModules = import.meta.glob<{ default: string }>(
  '/src/assets/gallery/**/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

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

// Service group definitions with keywords for filename matching
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
    slug: 'engine-room-watchkeeping',
    title: 'Engine Room Watch Keeping Practice',
    description: 'Engine room watch keeping training and practice for marine operations.',
  },
  {
    slug: 'basic-technical-training',
    title: 'Basic Technical Skill Training',
    description: 'Foundational technical skills development and training programs.',
  },
  {
    slug: 'mechanical-technician-practice',
    title: 'Mechanical Technician Practice',
    description: 'Hands-on mechanical technician training and practice.',
  },
  {
    slug: 'hero',
    title: 'Hero Images',
    description: 'Hero banner images for the website.',
  },
];

// Keyword mapping for service group detection from filenames
const serviceKeywords: Record<string, string[]> = {
  'industrial-valves-pumps-compressors': ['valve', 'valves', 'pump', 'pumps', 'compressor'],
  'rotating-static-equipment': ['rotating', 'static', 'equipment'],
  'heavy-duty-machinery': ['heavy', 'duty', 'machinery'],
  'marine-machinery': ['marine', 'ship', 'vessel'],
  'welding-training': ['weld', 'welding'],
  'forklift-training': ['forklift', 'fork'],
  'electrical-services': ['electric', 'electrical'],
  'engine-room-watchkeeping': ['engine', 'room', 'watchkeeping'],
  'basic-technical-training': ['basic', 'technical', 'training'],
  'mechanical-technician-practice': ['mechanical', 'technician'],
  'hero': ['hero'],
};

// Detect service group from filename
const detectServiceGroup = (filename: string): string => {
  const lowerFilename = filename.toLowerCase();
  
  for (const [group, keywords] of Object.entries(serviceKeywords)) {
    for (const keyword of keywords) {
      if (lowerFilename.includes(keyword)) {
        return group;
      }
    }
  }
  
  return 'general';
};

// Get service group details
const getServiceGroupDetails = (slug: string): { title: string; description: string } => {
  const group = serviceGroups.find(g => g.slug === slug);
  return {
    title: group?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: group?.description || 'Professional industrial services.',
  };
};

// Build gallery images from Vite's import.meta.glob
const buildGalleryImages = (): GalleryImage[] => {
  const images: GalleryImage[] = [];
  
  Object.entries(imageModules).forEach(([path, module], index) => {
    // Extract filename from path
    const filename = path.split('/').pop() || '';
    const group = detectServiceGroup(filename);
    const { title, description } = getServiceGroupDetails(group);
    
    images.push({
      id: `vite-${index}-${filename.replace(/\.[^/.]+$/, '')}`,
      src: module.default,
      group,
      title,
      description,
    });
  });
  
  return images;
};

// Static gallery images built at module load time
export const staticGalleryImages: GalleryImage[] = buildGalleryImages();

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
