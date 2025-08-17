import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, ThumbsUp, Filter, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_INFO } from '@/constants';

const ReviewsPage: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 5 | 4 | 3 | 2 | 1>('all');

  const reviews = [
    {
      id: 1,
      name: 'Marie Kamga',
      avatar: '/avatars/avatar1.jpg',
      rating: 5,
      date: '2024-03-15',
      comment: 'Absolument délicieux ! Le ndolé était parfaitement préparé, exactement comme ma grand-mère le faisait. Livraison rapide et service impeccable. Je recommande vivement !',
      verified: true,
      helpfulCount: 12,
      dishOrdered: 'Ndolé Authentique'
    },
    {
      id: 2,
      name: 'Jean-Paul Fotso',
      avatar: '/avatars/avatar2.jpg',
      rating: 5,
      date: '2024-03-12',
      comment: 'BueaDelights est devenu mon restaurant préféré ! La qualité est constante, les portions généreuses et les prix très raisonnables. L\'équipe est toujours souriante.',
      verified: true,
      helpfulCount: 8,
      dishOrdered: 'Poulet DG'
    },
    {
      id: 3,
      name: 'Sarah Biya',
      avatar: '/avatars/avatar3.png',
      rating: 4,
      date: '2024-03-10',
      comment: 'Très bonne expérience ! Le poisson braisé était succulent. Seul petit bémol : le délai de livraison était un peu plus long que prévu, mais ça valait le coup d\'attendre.',
      verified: true,
      helpfulCount: 6,
      dishOrdered: 'Poisson Braisé Complet'
    },
    {
      id: 4,
      name: 'Divine Tchounke',
      avatar: '/avatars/girls.jpeg',
      rating: 5,
      date: '2024-03-08',
      comment: 'Je vis en France et quand ma famille commande chez BueaDelights pour moi quand je visite, c\'est toujours un régal ! Le goût authentique me rappelle la maison. Merci Caroline !',
      verified: true,
      helpfulCount: 15,
      dishOrdered: 'Eru aux Fruits de Mer'
    },
    {
      id: 5,
      name: 'Michel Nkomo',
      avatar: '/avatars/avatar1.jpg',
      rating: 5,
      date: '2024-03-05',
      comment: 'Service traiteur exceptionnel pour notre mariage ! 150 invités et tout le monde était ravi. Organisation parfaite, nourriture délicieuse. Caroline et son équipe sont des professionnels.',
      verified: true,
      helpfulCount: 20,
      dishOrdered: 'Service Traiteur'
    },
    {
      id: 6,
      name: 'Grace Mballa',
      avatar: '/avatars/avatar2.jpg',
      rating: 4,
      date: '2024-03-03',
      comment: 'Très satisfaite du service de préparation de repas hebdomadaires. Cela me fait gagner beaucoup de temps et les repas sont équilibrés et savoureux.',
      verified: true,
      helpfulCount: 9,
      dishOrdered: 'Plan Préparation 14 repas'
    },
    {
      id: 7,
      name: 'Paul Essomba',
      avatar: '/avatars/avatar3.png',
      rating: 5,
      date: '2024-03-01',
      comment: 'L\'application WhatsApp pour commander est géniale ! Très facile d\'utilisation. La livraison est toujours dans les temps et les livreurs sont courtois.',
      verified: true,
      helpfulCount: 7,
      dishOrdered: 'Jollof Rice Camerounais'
    },
    {
      id: 8,
      name: 'Celine Atangana',
      avatar: '/avatars/girls.jpeg',
      rating: 5,
      date: '2024-02-28',
      comment: 'BueaDelights a transformé ma façon de manger ! Leurs plats préparés sont nutritifs et me permettent de manger sainement malgré mon emploi du temps chargé.',
      verified: true,
      helpfulCount: 11,
      dishOrdered: 'Achu avec Sauce Jaune'
    }
  ];

  const filteredReviews = filter === 'all' ? reviews : reviews.filter(review => review.rating === filter);
  
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  const StarRating = ({ rating, size = 16 }: { rating: number; size?: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={`${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  const handleWriteReview = () => {
    const message = `🌟 *NOUVEAU AVIS CLIENT*\n\n` +
      `Bonjour BueaDelights,\n\n` +
      `Je souhaite laisser un avis sur votre service.\n\n` +
      `[Merci de partager votre expérience ici]\n\n` +
      `Note: ⭐⭐⭐⭐⭐ (1-5 étoiles)\n` +
      `Plat commandé: [Nom du plat]\n` +
      `Date de commande: [Date]\n\n` +
      `Merci !`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumberFormatted}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Avis Clients - Ce que pensent nos clients | BueaDelights</title>
        <meta name="description" content="Découvrez les avis de nos clients satisfaits. Note moyenne de 4.9/5 sur plus de 500 avis vérifiés." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-4">{t('reviews.title')}</h1>
              <p className="text-xl text-yellow-100">{t('reviews.subtitle')}</p>
              <div className="flex items-center justify-center space-x-2 mt-6">
                <StarRating rating={Math.round(averageRating)} size={24} />
                <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
                <span className="text-yellow-100">({reviews.length} avis)</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Rating Overview */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Répartition des notes</h3>
                
                <div className="space-y-3">
                  {ratingDistribution.map(({ rating, count, percentage }) => (
                    <div key={rating} className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 min-w-0">
                        <span className="text-sm text-gray-600">{rating}</span>
                        <Star size={14} className="text-yellow-400 fill-current" />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 min-w-0">{count}</span>
                    </div>
                  ))}
                </div>

                {/* Filter */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Filtrer par note</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setFilter('all')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                        filter === 'all' ? 'bg-forest-100 text-forest-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      Tous les avis
                    </button>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setFilter(rating as any)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center space-x-2 ${
                          filter === rating ? 'bg-forest-100 text-forest-700' : 'hover:bg-gray-100'
                        }`}
                      >
                        <span>{rating}</span>
                        <Star size={12} className="text-yellow-400 fill-current" />
                        <span>({ratingDistribution.find(r => r.rating === rating)?.count || 0})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Write Review Button */}
                <motion.button
                  onClick={handleWriteReview}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-forest-600 text-white py-3 rounded-lg font-semibold hover:bg-forest-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>{t('reviews.write_review')}</span>
                </motion.button>
              </div>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredReviews.length} avis
                  {filter !== 'all' && (
                    <span className="ml-2 text-base font-normal text-gray-600">
                      avec {filter} étoile{filter > 1 ? 's' : ''}
                    </span>
                  )}
                </h2>
              </div>

              <div className="space-y-6">
                {filteredReviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/avatars/avartar.jpeg';
                        }}
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                              <span>{review.name}</span>
                              {review.verified && (
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                  {t('reviews.verified')}
                                </span>
                              )}
                            </h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <StarRating rating={review.rating} />
                              <span className="text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString('fr-FR')}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-3">{review.comment}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            Plat commandé: <span className="font-medium">{review.dishOrdered}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 text-sm">
                              <ThumbsUp size={14} />
                              <span>Utile ({review.helpfulCount})</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;