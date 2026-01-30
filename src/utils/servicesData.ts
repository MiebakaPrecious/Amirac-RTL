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
    title: 'Rotating & Static Equipment Maintenance',
    description: 'Comprehensive maintenance, repair, and performance optimization services for rotating and static industrial equipment in onshore, offshore, and marine environments.',
    category: 'engineering',
  },
  {
    icon: Cog,
    title: 'Heavy-Duty Machinery Maintenance',
    description: 'Expert diagnostics, overhaul, and preventive maintenance for heavy-duty industrial machinery ensuring maximum uptime and operational efficiency.',
    category: 'engineering',
  },
  {
    icon: Gauge,
    title: 'Instrumentation & Control',
    description: 'Installation, calibration, troubleshooting, and maintenance of mechanical instrumentation and control systems for industrial applications.',
    category: 'engineering',
  },
  {
    icon: Settings,
    title: 'Industrial Valves / Pumps / Compressors',
    description: 'Specialized repair, refurbishment, testing, and performance optimization of industrial valves, pumps, and compressor systems.',
    category: 'engineering',
  },
  {
    icon: Anchor,
    title: 'Marine Machinery Maintenance',
    description: 'Complete marine machinery maintenance services for vessels, offshore platforms, and maritime installations to ensure safe and reliable operations.',
    category: 'engineering',
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment & Machine Maintenance',
    description: 'General industrial equipment maintenance covering all aspects of machine upkeep, repair, and performance enhancement.',
    category: 'engineering',
  },
  {
    icon: Gauge,
    title: 'Components Refurbishing & Pressure Testing',
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
    title: 'Engine Room Watchkeeping',
    description: 'Professional engine room watchkeeping services ensuring safe, efficient, and compliant vessel operations around the clock.',
    category: 'engineering',
  },
  {
    icon: Anchor,
    title: 'Onboard Ship Machinery Maintenance',
    description: 'Marine-focused maintenance services for ship machinery, propulsion systems, and auxiliary equipment operations.',
    category: 'engineering',
  },
  {
    icon: PenTool,
    title: 'Mechanical Technician Practice',
    description: 'Comprehensive mechanical technician services covering installation, maintenance, and repair of industrial mechanical systems.',
    category: 'engineering',
  },
  {
    icon: Wind,
    title: 'Pneumatic System Services',
    description: 'Installation, maintenance, troubleshooting, and repair of pneumatic systems for industrial automation and control applications.',
    category: 'engineering',
  },
  {
    icon: Zap,
    title: 'Industrial Electrical Services',
    description: 'Complete industrial electrical services including installation, preventive maintenance, troubleshooting, and emergency repairs.',
    category: 'engineering',
  },
  {
    icon: Anchor,
    title: 'Marine & Industrial Machine Operator Services',
    description: 'Professional operation services for marine and industrial machinery with focus on safety and efficiency.',
    category: 'engineering',
  },
  {
    icon: Flame,
    title: 'Welding Services (Pipe, Fabrication, Argon)',
    description: 'Professional welding services including pipe welding, metal fabrication, and argon welding for industrial applications.',
    category: 'engineering',
  },
  {
    icon: Truck,
    title: 'Forklift Operator & Maintenance Services',
    description: 'Professional forklift operation services and comprehensive maintenance for material handling equipment.',
    category: 'engineering',
  },
  {
    icon: GraduationCap,
    title: 'Basic Technical Skills Services',
    description: 'Essential industrial technical services covering tool usage, safety practices, and foundational maintenance support.',
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
    title: 'Heavy-Duty Machinery Maintenance Training',
    description: 'Comprehensive training on heavy-duty machinery diagnostics, maintenance procedures, and safety protocols.',
    category: 'training',
  },
  {
    icon: Gauge,
    title: 'Instrumentation & Control Training',
    description: 'Training on mechanical instrumentation systems, control mechanisms, calibration techniques, and troubleshooting methods.',
    category: 'training',
  },
  {
    icon: Settings,
    title: 'Industrial Valves / Pumps / Compressors Training',
    description: 'Specialized training on maintenance, repair, and operation of industrial valves, pumps, and compressor systems.',
    category: 'training',
  },
  {
    icon: Anchor,
    title: 'Marine Machinery Maintenance Training',
    description: 'Professional training for marine machinery maintenance, troubleshooting, and safety compliance.',
    category: 'training',
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment & Machine Maintenance Training',
    description: 'Training covering all aspects of industrial equipment maintenance, repair techniques, and performance optimization.',
    category: 'training',
  },
  {
    icon: Gauge,
    title: 'Components Refurbishing & Pressure Testing Training',
    description: 'Specialized training on precision calibration, component servicing, pressure testing, and quality assurance procedures.',
    category: 'training',
  },
  {
    icon: Zap,
    title: 'Electrical Installation Practice Training',
    description: 'Electrical fundamentals training covering installation, maintenance, troubleshooting, and safety for industrial applications.',
    category: 'training',
  },
  {
    icon: Ship,
    title: 'Engine Room Watchkeeping Training',
    description: 'Professional training for vessel engine room operations, monitoring systems, and maritime safety compliance.',
    category: 'training',
  },
  {
    icon: Anchor,
    title: 'Onboard Ship Machinery Maintenance Training',
    description: 'Marine-focused training for ship machinery maintenance, propulsion systems, and auxiliary equipment operations.',
    category: 'training',
  },
  {
    icon: PenTool,
    title: 'Mechanical Technician Training',
    description: 'Comprehensive mechanical technician program covering installation, maintenance, and repair of industrial mechanical systems.',
    category: 'training',
  },
  {
    icon: Wind,
    title: 'Pneumatic System Training',
    description: 'Comprehensive training on pneumatic system operation, maintenance, and troubleshooting.',
    category: 'training',
  },
  {
    icon: Zap,
    title: 'Industrial Electrical Services Training',
    description: 'Complete training on industrial electrical systems, maintenance techniques, and safety protocols.',
    category: 'training',
  },
  {
    icon: Anchor,
    title: 'Marine & Industrial Machine Operator Training',
    description: 'Professional operator training for marine and industrial machinery with focus on safety and efficiency.',
    category: 'training',
  },
  {
    icon: Flame,
    title: 'Welding Training (Pipe, Fabrication, Argon)',
    description: 'Professional welding training covering pipe welding, metal fabrication, argon/TIG techniques, and safety protocols.',
    category: 'training',
  },
  {
    icon: Truck,
    title: 'Forklift Operator Training & Maintenance',
    description: 'Forklift operator certification program covering safe operation, load handling, and maintenance fundamentals.',
    category: 'training',
  },
  {
    icon: GraduationCap,
    title: 'Basic Technical Skills Training',
    description: 'Foundational training for entry-level technicians covering essential industrial skills, tool usage, and safety practices.',
    category: 'training',
  },
];

// Combined services for backward compatibility
export const services: ServiceItem[] = [...engineeringServices, ...trainingCourses];
