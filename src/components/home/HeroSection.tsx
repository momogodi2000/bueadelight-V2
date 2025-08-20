import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowRight, Star, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Utils and Constants
import { BUSINESS_INFO, BUSINESS_STATS } from '@/constants';
import { getWhatsAppContactURL } from '@/utils';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Hero Section Component
 * 
 * Features:
 * - Video background with cooking process
 * - Animated business statistics
 * - Call-to-action buttons
 * - Responsive design for mobile/desktop
 */
const HeroSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { t } = useLanguage();

  const handleVideoToggle = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleOrderNow = () => {
    const message = `Bonjour ${BUSINESS_INFO.name}! Je souhaite découvrir votre menu et passer une commande.`;
    window.open(getWhatsAppContactURL(message), '_blank');
  };

  const stats = [
    {
      icon: Users,
      value: BUSINESS_STATS.customersServed,
      label: t('hero.customers_satisfied'),
      suffix: '+'
    },
    {
      icon: Star,
      value: BUSINESS_STATS.averageRating,
      label: t('hero.average_rating'),
      suffix: '/5',
      decimal: true
    },
    {
      icon: Award,
      value: BUSINESS_STATS.yearsInBusiness,
      label: t('hero.years_excellence'),
      suffix: ` ${t('hero.years')}`
    },
    {
      icon: Clock,
      value: 30,
      label: t('hero.delivery_time'),
      suffix: ` ${t('hero.minutes')}`
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          id="hero-video"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/image/admin-carol.jpeg" // Fallback image
        >
          <source src="/videos/product.mp4" type="video/mp4" />
          <source src="/videos/product2.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/image/admin-carol.jpeg)' }}
          />
        </video>
        
        {/* Video Controls */}
        <motion.button
          onClick={handleVideoToggle}
          className="absolute bottom-8 right-8 bg-black bg-opacity-50 text-white p-3 rounded-full backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300 z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVideoLoaded ? 1 : 0 }}
          transition={{ delay: 1 }}
        >
          {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
        </motion.button>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />

      {/* Content Container */}
      <div className="relative z-20 section-container text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white">{BUSINESS_INFO.name}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-accent text-golden-300 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {BUSINESS_INFO.slogan}
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t('hero.discover_authentic')} <span className="text-golden-300 font-semibold">{BUSINESS_INFO.founder}</span> {t('hero.since_2020')}.
            </motion.p>
          </div>

          {/* Call-to-Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              onClick={handleOrderNow}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-menu font-semibold text-lg shadow-xl transition-all duration-300 flex items-center space-x-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('hero.order_whatsapp')}</span>
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </motion.button>
            
            <Link to="/menu">
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-forest-600 px-8 py-4 rounded-full font-menu font-semibold text-lg transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('hero.view_menu')}</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-3">
                  <stat.icon className="text-golden-300" size={24} />
                </div>
                <div>
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold text-white"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      delay: 1.6 + (index * 0.1) 
                    }}
                  >
                    {stat.decimal ? stat.value.toFixed(1) : stat.value.toLocaleString()}
                    <span className="text-golden-300">{stat.suffix}</span>
                  </motion.div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <p className="text-xs text-gray-300 mt-2 font-medium">{t('hero.scroll_down')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
