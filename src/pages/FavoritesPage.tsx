import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Clock, Flame } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { menuData } from '@/data/menuData';
import { CURRENCY } from '@/constants';

const FavoritesPage: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addItem } = useCart();
  const { t } = useLanguage();

  const favoriteItems = menuData.filter(item => favorites.includes(item.id));

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

  if (favoriteItems.length === 0) {
    return (
      <>
        <Helmet>
          <title>Mes Favoris - BueaDelights</title>
          <meta name="description" content="Vos plats favoris sauvegardés" />
        </Helmet>

        <div className="min-h-screen bg-gray-50 pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 text-gray-400">
                <Heart size={80} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Aucun favori pour le moment
              </h2>
              <p className="text-gray-600 mb-6">
                Découvrez notre menu et ajoutez vos plats préférés en cliquant sur le cœur
              </p>
              <motion.a
                href="/menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-forest-600 text-white px-6 py-3 rounded-lg hover:bg-forest-700 transition-colors"
              >
                <ShoppingCart size={20} />
                <span>Découvrir le menu</span>
              </motion.a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Mes Favoris ({favoriteItems.length}) - BueaDelights</title>
        <meta name="description" content="Vos plats camerounais favoris sauvegardés" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-4">Mes Favoris</h1>
              <p className="text-xl text-red-100">
                {favoriteItems.length} plat{favoriteItems.length > 1 ? 's' : ''} que vous adorez
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Favorites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
                      className="text-red-500 fill-current"
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{item.rating}</span>
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
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Prix à partir de:</span>
                      <span className="font-bold text-forest-600">
                        {Math.min(...Object.values(item.prices).map(p => p.amount))} {CURRENCY.symbol}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => addItem(item, 'medium', 1)}
                      className="flex-1 bg-forest-600 text-white py-2 px-4 rounded-lg hover:bg-forest-700 transition-colors text-sm font-medium"
                    >
                      Ajouter au panier
                    </button>
                    <a
                      href={`/menu#${item.id}`}
                      className="px-4 py-2 border border-forest-600 text-forest-600 rounded-lg hover:bg-forest-50 transition-colors text-sm font-medium"
                    >
                      Voir détails
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continue Shopping */}
          <div className="text-center mt-12">
            <motion.a
              href="/menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-forest-600 border border-forest-600 px-6 py-3 rounded-lg hover:bg-forest-50 transition-colors font-medium"
            >
              <ShoppingCart size={20} />
              <span>Continuer mes achats</span>
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;