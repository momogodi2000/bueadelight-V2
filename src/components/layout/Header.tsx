import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ShoppingCart, 
  Heart,
  Search,
  Sun,
  Moon,
  Palette,
  Globe,
  ChevronDown
} from 'lucide-react';

import { BUSINESS_INFO } from '@/constants';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useTheme, type Theme, themes } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const location = useLocation();
  
  const { itemCount } = useCart();
  const { favorites } = useFavorites();
  const { theme, setTheme, toggleTheme, isDark } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  // Navigation items with translations
  const navigationItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.menu'), href: '/menu' },
    { name: t('nav.about'), href: '/about' },
    { name: t('services.title'), href: '/services' },
    { name: t('nav.delivery'), href: '/delivery' },
    { name: t('nav.reviews'), href: '/reviews' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsThemeMenuOpen(false);
  }, [location.pathname]);

  // Handle search
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/menu?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const isActivePage = (href: string) => location.pathname === href;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg border-b border-gray-100' 
            : 'bg-white/95 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
            >
              <img
                src="/logo/logo_caroline_bby.png"
                alt="BueaDelights"
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.src = '/logo/logo.png';
                }}
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-forest-600">{BUSINESS_INFO.name}</h1>
                <p className="text-xs text-gray-600">{BUSINESS_INFO.slogan}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                    isActivePage(item.href)
                      ? 'bg-forest-100 text-forest-700'
                      : 'text-gray-700 hover:text-forest-600 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <div className="hidden md:block">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    placeholder={t('common.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-40 lg:w-48 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent text-sm"
                  />
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </form>
              </div>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Change Language / Changer de langue"
              >
                <div className="flex items-center space-x-1">
                  <Globe size={16} />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </div>
              </button>

              {/* Theme Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-1"
                  title="Change Theme / Changer le thème"
                >
                  <Palette size={16} />
                  <ChevronDown size={12} className={`transition-transform ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isThemeMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      {Object.entries(themes).map(([key, themeConfig]) => (
                        <button
                          key={key}
                          onClick={() => {
                            setTheme(key as Theme);
                            setIsThemeMenuOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-3 ${
                            theme === key ? 'bg-gray-100 text-forest-600' : 'text-gray-700'
                          }`}
                        >
                          <div 
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: themeConfig.primary }}
                          />
                          <span className="text-sm">{themeConfig.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Favorites */}
              <Link
                to="/favorites"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              >
                <Heart size={18} className={`${favorites.length > 0 ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              >
                <ShoppingCart size={18} className="text-gray-600" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-forest-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {/* Mobile Search */}
                <form onSubmit={handleSearchSubmit} className="relative mb-4">
                  <input
                    type="text"
                    placeholder={t('common.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  />
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </form>

                {/* Mobile Navigation Links */}
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                      isActivePage(item.href)
                        ? 'bg-forest-100 text-forest-700'
                        : 'text-gray-700 hover:text-forest-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Controls */}
                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Globe size={16} />
                    <span className="text-sm">{language === 'en' ? 'English' : 'Français'}</span>
                  </button>

                  <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    <span className="text-sm">{isDark ? 'Light' : 'Dark'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
            className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;