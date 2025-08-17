// BueaDelights App Constants and Configuration

// Business Information
export const BUSINESS_INFO = {
  name: 'BueaDelights',
  slogan: 'Local Flavors at Your Fingertips',
  sloganSecondary: 'Authentic Cameroonian Cuisine Delivered',
  founder: 'Caroline Folefack Viviane',
  foundingYear: 2020,
  location: 'Buea, Southwest Region, Cameroon',
  whatsappNumber: '+237699808260',
  whatsappNumberFormatted: '237699808260',
  whatsapp: '+237699808260',
  whatsappLink: `https://wa.me/237699808260`,
  email: 'info@bueadelights.com',
  website: 'https://bueadelights.com'
} as const;

// Operating Hours
export const OPERATING_HOURS = {
  monday: { open: '08:00', close: '22:00' },
  tuesday: { open: '08:00', close: '22:00' },
  wednesday: { open: '08:00', close: '22:00' },
  thursday: { open: '08:00', close: '22:00' },
  friday: { open: '08:00', close: '22:00' },
  saturday: { open: '08:00', close: '22:00' },
  sunday: { open: '08:00', close: '22:00' }
} as const;

// Menu Categories with Icons and Colors
export const MENU_CATEGORIES = {
  traditional: {
    name: 'Plats Traditionnels',
    nameEn: 'Traditional Dishes',
    icon: '🍲',
    color: 'forest',
    description: 'Authentic Cameroonian traditional cuisine'
  },
  rice: {
    name: 'Riz & Accompagnements',
    nameEn: 'Rice & Sides',
    icon: '🍚',
    color: 'golden',
    description: 'Flavorful rice preparations with local spices'
  },
  grilled: {
    name: 'Grillades',
    nameEn: 'Grilled Specialties',
    icon: '🔥',
    color: 'terracotta',
    description: 'Expertly grilled meats and fish'
  },
  snacks: {
    name: 'Collations',
    nameEn: 'Snacks',
    icon: '🥖',
    color: 'orange',
    description: 'Traditional snacks and finger foods'
  },
  drinks: {
    name: 'Boissons',
    nameEn: 'Beverages',
    icon: '🥤',
    color: 'blue',
    description: 'Refreshing traditional and modern drinks'
  },
  breakfast: {
    name: 'Petit Déjeuner',
    nameEn: 'Breakfast',
    icon: '🌅',
    color: 'purple',
    description: 'Start your day with authentic flavors'
  }
} as const;

// Delivery Zones in Buea
export const DELIVERY_ZONES = {
  university: {
    id: 'university',
    name: 'University Area',
    fee: 500,
    estimatedTime: '15-25 min',
    landmarks: ['University of Buea', 'Student Hostels', 'Buea Town']
  },
  downtown: {
    id: 'downtown',
    name: 'Buea Downtown',
    fee: 700,
    estimatedTime: '20-30 min',
    landmarks: ['Main Market', 'Government Buildings', 'Commercial Center']
  },
  residential: {
    id: 'residential',
    name: 'Residential Areas',
    fee: 1000,
    estimatedTime: '25-35 min',
    landmarks: ['Molyko', 'Great Soppo', 'Bonduma']
  },
  extended: {
    id: 'extended',
    name: 'Extended Areas',
    fee: 1500,
    estimatedTime: '35-45 min',
    landmarks: ['Muea', 'Mile 17', 'Bokwango']
  }
} as const;

// Business Statistics
export const BUSINESS_STATS = {
  customersServed: 1500,
  totalCustomers: 1500,
  dishesDelivered: 5000,
  averageRating: 4.9,
  yearsInBusiness: 5,
  partneredFarmers: 50,
  teamMembers: 8,
  dailyOrders: 50
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${BUSINESS_INFO.whatsappNumberFormatted}`,
  facebook: 'https://www.facebook.com/bueadelights',
  instagram: 'https://www.instagram.com/bueadelights',
  twitter: 'https://www.twitter.com/bueadelights'
} as const;

// Currency Settings
export const CURRENCY = {
  code: 'XAF',
  symbol: 'FCFA',
  name: 'Central African CFA franc'
} as const;

// App Configuration
export const APP_CONFIG = {
  storageKeys: {
    cart: 'bueadelights_cart',
    favorites: 'bueadelights_favorites',
    orderHistory: 'bueadelights_order_history',
    userPreferences: 'bueadelights_preferences',
    loyaltyPoints: 'bueadelights_loyalty'
  },
  limits: {
    maxCartItems: 20,
    maxOrderValue: 50000,
    minOrderValue: 1000,
    maxCustomizationNote: 200
  },
  features: {
    loyaltyProgram: true,
    pushNotifications: true,
    offlineMode: true,
    darkMode: false,
    multiLanguage: true
  }
} as const;

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  googleAnalytics: {
    measurementId: 'G-XXXXXXXXXX',
    enabled: false
  },
  metaPixel: {
    pixelId: 'XXXXXXXXX',
    enabled: false
  },
  events: {
    pageView: 'page_view',
    menuView: 'view_item_list',
    itemView: 'view_item',
    addToCart: 'add_to_cart',
    removeFromCart: 'remove_from_cart',
    beginCheckout: 'begin_checkout',
    whatsappRedirect: 'whatsapp_order',
    search: 'search'
  }
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'BueaDelights - Authentic Cameroonian Cuisine',
  titleTemplate: '%s | BueaDelights',
  defaultDescription: 'Local Flavors at Your Fingertips - Premium Cameroonian food delivery in Buea since 2020. Order traditional dishes like Ndolé, Eru, and Jollof Rice via WhatsApp.',
  siteUrl: 'https://bueadelights.com',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@bueadelights'
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  networkError: 'Connection error. Please check your internet connection.',
  itemNotFound: 'Item not found in our menu.',
  cartEmpty: 'Your cart is empty. Add some delicious items!',
  invalidZone: 'Please select a valid delivery zone.',
  orderFailed: 'Order failed. Please try again.',
  outOfStock: 'This item is currently out of stock.'
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  addedToCart: 'Item added to cart successfully!',
  removedFromCart: 'Item removed from cart.',
  orderPlaced: 'Order placed successfully! We will contact you shortly.',
  favoriteAdded: 'Added to favorites!',
  favoriteRemoved: 'Removed from favorites.'
} as const;

// Local Storage Keys
export const STORAGE_KEYS = APP_CONFIG.storageKeys;
