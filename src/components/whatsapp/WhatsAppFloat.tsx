import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const WHATSAPP_NUMBER = '+237699808260';
const WHATSAPP_LINK = `https://wa.me/237699808260`;

interface QuickAction {
  id: string;
  label: string;
  message: string;
  icon: React.ComponentType<any>;
  color: string;
}

const WhatsAppFloat: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { items, itemCount } = useCart();

  // Quick action messages
  const quickActions: QuickAction[] = [
    {
      id: 'menu',
      label: 'Voir le Menu',
      message: 'Bonjour BueaDelights! Je souhaite consulter votre menu complet et découvrir vos spécialités camerounaises. 🍽️',
      icon: MessageCircle,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 'cart',
      label: `Panier ${itemCount > 0 ? `(${itemCount})` : ''}`,
      message: itemCount > 0 
        ? `Bonjour BueaDelights! J'ai ${itemCount} article(s) dans mon panier:\n\n${items.map((item, index) => `${index + 1}. ${item.name} (${item.size}) x${item.quantity}`).join('\n')}\n\nJe souhaite finaliser ma commande. Pouvez-vous me confirmer la disponibilité et le temps de livraison? 🛒`
        : 'Bonjour! Je souhaite passer une commande. Pouvez-vous m\'aider à choisir parmi vos plats traditionnels camerounais? 🛒',
      icon: ShoppingCart,
      color: 'bg-forest-500 hover:bg-forest-600'
    },
    {
      id: 'recommendation',
      label: 'Recommandation',
      message: 'Bonjour! Je découvre la cuisine camerounaise. Pouvez-vous me recommander vos meilleurs plats traditionnels comme le Ndolé ou l\'Eru? Je suis ouvert aux suggestions! 👨‍🍳',
      icon: Heart,
      color: 'bg-terracotta-500 hover:bg-terracotta-600'
    },
    {
      id: 'delivery',
      label: 'Info Livraison',
      message: 'Bonjour! J\'aimerais connaître les zones de livraison disponibles à Buea et les délais pour ma région. Livrez-vous dans mon quartier? 🚛',
      icon: Phone,
      color: 'bg-golden-500 hover:bg-golden-600'
    }
  ];

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsExpanded(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Auto-collapse after 5 seconds when expanded
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isExpanded) {
      timeout = setTimeout(() => {
        setIsExpanded(false);
      }, 8000);
    }
    return () => clearTimeout(timeout);
  }, [isExpanded]);

  const handleQuickAction = (action: QuickAction) => {
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_quick_action', {
        action_type: action.id,
        action_label: action.label
      });
    }

    // Open WhatsApp with pre-filled message
    const encodedMessage = encodeURIComponent(action.message);
    window.open(`${WHATSAPP_LINK}?text=${encodedMessage}`, '_blank');
    
    setIsExpanded(false);
  };

  const handleMainButtonClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      // Track main button click
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'whatsapp_main_click', {
          event_category: 'engagement',
          event_label: 'whatsapp_float_button'
        });
      }

      // If cart has items, provide detailed cart info
      let message = '';
      if (itemCount > 0) {
        message = `Bonjour BueaDelights! J'ai ${itemCount} article(s) dans mon panier:\n\n`;
        items.forEach((item, index) => {
          const sizeLabels = { small: 'Petite', medium: 'Moyenne', large: 'Grande' };
          message += `${index + 1}. ${item.name} (${sizeLabels[item.size as keyof typeof sizeLabels]}) x${item.quantity}\n`;
        });
        message += `\nJe souhaite passer ma commande. Pouvez-vous m'assister pour finaliser? 🛒✨`;
      } else {
        message = 'Bonjour BueaDelights! Je souhaite découvrir votre cuisine camerounaise authentique. Que me recommandez-vous aujourd\'hui? 🍽️';
      }

      const encodedMessage = encodeURIComponent(message);
      window.open(`${WHATSAPP_LINK}?text=${encodedMessage}`, '_blank');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-end space-y-3"
          >
            {/* Quick Action Buttons */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col space-y-2 mb-2"
                >
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleQuickAction(action)}
                      className={`${action.color} text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap`}
                    >
                      <action.icon className="w-4 h-4" />
                      <span>{action.label}</span>
                    </motion.button>
                  ))}
                  
                  {/* Close Button */}
                  <motion.button
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setIsExpanded(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-colors duration-300 self-center"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main WhatsApp Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              {/* Ripple Effect */}
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
              <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-30"></div>
              
              {/* Main Button */}
              <button
                onClick={handleMainButtonClick}
                onMouseEnter={() => setIsExpanded(true)}
                className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group"
                aria-label="Contacter via WhatsApp"
              >
                <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Cart indicator */}
                {itemCount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce"
                  >
                    {itemCount > 9 ? '9+' : itemCount}
                  </motion.div>
                )}
              </button>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isExpanded ? 0 : 1, 
                  x: isExpanded ? 20 : 0 
                }}
                className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none"
              >
                {itemCount > 0 
                  ? `Commander (${itemCount} articles)` 
                  : 'Commander via WhatsApp'
                }
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                  <div className="w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Business Hours Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-center text-gray-600 bg-white px-2 py-1 rounded-full shadow-md"
            >
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>En ligne • 8h-22h</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppFloat;
