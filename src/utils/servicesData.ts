import { Wrench, Cog, Gauge, Settings, Anchor, Zap, Ship, PenTool, Wind, GraduationCap, Flame, Truck, FileText, Thermometer, type LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  category: 'engineering' | 'training';
}

// Engineering Services
export const engineeringServices: ServiceItem[] = [
  {
    icon: Wrench,
    title: 'Rotating and Static Equipment Maintenance',
    description: 'Comprehensive maintenance, repair, and performance optimization services for rotating and static industrial equipment in onshore, offshore, and marine environments.',
    category: 'engineering',
  },
  {
    icon: Cog,
    title: 'Heavy Duty Machinery Maintenance',
    description: 'Expert diagnostics, overhaul, and preventive maintenance for heavy-duty industrial machinery ensuring maximum uptime and operational efficiency.',
    category: 'engineering',
  },
  {
    icon: Gauge,
    title: 'Instrumentation and Control (Mechanical)',
    description: 'Installation, calibration, troubleshooting, and maintenance of mechanical instrumentation and control systems for industrial applications.',
    category: 'engineering',
  },
  {
    icon: Settings,
    title: 'Industrial Valves, Pumps & Compressor Services',
    description: 'Specialized repair, refurbishment, testing, and performance optimization of industrial valves, pumps, and compressor systems.',
    category: 'engineering',
  },
  {
    icon: Anchor,
    title: 'Marine Machinery Maintenance and Service',
    description: 'Complete marine machinery maintenance services for vessels, offshore platforms, and maritime installations to ensure safe and reliable operations.',
    category: 'engineering',
  },
  {
    icon: Anchor,
    title: 'Marine Engineering',
    description: 'Comprehensive marine engineering services for ship systems, propulsion, hull integrity, and maritime equipment design and maintenance.',
    category: 'engineering',
  },
  {
    icon: Settings,
    title: 'Platform Machinery Maintenance',
    description: 'Specialized maintenance and repair services for offshore platform machinery, ensuring operational efficiency and safety compliance.',
    category: 'engineering',
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment and Machine Maintenance',
    description: 'General industrial equipment maintenance covering all aspects of machine upkeep, repair, and performance enhancement.',
    category: 'engineering',
  },
  {
    icon: Gauge,
    title: 'Machinery Components Refurbishing, Pressure Testing and Calibration',
    description: 'Professional refurbishment of industrial components with comprehensive pressure testing, calibration, and quality assurance certification.',
    category: 'engineering',
  },
  {
    icon: Zap,
    title: 'Electrical Installation Practice',
    description: 'Complete electrical installation services for industrial and marine applications following international safety standards and best practices.',
    category: 'engineering',
  },
  {
    icon: Ship,
    title: 'Engine Room Watch Keeping Practice',
    description: 'Professional engine room watchkeeping services ensuring safe, efficient, and compliant vessel operations around the clock.',
    category: 'engineering',
  },
  {
    icon: Wind,
    title: 'Pneumatic System Service and Maintenance',
    description: 'Installation, maintenance, troubleshooting, and repair of pneumatic systems for industrial automation and control applications.',
    category: 'engineering',
  },
  {
    icon: Zap,
    title: 'Industrial Electrical Maintenance and Services',
    description: 'Complete industrial electrical services including installation, preventive maintenance, troubleshooting, and emergency repairs.',
    category: 'engineering',
  },
];

// Training Courses
export const trainingCourses: ServiceItem[] = [
  {
    icon: Wrench,
    title: 'Rotating & Static Equipment Training',
    description: 'Hands-on training program covering maintenance, troubleshooting, and repair of rotating and static industrial equipment.',
    category: 'training',
  },
  {
    icon: Cog,
    title: 'Heavy Duty Machinery Maintenance',
    description: 'Comprehensive training on heavy-duty machinery diagnostics, maintenance procedures, and safety protocols.',
    category: 'training',
  },
  {
    icon: Anchor,
    title: 'Onboard Ship Machinery Maintenance',
    description: 'Marine-focused training for ship machinery maintenance, propulsion systems, and auxiliary equipment operations.',
    category: 'training',
  },
  {
    icon: Settings,
    title: 'Motorman (Industrial)',
    description: 'Industrial motorman certification training covering machinery operation, maintenance, and safety in industrial environments.',
    category: 'training',
  },
  {
    icon: Ship,
    title: 'Motorman (Marine)',
    description: 'Marine motorman training program for vessel engine room operations, machinery maintenance, and maritime safety compliance.',
    category: 'training',
  },
  {
    icon: Gauge,
    title: 'Instrumentation & Control (Mechanical)',
    description: 'Training on mechanical instrumentation systems, control mechanisms, calibration techniques, and troubleshooting methods.',
    category: 'training',
  },
  {
    icon: PenTool,
    title: 'Mechanical Technician Training',
    description: 'Comprehensive mechanical technician program covering installation, maintenance, and repair of industrial mechanical systems.',
    category: 'training',
  },
  {
    icon: GraduationCap,
    title: 'Basic Technical Skills Formation',
    description: 'Foundational training for entry-level technicians covering essential industrial skills, tool usage, and safety practices.',
    category: 'training',
  },
  {
    icon: Thermometer,
    title: 'Equipment & Components Calibration / Servicing',
    description: 'Specialized training on precision calibration, component servicing, and quality assurance procedures.',
    category: 'training',
  },
  {
    icon: Gauge,
    title: 'Pressure Testing & Measurement',
    description: 'Training program covering pressure testing methods, measurement techniques, and certification procedures.',
    category: 'training',
  },
  {
    icon: Zap,
    title: 'Basic Electrical Technician',
    description: 'Electrical fundamentals training covering installation, maintenance, troubleshooting, and safety for industrial applications.',
    category: 'training',
  },
  {
    icon: Wind,
    title: 'Pneumatics & Hydraulic Systems',
    description: 'Comprehensive training on pneumatic and hydraulic system operation, maintenance, and troubleshooting.',
    category: 'training',
  },
  {
    icon: Truck,
    title: 'Forklift Operator',
    description: 'Forklift operator certification program covering safe operation, load handling, and workplace safety protocols.',
    category: 'training',
  },
  {
    icon: Wrench,
    title: 'Troubleshooting Approach',
    description: 'Systematic troubleshooting methodology training for industrial equipment diagnosis and problem resolution.',
    category: 'training',
  },
  {
    icon: FileText,
    title: 'Technical Reports Formation (Writing & Presentation)',
    description: 'Professional training on technical report writing, documentation standards, and effective presentation skills.',
    category: 'training',
  },
  {
    icon: Flame,
    title: 'Basic Welding Training',
    description: 'Foundational welding training covering arc welding, MIG/TIG techniques, safety protocols, and metal joining fundamentals.',
    category: 'training',
  },
];

// Combined services for backward compatibility
export const services: ServiceItem[] = [...engineeringServices, ...trainingCourses];
