import { Wrench, Cog, Gauge, Settings, Anchor, Zap, Ship, PenTool, Wind, GraduationCap, Flame, Truck, type LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    icon: Wrench,
    title: 'Rotating and Static Equipment Maintenance',
    description: 'Comprehensive maintenance, repair, and performance optimization services for rotating and static industrial equipment in onshore, offshore, and marine environments.',
  },
  {
    icon: Cog,
    title: 'Heavy Duty Machinery Maintenance',
    description: 'Expert diagnostics, overhaul, and preventive maintenance for heavy-duty industrial machinery ensuring maximum uptime and operational efficiency.',
  },
  {
    icon: Gauge,
    title: 'Instrumentation and Control (Mechanical)',
    description: 'Installation, calibration, troubleshooting, and maintenance of mechanical instrumentation and control systems for industrial applications.',
  },
  {
    icon: Settings,
    title: 'Industrial Valves, Pumps & Compressor Services',
    description: 'Specialized repair, refurbishment, testing, and performance optimization of industrial valves, pumps, and compressor systems.',
  },
  {
    icon: Anchor,
    title: 'Marine Machinery Maintenance and Service',
    description: 'Complete marine machinery maintenance services for vessels, offshore platforms, and maritime installations to ensure safe and reliable operations.',
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment and Machine Maintenance',
    description: 'General industrial equipment maintenance covering all aspects of machine upkeep, repair, and performance enhancement.',
  },
  {
    icon: Gauge,
    title: 'Machinery Components Refurbishing, Pressure Testing and Calibration',
    description: 'Professional refurbishment of industrial components with comprehensive pressure testing, calibration, and quality assurance certification.',
  },
  {
    icon: Zap,
    title: 'Electrical Installation Practice',
    description: 'Complete electrical installation services for industrial and marine applications following international safety standards and best practices.',
  },
  {
    icon: Ship,
    title: 'Engine Room Watch Keeping Practice',
    description: 'Professional engine room watchkeeping services ensuring safe, efficient, and compliant vessel operations around the clock.',
  },
  {
    icon: Anchor,
    title: 'Onboard Ship Machinery Maintenance',
    description: 'Comprehensive onboard maintenance services for all ship machinery, propulsion systems, and auxiliary equipment.',
  },
  {
    icon: PenTool,
    title: 'Mechanical Technician Practice',
    description: 'Skilled mechanical technician services for industrial and marine mechanical systems including installation, maintenance, and repair.',
  },
  {
    icon: Wind,
    title: 'Pneumatic System Service and Maintenance',
    description: 'Installation, maintenance, troubleshooting, and repair of pneumatic systems for industrial automation and control applications.',
  },
  {
    icon: GraduationCap,
    title: 'Basic Technical Skill Training',
    description: 'Foundational technical training programs for entry-level technicians and operators covering essential industrial skills and safety practices.',
  },
  {
    icon: Ship,
    title: 'Marine and Industrial Machine Operator',
    description: 'Comprehensive operator training and certification for marine and industrial machinery operations with hands-on practical experience.',
  },
  {
    icon: Flame,
    title: 'Welding Training (Pipe, Fabrication, Fitting, Argon)',
    description: 'Professional welding certification programs covering pipe welding, metal fabrication, fitting techniques, and argon/TIG welding processes.',
  },
  {
    icon: Truck,
    title: 'Forklift Operator Training and Maintenance',
    description: 'Forklift operator certification training and comprehensive forklift maintenance services ensuring safe material handling operations.',
  },
  {
    icon: Zap,
    title: 'Industrial Electrical Maintenance and Services',
    description: 'Complete industrial electrical services including installation, preventive maintenance, troubleshooting, and emergency repairs.',
  },
];
