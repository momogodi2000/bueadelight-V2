import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, ShoppingCart, Clock, ChefHat, MapPin, ArrowRight, Flame } from 'lucide-react';
import { MenuItem } from '@/types';
import { menuData } from '@/data/menuData';
import { formatPrice, generateWhatsAppMessage } from '@/utils';
import { BUSINESS_INFO } from '@/constants';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';

/**
 * Featured Dishes Section Component
 * 
 * Features:
 * - Showcase most popular authentic Cameroonian dishes
 * - Interactive animations and hover effects
 * - Heart favorites functionality
 * - Direct WhatsApp ordering
 * - Responsive grid layout
 * - Category filtering
 * - Special badges (Popular, Spicy, etc.)
 */
const FeaturedDishes: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [featuredItems, setFeaturedItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  // Featured categories for filtering
  const categories = [
    { id: 'all', label: 'Tous', icon: '🍽️' },
    { id: 'traditional', label: 'Traditionnels', icon: '🏺' },
    { id: 'grilled', label: 'Grillades', icon: '🔥' },
    { id: 'rice', label: 'Riz', icon: '🍚' },
    { id: 'drinks', label: 'Boissons', icon: '🥤' }
  ];

  // Load featured items (top-rated and popular)
  useEffect(() => {
    const loadFeaturedItems = () => {
      setIsLoading(true);
      
      // Get top-rated items from each category
      const featured = menuData
        .filter(item => item.rating >= 4.5 && item.availability)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);
      
      setFeaturedItems(featured);
      setIsLoading(false);
    };

    loadFeaturedItems();
  }, []);

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all' 
    ? featuredItems 
    : featuredItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item, 'medium'); // Default to medium size
    
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'add_to_cart', {
        event_category: 'ecommerce',
        event_label: item.name,
        currency: 'XAF',
        value: item.prices.medium.amount
      });
    }
  };

  const handleWhatsAppOrder = (item: MenuItem) => {
    const message = `Bonjour BueaDelights! Je souhaite commander:

🍽️ **${item.name}**
💰 Prix: ${formatPrice(item.prices.medium.amount)}
⏰ Temps de préparation: ${item.preparationTime}

${item.description}

Pouvez-vous confirmer la disponibilité et me donner les détails de livraison? Merci!`;

    const whatsappURL = `https://wa.me/237699808260?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_order', {
        event_category: 'engagement',
        event_label: item.name,
        value: item.prices.medium.amount
      });
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    
    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'featured_category_filter', {
        event_category: 'navigation',
        event_label: categoryId
      });
    }
  };

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-cream-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-forest-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-golden-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-terracotta-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <ChefHat className="w-8 h-8 text-forest-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 font-heading">
              Nos Spécialités
            </h2>
            <ChefHat className="w-8 h-8 text-forest-600" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez l'authenticité de la cuisine camerounaise avec nos plats traditionnels 
            préparés selon les recettes ancestrales et les meilleurs ingrédients locaux.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mt-4 text-sm text-forest-600 font-medium"
          >
            <MapPin className="w-4 h-4" />
            <span>Authentique cuisine de Buea • Livraison dans tout le Sud-Ouest</span>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-forest-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-forest-50 hover:text-forest-600 shadow-md'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Featured Dishes Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
                  <div className="aspect-square bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-4 w-3/4"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Special Badges */}
                    <div className="absolute top-3 left-3 flex flex-col space-y-1">
                      {item.rating >= 4.8 && (
                        <span className="bg-golden-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Populaire</span>
                        </span>
                      )}
                      {item.spiciness && item.spiciness >= 3 && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <Flame className="w-3 h-3" />
                          <span>Épicé</span>
                        </span>
                      )}
                    </div>

                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 group/fav"
                    >
                      <Heart 
                        className={`w-4 h-4 transition-all duration-200 group-hover/fav:scale-110 ${
                          favorites.includes(item.id) 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-gray-600'
                        }`} 
                      />
                    </button>

                    {/* Quick Order Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="bg-white/90 backdrop-blur-sm text-forest-600 px-4 py-2 rounded-full font-medium flex items-center space-x-2 hover:bg-white transition-colors duration-200"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span>Ajouter</span>
                        </button>
                        <button
                          onClick={() => handleWhatsAppOrder(item)}
                          className="bg-green-500 text-white px-4 py-2 rounded-full font-medium flex items-center space-x-2 hover:bg-green-600 transition-colors duration-200"
                        >
                          <span>Commander</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-charcoal-800 group-hover:text-forest-600 transition-colors duration-200 font-menu text-lg leading-tight">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-golden-500 flex-shrink-0 ml-2">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold text-charcoal-700">{item.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-xl text-forest-600">
                        {formatPrice(item.prices.medium.amount)}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{item.preparationTime}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="flex-1 bg-forest-50 text-forest-600 py-2 px-3 rounded-lg font-medium hover:bg-forest-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Panier</span>
                      </button>
                      <button
                        onClick={() => handleWhatsAppOrder(item)}
                        className="flex-1 bg-forest-600 text-white py-2 px-3 rounded-lg font-medium hover:bg-forest-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>Commander</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/menu"
            className="inline-flex items-center space-x-2 bg-forest-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-forest-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span>Voir tout le menu</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedDishes;
