import { BUSINESS_INFO, CURRENCY } from '@/constants';
import type { CartItem, Order } from '@/types';

/**
 * Utility functions for BueaDelights application
 */

// Price formatting for CFA Franc
export const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('fr-CM', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount) + ` ${CURRENCY.symbol}`;
};

// WhatsApp message generation
export const generateWhatsAppMessage = (order: Order): string => {
  const itemsList = order.items.map(item => {
    const customizations = item.customizations ? [
      item.customizations.spiciness ? `Épices: ${item.customizations.spiciness}/5` : '',
      item.customizations.extraMeat ? 'Extra viande: Oui' : '',
      item.customizations.notes ? `Note: ${item.customizations.notes}` : ''
    ].filter(Boolean).join(', ') : '';

    return `• ${item.name} (${item.size}) x${item.quantity}${customizations ? `\n  - ${customizations}` : ''}\n  - Prix: ${formatPrice(item.price)} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}`;
  }).join('\n\n');

  const message = `🍽️ NOUVELLE COMMANDE - BUEADELIGHTS

📋 Détails de la commande:
━━━━━━━━━━━━━━━━━━━━━━━━━━
${itemsList}

💰 RÉCAPITULATIF:
• Sous-total: ${formatPrice(order.subtotal)}
• Livraison (${order.deliveryZone.name}): ${formatPrice(order.deliveryFee)}
• TOTAL: ${formatPrice(order.total)}

🚚 LIVRAISON:
• Zone: ${order.deliveryZone.name}
• Temps estimé: ${order.deliveryZone.estimatedTime}
• Adresse exacte: [À préciser]

👤 CLIENT:
• Nom: ${order.customer.name}
• Téléphone: ${order.customer.phone}
• Instructions spéciales: ${order.notes || '[Aucune]'}

💬 Message:
Bonjour Caroline! Je souhaite passer cette commande. Merci de me confirmer la disponibilité et l'heure de livraison.

#BueaDelights #CommandeWhatsApp
Commande générée le: ${new Date().toLocaleString('fr-CM')}`;

  return message;
};

// Generate WhatsApp URL
export const generateWhatsAppURL = (order: Order): string => {
  const message = generateWhatsAppMessage(order);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumberFormatted}?text=${encodedMessage}`;
};

// Simple WhatsApp contact URL
export const getWhatsAppContactURL = (customMessage?: string): string => {
  const defaultMessage = `Bonjour ${BUSINESS_INFO.name}! Je souhaite avoir des informations sur vos plats.`;
  const message = customMessage || defaultMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumberFormatted}?text=${encodeURIComponent(message)}`;
};

// Local storage helpers
export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

export const removeLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

// URL slug generation
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Remove multiple hyphens
};

// Image path helper (for assets in public folder)
export const getImagePath = (imageName: string, folder = ''): string => {
  const basePath = folder ? `/${folder}/` : '/';
  return `${basePath}${imageName}`;
};

// Food image helper
export const getFoodImagePath = (imageName: string): string => {
  return getImagePath(imageName, 'image');
};

// Avatar image helper
export const getAvatarImagePath = (imageName: string): string => {
  return getImagePath(imageName, 'avatars');
};

// Logo image helper
export const getLogoImagePath = (imageName: string): string => {
  return getImagePath(imageName, 'logo');
};

// Video path helper
export const getVideoPath = (videoName: string): string => {
  return getImagePath(videoName, 'videos');
};

// Calculate cart total
export const calculateCartTotal = (items: CartItem[]): { subtotal: number; itemCount: number } => {
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  
  return { subtotal, itemCount };
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate Cameroon phone number
export const isValidCameroonPhone = (phone: string): boolean => {
  // Cameroon phone numbers: +237 or 237 followed by 9 digits
  const phoneRegex = /^(\+237|237)?[679]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Format phone number for display
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('237')) {
    const number = cleaned.substring(3);
    return `+237 ${number.substring(0, 1)} ${number.substring(1, 3)} ${number.substring(3, 5)} ${number.substring(5, 7)} ${number.substring(7)}`;
  }
  return phone;
};

// Debounce function for search
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Check if item is in favorites
export const isItemFavorite = (itemId: string, favorites: string[]): boolean => {
  return favorites.includes(itemId);
};

// Toggle favorite item
export const toggleFavorite = (itemId: string, favorites: string[]): string[] => {
  if (isItemFavorite(itemId, favorites)) {
    return favorites.filter(id => id !== itemId);
  } else {
    return [...favorites, itemId];
  }
};

// Calculate delivery fee based on zone
export const calculateDeliveryFee = (zoneId: string): number => {
  const zones: Record<string, number> = {
    'university': 500,
    'downtown': 700,
    'residential': 1000,
    'extended': 1500
  };
  
  return zones[zoneId] || 1000; // Default fee
};

// Get business hours status
export const getBusinessStatus = (): { isOpen: boolean; message: string } => {
  const now = new Date();
  const currentHour = now.getHours();
  
  // Business hours: 8:00 - 22:00
  const isOpen = currentHour >= 8 && currentHour < 22;
  
  if (isOpen) {
    const closeHour = 22;
    const hoursUntilClose = closeHour - currentHour;
    return {
      isOpen: true,
      message: `Ouvert - Ferme dans ${hoursUntilClose}h`
    };
  } else {
    const openHour = 8;
    const hoursUntilOpen = currentHour < openHour ? openHour - currentHour : 24 - currentHour + openHour;
    return {
      isOpen: false,
      message: `Fermé - Ouvre dans ${hoursUntilOpen}h`
    };
  }
};

// Truncate text
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Get spice level display
export const getSpiceLevelText = (level: number): { text: string; emoji: string } => {
  const spiceLevels = [
    { text: 'Non épicé', emoji: '😊' },
    { text: 'Très doux', emoji: '🌿' },
    { text: 'Doux', emoji: '🌶️' },
    { text: 'Moyen', emoji: '🌶️🌶️' },
    { text: 'Épicé', emoji: '🌶️🌶️🌶️' },
    { text: 'Très épicé', emoji: '🌶️🌶️🌶️🔥' }
  ];
  
  return spiceLevels[level] || spiceLevels[0];
};

// Generate order ID
export const generateOrderId = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `BD${timestamp}${random}`;
};

// Social sharing URL generators
export const getSocialShareURL = (platform: 'facebook' | 'twitter' | 'whatsapp', text: string, url: string) => {
  const encodedText = encodeURIComponent(text);
  const encodedURL = encodeURIComponent(url);
  
  switch (platform) {
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
    case 'twitter':
      return `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedURL}`;
    case 'whatsapp':
      return `https://wa.me/?text=${encodedText}%20${encodedURL}`;
    default:
      return url;
  }
};
