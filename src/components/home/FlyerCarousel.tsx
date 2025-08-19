import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FlyerCarousel: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // All flyer images from the public folder
  const flyers = [
    {
      id: 1,
      image: '/flyer/ananas.jpeg',
      title: 'Jus d\'Ananas Frais',
      description: 'Délicieux jus d\'ananas naturel et rafraîchissant'
    },
    {
      id: 2,
      image: '/flyer/baoba.jpeg',
      title: 'Jus de Baobab',
      description: 'Superfruit africain riche en vitamines et antioxydants'
    },
    {
      id: 3,
      image: '/flyer/cassy.jpeg',
      title: 'Cassy Traditional',
      description: 'Feuilles de manioc authentiques cuisinées à la traditionnelle'
    },
    {
      id: 4,
      image: '/flyer/cocktail.jpeg',
      title: 'Cocktail de Fruits',
      description: 'Mélange tropical rafraîchissant avec fruits locaux'
    },
    {
      id: 5,
      image: '/flyer/flyser.jpeg',
      title: 'Spécialités BueaDelights',
      description: 'Découvrez nos plats signature préparés avec amour'
    },
    {
      id: 6,
      image: '/flyer/flyser2.jpeg',
      title: 'Menu Complet',
      description: 'Toute notre gamme de produits authentiques camerounais'
    }
  ];

  // Auto-play functionality with 30-second timer
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % flyers.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [isPlaying, flyers.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + flyers.length) % flyers.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % flyers.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-golden-50 to-cream-100">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('carousel.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('carousel.description')}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={flyers[currentSlide].image}
                  alt={flyers[currentSlide].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/image/placeholder.jpg';
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold mb-2"
                  >
                    {flyers[currentSlide].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg opacity-90"
                  >
                    {flyers[currentSlide].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-lg"
              aria-label="Image précédente"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-lg"
              aria-label="Image suivante"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-lg"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={20} className="text-gray-800" />
              ) : (
                <Play size={20} className="text-gray-800" />
              )}
            </button>

            {/* Timer Progress Bar */}
            {isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                <motion.div
                  key={currentSlide}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 30, ease: 'linear' }}
                  className="h-full bg-golden-400"
                />
              </div>
            )}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-6">
            {flyers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-golden-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-600 text-sm">
              {currentSlide + 1} / {flyers.length}
            </span>
            <div className="text-xs text-gray-500 mt-1">
              {isPlaying ? t('carousel.auto_play') : t('carousel.paused')}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>{t('carousel.view_menu')}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FlyerCarousel;