import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
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
    
    // Menu Page
    'menu.title': 'Our Menu',
    'menu.description': 'Discover our authentic Cameroonian dishes',
    'menu.search_placeholder': 'Search for a dish...',
    'menu.categories': 'Categories',
    
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
    'footer.copyright': '© {year} BueaDelights. All rights reserved.',
    'footer.privacy_policy': 'Privacy Policy',
    'footer.terms_of_use': 'Terms of Use',
    'footer.founded_by': 'Founded by',
    
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
    'carousel.paused': 'Slideshow paused',
    
    // Featured Section
    'featured.title': 'Our Specialties',
    'featured.description': 'Discover the authenticity of Cameroonian cuisine with our traditional dishes prepared according to ancestral recipes and the finest local ingredients.',
    'featured.location': 'Authentic cuisine from Buea • Delivery throughout the Southwest',
    'featured.view_all_menu': 'View all menu',
    
    // Badges
    'badges.popular': 'Popular',
    'badges.spicy': 'Spicy',
    'badges.new': 'New',
    'badges.house_special': 'House Special',
    
    // Menu Items
    'menu.ingredients': 'Ingredients',
    'menu.allergens': 'Allergens',
    'menu.no_allergens': 'No allergens',
    'menu.preparation_time': 'Preparation Time',
    'menu.size_small': 'Small',
    'menu.size_medium': 'Medium', 
    'menu.size_large': 'Large',
    'menu.portion_small': 'Small portion',
    'menu.portion_medium': 'Normal portion',
    'menu.portion_large': 'Large portion',
    'menu.less': 'Less',
    'menu.more': 'More',
    'menu.no_results': 'No dishes found',
    'menu.try_different_search': 'Try modifying your search criteria',
    'menu.sort_popular': 'Popular',
    'menu.sort_name': 'Name A-Z',
    'menu.sort_price': 'Price ascending',
    'menu.sort_rating': 'Best rated',
    'menu.items_found': '{count} dish{plural} found',
    
    // Hero Section Extended
    'hero.discover_authentic': 'Discover the authenticity of Cameroonian cuisine with our traditional dishes prepared with love by',
    'hero.since_2020': 'since 2020 in Buea',
    'hero.order_whatsapp': 'Order via WhatsApp',
    'hero.view_menu': 'View Menu',
    'hero.scroll_down': 'Scroll down',
    'hero.customers_satisfied': 'Satisfied Customers',
    'hero.average_rating': 'Average Rating',
    'hero.years_excellence': 'Years of Excellence',
    'hero.delivery_time': 'Delivery Time',
    'hero.years': 'years',
    'hero.minutes': 'min',
    
    // About Page
    'about.founder_title': 'Founder & Executive Chef',
    'about.contact_whatsapp': 'Contact via WhatsApp',
    'about.story_intro': 'Founded in 2020 by Caroline Folefack Viviane, BueaDelights was born from a passion for preserving and sharing the authentic flavors of Cameroon.',
    'about.story_mission': 'Our mission is to bring traditional Cameroonian cuisine to your doorstep while maintaining the authenticity and quality of our ancestral recipes.',
    'about.story_vision': 'We envision becoming the bridge between traditional Cameroonian cuisine and the modern world, one delicious meal at a time.',
    
    // Services Extended
    'services.food_delivery_desc': 'Fast and reliable delivery throughout Buea',
    'services.catering_desc': 'Professional catering for events and celebrations',
    'services.meal_prep_desc': 'Fresh meal preparation with traditional recipes',
    'services.export_desc': 'Export of authentic Cameroonian food products',
    'services.preservation_desc': 'Traditional food preservation techniques',
    'services.extraction_desc': 'Local ingredient extraction and processing',
    
    // Newsletter
    'newsletter.title': 'Stay connected to flavors',
    'newsletter.description': 'Receive our new dishes, exclusive promotions and Cameroonian culinary news',
    'newsletter.email_placeholder': 'Your email address...',
    'newsletter.subscribe': 'Subscribe',
    
    // Footer Extended
    'footer.description': 'Since 2020, we preserve and share the authenticity of Cameroonian cuisine. Each dish tells the story of our culinary traditions.',
    'footer.navigation': 'Navigation',
    'footer.specialties': 'Our Specialties',
    'footer.contact_delivery': 'Contact & Delivery',
    'footer.whatsapp_orders': 'WhatsApp Orders',
    'footer.customer_support': 'Customer Support',
    'footer.continuous_service': 'Continuous service',
    'footer.order_now': 'Order Now',
    'footer.created_with_love': 'Created with ❤️ for Cameroonian cuisine',
    'footer.authentic_since': 'Authentic Cameroonian Cuisine Since 2020',
    'footer.built_by': 'Built with ❤️ by',
    'footer.tech_stack': 'React + Vite + TypeScript + Tailwind CSS',
    
    // Video Showcase
    'video.title': 'Behind the Scenes',
    'video.description': 'Discover how we prepare our authentic Cameroonian dishes with traditional techniques and the finest local ingredients.',
    'video.discover_menu': 'Discover our complete menu',
    'video.process_title': 'Our Cooking Process',
    'video.process_description': 'From selection of ingredients to final presentation',
    'video.ingredients_title': 'Fresh Ingredients',
    'video.ingredients_description': 'We use only the finest local ingredients',
    'video.tradition_title': 'Culinary Tradition',
    'video.tradition_description': 'Ancestral recipes preserved and perfected',
    
    // Payment Methods
    'payment.title': 'Accepted Payment Methods',
    'payment.description': 'Multiple secure payment options for your convenience',
    'payment.mobile_money': 'Mobile Money',
    'payment.orange_money': 'Orange Money',
    'payment.mtn_money': 'MTN Money',
    'payment.cash_delivery': 'Cash on Delivery',
    'payment.bank_transfer': 'Bank Transfer',
    
    // General UI
    'ui.loading': 'Loading...',
    'ui.error': 'An error occurred',
    'ui.retry': 'Retry',
    'ui.close': 'Close',
    'ui.continue': 'Continue',
    'ui.back': 'Back',
    'ui.next': 'Next',
    'ui.finish': 'Finish',
    'ui.select': 'Select',
    'ui.selected': 'Selected',
    'ui.available': 'Available',
    'ui.unavailable': 'Unavailable',
    'ui.in_stock': 'In stock',
    'ui.out_of_stock': 'Out of stock',
    
    // Our Story
    'story.title': 'Our Story',
    'story.subtitle': 'A culinary adventure born from passion for authentic Cameroonian flavors. Discover the story of BueaDelights and its visionary founder.',
    'story.founder_quote': 'Cameroonian cuisine is an art that is transmitted from heart to heart. Each dish tells a story, each spice carries our traditions.',
    'story.founder_background': 'Passionate about cooking since childhood in Buea, Caroline learned culinary secrets from her grandmother. With a degree in hotel management, she combines ancestral tradition with modern standards.',
    'story.location': 'Buea, Southwest Region, Cameroon',
    'story.years_excellence': 'Years of Excellence',
    'story.loyal_customers': 'Loyal Customers',
    'story.mission_title': 'Our Mission',
    'story.mission_desc': 'Preserve and share the authenticity of Cameroonian cuisine while adapting to modern delivery and quality needs.',
    'story.vision_title': 'Our Vision',
    'story.vision_desc': 'Become the reference for authentic Cameroonian cuisine, connecting hearts and palates through our traditional flavors.',
    'story.values_title': 'Our Values',
    'story.values_subtitle': 'The principles that guide our culinary passion and commitment to excellence.',
    'story.authenticity': 'Authenticity',
    'story.authenticity_desc': 'Traditional recipes passed down from generation to generation, respecting ancestral methods.',
    'story.premium_quality': 'Premium Quality',
    'story.premium_quality_desc': 'Carefully selected ingredients, meticulous preparation and strict hygiene standards.',
    'story.culinary_passion': 'Culinary Passion',
    'story.culinary_passion_desc': 'Love for Cameroonian cuisine and commitment to offering a memorable taste experience.',
    'story.community': 'Community',
    'story.community_desc': 'Creating connections around the table, bringing families together and sharing our culture.',
    'story.journey_title': 'Our Journey',
    'story.journey_subtitle': 'A culinary journey that began in traditional kitchens to become the reference for Cameroonian authenticity.',
    'story.first_flavors': 'First Flavors',
    'story.first_flavors_desc': 'Caroline discovers her passion for cooking alongside her grandmother Mama Folefack.',
    'story.culinary_training': 'Culinary Training',
    'story.culinary_training_desc': 'Perfecting techniques and learning international standards.',
    'story.birth_bueadelights': 'Birth of BueaDelights',
    'story.birth_bueadelights_desc': 'Official creation of the restaurant with first deliveries in Buea.',
    'story.recognized_leader': 'Recognized Leader',
    'story.recognized_leader_desc': '1500+ satisfied customers, reference for authentic Cameroonian cuisine.',
    
    // Video Showcase
    'video.products_title': 'BueaDelights Products',
    'video.products_desc': 'Discover our delicious Cameroonian products',
    'video.specialties_title': 'Our Specialties',
    'video.specialties_desc': 'Presentation of our signature dishes',
    'video.traditional_cuisine_title': 'Traditional Cuisine',
    'video.traditional_cuisine_desc': 'Traditional preparation process',
    'video.bread_making_title': 'Bread Making',
    'video.bread_making_desc': 'Homemade bread making process',
    'video.donut_preparation_title': 'Donut Preparation',
    'video.donut_preparation_desc': 'Traditional Cameroonian donut making',
    'video.beignet_process_title': 'Beignet Process',
    'video.beignet_process_desc': 'Step by step beignet preparation',
    'video.marketing': 'Marketing',
    'video.process': 'Process'
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
    
    // Menu Page
    'menu.title': 'Notre Menu',
    'menu.description': 'Découvrez nos plats camerounais authentiques',
    'menu.search_placeholder': 'Rechercher un plat...',
    'menu.categories': 'Catégories',
    
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
    'footer.copyright': '© {year} BueaDelights. Tous droits réservés.',
    'footer.privacy_policy': 'Politique de Confidentialité',
    'footer.terms_of_use': 'Conditions d\'Utilisation',
    'footer.founded_by': 'Fondé par',
    
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
    'carousel.paused': 'Défilement en pause',
    
    // Featured Section
    'featured.title': 'Nos Spécialités',
    'featured.description': 'Découvrez l\'authenticité de la cuisine camerounaise avec nos plats traditionnels préparés selon les recettes ancestrales et les meilleurs ingrédients locaux.',
    'featured.location': 'Authentique cuisine de Buea • Livraison dans tout le Sud-Ouest',
    'featured.view_all_menu': 'Voir tout le menu',
    
    // Badges
    'badges.popular': 'Populaire',
    'badges.spicy': 'Épicé',
    'badges.new': 'Nouveau',
    'badges.house_special': 'Spécialité Maison',
    
    // Menu Items
    'menu.ingredients': 'Ingrédients',
    'menu.allergens': 'Allergènes',
    'menu.no_allergens': 'Aucun allergène',
    'menu.preparation_time': 'Temps de Préparation',
    'menu.size_small': 'Petite',
    'menu.size_medium': 'Moyenne',
    'menu.size_large': 'Grande',
    'menu.portion_small': 'Petite portion',
    'menu.portion_medium': 'Portion normale',
    'menu.portion_large': 'Grande portion',
    'menu.less': 'Moins',
    'menu.more': 'Plus',
    'menu.no_results': 'Aucun plat trouvé',
    'menu.try_different_search': 'Essayez de modifier vos critères de recherche',
    'menu.sort_popular': 'Populaires',
    'menu.sort_name': 'Nom A-Z',
    'menu.sort_price': 'Prix croissant',
    'menu.sort_rating': 'Mieux notés',
    'menu.items_found': '{count} plat{plural} trouvé{plural}',
    
    // Hero Section Extended
    'hero.discover_authentic': 'Découvrez l\'authenticité de la cuisine camerounaise avec nos plats traditionnels préparés avec amour par',
    'hero.since_2020': 'depuis 2020 à Buea',
    'hero.order_whatsapp': 'Commander via WhatsApp',
    'hero.view_menu': 'Voir le Menu',
    'hero.scroll_down': 'Défiler vers le bas',
    'hero.customers_satisfied': 'Clients Satisfaits',
    'hero.average_rating': 'Note Moyenne',
    'hero.years_excellence': 'Années d\'Excellence',
    'hero.delivery_time': 'Temps de Livraison',
    'hero.years': 'ans',
    'hero.minutes': 'min',
    
    // About Page
    'about.founder_title': 'Fondatrice & Chef Exécutive',
    'about.contact_whatsapp': 'Contacter via WhatsApp',
    'about.story_intro': 'Fondé en 2020 par Caroline Folefack Viviane, BueaDelights est né d\'une passion pour préserver et partager les saveurs authentiques du Cameroun.',
    'about.story_mission': 'Notre mission est d\'apporter la cuisine camerounaise traditionnelle à votre porte tout en maintenant l\'authenticité et la qualité de nos recettes ancestrales.',
    'about.story_vision': 'Nous envisageons de devenir le pont entre la cuisine camerounaise traditionnelle et le monde moderne, un délicieux repas à la fois.',
    
    // Services Extended
    'services.food_delivery_desc': 'Livraison rapide et fiable dans tout Buea',
    'services.catering_desc': 'Service traiteur professionnel pour événements et célébrations',
    'services.meal_prep_desc': 'Préparation de repas frais avec des recettes traditionnelles',
    'services.export_desc': 'Export de produits alimentaires camerounais authentiques',
    'services.preservation_desc': 'Techniques traditionnelles de conservation alimentaire',
    'services.extraction_desc': 'Extraction et transformation d\'ingrédients locaux',
    
    // Newsletter
    'newsletter.title': 'Restez connectés aux saveurs',
    'newsletter.description': 'Recevez nos nouveaux plats, promotions exclusives et actualités culinaires camerounaises',
    'newsletter.email_placeholder': 'Votre adresse email...',
    'newsletter.subscribe': 'S\'abonner',
    
    // Footer Extended
    'footer.description': 'Depuis 2020, nous préservons et partageons l\'authenticité de la cuisine camerounaise. Chaque plat raconte l\'histoire de nos traditions culinaires.',
    'footer.navigation': 'Navigation',
    'footer.specialties': 'Nos Spécialités',
    'footer.contact_delivery': 'Contact & Livraison',
    'footer.whatsapp_orders': 'Commandes WhatsApp',
    'footer.customer_support': 'Support Client',
    'footer.continuous_service': 'Service continu',
    'footer.order_now': 'Commander Maintenant',
    'footer.created_with_love': 'Créé avec ❤️ pour la cuisine camerounaise',
    'footer.authentic_since': 'Cuisine Camerounaise Authentique Depuis 2020',
    'footer.built_by': 'Créé avec ❤️ par',
    'footer.tech_stack': 'React + Vite + TypeScript + Tailwind CSS',
    
    // Video Showcase
    'video.title': 'Les Coulisses',
    'video.description': 'Découvrez comment nous préparons nos plats camerounais authentiques avec des techniques traditionnelles et les meilleurs ingrédients locaux.',
    'video.discover_menu': 'Découvrir notre menu complet',
    'video.process_title': 'Notre Processus de Cuisson',
    'video.process_description': 'De la sélection des ingrédients à la présentation finale',
    'video.ingredients_title': 'Ingrédients Frais',
    'video.ingredients_description': 'Nous utilisons uniquement les meilleurs ingrédients locaux',
    'video.tradition_title': 'Tradition Culinaire',
    'video.tradition_description': 'Recettes ancestrales préservées et perfectionnées',
    
    // Payment Methods
    'payment.title': 'Modes de Paiement Acceptés',
    'payment.description': 'Plusieurs options de paiement sécurisées pour votre commodité',
    'payment.mobile_money': 'Mobile Money',
    'payment.orange_money': 'Orange Money',
    'payment.mtn_money': 'MTN Money',
    'payment.cash_delivery': 'Paiement à la Livraison',
    'payment.bank_transfer': 'Virement Bancaire',
    
    // General UI
    'ui.loading': 'Chargement...',
    'ui.error': 'Une erreur s\'est produite',
    'ui.retry': 'Réessayer',
    'ui.close': 'Fermer',
    'ui.continue': 'Continuer',
    'ui.back': 'Retour',
    'ui.next': 'Suivant',
    'ui.finish': 'Terminer',
    'ui.select': 'Sélectionner',
    'ui.selected': 'Sélectionné',
    'ui.available': 'Disponible',
    'ui.unavailable': 'Indisponible',
    'ui.in_stock': 'En stock',
    'ui.out_of_stock': 'Rupture de stock',
    
    // Our Story
    'story.title': 'Notre Histoire',
    'story.subtitle': 'Une aventure culinaire née de la passion pour les saveurs authentiques du Cameroun. Découvrez l\'histoire de BueaDelights et de sa fondatrice visionnaire.',
    'story.founder_quote': 'La cuisine camerounaise est un art qui se transmet de cœur à cœur. Chaque plat raconte une histoire, chaque épice porte nos traditions.',
    'story.founder_background': 'Passionnée de cuisine depuis l\'enfance à Buea, Caroline a appris les secrets culinaires auprès de sa grand-mère. Diplômée en gestion hôtelière, elle combine tradition ancestrale et standards modernes.',
    'story.location': 'Buea, Région du Sud-Ouest, Cameroun',
    'story.years_excellence': 'Années d\'Excellence',
    'story.loyal_customers': 'Clients Fidèles',
    'story.mission_title': 'Notre Mission',
    'story.mission_desc': 'Préserver et partager l\'authenticité de la cuisine camerounaise tout en s\'adaptant aux besoins modernes de livraison et de qualité.',
    'story.vision_title': 'Notre Vision',
    'story.vision_desc': 'Devenir la référence de la cuisine camerounaise authentique, connectant les cœurs et les palais à travers nos saveurs traditionnelles.',
    'story.values_title': 'Nos Valeurs',
    'story.values_subtitle': 'Les principes qui guident notre passion culinaire et notre engagement envers l\'excellence.',
    'story.authenticity': 'Authenticité',
    'story.authenticity_desc': 'Recettes traditionnelles transmises de génération en génération, respectant les méthodes ancestrales.',
    'story.premium_quality': 'Qualité Premium',
    'story.premium_quality_desc': 'Ingrédients soigneusement sélectionnés, préparation méticuleuse et standards d\'hygiène stricts.',
    'story.culinary_passion': 'Passion Culinaire',
    'story.culinary_passion_desc': 'Amour pour la cuisine camerounaise et engagement à offrir une expérience gustative memorable.',
    'story.community': 'Communauté',
    'story.community_desc': 'Créer des liens autour de la table, rassembler les familles et faire découvrir notre culture.',
    'story.journey_title': 'Notre Parcours',
    'story.journey_subtitle': 'Un voyage culinaire qui a débuté dans les cuisines traditionnelles pour devenir la référence de l\'authenticité camerounaise.',
    'story.first_flavors': 'Les Premières Saveurs',
    'story.first_flavors_desc': 'Caroline découvre sa passion pour la cuisine aux côtés de sa grand-mère Mama Folefack.',
    'story.culinary_training': 'Formation Culinaire',
    'story.culinary_training_desc': 'Perfectionnement des techniques et apprentissage des standards internationaux.',
    'story.birth_bueadelights': 'Naissance de BueaDelights',
    'story.birth_bueadelights_desc': 'Création officielle du restaurant avec les premières livraisons à Buea.',
    'story.recognized_leader': 'Leader Reconnu',
    'story.recognized_leader_desc': '1500+ clients satisfaits, référence de la cuisine camerounaise authentique.',
    
    // Video Showcase
    'video.products_title': 'Produits BueaDelights',
    'video.products_desc': 'Découvrez nos délicieux produits camerounais',
    'video.specialties_title': 'Nos Spécialités',
    'video.specialties_desc': 'Présentation de nos plats signature',
    'video.traditional_cuisine_title': 'Cuisine Traditionnelle',
    'video.traditional_cuisine_desc': 'Processus de préparation traditionnelle',
    'video.bread_making_title': 'Fabrication du Pain',
    'video.bread_making_desc': 'Processus de fabrication du pain maison',
    'video.donut_preparation_title': 'Préparation des Beignets',
    'video.donut_preparation_desc': 'Confection traditionnelle de beignets camerounais',
    'video.beignet_process_title': 'Processus Beignet',
    'video.beignet_process_desc': 'Préparation étape par étape des beignets',
    'video.marketing': 'Marketing',
    'video.process': 'Processus'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language from localStorage or detect browser language
  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguageState(savedLanguage);
    } else {
      // Default to English since Buea is anglophone region
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