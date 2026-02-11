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
  { slug: 'industrial-valves-pumps-compressors', title: 'Industrial Valves, Pumps & Compressor Services', description: 'Maintenance, servicing, testing, and performance optimization of industrial valves, pumps, and compressor systems.' },
  { slug: 'rotating-static-equipment', title: 'Rotating & Static Equipment Maintenance', description: 'Comprehensive maintenance services for all types of rotating and static industrial equipment.' },
  { slug: 'heavy-duty-machinery', title: 'Heavy Duty Machinery Maintenance', description: 'Expert maintenance and repair services for heavy-duty industrial machinery.' },
  { slug: 'marine-machinery', title: 'Marine Machinery & Onboard Ship Maintenance', description: 'Complete marine machinery maintenance services for vessels and offshore platforms.' },
  { slug: 'onboard-ship-machinery', title: 'Onboard Ship Machinery Maintenance', description: 'Hands-on ship machinery maintenance and repair services.' },
  { slug: 'marine-engineering', title: 'Marine Engineering Maintenance', description: 'Professional marine engineering maintenance and servicing.' },
  { slug: 'calibration-pressure-testing', title: 'Calibration & Pressure Testing', description: 'Equipment calibration services and pressure testing for industrial systems.' },
  { slug: 'electrical-services', title: 'Industrial Electrical Services', description: 'Complete industrial electrical installation and maintenance services.' },
  { slug: 'welding-training', title: 'Welding Services & Training', description: 'Professional welding certification programs covering pipe welding, fabrication, and argon welding.' },
  { slug: 'pneumatic-hydraulic-systems', title: 'Pneumatics & Hydraulics', description: 'Pneumatic and hydraulic systems maintenance, repair, and training services.' },
  { slug: 'forklift-training', title: 'Lifting Operations', description: 'Forklift operator certification training and maintenance services.' },
  { slug: 'engine-room-watchkeeping', title: 'Engine Room Watch Keeping Practice', description: 'Engine room watch keeping training and practice for marine operations.' },
  { slug: 'workshop-practice', title: 'Workshop Practice', description: 'Practical workshop training sessions.' },
  { slug: 'basic-technical-training', title: 'Basic Technical Skill Training', description: 'Foundational technical skills development and training programs.' },
  { slug: 'mechanical-technician-practice', title: 'Mechanical Technician Practice', description: 'Hands-on mechanical technician training and practice.' },
  { slug: 'mechanical-instrumentation', title: 'Mechanical Instrumentation Training', description: 'Mechanical instrumentation training and calibration practice.' },
  { slug: 'instrumentation-training', title: 'Instrumentation Training', description: 'Instrumentation and control systems training.' },
  { slug: 'trainees-sea-time', title: 'Trainees on Sea Time Experience', description: 'Trainees gaining practical sea time experience onboard vessels.' },
  { slug: 'training-ongoing', title: 'Training Ongoing', description: 'Ongoing training activities and sessions.' },
  { slug: 'general', title: 'Other Training Images', description: 'Additional training and project images.' },
  { slug: 'hero', title: 'Hero Images', description: 'Hero banner images for the website.' },
];

// ALL gallery images — fully static, local assets only
const buildStaticGalleryImages = (): GalleryImage[] => {
  const images: GalleryImage[] = [];
  const addGroup = (group: string, folder: string, files: string[]) => {
    const grp = serviceGroups.find(g => g.slug === group);
    const title = grp?.title || group;
    const description = grp?.description || '';
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

  // Rotating & Static Equipment
  addGroup('rotating-static-equipment', 'rotating-static-equipment', [
    'rotating-static-maintenance-01.jpeg',
    'rotating-static-maintenance-02.jpeg',
  ]);

  // Heavy Duty Machinery
  addGroup('heavy-duty-machinery', 'heavy-duty-machinery', [
    'heavy-duty-maintenance-01.jpeg',
    'heavy-duty-maintenance-02.jpeg',
    'heavy-duty-maintenance-03.jpg',
  ]);

  // Marine Machinery
  addGroup('marine-machinery', 'marine-machinery', [
    'marine-machinery-maintenance-01.jpeg',
    'onboard-ship-maintenance-01.jpeg',
    'onboard-ship-maintenance-02.jpeg',
  ]);

  // Onboard Ship Machinery Maintenance (new)
  addGroup('onboard-ship-machinery', 'Onboard-ship-machinery-maintenance', [
    'Onboard-ship-machinery-maintenance-01.jpg',
    'Onboard-ship-machinery-maintenance-02.jpg',
    'Onboard-ship-machinery-maintenance-03.jpg',
    'Onboard-ship-machinery-maintenance-04.jpg',
    'Onboard-ship-machinery-maintenance-05.jpg',
    'Onboard-ship-machinery-maintenance-06.jpg',
  ]);

  // Marine Engineering Maintenance (new)
  addGroup('marine-engineering', 'Marine-engineering-maintenance', [
    'Marine-engineering-maintenance-01.jpg',
    'Marine-engineering-maintenance-02.jpg',
    'Marine-engineering-maintenance-03.jpg',
    'Marine-engineering-maintenance-04.jpg',
  ]);

  // Electrical Maintenance
  addGroup('electrical-services', 'electrical-maintenance', [
    'electrical-maintenance-01.jpg',
    'electrical-maintenance-02.jpg',
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

  // Lifting Operations / Forklift
  addGroup('forklift-training', 'lifting-operations', [
    'forklift-training-01.jpeg',
    'forklift-training-02.jpeg',
    'forklift-training-03.jpeg',
  ]);

  // Engine Room Watch Keeping Practice (capitalized folder - new)
  addGroup('engine-room-watchkeeping', 'Engine-room-watch-keeping-practice', [
    'Engine-room-watch-keeping-practice-01.jpg',
  ]);

  // Workshop Practice
  addGroup('workshop-practice', 'workshop-practice', [
    'engine-room-watch-keeping-01.jpg',
    'engine-room-watch-keeping-02.jpeg',
  ]);

  // Basic Technical Training
  addGroup('basic-technical-training', 'basic-technical-training', [
    'basic-technical-training-01.jpg',
    'basic-technical-training-02.jpeg',
    'basic-technical-training-03.jpeg',
  ]);

  // Mechanical Technician Practice
  addGroup('mechanical-technician-practice', 'mechanical-technician', [
    'mechanical-technician-01.jpeg',
    'mechanical-technician-02.jpg',
    'mechanical-technician-03.jpg',
  ]);

  // Mechanical Instrumentation Training (new)
  addGroup('mechanical-instrumentation', 'mechanical-instrumentation', [
    'mechanical-instrumentation-01.jpg',
    'mechanical-instrumentation-02.jpg',
    'mechanical-instrumentation-03.jpg',
  ]);

  // Mechanical Instrumentation Training - capitalized folder (new)
  addGroup('mechanical-instrumentation', 'Mechanical-instrumentation-training', [
    'Mechanical-instrumentation-training-01.jpg',
    'Mechanical-instrumentation-training-02.jpg',
    'Mechanical-instrumentation-training-03.jpg',
    'Mechanical-instrumentation-training-04.jpg',
  ]);

  // Instrumentation Training (new)
  addGroup('instrumentation-training', 'instrumentation-training', [
    'instrumentation-training-01.jpg',
    'instrumentation-training-02.jpg',
  ]);

  // Trainees on Sea Time Experience (new)
  addGroup('trainees-sea-time', 'trainees-on-a-sea-time-expirence', [
    'trainees-on-a-sea-time-expirence-01.jpg',
    'trainees-on-a-sea-time-expirence-02.jpg',
    'trainees-on-a-sea-time-expirence-03.jpg',
    'trainees-on-a-sea-time-expirence-04.jpg',
    'trainees-on-a-sea-time-expirence-05.jpg',
  ]);

  // Training Ongoing (new)
  addGroup('training-ongoing', 'Training-ongoing', [
    'Training-ongoing.jpg',
  ]);

  // Other Training Images
  addGroup('general', 'other-training-images', [
    'construction-process.jpg',
  ]);

  return images;
};

export const staticGalleryImages: GalleryImage[] = buildStaticGalleryImages();
export const galleryImages = staticGalleryImages;

export const getRandomImages = (count: number, allImages: GalleryImage[] = staticGalleryImages): GalleryImage[] => {
  const filteredImages = allImages.filter(img => img.group !== 'hero');
  const shuffled = [...filteredImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getImagesByGroup = (allImages: GalleryImage[] = staticGalleryImages): Record<string, GalleryImage[]> => {
  const filteredImages = allImages.filter(img => img.group !== 'hero');
  return filteredImages.reduce((acc, image) => {
    if (!acc[image.group]) acc[image.group] = [];
    acc[image.group].push(image);
    return acc;
  }, {} as Record<string, GalleryImage[]>);
};

export const getGroupTitle = (slug: string): string => {
  const group = serviceGroups.find(g => g.slug === slug);
  return group?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};

// Priority order for keyword matching
export const detectServiceGroup = (filename: string): string => {
  const lower = filename.toLowerCase().replace(/[_\s]/g, '-');
  const keywords: Array<{ slug: string; kw: string[] }> = [
    { slug: 'industrial-valves-pumps-compressors', kw: ['valve', 'pump', 'compressor'] },
    { slug: 'rotating-static-equipment', kw: ['rotating', 'static-equipment'] },
    { slug: 'heavy-duty-machinery', kw: ['heavy-duty'] },
    { slug: 'marine-machinery', kw: ['marine', 'ship'] },
    { slug: 'welding-training', kw: ['weld'] },
    { slug: 'forklift-training', kw: ['forklift'] },
    { slug: 'electrical-services', kw: ['electric'] },
    { slug: 'engine-room-watchkeeping', kw: ['engine-room', 'watchkeeping'] },
    { slug: 'basic-technical-training', kw: ['basic-technical'] },
    { slug: 'mechanical-technician-practice', kw: ['mechanical-technician'] },
    { slug: 'pneumatic-hydraulic-systems', kw: ['pneumatic', 'hydraulic'] },
  ];
  for (const { slug, kw } of keywords) {
    for (const k of kw) { if (lower.includes(k)) return slug; }
  }
  return 'general';
};
