import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'

// Layout Components
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/whatsapp/WhatsAppFloat'
import ScrollToTop from '@/components/common/ScrollToTop'

// Pages
import HomePage from '@/pages/HomePage'
import MenuPage from '@/pages/MenuPage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import DeliveryPage from '@/pages/DeliveryPage'
import ContactPage from '@/pages/ContactPage'
import ReviewsPage from '@/pages/ReviewsPage'
import FAQPage from '@/pages/FAQPage'
import CartPage from '@/pages/CartPage'
import FavoritesPage from '@/pages/FavoritesPage'

// Contexts
import { CartProvider } from '@/contexts/CartContext'
import { FavoritesProvider } from '@/contexts/FavoritesContext'
import { AnalyticsProvider } from '@/contexts/AnalyticsContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'

// Constants
import { SEO_CONFIG } from '@/constants'

// Error Boundary Component
import ErrorBoundary from '@/components/common/ErrorBoundary'

/**
 * Main BueaDelights Application Component
 * 
 * Features:
 * - React Router for SPA navigation
 * - Context providers for global state
 * - SEO optimization with React Helmet
 * - Error boundary for graceful error handling
 * - Framer Motion for page transitions
 * - WhatsApp integration
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <AnalyticsProvider>
            <CartProvider>
              <FavoritesProvider>
            <div className="min-h-screen bg-white text-charcoal-700 font-body">
              {/* Global SEO Meta Tags */}
              <Helmet>
                <title>{SEO_CONFIG.defaultTitle || 'BueaDelights'}</title>
                <meta name="description" content={SEO_CONFIG.defaultDescription || 'Authentic Cameroonian cuisine delivery service'} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#1B5E20" />
                <link rel="canonical" href={SEO_CONFIG.siteUrl || 'https://bueadelights.com'} />
                
                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={SEO_CONFIG.defaultTitle || 'BueaDelights'} />
                <meta property="og:description" content={SEO_CONFIG.defaultDescription || 'Authentic Cameroonian cuisine delivery service'} />
                <meta property="og:image" content={`${SEO_CONFIG.siteUrl || 'https://bueadelights.com'}${SEO_CONFIG.defaultImage || '/og-image.jpg'}`} />
                <meta property="og:url" content={SEO_CONFIG.siteUrl || 'https://bueadelights.com'} />
                <meta property="og:site_name" content="BueaDelights" />
                
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SEO_CONFIG.twitterHandle || '@bueadelights'} />
                <meta name="twitter:title" content={SEO_CONFIG.defaultTitle || 'BueaDelights'} />
                <meta name="twitter:description" content={SEO_CONFIG.defaultDescription || 'Authentic Cameroonian cuisine delivery service'} />
                <meta name="twitter:image" content={`${SEO_CONFIG.siteUrl || 'https://bueadelights.com'}${SEO_CONFIG.defaultImage || '/og-image.jpg'}`} />
                
                {/* Additional Meta Tags */}
                <meta name="author" content="Caroline Folefack Viviane - BueaDelights" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                
                {/* Structured Data - Organization */}
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Restaurant",
                    "name": "BueaDelights",
                    "description": "Authentic Cameroonian cuisine delivery service in Buea",
                    "url": SEO_CONFIG.siteUrl || "https://bueadelights.com",
                    "telephone": "+237699808260",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Buea",
                      "addressRegion": "Southwest Region",
                      "addressCountry": "CM"
                    },
                    "servesCuisine": "Cameroonian",
                    "priceRange": "$$",
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "1500"
                    }
                  })}
                </script>
              </Helmet>

              {/* Application Layout */}
              <Header />
              
              {/* Main Content with Route Animations */}
              <main className="min-h-screen">
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route 
                      path="/" 
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <HomePage />
                        </motion.div>
                      } 
                    />
                    
                    <Route 
                      path="/menu" 
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <MenuPage />
                        </motion.div>
                      } 
                    />
                    
                    <Route 
                      path="/about" 
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AboutPage />
                        </motion.div>
                      } 
                    />
                    
                    <Route 
                      path="/services" 
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ServicesPage />
                        </motion.div>
                      } 
                    />
                    
                    <Route 
                      path="/delivery" 
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <DeliveryPage />
                        </motion.div>
                      } 
                    />
                    
                    <Route 
                      path="/contact" 
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ContactPage />
                        </motion.div>
                      } 
                    />
                    
                    <Route 
                      path="/reviews" 
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ReviewsPage />
                        </motion.div>
                      } 
                    />
                    
                    <Route 
                      path="/faq" 
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FAQPage />
                        </motion.div>
                      } 
                    />
                    
                    <Route 
                      path="/cart" 
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CartPage />
                        </motion.div>
                      } 
                    />
                    
                    <Route 
                      path="/favorites" 
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FavoritesPage />
                        </motion.div>
                      } 
                    />
                    
                    {/* 404 Page */}
                    <Route 
                      path="*" 
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="min-h-screen flex items-center justify-center"
                        >
                          <div className="text-center space-y-4">
                            <h1 className="text-6xl font-display text-forest-500">404</h1>
                            <h2 className="text-2xl font-menu">Page non trouvée</h2>
                            <p className="text-gray-600">Cette page n'existe pas ou a été déplacée.</p>
                            <motion.a
                              href="/"
                              className="btn-primary inline-block mt-4"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Retour à l'accueil
                            </motion.a>
                          </div>
                        </motion.div>
                      } 
                    />
                  </Routes>
                </AnimatePresence>
              </main>
              
              {/* Footer */}
              <Footer />
              
              {/* Floating WhatsApp Button */}
              <WhatsAppFloat />
              
              {/* Scroll to Top Helper */}
              <ScrollToTop />
            </div>
              </FavoritesProvider>
            </CartProvider>
          </AnalyticsProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
