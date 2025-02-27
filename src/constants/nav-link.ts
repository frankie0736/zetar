import {
  type LucideProps,
  Building2,
  Users,
  ClipboardCheck,
  Factory,
  GitGraph,
  Workflow,
  Component,
  Shapes,
  Layers,
  Boxes,
  Box,
  History,
  Printer,
  FlaskConical,
  Wrench,
  Gauge,
  ShieldCheck,
  Droplets,
  Stamp,
  Paintbrush,
  Zap,
  Cog,
  Sparkles,
  FileStack,
  Flame,
  Scissors,
  Microscope,
  BadgeCheck,
  Car,
  Layers3,
  Puzzle,
  Dices,
  Shrink,
  Sticker,
  Thermometer,
  Droplet,
  Scale,
  Hammer,
  Lightbulb,
  Brush,
  Wand2,
  Waves,
  RotateCw,
  Disc,
} from 'lucide-react';

export interface DropdownItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<LucideProps>;
  dropdownItems?: DropdownItem[];
}

export interface NavLink {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
}

// Company
const companyItems: DropdownItem[] = [
  {
    title: 'Company Profile',
    href: '/about',
    description: 'Learn about our company and mission.',
    icon: Building2,
  },
  {
    title: 'Company History',
    href: '/history',
    description: 'Our company history and milestones.',
    icon: History,
  },
  {
    title: 'Technical Team',
    href: '/experts',
    description: 'Meet our expert injection molding team.',
    icon: Users,
  },
  {
    title: 'Equipment List',
    href: '/equipments',
    description: 'Explore our advanced manufacturing equipment.',
    icon: Factory,
  },
  {
    title: 'Quality Assurance',
    href: '/quality-assurance',
    description: 'Our rigorous quality control process.',
    icon: ClipboardCheck,
  },
];

// Small Batch Solutions
const smallBatchItems: DropdownItem[] = [
  {
    title: '3D Printing Mold',
    href: '/small-batch/3d-printing-mold',
    description: 'Rapid tooling with 3D printed molds.',
    icon: Printer,
  },
  {
    title: 'RIM',
    href: '/small-batch/RIM',
    description: 'Reaction Injection Molding for small batches.',
    icon: FlaskConical,
  },
  {
    title: 'Aluminum Mold',
    href: '/small-batch/aluminum-mold',
    description: 'Cost-effective aluminum tooling solutions.',
    icon: Wrench,
  },
];

// Mold Development
const moldDevelopmentItems: DropdownItem[] = [
  {
    title: 'High Volume',
    href: '/mold-development/high-volume',
    description: 'Durable molds for high-volume production.',
    icon: Gauge,
  },
  {
    title: 'Corrosion Resistant',
    href: '/mold-development/corrosion-resistant',
    description: 'Molds resistant to chemical corrosion.',
    icon: ShieldCheck,
  },
  {
    title: 'High Temperature',
    href: '/mold-development/high-temperature',
    description: 'Heat-resistant mold solutions.',
    icon: Thermometer,
  },
  {
    title: 'Wear Resistant',
    href: '/mold-development/wear-resistant',
    description: 'Durable wear-resistant mold designs.',
    icon: Hammer,
  },
  {
    title: 'Impact Resistant',
    href: '/mold-development/impact-resistant',
    description: 'Molds designed for impact resistance.',
    icon: Zap,
  },
  {
    title: 'Precision Polish',
    href: '/mold-development/precision-polish',
    description: 'High-precision polished mold surfaces.',
    icon: Sparkles,
  },
  {
    title: 'Medical Grade',
    href: '/mold-development/medical-grade',
    description: 'Specialized molds for medical applications.',
    icon: Microscope,
  },
  {
    title: 'FDA/CE Grade',
    href: '/mold-development/FDA/CE-grade',
    description: 'Certified molds for regulated industries.',
    icon: BadgeCheck,
  },
  {
    title: 'Automotive',
    href: '/mold-development/automotive',
    description: 'Automotive-standard injection molds.',
    icon: Car,
  },
  {
    title: 'MUD',
    href: '/mold-development/MUD-mold',
    description: 'MUD injection molds for high-volume production.',
    icon: Layers,
  },
];

const highTemperatureItems: DropdownItem[] = [
  {
    title: 'PEEK',
    href: '/injection-molding/high-tempreture/peek',
    description: 'Polyether ether ketone high-performance polymer.',
    icon: Thermometer,
  },
  {
    title: 'PTFE',
    href: '/injection-molding/high-tempreture/ptfe',
    description: 'Polytetrafluoroethylene with excellent heat resistance.',
    icon: Thermometer,
  },
  {
    title: 'PPSU',
    href: '/injection-molding/high-tempreture/ppsu',
    description: 'Polyphenylsulfone for high-temperature applications.',
    icon: Thermometer,
  },
  {
    title: 'PEI',
    href: '/injection-molding/high-tempreture/pei',
    description: 'Polyetherimide with high heat and chemical resistance.',
    icon: Thermometer,
  },
  {
    title: 'LCP',
    href: '/injection-molding/high-tempreture/lcp',
    description: 'Liquid Crystal Polymer for extreme temperature resistance.',
    icon: Thermometer,
  },
  {
    title: 'PPA',
    href: '/injection-molding/high-tempreture/ppa',
    description: 'Polyphthalamide for high-temperature structural parts.',
    icon: Thermometer,
  },
  {
    title: 'PET',
    href: '/injection-molding/high-tempreture/pet',
    description: 'Polyethylene terephthalate for heat-resistant applications.',
    icon: Thermometer,
  },
  {
    title: 'PA46',
    href: '/injection-molding/high-tempreture/pa46',
    description: 'Polyamide 46 with exceptional thermal stability.',
    icon: Thermometer,
  },
];

// Injection Molding
const injectionMoldingItems: DropdownItem[] = [
  {
    title: 'High Temperature Molding',
    href: '/injection-molding/high-temperature-molding',
    description: 'Heat-resistant material processing.',
    icon: Flame,
    dropdownItems: highTemperatureItems,
  },
  {
    title: '2K Molding',
    href: '/injection-molding/2k-molding',
    description: 'Two-component injection molding process.',
    icon: Layers3,
  },
  {
    title: 'Overmolding',
    href: '/injection-molding/overmolding',
    description: 'Multi-material overmolding process.',
    icon: Puzzle,
  },
  {
    title: 'Insert Molding',
    href: '/injection-molding/insert-molding',
    description: 'Embedding components during molding.',
    icon: Dices,
  },
  {
    title: 'Thin Wall Molding',
    href: '/injection-molding/thin-wall-molding',
    description: 'Precision thin-walled part production.',
    icon: Shrink,
  },
  {
    title: 'IMD Molding',
    href: '/injection-molding/imd-molding',
    description: 'In-mold decoration technology.',
    icon: Sticker,
  },
  {
    title: 'PVC Molding',
    href: '/injection-molding/pvc-molding',
    description: 'Specialized PVC material molding.',
    icon: Box,
  },
  {
    title: 'Hot Runner Molding',
    href: '/injection-molding/hot-runner-molding',
    description: 'Advanced hot runner technology.',
    icon: GitGraph,
  },
];

// Silicone Rubber Molding
const siliconeMoldingItems: DropdownItem[] = [
  {
    title: 'Liquid Silicone Rubber',
    href: '/silicone-rubber-molding/liquid-injection',
    description: 'Liquid silicone injection process.',
    icon: Droplets,
  },
  {
    title: 'Silicone Rubber Compression',
    href: '/silicone-rubber-molding/compression',
    description: 'Compression molding for silicone parts.',
    icon: Scale,
  },
  {
    title: 'Silicone Rubber Extrusion',
    href: '/silicone-rubber-molding/extrusion',
    description: 'Extrusion process for silicone products.',
    icon: Scissors,
  },
];

// 3D Printing
const threeDPrintingItems: DropdownItem[] = [
  {
    title: 'PolyJet Printing',
    href: '/rapid-prototyping/3d-printing/polyjet',
    description: 'High-precision multi-material printing.',
    icon: Printer,
  },
  {
    title: 'MJF Printing',
    href: '/rapid-prototyping/3d-printing/mjf',
    description: 'Multi Jet Fusion technology.',
    icon: Printer,
  },
  {
    title: 'SLA Printing',
    href: '/rapid-prototyping/3d-printing/sla',
    description: 'Stereolithography 3D printing.',
    icon: Printer,
  },
  {
    title: 'SLS Printing',
    href: '/rapid-prototyping/3d-printing/sls',
    description: 'Selective Laser Sintering technology.',
    icon: Printer,
  },
  {
    title: 'DLP Printing',
    href: '/rapid-prototyping/3d-printing/dlp',
    description: 'Digital Light Processing printing.',
    icon: Printer,
  },
  {
    title: 'SLM Printing',
    href: '/rapid-prototyping/3d-printing/slm',
    description: 'Selective Laser Melting for metal parts.',
    icon: Printer,
  },
  {
    title: 'FDM Printing',
    href: '/rapid-prototyping/3d-printing/fdm',
    description: 'Fused Deposition Modeling technology.',
    icon: Printer,
  },
];

// Rapid Prototyping
const rapidPrototypingItems: DropdownItem[] = [
  {
    title: '3D Printing',
    href: '/rapid-prototyping/3d-printing',
    description: 'Various 3D printing technologies.',
    icon: Printer,
    dropdownItems: threeDPrintingItems,
  },
  {
    title: 'CNC Machining',
    href: '/rapid-prototyping/cnc-machining',
    description: 'Precision CNC machined prototypes.',
    icon: Cog,
  },
  {
    title: 'Silicone Rubber Casting',
    href: '/rapid-prototyping/silicone-casting',
    description: 'Silicone casting for prototype parts.',
    icon: Droplet,
  },
];

// Logo Print
const logoPrintItems: DropdownItem[] = [
  {
    title: 'Laser Logo',
    href: '/logo-print/laser-marking',
    description: 'Precision laser marking technology.',
    icon: Lightbulb,
  },
  {
    title: 'Pad Printing',
    href: '/logo-print/pad-printing',
    description: 'Pad printing for curved surfaces.',
    icon: Stamp,
  },
  {
    title: 'UV Printing',
    href: '/logo-print/uv-printing',
    description: 'UV-cured printing technology.',
    icon: Printer,
  },
  {
    title: 'Hot Stamping',
    href: '/logo-print/hot-stamping',
    description: 'Metallic foil stamping process.',
    icon: Flame,
  },
  {
    title: 'Screen Printing',
    href: '/logo-print/screen-printing',
    description: 'Screen printing for flat surfaces.',
    icon: Boxes,
  },
  {
    title: 'Heat Transfer Printing',
    href: '/logo-print/heat-transfer-printing',
    description: 'Heat transfer decoration process.',
    icon: Thermometer,
  },
];

// Surface Treatment
const surfaceTreatmentItems: DropdownItem[] = [
  {
    title: 'Electroplating',
    href: '/surface-treatment/electroplating',
    description: 'Metal plating for plastic parts.',
    icon: Layers,
  },
  {
    title: 'Vacuum Deposition',
    href: '/surface-treatment/vacuum-deposition',
    description: 'Vacuum metallization process.',
    icon: Layers3,
  },
  {
    title: 'Painting',
    href: '/surface-treatment/painting',
    description: 'Professional painting services.',
    icon: Paintbrush,
  },
  {
    title: 'Rubber Painting',
    href: '/surface-treatment/rubber-painting',
    description: 'Rubber-like coating application.',
    icon: Brush,
  },
  {
    title: 'UV Painting',
    href: '/surface-treatment/uv-painting',
    description: 'UV-cured coating technology.',
    icon: Wand2,
  },
];

// Welding Process
const weldingItems: DropdownItem[] = [
  {
    title: 'Ultrasonic Welding',
    href: '/plastic-welding/ultrasonic-welding',
    description: 'Ultrasonic vibration welding technology.',
    icon: Waves,
  },
  {
    title: 'Spin Welding',
    href: '/plastic-welding/spin-welding',
    description: 'Rotational friction welding process.',
    icon: RotateCw,
  },
  {
    title: 'Hot Plate Welding',
    href: '/plastic-welding/hot-plate-welding',
    description: 'Thermal welding with heated plates.',
    icon: Disc,
  },
];

// Services - Main category with subcategories
const servicesItems: DropdownItem[] = [
  {
    title: 'Small Batch Solutions',
    href: '/small-batch',
    description: 'Solutions for small production runs.',
    icon: Boxes,
    dropdownItems: smallBatchItems,
  },
  {
    title: 'Mass Production',
    href: '/mass-production',
    description: 'High-volume manufacturing services.',
    icon: Factory,
  },
  {
    title: 'Mold Development',
    href: '/mold-development',
    description: 'Custom mold design and development.',
    icon: Wrench,
    dropdownItems: moldDevelopmentItems,
  },
  {
    title: 'Injection Molding',
    href: '/injection-molding',
    description: 'Comprehensive injection molding services.',
    icon: Component,
    dropdownItems: injectionMoldingItems,
  },
  {
    title: 'Silicone Rubber Molding',
    href: '/silicone-rubber-molding',
    description: 'Silicone rubber molding solutions.',
    icon: Droplets,
    dropdownItems: siliconeMoldingItems,
  },
  {
    title: 'Rapid Prototyping',
    href: '/rapid-prototyping',
    description: 'Fast prototyping for design validation.',
    icon: Shapes,
    dropdownItems: rapidPrototypingItems,
  },
  {
    title: 'Logo Print',
    href: '/logo-print',
    description: 'Various logo printing technologies.',
    icon: Stamp,
    dropdownItems: logoPrintItems,
  },
  {
    title: 'Surface Treatment',
    href: '/surface-treatment',
    description: 'Surface finishing and treatment options.',
    icon: Paintbrush,
    dropdownItems: surfaceTreatmentItems,
  },
  {
    title: 'Welding Assembly',
    href: '/welding-assembly',
    description: 'Plastic welding technologies.',
    icon: Zap,
    dropdownItems: weldingItems,
  },
];

// Materials Guide
const materialItems: DropdownItem[] = [
  {
    title: 'ABS',
    href: '/materials-guide/abs',
    description: 'ABS material guide.',
    icon: FileStack,
  },
  {
    title: 'PP',
    href: '/materials-guide/pp',
    description: 'PP material guide.',
    icon: FileStack,
  },
  {
    title: 'PC',
    href: '/materials-guide/pc',
    description: 'PC material guide.',
    icon: FileStack,
  },
  {
    title: 'PS',
    href: '/materials-guide/ps',
    description: 'PS material guide.',
    icon: FileStack,
  },
  {
    title: 'PA',
    href: '/materials-guide/pa',
    description: 'PA material guide.',
    icon: FileStack,
  },
  {
    title: 'PE',
    href: '/materials-guide/pe',
    description: 'PE material guide.',
    icon: FileStack,
  },
];

// Resources
const resourceItems: DropdownItem[] = [
  {
    title: 'Materials Guide',
    href: '/materials-guide',
    description: 'Materials guide for injection molding.',
    icon: FileStack,
    dropdownItems: materialItems,
  },
  {
    title: 'Process',
    href: '/process',
    description: 'Manufacturing process information.',
    icon: Workflow,
  },
  {
    title: 'Technical Blog',
    href: '/blog',
    description: 'Explore the latest in injection molding technology.',
    icon: FileStack,
  },
];

// Main navigation structure
export const navLinks: NavLink[] = [
  {
    label: 'Services',
    href: '/services',
    dropdownItems: servicesItems,
  },
  {
    label: 'Company',
    href: '/company',
    dropdownItems: companyItems,
  },
  {
    label: 'Resources',
    href: '/resources',
    dropdownItems: resourceItems,
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
