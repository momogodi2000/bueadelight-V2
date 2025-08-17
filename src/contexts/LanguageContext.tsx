import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const LANGUAGE_STORAGE_KEY = 'bueadelights_language';

// Translation keys
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.delivery': 'Delivery',
    'nav.contact': 'Contact',
    'nav.reviews': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.cart': 'Cart',
    
    // Common
    'common.order_now': 'Order Now',
    'common.add_to_cart': 'Add to Cart',
    'common.view_menu': 'View Menu',
    'common.learn_more': 'Learn More',
    'common.contact_us': 'Contact Us',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.close': 'Close',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.price': 'Price',
    'common.quantity': 'Quantity',
    'common.total': 'Total',
    'common.subtotal': 'Subtotal',
    'common.delivery_fee': 'Delivery Fee',
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.address': 'Address',
    'common.name': 'Name',
    'common.message': 'Message',
    'common.send': 'Send',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.confirm': 'Confirm',
    'common.all': 'All',
    
    // Hero Section
    'hero.title': 'Authentic Cameroonian Cuisine',
    'hero.subtitle': 'Local Flavors at Your Fingertips',
    'hero.description': 'Experience the rich taste of traditional Cameroonian dishes delivered fresh to your doorstep in Buea.',
    'hero.cta_primary': 'Order Now',
    'hero.cta_secondary': 'Browse Menu',
    
    // Menu Categories
    'category.traditional': 'Traditional Dishes',
    'category.rice': 'Rice & Sides',
    'category.grilled': 'Grilled Specialties',
    'category.snacks': 'Snacks',
    'category.drinks': 'Beverages',
    'category.breakfast': 'Breakfast',
    
    // About
    'about.title': 'Our Story',
    'about.subtitle': 'Passion for Authentic Flavors',
    'about.description': 'Founded by Caroline Folefack Viviane in 2020, BueaDelights brings authentic Cameroonian cuisine to your doorstep with love and tradition.',
    
    // Services
    'services.title': 'Our Services',
    'services.food_delivery': 'Food Delivery',
    'services.catering': 'Catering Services',
    'services.meal_prep': 'Meal Preparation',
    'services.export': 'Food Export',
    'services.preservation': 'Food Preservation',
    'services.extraction': 'Ingredient Extraction',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'d love to hear from you',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Call Us',
    'contact.location': 'Visit Us',
    'contact.hours': 'Operating Hours',
    'contact.form.title': 'Send us a message',
    'contact.form.name_placeholder': 'Your Name',
    'contact.form.email_placeholder': 'Your Email',
    'contact.form.phone_placeholder': 'Your Phone',
    'contact.form.message_placeholder': 'Your Message',
    'contact.form.subject_placeholder': 'Subject',
    
    // Cart
    'cart.title': 'Your Order',
    'cart.empty': 'Your cart is empty',
    'cart.empty_description': 'Add some delicious items from our menu',
    'cart.item_count': '{count} items',
    'cart.checkout': 'Proceed to WhatsApp',
    'cart.clear': 'Clear Cart',
    'cart.continue_shopping': 'Continue Shopping',
    
    // Footer
    'footer.about': 'About BueaDelights',
    'footer.about_text': 'Authentic Cameroonian cuisine delivered with passion since 2020.',
    'footer.quick_links': 'Quick Links',
    'footer.contact_info': 'Contact Info',
    'footer.follow_us': 'Follow Us',
    'footer.copyright': '© 2024 BueaDelights. All rights reserved.',
    
    // Delivery
    'delivery.title': 'Delivery Information',
    'delivery.description': 'We deliver throughout the Buea region',
    'delivery.view_zones': 'View zones and rates',
    'delivery.zones': 'Delivery Zones',
    'delivery.time': 'Estimated Time',
    'delivery.fee': 'Delivery Fee',
    'delivery.university': 'University Area',
    'delivery.downtown': 'Buea Downtown',
    'delivery.residential': 'Residential Areas',
    'delivery.extended': 'Extended Areas',
    
    // Reviews
    'reviews.title': 'Customer Reviews',
    'reviews.subtitle': 'What our customers say',
    'reviews.view_all': 'View all reviews',
    'reviews.rating': 'Rating',
    'reviews.verified': 'Verified Customer',
    'reviews.write_review': 'Write a Review',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know',
    
    // Errors
    'error.network': 'Network error. Please check your connection.',
    'error.not_found': 'Page not found',
    'error.general': 'Something went wrong. Please try again.',
    'error.cart_empty': 'Your cart is empty',
    'error.invalid_phone': 'Please enter a valid phone number',
    'error.required_field': 'This field is required',
    
    // Success Messages
    'success.added_to_cart': 'Added to cart successfully!',
    'success.removed_from_cart': 'Removed from cart',
    'success.message_sent': 'Message sent successfully!',
    'success.order_placed': 'Order placed! We\'ll contact you shortly.',
    
    // Time
    'time.min': 'min',
    'time.hours': 'hours',
    'time.days': 'days',
    
    // Currency
    'currency.fcfa': 'FCFA',
    
    // Business Stats
    'stats.customers_served': 'Customers Served',
    'stats.dishes_delivered': 'Dishes Delivered',
    'stats.years_experience': 'Years of Experience',
    'stats.average_rating': 'Average Rating',
    
    // Carousel
    'carousel.title': 'Our Promotions',
    'carousel.description': 'Discover our special offers and latest creations',
    'carousel.view_menu': 'Discover our complete menu',
    'carousel.auto_play': 'Auto-play (30s)',
    'carousel.paused': 'Slideshow paused'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.menu': 'Menu',
    'nav.about': 'À Propos',
    'nav.delivery': 'Livraison',
    'nav.contact': 'Contact',
    'nav.reviews': 'Avis',
    'nav.faq': 'FAQ',
    'nav.cart': 'Panier',
    
    // Common
    'common.order_now': 'Commander Maintenant',
    'common.add_to_cart': 'Ajouter au Panier',
    'common.view_menu': 'Voir le Menu',
    'common.learn_more': 'En Savoir Plus',
    'common.contact_us': 'Nous Contacter',
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
    'common.close': 'Fermer',
    'common.back': 'Retour',
    'common.next': 'Suivant',
    'common.previous': 'Précédent',
    'common.search': 'Rechercher',
    'common.filter': 'Filtrer',
    'common.sort': 'Trier',
    'common.price': 'Prix',
    'common.quantity': 'Quantité',
    'common.total': 'Total',
    'common.subtotal': 'Sous-total',
    'common.delivery_fee': 'Frais de Livraison',
    'common.phone': 'Téléphone',
    'common.email': 'Email',
    'common.address': 'Adresse',
    'common.name': 'Nom',
    'common.message': 'Message',
    'common.send': 'Envoyer',
    'common.submit': 'Soumettre',
    'common.cancel': 'Annuler',
    'common.save': 'Sauvegarder',
    'common.edit': 'Modifier',
    'common.delete': 'Supprimer',
    'common.confirm': 'Confirmer',
    'common.all': 'Tous',
    
    // Hero Section
    'hero.title': 'Cuisine Camerounaise Authentique',
    'hero.subtitle': 'Les Saveurs Locales à Portée de Main',
    'hero.description': 'Découvrez le goût riche des plats camerounais traditionnels livrés frais à votre porte à Buea.',
    'hero.cta_primary': 'Commander',
    'hero.cta_secondary': 'Parcourir le Menu',
    
    // Menu Categories
    'category.traditional': 'Plats Traditionnels',
    'category.rice': 'Riz & Accompagnements',
    'category.grilled': 'Grillades',
    'category.snacks': 'Collations',
    'category.drinks': 'Boissons',
    'category.breakfast': 'Petit Déjeuner',
    
    // About
    'about.title': 'Notre Histoire',
    'about.subtitle': 'Passion pour les Saveurs Authentiques',
    'about.description': 'Fondé par Caroline Folefack Viviane en 2020, BueaDelights apporte la cuisine camerounaise authentique à votre porte avec amour et tradition.',
    
    // Services
    'services.title': 'Nos Services',
    'services.food_delivery': 'Livraison de Nourriture',
    'services.catering': 'Services de Restauration',
    'services.meal_prep': 'Préparation de Repas',
    'services.export': 'Export Alimentaire',
    'services.preservation': 'Préservation Alimentaire',
    'services.extraction': 'Extraction d\'Ingrédients',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Nous aimerions avoir de vos nouvelles',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Appelez-Nous',
    'contact.location': 'Visitez-Nous',
    'contact.hours': 'Heures d\'Ouverture',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name_placeholder': 'Votre Nom',
    'contact.form.email_placeholder': 'Votre Email',
    'contact.form.phone_placeholder': 'Votre Téléphone',
    'contact.form.message_placeholder': 'Votre Message',
    'contact.form.subject_placeholder': 'Sujet',
    
    // Cart
    'cart.title': 'Votre Commande',
    'cart.empty': 'Votre panier est vide',
    'cart.empty_description': 'Ajoutez quelques délicieux articles de notre menu',
    'cart.item_count': '{count} articles',
    'cart.checkout': 'Procéder sur WhatsApp',
    'cart.clear': 'Vider le Panier',
    'cart.continue_shopping': 'Continuer les Achats',
    
    // Footer
    'footer.about': 'À Propos de BueaDelights',
    'footer.about_text': 'Cuisine camerounaise authentique livrée avec passion depuis 2020.',
    'footer.quick_links': 'Liens Rapides',
    'footer.contact_info': 'Informations de Contact',
    'footer.follow_us': 'Suivez-Nous',
    'footer.copyright': '© 2024 BueaDelights. Tous droits réservés.',
    
    // Delivery
    'delivery.title': 'Zones de Livraison',
    'delivery.description': 'Nous livrons dans toute la région de Buea',
    'delivery.view_zones': 'Voir les zones et tarifs',
    'delivery.zones': 'Zones de Livraison',
    'delivery.time': 'Temps Estimé',
    'delivery.fee': 'Frais de Livraison',
    'delivery.university': 'Zone Universitaire',
    'delivery.downtown': 'Centre-ville de Buea',
    'delivery.residential': 'Zones Résidentielles',
    'delivery.extended': 'Zones Étendues',
    
    // Reviews
    'reviews.title': 'Nos Clients Témoignent',
    'reviews.subtitle': 'Découvrez ce que disent nos clients satisfaits',
    'reviews.view_all': 'Voir tous les avis',
    'reviews.rating': 'Note',
    'reviews.verified': 'Client Vérifié',
    'reviews.write_review': 'Écrire un Avis',
    
    // FAQ
    'faq.title': 'Questions Fréquemment Posées',
    'faq.subtitle': 'Tout ce que vous devez savoir',
    
    // Errors
    'error.network': 'Erreur réseau. Vérifiez votre connexion.',
    'error.not_found': 'Page non trouvée',
    'error.general': 'Quelque chose s\'est mal passé. Veuillez réessayer.',
    'error.cart_empty': 'Votre panier est vide',
    'error.invalid_phone': 'Veuillez entrer un numéro de téléphone valide',
    'error.required_field': 'Ce champ est requis',
    
    // Success Messages
    'success.added_to_cart': 'Ajouté au panier avec succès !',
    'success.removed_from_cart': 'Retiré du panier',
    'success.message_sent': 'Message envoyé avec succès !',
    'success.order_placed': 'Commande passée ! Nous vous contacterons bientôt.',
    
    // Time
    'time.min': 'min',
    'time.hours': 'heures',
    'time.days': 'jours',
    
    // Currency
    'currency.fcfa': 'FCFA',
    
    // Business Stats
    'stats.customers_served': 'Clients Servis',
    'stats.dishes_delivered': 'Plats Livrés',
    'stats.years_experience': 'Années d\'Expérience',
    'stats.average_rating': 'Note Moyenne',
    
    // Carousel
    'carousel.title': 'Nos Promotions',
    'carousel.description': 'Découvrez nos offres spéciales et nouveautés du moment',
    'carousel.view_menu': 'Découvrir notre menu complet',
    'carousel.auto_play': 'Défilement automatique (30s)',
    'carousel.paused': 'Défilement en pause'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');

  // Load language from localStorage or detect browser language
  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguageState(savedLanguage);
    } else {
      // Auto-detect browser language
      const browserLanguage = navigator.language.toLowerCase();
      if (browserLanguage.startsWith('fr')) {
        setLanguageState('fr');
      } else {
        setLanguageState('en');
      }
    }
  }, []);

  // Apply language to document
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  const toggleLanguage = () => {
    setLanguageState(current => current === 'en' ? 'fr' : 'en');
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    let translation = translations[language][key] || translations['en'][key] || key;
    
    // Replace parameters in translation
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{${param}}`, String(value));
      });
    }
    
    return translation;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;