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
    images: ['jus.jpeg', 'jus2.jpeg'],
    spiciness: 0,
    preparationTime: '5 min',
    rating: 4.6,
    reviewCount: 678,
    availability: true,
    badge: 'popular'
  },

  {
    id: 'kossam_001',
    name: 'Kossam (Yaourt Naturel)',
    category: 'drinks',
    description: 'Traditional Cameroonian fermented milk drink, creamy and nutritious',
    ingredients: ['Lait frais', 'Ferments lactiques', 'Sucre naturel', 'Vanille'],
    allergens: ['Lait'],
    prices: {
      small: { amount: 350, label: 'Petit pot' },
      medium: { amount: 550, label: 'Pot moyen' },
      large: { amount: 750, label: 'Grand pot' }
    },
    images: ['kossam.jpeg'],
    spiciness: 0,
    preparationTime: '2 min',
    rating: 4.7,
    reviewCount: 234,
    availability: true,
    badge: 'new'
  },

  {
    id: 'ananas_001',
    name: 'Jus d\'Ananas Frais',
    category: 'drinks',
    description: 'Fresh pineapple juice, naturally sweet and rich in vitamins',
    ingredients: ['Ananas frais', 'Gingembre', 'Menthe', 'Citron vert'],
    allergens: [],
    prices: {
      small: { amount: 400, label: 'Petit verre' },
      medium: { amount: 600, label: 'Verre moyen' },
      large: { amount: 800, label: 'Grand verre' }
    },
    images: ['jusnew.jpeg'],
    spiciness: 0,
    preparationTime: '3 min',
    rating: 4.5,
    reviewCount: 189,
    availability: true
  },

  {
    id: 'cocktail_001',
    name: 'Cocktail de Fruits',
    category: 'drinks',
    description: 'Mixed tropical fruit cocktail with papaya, mango, pineapple and passion fruit',
    ingredients: ['Papaye', 'Mangue', 'Ananas', 'Fruit de la passion', 'Citron', 'Miel'],
    allergens: [],
    prices: {
      small: { amount: 500, label: 'Petit verre' },
      medium: { amount: 750, label: 'Verre moyen' },
      large: { amount: 1000, label: 'Grand verre' }
    },
    images: ['cocktail.jpeg', 'cocktail2.jpeg'],
    spiciness: 0,
    preparationTime: '5 min',
    rating: 4.8,
    reviewCount: 345,
    availability: true,
    badge: 'popular'
  },

  {
    id: 'baoba_001',
    name: 'Jus de Baobab',
    category: 'drinks',
    description: 'Traditional African superfruit drink, rich in vitamin C and antioxidants',
    ingredients: ['Pulpe de baobab', 'Lait', 'Sucre', 'Vanille', 'Gingembre'],
    allergens: ['Lait'],
    prices: {
      small: { amount: 450, label: 'Petit verre' },
      medium: { amount: 650, label: 'Verre moyen' },
      large: { amount: 850, label: 'Grand verre' }
    },
    images: ['baoba.jpeg', 'baoba2.jpeg'],
    spiciness: 0,
    preparationTime: '4 min',
    rating: 4.3,
    reviewCount: 156,
    availability: true
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
    images: ['jus.jpeg'],
    spiciness: 2,
    preparationTime: '3-5 min',
    rating: 4.4,
    reviewCount: 289,
    availability: true
  },

  {
    id: 'folere_001',
    name: 'Folëré (Jus de Gingembre)',
    category: 'drinks',
    description: 'Traditional spicy ginger drink, perfect for digestion and energy',
    ingredients: ['Gingembre frais', 'Citron', 'Miel', 'Piment doux', 'Menthe'],
    allergens: [],
    prices: {
      small: { amount: 350, label: 'Petit verre' },
      medium: { amount: 550, label: 'Verre moyen' },
      large: { amount: 750, label: 'Grand verre' }
    },
    images: ['folere.jpeg'],
    spiciness: 3,
    preparationTime: '4 min',
    rating: 4.6,
    reviewCount: 198,
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
    images: ['painavant.jpeg'],
    spiciness: 2,
    preparationTime: '10-15 min',
    rating: 4.3,
    reviewCount: 167,
    availability: true
  },

  {
    id: 'pain_001',
    name: 'Pain Maison',
    category: 'breakfast',
    description: 'Freshly baked traditional Cameroonian bread, soft and aromatic',
    ingredients: ['Farine', 'Levure', 'Lait', 'Beurre', 'Sucre', 'Sel'],
    allergens: ['Gluten', 'Lait'],
    prices: {
      small: { amount: 200, label: '1 pain' },
      medium: { amount: 350, label: '2 pains' },
      large: { amount: 500, label: '3 pains' }
    },
    images: ['pain3.jpeg'],
    spiciness: 0,
    preparationTime: '5 min',
    rating: 4.6,
    reviewCount: 234,
    availability: true
  },

  {
    id: 'cake_001',
    name: 'Cake Maison',
    category: 'breakfast',
    description: 'Homemade sponge cake, perfect for breakfast or afternoon tea',
    ingredients: ['Farine', 'Œufs', 'Sucre', 'Beurre', 'Vanille', 'Levure'],
    allergens: ['Gluten', 'Œufs', 'Lait'],
    prices: {
      small: { amount: 500, label: 'Petite tranche' },
      medium: { amount: 800, label: 'Tranche normale' },
      large: { amount: 1200, label: 'Grande tranche' }
    },
    images: ['cake.jpeg', 'cake2.jpeg', 'cake maison.jpeg'],
    spiciness: 0,
    preparationTime: '3 min',
    rating: 4.4,
    reviewCount: 189,
    availability: true
  },

  {
    id: 'croquette_001',
    name: 'Croquettes de Plantain',
    category: 'breakfast',
    description: 'Crispy plantain fritters, perfect breakfast treat',
    ingredients: ['Plantains mûrs', 'Farine', 'Œufs', 'Épices', 'Huile'],
    allergens: ['Gluten', 'Œufs'],
    prices: {
      small: { amount: 400, label: '3 pièces' },
      medium: { amount: 700, label: '5 pièces' },
      large: { amount: 1000, label: '8 pièces' }
    },
    images: ['croquette.jpeg'],
    spiciness: 1,
    preparationTime: '8 min',
    rating: 4.5,
    reviewCount: 145,
    availability: true
  },

  {
    id: 'bouillie_001',
    name: 'Bouillie de Mil',
    category: 'breakfast',
    description: 'Traditional millet porridge, nutritious and energizing breakfast',
    ingredients: ['Farine de mil', 'Lait', 'Sucre', 'Vanille', 'Cannelle'],
    allergens: ['Lait'],
    prices: {
      small: { amount: 300, label: 'Petit bol' },
      medium: { amount: 500, label: 'Bol moyen' },
      large: { amount: 700, label: 'Grand bol' }
    },
    images: ['mague.jpeg'],
    spiciness: 0,
    preparationTime: '6 min',
    rating: 4.2,
    reviewCount: 98,
    availability: true
  },

  // MORE TRADITIONAL DISHES
  {
    id: 'fufu_001',
    name: 'Fufu de Macabo',
    category: 'traditional',
    description: 'Traditional pounded cocoyam served with rich soup',
    ingredients: ['Macabo', 'Eau', 'Sel', 'Sauce aux légumes'],
    allergens: [],
    prices: {
      small: { amount: 1500, label: 'Petite portion' },
      medium: { amount: 2000, label: 'Portion normale' },
      large: { amount: 2800, label: 'Grande portion' }
    },
    images: ['fufu.jpeg'],
    spiciness: 2,
    preparationTime: '25 min',
    rating: 4.4,
    reviewCount: 156,
    availability: true
  },

  {
    id: 'mague_001',
    name: 'Sauce Mangue Verte',
    category: 'traditional',
    description: 'Traditional green mango sauce with fish and vegetables',
    ingredients: ['Mangue verte', 'Poisson fumé', 'Légumes', 'Huile de palme', 'Épices'],
    allergens: ['Poissons'],
    prices: {
      small: { amount: 1800, label: 'Petite portion' },
      medium: { amount: 2300, label: 'Portion normale' },
      large: { amount: 3000, label: 'Grande portion' }
    },
    images: ['mague.jpeg'],
    spiciness: 3,
    preparationTime: '30 min',
    rating: 4.3,
    reviewCount: 134,
    availability: true
  },

  {
    id: 'plantain_chips_001',
    name: 'Chips de Plantain',
    category: 'traditional',
    description: 'Crispy plantain chips, traditional Cameroonian snack',
    ingredients: ['Plantains verts', 'Huile végétale', 'Sel', 'Épices'],
    allergens: [],
    prices: {
      small: { amount: 300, label: 'Petit sachet' },
      medium: { amount: 500, label: 'Sachet moyen' },
      large: { amount: 800, label: 'Grand sachet' }
    },
    images: ['Chips de plantain.jpeg'],
    spiciness: 1,
    preparationTime: '15 min',
    rating: 4.7,
    reviewCount: 298,
    availability: true,
    badge: 'popular'
  },

  {
    id: 'caro_special_001',
    name: 'Spécialité Caro',
    category: 'traditional',
    description: 'Caroline\'s special recipe with mixed vegetables and meat',
    ingredients: ['Légumes mélangés', 'Viande de bœuf', 'Épices secrètes', 'Huile de palme'],
    allergens: [],
    prices: {
      small: { amount: 2200, label: 'Petite portion' },
      medium: { amount: 2800, label: 'Portion normale' },
      large: { amount: 3500, label: 'Grande portion' }
    },
    images: ['caro.jpeg', 'caro2.jpeg', 'caro3.jpeg'],
    spiciness: 3,
    preparationTime: '35 min',
    rating: 4.9,
    reviewCount: 445,
    availability: true,
    badge: 'house-special'
  },

  {
    id: 'cassy_001',
    name: 'Cassy (Feuilles de Manioc)',
    category: 'traditional',
    description: 'Traditional cassava leaves cooked with groundnuts and meat',
    ingredients: ['Feuilles de manioc', 'Pâte d\'arachide', 'Viande', 'Poisson fumé', 'Épices'],
    allergens: ['Arachides', 'Poissons'],
    prices: {
      small: { amount: 1900, label: 'Petite portion' },
      medium: { amount: 2400, label: 'Portion normale' },
      large: { amount: 3200, label: 'Grande portion' }
    },
    images: ['cassy.jpeg'],
    spiciness: 2,
    preparationTime: '40 min',
    rating: 4.5,
    reviewCount: 187,
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
