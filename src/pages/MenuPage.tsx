import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, Flame, Heart, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

import { menuData, getItemsByCategory } from '@/data/menuData';
import { MENU_CATEGORIES, CURRENCY } from '@/constants';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useLanguage } from '@/contexts/LanguageContext';
import type { MenuItem, MenuCategory } from '@/types';

const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popular'>('popular');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  
  const { addItem, getItemQuantity, updateQuantity } = useCart();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { t } = useLanguage();

  // Filter and sort menu items
  const filteredItems = useMemo(() => {
    let items = selectedCategory === 'all' ? menuData : getItemsByCategory(selectedCategory);
    
    // Apply search filter
    if (searchQuery) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'name':
        items = [...items].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        items = [...items].sort((a, b) => a.prices.small.amount - b.prices.small.amount);
        break;
      case 'rating':
        items = [...items].sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        items = [...items].sort((a, b) => {
          const aPopular = a.badge === 'popular' || a.badge === 'house-special' ? 1 : 0;
          const bPopular = b.badge === 'popular' || b.badge === 'house-special' ? 1 : 0;
          return bPopular - aPopular || b.reviewCount - a.reviewCount;
        });
        break;
    }
    
    return items;
  }, [selectedCategory, searchQuery, sortBy]);

  const categories = Object.entries(MENU_CATEGORIES);

  const SpiceLevel = ({ level }: { level: number }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Flame
          key={i}
          size={12}
          className={`${
            i < level ? 'text-red-500 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  const MenuItemCard = ({ item }: { item: MenuItem }) => {
    const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');
    const quantity = getItemQuantity(item.id, selectedSize);
    const isExpanded = selectedItemId === item.id;

    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        {/* Image */}
        <div className="relative">
          <img
            src={`/image/${item.images[0]}`}
            alt={item.name}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.currentTarget.src = '/image/placeholder.jpg';
            }}
          />
          
          {/* Badge */}
          {item.badge && (
            <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold text-white ${
              item.badge === 'popular' ? 'bg-orange-500' :
              item.badge === 'new' ? 'bg-green-500' :
              item.badge === 'spicy' ? 'bg-red-500' :
              'bg-purple-500'
            }`}>
              {item.badge === 'popular' ? 'Populaire' :
               item.badge === 'new' ? 'Nouveau' :
               item.badge === 'spicy' ? 'Épicé' :
               'Spécialité'}
            </div>
          )}
          
          {/* Favorite Button */}
          <button
            onClick={() => toggleFavorite(item.id)}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <Heart
              size={20}
              className={`${
                isFavorite(item.id) ? 'text-red-500 fill-current' : 'text-gray-600'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
            <div className="flex items-center space-x-1">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{item.rating}</span>
              <span className="text-xs text-gray-500">({item.reviewCount})</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

          {/* Metadata */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock size={14} className="text-gray-400" />
                <span className="text-xs text-gray-500">{item.preparationTime}</span>
              </div>
              <SpiceLevel level={item.spiciness} />
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-forest-600">
                {item.prices[selectedSize].amount} {CURRENCY.symbol}
              </span>
              <div className="text-xs text-gray-500">{item.prices[selectedSize].label}</div>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <div className="grid grid-cols-3 gap-2">
              {(['small', 'medium', 'large'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? 'bg-forest-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div>{item.prices[size].label}</div>
                  <div className="text-xs">
                    {item.prices[size].amount} {CURRENCY.symbol}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Cart Controls */}
          <div className="flex items-center justify-between">
            {quantity > 0 ? (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateQuantity(item.id, selectedSize, quantity - 1)}
                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, selectedSize, quantity + 1)}
                  className="p-1 rounded-full bg-forest-600 text-white hover:bg-forest-700 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addItem(item, selectedSize, 1)}
                className="flex items-center space-x-2 bg-forest-600 text-white px-4 py-2 rounded-lg hover:bg-forest-700 transition-colors"
              >
                <ShoppingCart size={16} />
                <span>{t('common.add_to_cart')}</span>
              </button>
            )}
            
            <button
              onClick={() => setSelectedItemId(isExpanded ? null : item.id)}
              className="text-forest-600 text-sm font-medium hover:text-forest-700"
            >
              {isExpanded ? 'Moins' : 'Plus'}
            </button>
          </div>

          {/* Expanded Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 pt-4 border-t border-gray-200"
              >
                <h4 className="font-semibold mb-2">Ingrédients:</h4>
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
                
                {item.allergens.length > 0 && (
                  <>
                    <h4 className="font-semibold mb-2">Allergènes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.allergens.map((allergen, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs"
                        >
                          {allergen}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Menu - Cuisine Camerounaise Authentique | BueaDelights</title>
        <meta 
          name="description" 
          content="Découvrez notre menu de plats camerounais authentiques. Ndolé, Eru, Jollof Rice et plus encore. Livraison à Buea." 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {t('menu.title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('menu.description')}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            {/* Search */}
            <div className="relative mb-6">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t('menu.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">{t('menu.categories')}</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-forest-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t('common.all')}
                </button>
                {categories.map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key as MenuCategory)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === key
                        ? 'bg-forest-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Filter size={20} className="text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                >
                  <option value="popular">Populaires</option>
                  <option value="name">Nom A-Z</option>
                  <option value="price">Prix croissant</option>
                  <option value="rating">Mieux notés</option>
                </select>
              </div>
              <div className="text-sm text-gray-600">
                {filteredItems.length} plat{filteredItems.length > 1 ? 's' : ''} trouvé{filteredItems.length > 1 ? 's' : ''}
              </div>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-4 text-gray-400">
                <Search size={80} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun plat trouvé
              </h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuPage;