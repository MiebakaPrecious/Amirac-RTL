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

// Service group definitions
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
    title: 'Marine Machinery & Onboard Ship Maintenance',
    description: 'Complete marine machinery maintenance services for vessels and offshore platforms.',
  },
  {
    slug: 'calibration-pressure-testing',
    title: 'Calibration & Pressure Testing',
    description: 'Equipment calibration services and pressure testing for industrial systems.',
  },
  {
    slug: 'electrical-services',
    title: 'Industrial Electrical Services',
    description: 'Complete industrial electrical installation and maintenance services.',
  },
  {
    slug: 'welding-training',
    title: 'Welding Services & Training',
    description: 'Professional welding certification programs covering pipe welding, fabrication, and argon welding.',
  },
  {
    slug: 'pneumatic-hydraulic-systems',
    title: 'Pneumatics & Hydraulics',
    description: 'Pneumatic and hydraulic systems maintenance, repair, and training services.',
  },
  {
    slug: 'forklift-training',
    title: 'Lifting Operations',
    description: 'Forklift operator certification training and maintenance services.',
  },
  {
    slug: 'engine-room-watchkeeping',
    title: 'Workshop Practice',
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

// Priority order for keyword matching (more specific keywords first)
const serviceKeywordPriority: Array<{ slug: string; keywords: string[] }> = [
  { slug: 'calibration-pressure-testing', keywords: ['calibration', 'pressure', 'testing'] },
  { slug: 'pneumatic-hydraulic-systems', keywords: ['pneumatic', 'hydraulic'] },
  { slug: 'engine-room-watchkeeping', keywords: ['engine-room', 'watchkeeping', 'watch-keeping'] },
  { slug: 'mechanical-technician-practice', keywords: ['mechanical-technician', 'technician-practice'] },
  { slug: 'industrial-valves-pumps-compressors', keywords: ['valve', 'valves', 'pump', 'pumps', 'compressor'] },
  { slug: 'rotating-static-equipment', keywords: ['rotating', 'static-equipment'] },
  { slug: 'heavy-duty-machinery', keywords: ['heavy-duty', 'heavy', 'machinery-maintenance'] },
  { slug: 'marine-machinery', keywords: ['marine', 'ship', 'vessel', 'onboard'] },
  { slug: 'welding-training', keywords: ['weld', 'welding'] },
  { slug: 'forklift-training', keywords: ['forklift', 'fork-lift', 'folk-lift'] },
  { slug: 'electrical-services', keywords: ['electric', 'electrical'] },
  { slug: 'basic-technical-training', keywords: ['basic-technical', 'technical-skill', 'skill-training'] },
  { slug: 'mechanical-technician-practice', keywords: ['mechanical', 'technician'] },
  { slug: 'hero', keywords: ['hero'] },
];

// Detect service group from filename using priority-based matching
export const detectServiceGroup = (filename: string): string => {
  const lowerFilename = filename.toLowerCase().replace(/[_\s]/g, '-');
  
  for (const { slug, keywords } of serviceKeywordPriority) {
    for (const keyword of keywords) {
      if (lowerFilename.includes(keyword)) {
        return slug;
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

// ALL gallery images — fully static, no cloud storage dependency
const buildStaticGalleryImages = (): GalleryImage[] => {
  const images: GalleryImage[] = [];
  const addGroup = (group: string, folder: string, files: string[]) => {
    const { title, description } = getServiceGroupDetails(group);
    files.forEach((filename, i) => {
      images.push({
        id: `local-${group}-${i}`,
        src: `/assets/gallery/${folder}/${filename}`,
        group,
        title,
        description,
      });
    });
  };

  // Industrial valves
  addGroup('industrial-valves-pumps-compressors', 'industrial-valves', [
    'industrial-valves-pumps-compressor-01.jpeg',
    'industrial-valves-pumps-compressor-02.jpeg',
  ]);

  // Workshop Practice / Engine Room Watch Keeping
  addGroup('engine-room-watchkeeping', 'workshop-practice', [
    'engine-room-watch-keeping-01.jpg',
    'engine-room-watch-keeping-02.jpeg',
  ]);

  // Lifting Operations / Forklift Training
  addGroup('forklift-training', 'lifting-operations', [
    'forklift-training-01.jpeg',
    'forklift-training-02.jpeg',
    'forklift-training-03.jpeg',
  ]);

  // Heavy Duty Machinery
  addGroup('heavy-duty-machinery', 'heavy-duty-machinery', [
    'heavy-duty-maintenance-01.jpeg',
    'heavy-duty-maintenance-02.jpeg',
    'heavy-duty-maintenance-03.jpg',
  ]);

  // Marine Machinery & Onboard Ship
  addGroup('marine-machinery', 'marine-machinery', [
    'marine-machinery-maintenance-01.jpeg',
    'onboard-ship-maintenance-01.jpeg',
    'onboard-ship-maintenance-02.jpeg',
  ]);

  // Rotating & Static Equipment
  addGroup('rotating-static-equipment', 'rotating-static-equipment', [
    'rotating-static-maintenance-01.jpeg',
    'rotating-static-maintenance-02.jpeg',
  ]);

  // Mechanical Technician Practice
  addGroup('mechanical-technician-practice', 'mechanical-technician', [
    'mechanical-technician-01.jpeg',
    'mechanical-technician-02.jpg',
    'mechanical-technician-03.jpg',
  ]);

  // Welding Training
  addGroup('welding-training', 'welding-training', [
    'welding-training-01.jpeg',
    'welding-training-02.jpeg',
  ]);

  // Pneumatics & Hydraulics
  addGroup('pneumatic-hydraulic-systems', 'pneumatic-hydraulic', [
    'pneumatic-maintenance-01.jpeg',
  ]);

  // Basic Technical Skill Training
  addGroup('basic-technical-training', 'basic-technical-training', [
    'basic-technical-training-01.jpg',
    'basic-technical-training-02.jpeg',
    'basic-technical-training-03.jpeg',
  ]);

  return images;
};

// Static gallery images built at module load time
export const staticGalleryImages: GalleryImage[] = buildStaticGalleryImages();

// Legacy export for backward compatibility
export const galleryImages = staticGalleryImages;

export const getRandomImages = (count: number, allImages: GalleryImage[] = staticGalleryImages): GalleryImage[] => {
  const filteredImages = allImages.filter(img => img.group !== 'hero');
  const shuffled = [...filteredImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getImagesByGroup = (allImages: GalleryImage[] = staticGalleryImages): Record<string, GalleryImage[]> => {
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
