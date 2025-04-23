export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  images: string[];
  category: Category;
  industry: Industry[];
  specifications: Specification[];
  certifications: Certification[];
  compatibleWith: string[];
  features: string[];
  inStock: boolean;
  leadTime: string;
  minimumOrder: number;
}

export interface Specification {
  name: string;
  value: string;
  unit?: string;
}

export enum Category {
  AIR = "Air Filters",
  WATER = "Water Filters",
  OIL = "Oil Filters",
  FUEL = "Fuel Filters",
  HYDRAULIC = "Hydraulic Filters",
  CUSTOM = "Custom Filters",
  HEPA = "HEPA Filters"
}

export enum Industry {
  MANUFACTURING = "Manufacturing",
  AUTOMOTIVE = "Automotive",
  HVAC = "HVAC",
  OIL_GAS = "Oil & Gas",
  PHARMACEUTICAL = "Pharmaceutical",
  FOOD_PROCESSING = "Food Processing",
  CHEMICAL = "Chemical",
  POWER_GENERATION = "Power Generation",
  MINING = "Mining",
  CONSTRUCTION = "Construction"
}

export interface Certification {
  name: string;
  logo: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RFQRequest {
  id: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
  industry: Industry;
  requirements: string;
  specifications?: Specification[];
  quantity: number;
  status: "pending" | "reviewed" | "quoted" | "completed";
  dateSubmitted: Date;
}

export interface User {
  id: string;
  name: string;
  company: string;
  email: string;
  role: "buyer" | "admin";
  orders: Order[];
  savedProducts: string[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: "processing" | "shipped" | "delivered" | "cancelled";
  dateOrdered: Date;
  dateFulfilled?: Date;
  shippingAddress: {
    company: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  billingAddress: {
    company: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  paymentMethod: "credit_card" | "purchase_order" | "wire_transfer";
  paymentDetails: {
    status: "pending" | "paid" | "refunded";
    transactionId?: string;
    poNumber?: string;
  };
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}