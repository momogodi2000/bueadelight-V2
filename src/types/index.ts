// Main application types for BueaDelights

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  ingredients: string[];
  allergens: string[];
  prices: {
    small: { amount: number; label: string };
    medium: { amount: number; label: string };
    large: { amount: number; label: string };
  };
  images: string[];
  spiciness: number; // 1-5 scale
  preparationTime: string;
  rating: number;
  reviewCount: number;
  availability: boolean;
  badge?: 'popular' | 'new' | 'spicy' | 'house-special';
}

export type MenuCategory = 
  | 'traditional' 
  | 'rice' 
  | 'grilled' 
  | 'snacks' 
  | 'drinks' 
  | 'breakfast';

export interface CartItem {
  id: string;
  name: string;
  size: 'small' | 'medium' | 'large';
  price: number;
  quantity: number;
  image: string;
  customizations?: {
    spiciness?: number;
    extraMeat?: boolean;
    notes?: string;
  };
}

export interface DeliveryZone {
  id: string;
  name: string;
  fee: number;
  estimatedTime: string;
  coordinates: [number, number][];
  landmarks: string[];
}

export interface Customer {
  name: string;
  phone: string;
  deliveryZone: string;
  address?: string;
  isReturning: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: Customer;
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'completed';
  timestamp: number;
  deliveryZone: DeliveryZone;
  notes?: string;
}

export interface WhatsAppMessage {
  businessNumber: string;
  message: string;
  orderData: Order;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  story: string;
  specialties: string[];
  experience: string;
  quote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
  verified: boolean;
}

export interface BusinessStats {
  customersServed: number;
  dishesDelivered: number;
  averageRating: number;
  yearsInBusiness: number;
  partneredFarmers: number;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  url: string;
}

export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export interface LoyaltyProgram {
  points: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  discount: number;
  nextTierPoints: number;
  rewardsAvailable: string[];
}

export interface NotificationSettings {
  orderUpdates: boolean;
  promotions: boolean;
  newMenuItems: boolean;
  weeklySpecials: boolean;
}

export interface UserPreferences {
  favoriteItems: string[];
  allergyInfo: string[];
  spicePreference: number;
  orderHistory: Order[];
  loyaltyProgram: LoyaltyProgram;
  notifications: NotificationSettings;
}
