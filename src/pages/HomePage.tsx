import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Components
import HeroSection from '@/components/home/HeroSection';
import FeaturedDishes from '@/components/sections/FeaturedDishes';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import BusinessStats from '@/components/sections/BusinessStats';
import OurStory from '@/components/home/OurStory';
import FlyerCarousel from '@/components/home/FlyerCarousel';
// import DeliveryZones from '@/components/home/DeliveryZones';
// import Testimonials from '@/components/home/Testimonials';
// import Newsletter from '@/components/home/Newsletter';

// Constants
import { BUSINESS_INFO, SEO_CONFIG } from '@/constants';

// Hooks
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * BueaDelights Homepage Component
 * 
 * Premium landing page featuring:
 * - Hero video with Cameroonian cooking
 * - Featured dishes carousel
 * - Business statistics animation
 * - Company story and values
 * - Customer testimonials
 * - Newsletter signup
 */
const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>BueaDelights - Cuisine Camerounaise Authentique | Livraison Buea</title>
        <meta 
          name="description" 
          content="Découvrez les saveurs authentiques du Cameroun avec BueaDelights. Ndolé, Eru, Jollof Rice et plus. Commandez via WhatsApp. Fondé par Caroline Folefack Viviane en 2020." 
        />
        <meta 
          name="keywords" 
          content="cuisine camerounaise, livraison Buea, Ndolé, Eru, restaurant cameroun, Caroline Folefack, WhatsApp commande, plats traditionnels" 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="BueaDelights - Cuisine Camerounaise Authentique" />
        <meta property="og:description" content="Local Flavors at Your Fingertips - Découvrez les saveurs authentiques du Cameroun" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO_CONFIG.siteUrl} />
        <meta property="og:image" content={`${SEO_CONFIG.siteUrl}/og-home.jpg`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BueaDelights - Cuisine Camerounaise Authentique" />
        <meta name="twitter:description" content="Local Flavors at Your Fingertips" />
        <meta name="twitter:image" content={`${SEO_CONFIG.siteUrl}/og-home.jpg`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": BUSINESS_INFO.name,
            "description": "Authentic Cameroonian cuisine delivery service in Buea",
            "url": SEO_CONFIG.siteUrl,
            "telephone": BUSINESS_INFO.whatsappNumber,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Buea",
              "addressRegion": "Southwest Region",
              "addressCountry": "CM"
            },
            "servesCuisine": "Cameroonian",
            "founder": {
              "@type": "Person",
              "name": BUSINESS_INFO.founder
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1500"
            },
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      {/* Page Content with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {/* Hero Section - Full Screen Video Background */}
        <HeroSection />
        
        {/* Featured Dishes Section */}
        <section className="py-16 bg-cream-50">
          <FeaturedDishes />
        </section>
        
        {/* Flyer Carousel Section */}
        <FlyerCarousel />
        
        {/* Business Statistics */}
        <section className="py-16 bg-forest-500 text-white">
          <BusinessStats />
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <WhyChooseUs />
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-gradient-to-br from-cream-50 to-golden-50">
          <OurStory />
        </section>
        
        {/* Delivery Information */}
        <section className="py-16 bg-white">
          <div className="section-container text-center">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              {t('delivery.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('delivery.description')}
            </p>
            <motion.a
              href="/delivery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              {t('delivery.view_zones')}
            </motion.a>
          </div>
        </section>
        
        {/* Customer Testimonials - Redirect to Reviews Page */}
        <section className="py-16 bg-cream-50">
          <div className="section-container text-center">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              {t('reviews.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('reviews.subtitle')}
            </p>
            <motion.a
              href="/reviews"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              {t('reviews.view_all')}
            </motion.a>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default HomePage;
