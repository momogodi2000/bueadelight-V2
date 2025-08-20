import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageCircle,
  Star,
  Heart,
  ChefHat,
  Truck
} from 'lucide-react';
import { BUSINESS_INFO, BUSINESS_STATS } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.menu'), href: '/menu' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.delivery'), href: '/delivery' },
    { name: t('nav.reviews'), href: '/reviews' },
    { name: t('nav.contact'), href: '/contact' }
  ];

  const menuCategories = [
    { name: t('category.traditional'), href: '/menu?category=traditional' },
    { name: t('category.rice'), href: '/menu?category=rice' },
    { name: t('category.grilled'), href: '/menu?category=grilled' },
    { name: t('category.snacks'), href: '/menu?category=snacks' },
    { name: t('category.drinks'), href: '/menu?category=drinks' },
    { name: t('category.breakfast'), href: '/menu?category=breakfast' }
  ];

  const legalLinks = [
    { name: t('footer.privacy_policy'), href: '/privacy' },
    { name: t('footer.terms_of_use'), href: '/terms' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('footer.customer_support'), href: '/support' }
  ];

  return (
    <footer className="bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900 text-white">
      
      {/* Newsletter Section */}
      <div className="border-b border-forest-600/30">
        <div className="section-container py-12">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4 text-golden-400">
                {t('newsletter.title')}
              </h3>
              <p className="text-forest-100 mb-6 text-lg">
                {t('newsletter.description')}
              </p>
              
              {/* Newsletter Form */}
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('newsletter.email_placeholder')}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-forest-500/30 text-white placeholder-forest-200 focus:outline-none focus:ring-2 focus:ring-golden-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-golden-500 text-forest-900 font-semibold rounded-lg hover:bg-golden-400 transition-colors duration-300"
                >
                  {t('newsletter.subscribe')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo and Brand */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img 
                    src="/logo/logo_caroline_bby.png" 
                    alt="BueaDelights Logo" 
                    className="h-12 w-12 object-contain"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-golden-400 rounded-full flex items-center justify-center">
                    <Star className="w-2 h-2 text-forest-900 fill-current" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-golden-400">BueaDelights</h3>
                  <p className="text-sm text-forest-200 -mt-1">Local Flavors at Your Fingertips</p>
                </div>
              </div>

              <p className="text-forest-100 mb-6 leading-relaxed">
                {t('footer.description')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-forest-600/30 rounded-lg">
                  <div className="text-xl font-bold text-golden-400">{BUSINESS_STATS.totalCustomers}+</div>
                  <div className="text-xs text-forest-200">{t('hero.customers_satisfied')}</div>
                </div>
                <div className="text-center p-3 bg-forest-600/30 rounded-lg">
                  <div className="text-xl font-bold text-golden-400">{BUSINESS_STATS.averageRating}</div>
                  <div className="text-xs text-forest-200">{t('hero.average_rating')} ⭐</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/bueadelights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-forest-600/50 hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
                  aria-label="Facebook BueaDelights"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/bueadelights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-forest-600/50 hover:bg-pink-600 text-white rounded-full transition-colors duration-300"
                  aria-label="Instagram BueaDelights"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-forest-600/50 hover:bg-green-600 text-white rounded-full transition-colors duration-300 animate-pulse"
                  aria-label="WhatsApp BueaDelights"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-golden-400 mb-6 flex items-center">
                <ChefHat className="w-5 h-5 mr-2" />
                {t('footer.navigation')}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-forest-100 hover:text-golden-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-forest-500 rounded-full mr-3 group-hover:bg-golden-400 transition-colors duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Menu Categories */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-golden-400 mb-6 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                {t('footer.specialties')}
              </h4>
              <ul className="space-y-3">
                {menuCategories.map((category) => (
                  <li key={category.name}>
                    <Link
                      to={category.href}
                      className="text-forest-100 hover:text-golden-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-forest-500 rounded-full mr-3 group-hover:bg-golden-400 transition-colors duration-300"></span>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-golden-400 mb-6 flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                {t('footer.contact_delivery')}
              </h4>
              
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${BUSINESS_INFO.whatsapp}`}
                  className="flex items-center text-forest-100 hover:text-golden-400 transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 mr-3 text-golden-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-semibold">+237 6 99 80 82 60</div>
                    <div className="text-sm text-forest-300">{t('footer.whatsapp_orders')}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center text-forest-100 hover:text-golden-400 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mr-3 text-golden-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-semibold">info@bueadelights.com</div>
                    <div className="text-sm text-forest-300">{t('footer.customer_support')}</div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-center text-forest-100">
                  <MapPin className="w-5 h-5 mr-3 text-golden-400" />
                  <div>
                    <div className="font-semibold">Buea, Southwest Region</div>
                    <div className="text-sm text-forest-300">Cameroon</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center text-forest-100">
                  <Clock className="w-5 h-5 mr-3 text-golden-400" />
                  <div>
                    <div className="font-semibold">Lun - Dim: 8h00 - 22h00</div>
                    <div className="text-sm text-forest-300">{t('footer.continuous_service')}</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Order Button */}
              <div className="mt-6">
                <a
                  href={`${BUSINESS_INFO.whatsappLink}?text=Bonjour BueaDelights! Je souhaite consulter votre menu et passer une commande.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-semibold animate-pulse"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('footer.order_now')}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-forest-600/30">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-forest-200 text-sm">
                {t('footer.copyright').replace('{year}', currentYear.toString())} {t('footer.created_with_love')}
              </p>
              <p className="text-forest-300 text-xs mt-1">
                {t('footer.founded_by')} {BUSINESS_INFO.founder} - {t('footer.authentic_since')}
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-forest-300 hover:text-golden-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Powered by Badge */}
      <div className="bg-forest-900 py-3">
        <div className="section-container">
          <p className="text-center text-forest-400 text-xs">
            {t('footer.built_by')} <span className="text-golden-500 font-semibold">ING MOMO GODI YVAN</span> • {t('footer.tech_stack')}
            <br />
            <span className="text-golden-500">{BUSINESS_INFO.slogan}</span> 🍽️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
