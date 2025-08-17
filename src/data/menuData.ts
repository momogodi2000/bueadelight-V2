import type { MenuItem } from '@/types';

// Authentic Cameroonian Menu Data for BueaDelights
export const menuData: MenuItem[] = [
  // TRADITIONAL DISHES
  {
    id: 'ndole_001',
    name: 'Ndolé Authentique',
    category: 'traditional',
    description: 'Traditional Cameroonian dish with ndolé leaves, groundnuts, and mixed meat including fish, beef, and dried stockfish',
    ingredients: ['Feuilles de ndolé', 'Pâte d\'arachide', 'Poisson fumé', 'Bœuf', 'Crevettes', 'Stockfish', 'Huile de palme'],
    allergens: ['Arachides', 'Poissons', 'Crustacés'],
    prices: {
      small: { amount: 2000, label: 'Petite portion' },
      medium: { amount: 2500, label: 'Portion normale' },
      large: { amount: 3500, label: 'Grande portion' }
    },
    images: ['ndole_main.webp', 'ndole_ingredients.webp', 'ndole_process.webp'],
    spiciness: 2,
    preparationTime: '25-30 min',
    rating: 4.8,
    reviewCount: 234,
    availability: true,
    badge: 'house-special'
  },
  
  {
    id: 'eru_001',
    name: 'Eru aux Fruits de Mer',
    category: 'traditional',
    description: 'Wild spinach cooked with cocoyam paste, smoked fish, and seafood in traditional Cameroonian style',
    ingredients: ['Feuilles d\'eru', 'Coco râpé', 'Poisson fumé', 'Crevettes', 'Écrevisses', 'Huile de palme'],
    allergens: ['Poissons', 'Crustacés'],
    prices: {
      small: { amount: 2200, label: 'Petite portion' },
      medium: { amount: 2800, label: 'Portion normale' },
      large: { amount: 3800, label: 'Grande portion' }
    },
    images: ['eru_main.webp', 'eru_seafood.webp'],
    spiciness: 2,
    preparationTime: '30-35 min',
    rating: 4.7,
    reviewCount: 189,
    availability: true,
    badge: 'popular'
  },

  {
    id: 'achu_001',
    name: 'Achu avec Sauce Jaune',
    category: 'traditional',
    description: 'Traditional cocoyam fufu served with yellow soup made from palm nut extract and fresh vegetables',
    ingredients: ['Macabo pilé', 'Noix de palme', 'Feuilles de légumes', 'Poisson fumé', 'Viande de bœuf'],
    allergens: ['Poissons'],
    prices: {
      small: { amount: 1800, label: 'Petite portion' },
      medium: { amount: 2300, label: 'Portion normale' },
      large: { amount: 3200, label: 'Grande portion' }
    },
    images: ['achu_main.webp', 'achu_yellow_soup.webp'],
    spiciness: 3,
    preparationTime: '35-40 min',
    rating: 4.6,
    reviewCount: 156,
    availability: true
  },

  {
    id: 'koki_001',
    name: 'Koki de Haricots',
    category: 'traditional',
    description: 'Steamed black-eyed bean pudding wrapped in banana leaves, a healthy traditional dish',
    ingredients: ['Haricots niébé', 'Huile de palme', 'Feuilles de bananier', 'Piment', 'Sel'],
    allergens: [],
    prices: {
      small: { amount: 1200, label: 'Une pièce' },
      medium: { amount: 2000, label: 'Deux pièces' },
      large: { amount: 2800, label: 'Trois pièces' }
    },
    images: ['koki_main.webp', 'koki_banana_leaf.webp'],
    spiciness: 2,
    preparationTime: '45-50 min',
    rating: 4.5,
    reviewCount: 98,
    availability: true,
    badge: 'new'
  },

  // RICE DISHES
  {
    id: 'jollof_001',
    name: 'Jollof Rice Camerounais',
    category: 'rice',
    description: 'Spiced rice cooked in tomato sauce with vegetables and your choice of chicken, beef, or fish',
    ingredients: ['Riz', 'Tomates', 'Oignons', 'Poivrons', 'Épices', 'Bouillon', 'Légumes'],
    allergens: [],
    prices: {
      small: { amount: 1500, label: 'Sans viande' },
      medium: { amount: 2000, label: 'Avec poulet' },
      large: { amount: 2500, label: 'Avec bœuf' }
    },
    images: ['jollof_main.webp', 'jollof_chicken.webp'],
    spiciness: 3,
    preparationTime: '20-25 min',
    rating: 4.9,
    reviewCount: 445,
    availability: true,
    badge: 'popular'
  },

  {
    id: 'fried_rice_001',
    name: 'Riz Sauté aux Légumes',
    category: 'rice',
    description: 'Colorful fried rice with mixed vegetables, eggs, and your choice of protein',
    ingredients: ['Riz', 'Œufs', 'Carottes', 'Petits pois', 'Haricots verts', 'Oignons', 'Soja'],
    allergens: ['Œufs'],
    prices: {
      small: { amount: 1800, label: 'Aux légumes' },
      medium: { amount: 2300, label: 'Avec poulet' },
      large: { amount: 2800, label: 'Avec crevettes' }
    },
    images: ['fried_rice_main.webp', 'fried_rice_vegetables.webp'],
    spiciness: 2,
    preparationTime: '15-20 min',
    rating: 4.6,
    reviewCount: 267,
    availability: true
  },

  {
    id: 'coconut_rice_001',
    name: 'Riz au Coco',
    category: 'rice',
    description: 'Aromatic rice cooked in coconut milk with spices, served with plantains',
    ingredients: ['Riz', 'Lait de coco', 'Plantains', 'Épices', 'Oignons'],
    allergens: [],
    prices: {
      small: { amount: 1600, label: 'Nature' },
      medium: { amount: 2100, label: 'Avec plantains' },
      large: { amount: 2600, label: 'Avec poulet' }
    },
    images: ['coconut_rice_main.webp', 'coconut_rice_plantains.webp'],
    spiciness: 1,
    preparationTime: '25-30 min',
    rating: 4.4,
    reviewCount: 123,
    availability: true
  },

  // GRILLED SPECIALTIES
  {
    id: 'poisson_braise_001',
    name: 'Poisson Braisé Complet',
    category: 'grilled',
    description: 'Whole grilled tilapia marinated in local spices, served with spicy sauce and fried plantains',
    ingredients: ['Tilapia entier', 'Épices locales', 'Plantains', 'Sauce pimentée', 'Légumes'],
    allergens: ['Poissons'],
    prices: {
      small: { amount: 2800, label: 'Petit poisson' },
      medium: { amount: 3500, label: 'Poisson moyen' },
      large: { amount: 4500, label: 'Gros poisson' }
    },
    images: ['poisson_braise_main.webp', 'poisson_braise_sauce.webp'],
    spiciness: 4,
    preparationTime: '30-35 min',
    rating: 4.8,
    reviewCount: 312,
    availability: true,
    badge: 'house-special'
  },

  {
    id: 'poulet_dg_001',
    name: 'Poulet DG (Directeur Général)',
    category: 'grilled',
    description: 'Premium grilled chicken with fried plantains and vegetables, a prestigious Cameroonian dish',
    ingredients: ['Poulet', 'Plantains', 'Légumes variés', 'Épices premium', 'Sauce spéciale'],
    allergens: [],
    prices: {
      small: { amount: 2500, label: 'Quart de poulet' },
      medium: { amount: 3500, label: 'Demi-poulet' },
      large: { amount: 5000, label: 'Poulet entier' }
    },
    images: ['poulet_dg_main.webp', 'poulet_dg_plantains.webp'],
    spiciness: 3,
    preparationTime: '35-40 min',
    rating: 4.9,
    reviewCount: 398,
    availability: true,
    badge: 'popular'
  },

  {
    id: 'beef_suya_001',
    name: 'Suya de Bœuf',
    category: 'grilled',
    description: 'Spicy grilled beef skewers marinated in groundnut spice mix, served with onions and tomatoes',
    ingredients: ['Bœuf', 'Épices suya', 'Arachides moulues', 'Oignons', 'Tomates'],
    allergens: ['Arachides'],
    prices: {
      small: { amount: 1500, label: '3 brochettes' },
      medium: { amount: 2200, label: '5 brochettes' },
      large: { amount: 3000, label: '8 brochettes' }
    },
    images: ['suya_main.webp', 'suya_spices.webp'],
    spiciness: 5,
    preparationTime: '20-25 min',
    rating: 4.7,
    reviewCount: 189,
    availability: true,
    badge: 'spicy'
  },

  // SNACKS & APPETIZERS
  {
    id: 'puff_puff_001',
    name: 'Puff Puff Artisanal',
    category: 'snacks',
    description: 'Deep-fried sweet dough balls, crispy outside and fluffy inside, perfect with tea or coffee',
    ingredients: ['Farine', 'Sucre', 'Levure', 'Huile végétale', 'Épices douces'],
    allergens: ['Gluten'],
    prices: {
      small: { amount: 500, label: '5 pièces' },
      medium: { amount: 800, label: '10 pièces' },
      large: { amount: 1200, label: '15 pièces' }
    },
    images: ['puff_puff_main.webp', 'puff_puff_batch.webp'],
    spiciness: 0,
    preparationTime: '10-15 min',
    rating: 4.5,
    reviewCount: 567,
    availability: true,
    badge: 'popular'
  },

  {
    id: 'beignets_001',
    name: 'Beignets de Haricots',
    category: 'snacks',
    description: 'Traditional bean fritters, crispy and flavorful, served with spicy pepper sauce',
    ingredients: ['Haricots niébé', 'Oignons', 'Piment', 'Huile végétale', 'Épices'],
    allergens: [],
    prices: {
      small: { amount: 600, label: '4 pièces' },
      medium: { amount: 1000, label: '7 pièces' },
      large: { amount: 1400, label: '10 pièces' }
    },
    images: ['beignets_main.webp', 'beignets_sauce.webp'],
    spiciness: 3,
    preparationTime: '15-20 min',
    rating: 4.4,
    reviewCount: 234,
    availability: true
  },

  {
    id: 'chin_chin_001',
    name: 'Chin Chin Croustillant',
    category: 'snacks',
    description: 'Crunchy fried pastry cubes, lightly sweetened and perfect for snacking',
    ingredients: ['Farine', 'Sucre', 'Beurre', 'Œufs', 'Huile végétale'],
    allergens: ['Gluten', 'Œufs', 'Lait'],
    prices: {
      small: { amount: 400, label: 'Petit sachet' },
      medium: { amount: 700, label: 'Sachet moyen' },
      large: { amount: 1000, label: 'Grand sachet' }
    },
    images: ['chin_chin_main.webp', 'chin_chin_bowl.webp'],
    spiciness: 0,
    preparationTime: '5-10 min',
    rating: 4.3,
    reviewCount: 456,
    availability: true
  },

  // BEVERAGES
  {
    id: 'bissap_001',
    name: 'Jus de Bissap Naturel',
    category: 'drinks',
    description: 'Refreshing hibiscus flower drink, rich in vitamin C and antioxidants',
    ingredients: ['Fleurs de bissap', 'Gingembre', 'Menthe', 'Citron', 'Sucre naturel'],
    allergens: [],
    prices: {
      small: { amount: 300, label: 'Petit verre' },
      medium: { amount: 500, label: 'Verre moyen' },
      large: { amount: 700, label: 'Grand verre' }
    },
    images: ['bissap_main.webp', 'bissap_preparation.webp'],
    spiciness: 0,
    preparationTime: '5 min',
    rating: 4.6,
    reviewCount: 678,
    availability: true,
    badge: 'popular'
  },

  {
    id: 'ginger_beer_001',
    name: 'Ginger Beer Pimenté',
    category: 'drinks',
    description: 'Spicy ginger drink with natural fermentation, energizing and healthy',
    ingredients: ['Gingembre frais', 'Citron', 'Piment', 'Sucre de canne', 'Épices'],
    allergens: [],
    prices: {
      small: { amount: 400, label: 'Petit verre' },
      medium: { amount: 600, label: 'Verre moyen' },
      large: { amount: 800, label: 'Grand verre' }
    },
    images: ['ginger_beer_main.webp', 'ginger_fresh.webp'],
    spiciness: 2,
    preparationTime: '3-5 min',
    rating: 4.4,
    reviewCount: 289,
    availability: true
  },

  // BREAKFAST ITEMS
  {
    id: 'beans_plantain_001',
    name: 'Haricots aux Plantains',
    category: 'breakfast',
    description: 'Traditional breakfast of cooked beans served with fried ripe plantains',
    ingredients: ['Haricots rouges', 'Plantains mûrs', 'Huile de palme', 'Oignons', 'Épices'],
    allergens: [],
    prices: {
      small: { amount: 1200, label: 'Portion simple' },
      medium: { amount: 1600, label: 'Avec œuf' },
      large: { amount: 2000, label: 'Avec poisson' }
    },
    images: ['beans_plantain_main.webp', 'beans_plantain_egg.webp'],
    spiciness: 2,
    preparationTime: '15-20 min',
    rating: 4.5,
    reviewCount: 234,
    availability: true
  },

  {
    id: 'omelette_001',
    name: 'Omelette Camerounaise',
    category: 'breakfast',
    description: 'Fluffy omelet with tomatoes, onions, and local spices, served with bread',
    ingredients: ['Œufs', 'Tomates', 'Oignons', 'Piment vert', 'Épices', 'Pain'],
    allergens: ['Œufs', 'Gluten'],
    prices: {
      small: { amount: 800, label: '2 œufs' },
      medium: { amount: 1200, label: '3 œufs' },
      large: { amount: 1600, label: '4 œufs avec légumes' }
    },
    images: ['omelette_main.webp', 'omelette_bread.webp'],
    spiciness: 2,
    preparationTime: '10-15 min',
    rating: 4.3,
    reviewCount: 167,
    availability: true
  }
];

// Featured items for homepage
export const featuredItems = menuData.filter(item => 
  item.badge === 'house-special' || item.badge === 'popular'
).slice(0, 6);

// Get items by category
export const getItemsByCategory = (category: string) => 
  menuData.filter(item => item.category === category);

// Get item by ID
export const getItemById = (id: string) => 
  menuData.find(item => item.id === id);

// Search items
export const searchItems = (query: string) => 
  menuData.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(query.toLowerCase())
    )
  );

// Business Information
export const BUSINESS_INFO = {
  name: 'BueaDelights',
  slogan: 'Local Flavors at Your Fingertips',
  founder: 'Caroline Folefack Viviane',
  whatsappNumber: '+237 6 99 80 82 60',
  whatsappNumberFormatted: '237699808260',
  location: 'Buea, Southwest Region, Cameroon'
};

export default menuData;
