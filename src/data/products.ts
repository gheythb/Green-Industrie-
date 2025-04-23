import { 
  Product, 
  Category, 
  Industry,
  Certification
} from '../types';

// Sample certification data
const certifications: Certification[] = [
  {
    name: "ISO 9001",
    logo: "https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Quality management system standard"
  },
  {
    name: "ISO 14001",
    logo: "https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Environmental management system standard"
  },
  {
    name: "CE",
    logo: "https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "European Conformity certification"
  },
  {
    name: "UL",
    logo: "https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Underwriters Laboratories safety certification"
  },
  {
    name: "NSF",
    logo: "https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "National Sanitation Foundation certification"
  }
];

// Sample product data
export const products: Product[] = [
  {
    id: "AF-1001",
    name: "Industrial HVAC Air Filter",
    shortDescription: "High-performance HVAC filter for industrial facilities",
    description: "The Industrial HVAC Air Filter is designed for large-scale air handling units in manufacturing facilities, warehouses, and commercial buildings. This filter effectively removes dust, pollen, and other airborne contaminants, improving indoor air quality and protecting HVAC equipment from damage. Constructed with a galvanized steel frame and pleated filter media, it offers exceptional durability and filtration efficiency.",
    price: 129.99,
    images: [
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4489743/pexels-photo-4489743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: Category.AIR,
    industry: [Industry.MANUFACTURING, Industry.HVAC],
    specifications: [
      { name: "Dimensions", value: "24 x 24 x 2", unit: "inches" },
      { name: "MERV Rating", value: "13" },
      { name: "Frame Material", value: "Galvanized Steel" },
      { name: "Media Type", value: "Synthetic Pleated" },
      { name: "Efficiency", value: "90-95", unit: "%" },
      { name: "Initial Resistance", value: "0.35", unit: "inches w.g." },
      { name: "Temperature Limit", value: "175", unit: "°F" }
    ],
    certifications: [certifications[0], certifications[2]],
    compatibleWith: ["Carrier HVAC Systems", "Trane Air Handlers", "York Equipment"],
    features: [
      "Rigid metal frame for structural integrity",
      "High dust holding capacity",
      "Low pressure drop for energy efficiency",
      "Resistant to moisture and microbial growth"
    ],
    inStock: true,
    leadTime: "3-5 business days",
    minimumOrder: 4
  },
  {
    id: "WF-2050",
    name: "Industrial Water Filtration System",
    shortDescription: "Heavy-duty water filter for manufacturing processes",
    description: "The Industrial Water Filtration System is engineered for manufacturing facilities requiring clean, purified water for production processes. This comprehensive system removes sediment, chemicals, and contaminants from water sources, ensuring consistent water quality for critical operations. The multi-stage filtration design includes pre-filtration, carbon adsorption, and fine particulate removal, providing thorough water treatment for industrial applications.",
    price: 1299.99,
    images: [
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/366616/pexels-photo-366616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: Category.WATER,
    industry: [Industry.MANUFACTURING, Industry.PHARMACEUTICAL, Industry.FOOD_PROCESSING],
    specifications: [
      { name: "Flow Rate", value: "50", unit: "GPM" },
      { name: "Operating Pressure", value: "30-100", unit: "PSI" },
      { name: "Connection Size", value: "1.5", unit: "inches" },
      { name: "Housing Material", value: "304 Stainless Steel" },
      { name: "Filter Media", value: "Multi-layer with activated carbon" },
      { name: "Micron Rating", value: "1-5", unit: "µm" },
      { name: "Power Requirement", value: "120", unit: "VAC" }
    ],
    certifications: [certifications[0], certifications[1], certifications[4]],
    compatibleWith: ["GE Water Systems", "Pentair Industrial", "Eaton Filtration"],
    features: [
      "Modular design for easy maintenance",
      "Automatic backwash capability",
      "Digital flow monitor and controller",
      "Chemical-resistant components",
      "Pressure differential indicator"
    ],
    inStock: true,
    leadTime: "10-14 business days",
    minimumOrder: 1
  },
  {
    id: "OF-3075",
    name: "Heavy-Duty Oil Filter",
    shortDescription: "High-capacity oil filter for industrial machinery",
    description: "The Heavy-Duty Oil Filter is specifically designed for industrial machinery and equipment operating in demanding environments. This filter effectively removes particles, contaminants, and metal debris from hydraulic and lubricating oils, extending machinery life and reducing maintenance costs. The robust construction includes a high-strength canister, anti-drain back valve, and bypass valve to ensure consistent protection even under extreme conditions.",
    price: 89.99,
    images: [
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: Category.OIL,
    industry: [Industry.MANUFACTURING, Industry.CONSTRUCTION, Industry.MINING],
    specifications: [
      { name: "Thread Size", value: "3/4-16", unit: "UNF" },
      { name: "Length", value: "7.5", unit: "inches" },
      { name: "Diameter", value: "3.7", unit: "inches" },
      { name: "Filter Media", value: "Synthetic Blend" },
      { name: "Pressure Rating", value: "300", unit: "PSI" },
      { name: "Bypass Setting", value: "12-16", unit: "PSI" },
      { name: "Operating Temperature", value: "-40 to 250", unit: "°F" }
    ],
    certifications: [certifications[0], certifications[2]],
    compatibleWith: ["Caterpillar Equipment", "Komatsu Machinery", "John Deere Industrial"],
    features: [
      "Advanced synthetic filter media",
      "Silicone anti-drain back valve",
      "Heavy-duty canister construction",
      "High dirt-holding capacity",
      "Extended service intervals"
    ],
    inStock: true,
    leadTime: "1-3 business days",
    minimumOrder: 6
  },
  {
    id: "FF-4020",
    name: "Diesel Fuel Filter System",
    shortDescription: "Complete filtration system for diesel engines and generators",
    description: "The Diesel Fuel Filter System provides comprehensive fuel purification for industrial diesel engines, generators, and heavy equipment. This system removes water, particulates, and microbial contamination from diesel fuel, ensuring optimal engine performance and preventing costly downtime. The multi-stage design includes water separation, particulate filtration, and optional fuel conditioning, providing complete fuel protection for critical power systems.",
    price: 349.99,
    images: [
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/162568/oil-industry-power-radio-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: Category.FUEL,
    industry: [Industry.POWER_GENERATION, Industry.CONSTRUCTION, Industry.MINING],
    specifications: [
      { name: "Flow Rate", value: "25", unit: "GPH" },
      { name: "Micron Rating", value: "2/10/30", unit: "µm" },
      { name: "Water Separation Efficiency", value: ">99", unit: "%" },
      { name: "Port Size", value: "3/8", unit: "NPT" },
      { name: "Maximum Pressure", value: "100", unit: "PSI" },
      { name: "Bowl Capacity", value: "16", unit: "oz" },
      { name: "Operating Temperature", value: "-10 to 150", unit: "°F" }
    ],
    certifications: [certifications[0], certifications[2], certifications[3]],
    compatibleWith: ["Cummins Generators", "Detroit Diesel Engines", "MTU Power Systems"],
    features: [
      "Clear bowl for visual inspection",
      "Integrated water sensor option",
      "Heated bowl for cold weather operation",
      "Quick-release collar for easy maintenance",
      "Optional pressure gauge port"
    ],
    inStock: true,
    leadTime: "5-7 business days",
    minimumOrder: 2
  },
  {
    id: "HF-5100",
    name: "High-Pressure Hydraulic Filter",
    shortDescription: "Premium hydraulic filter for industrial machinery",
    description: "The High-Pressure Hydraulic Filter is designed for industrial hydraulic systems operating under extreme pressure and demanding conditions. This filter effectively removes contaminants from hydraulic fluid, protecting pumps, valves, and actuators from premature wear and failure. The robust construction features a pressure-resistant housing, high-capacity filter element, and bypass valve to ensure system protection even during cold starts and pressure spikes.",
    price: 179.99,
    images: [
      "https://images.pexels.com/photos/162568/oil-industry-power-radio-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: Category.HYDRAULIC,
    industry: [Industry.MANUFACTURING, Industry.CONSTRUCTION, Industry.MINING],
    specifications: [
      { name: "Pressure Rating", value: "6000", unit: "PSI" },
      { name: "Flow Rate", value: "60", unit: "GPM" },
      { name: "Port Size", value: "1", unit: "NPT" },
      { name: "Filtration Rating", value: "3", unit: "µm" },
      { name: "Beta Ratio (β3)", value: "1000" },
      { name: "Element Collapse Strength", value: "3000", unit: "PSI" },
      { name: "Housing Material", value: "Ductile Iron" }
    ],
    certifications: [certifications[0], certifications[2], certifications[3]],
    compatibleWith: ["Parker Hydraulic Systems", "Eaton Hydraulics", "Bosch Rexroth"],
    features: [
      "Exceptional contamination control",
      "High differential pressure capability",
      "Integrated bypass valve",
      "Visual or electronic clogging indicator",
      "Advanced glass fiber filter media"
    ],
    inStock: true,
    leadTime: "7-10 business days",
    minimumOrder: 3
  },
  {
    id: "CF-6010",
    name: "Custom Pharmaceutical Grade Filter",
    shortDescription: "Specialized filter for pharmaceutical processing",
    description: "The Custom Pharmaceutical Grade Filter is specifically engineered for pharmaceutical manufacturing processes where absolute filtration is critical. This filter provides reliable removal of particulates, microorganisms, and contaminants from process fluids, ensuring product purity and compliance with regulatory standards. The pharmaceutical-grade construction includes FDA-compliant materials, validated filter media, and a design optimized for clean-in-place (CIP) and steam-in-place (SIP) procedures.",
    price: 599.99,
    images: [
      "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: Category.CUSTOM,
    industry: [Industry.PHARMACEUTICAL],
    specifications: [
      { name: "Filter Area", value: "0.8", unit: "m²" },
      { name: "Pore Size", value: "0.2", unit: "µm" },
      { name: "Housing Material", value: "316L Stainless Steel" },
      { name: "O-Ring Material", value: "EPDM/Silicone/Viton" },
      { name: "Max Operating Temperature", value: "135", unit: "°C" },
      { name: "Sterilization Method", value: "Steam or Autoclave" },
      { name: "Integrity Testable", value: "Yes" }
    ],
    certifications: [certifications[0], certifications[2], certifications[4]],
    compatibleWith: ["Merck Process Systems", "Sartorius Filtration", "Pall Bioprocessing"],
    features: [
      "USP Class VI compliant materials",
      "Validated bacterial retention",
      "Low protein binding characteristics",
      "Individual certificate of quality",
      "Lot traceability documentation",
      "Integrity test values supplied"
    ],
    inStock: false,
    leadTime: "14-21 business days",
    minimumOrder: 1
  },
  {
    id: "HF-7000",
    name: "HEPA Filter for Cleanroom",
    shortDescription: "High-efficiency HEPA filter for controlled environments",
    description: "The HEPA Filter for Cleanroom is designed for critical environments requiring exceptional air purity, such as pharmaceutical manufacturing, microelectronics production, and laboratory facilities. This filter removes 99.97% of particles 0.3 microns and larger, meeting stringent cleanroom requirements. The advanced construction includes a leak-free seal, low-outgassing materials, and a design optimized for laminar flow, ensuring consistent performance in demanding applications.",
    price: 429.99,
    images: [
      "https://images.pexels.com/photos/4489743/pexels-photo-4489743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: Category.HEPA,
    industry: [Industry.PHARMACEUTICAL, Industry.MANUFACTURING],
    specifications: [
      { name: "Efficiency", value: "99.97", unit: "% at 0.3 µm" },
      { name: "Dimensions", value: "24 x 24 x 6", unit: "inches" },
      { name: "Frame Material", value: "Anodized Aluminum" },
      { name: "Media Type", value: "Microfiberglass" },
      { name: "Initial Resistance", value: "1.0", unit: "inches w.g." },
      { name: "Classification", value: "H13 per EN 1822" },
      { name: "Scan Tested", value: "Yes" }
    ],
    certifications: [certifications[0], certifications[2], certifications[3]],
    compatibleWith: ["AAF Cleanroom Systems", "Camfil HEPA Housings", "Terra Universal Cleanrooms"],
    features: [
      "Individually tested and certified",
      "Scan test report provided",
      "Gel seal or knife-edge options",
      "Low pressure drop design",
      "Room-side replaceable option"
    ],
    inStock: true,
    leadTime: "10-15 business days",
    minimumOrder: 2
  },
];

// Filter products by category
export const getProductsByCategory = (category: Category): Product[] => {
  return products.filter(product => product.category === category);
};

// Filter products by industry
export const getProductsByIndustry = (industry: Industry): Product[] => {
  return products.filter(product => product.industry.includes(industry));
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Get featured products (for homepage)
export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};

// Get related products (products in same category)
export const getRelatedProducts = (product: Product): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
};