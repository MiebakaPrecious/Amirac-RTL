// Use Vite's import.meta.glob to eagerly import gallery image defaults
const galleryImages = import.meta.glob(
  "../assets/gallery/**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
) as Record<string, string>;

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
  'industrial-valves-pumps-compressors': ['valve', 'valves', 'pump', 'pumps', 'compressor', 'industrial-valves'],
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

export interface GalleryDataItem {
  service: string;
  images: string[];
  description: string;
}

// Build `galleryData` by filtering the globbed image defaults with keywords
export const galleryData: GalleryDataItem[] = serviceGroups
  .filter(group => group.slug !== "hero")
  .map((group) => {
    const keywords = serviceKeywords[group.slug];

    if (!keywords) {
      return null;
    }

    const images = Object.values(galleryImages).filter((img) => {
      const s = String(img).toLowerCase();
      return keywords.some((kw) => s.includes(kw));
    });

    if (images.length === 0) {
      return null;
    }

    return {
      service: group.title,
      images,
      description: group.description,
    };
  })
  .filter(Boolean) as GalleryDataItem[];
