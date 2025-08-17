import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Star, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Award,
  Heart,
  ChefHat,
  Truck,
  MessageCircle,
  Calendar,
  ThumbsUp
} from 'lucide-react';

/**
 * Business Statistics Component
 * 
 * Features:
 * - Animated counters and statistics
 * - Real-time business metrics
 * - Interactive hover effects
 * - Mobile-optimized layout
 * - Trust indicators and achievements
 */
const BusinessStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    orders: 0,
    rating: 0,
    dishes: 0
  });

  // Main statistics
  const mainStats = [
    {
      id: 'customers',
      finalValue: 1500,
      suffix: '+',
      label: 'Clients Satisfaits',
      icon: Users,
      color: 'text-forest-600',
      bgColor: 'bg-forest-50',
      description: 'Clients fidèles qui nous font confiance'
    },
    {
      id: 'orders',
      finalValue: 5000,
      suffix: '+',
      label: 'Commandes Livrées',
      icon: Truck,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Repas livrés avec succès'
    },
    {
      id: 'rating',
      finalValue: 4.9,
      suffix: '★',
      label: 'Note Moyenne',
      icon: Star,
      color: 'text-golden-500',
      bgColor: 'bg-golden-50',
      description: 'Excellence reconnue par nos clients'
    },
    {
      id: 'dishes',
      finalValue: 30,
      suffix: '+',
      label: 'Plats Authentiques',
      icon: ChefHat,
      color: 'text-terracotta-600',
      bgColor: 'bg-terracotta-50',
      description: 'Spécialités camerounaises uniques'
    }
  ];

  // Additional achievements
  const achievements = [
    {
      icon: Award,
      title: 'Restaurant Certifié',
      description: 'Standards d\'hygiène et de qualité respectés',
      color: 'text-purple-600'
    },
    {
      icon: Heart,
      title: 'Communauté Engagée',
      description: 'Plus de 800 avis positifs sur nos réseaux',
      color: 'text-red-500'
    },
    {
      icon: Clock,
      title: 'Service 7j/7',
      description: 'Disponible tous les jours de 8h à 22h',
      color: 'text-green-600'
    },
    {
      icon: MessageCircle,
      title: 'Support WhatsApp',
      description: 'Assistance directe et personnalisée',
      color: 'text-blue-500'
    }
  ];

  // Milestones timeline
  const milestones = [
    {
      year: '2020',
      title: 'Création',
      description: 'Lancement de BueaDelights à Buea'
    },
    {
      year: '2021',
      title: '500 Clients',
      description: 'Premier cap de clients fidèles'
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Extension des zones de livraison'
    },
    {
      year: '2024',
      title: '1500+ Clients',
      description: 'Leader de la cuisine camerounaise'
    }
  ];

  // Animated counter hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('business-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate numbers when visible
  useEffect(() => {
    if (!isVisible) return;

    const animateValue = (
      key: keyof typeof animatedStats,
      start: number,
      end: number,
      duration: number
    ) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * easeOut;
        
        setAnimatedStats(prev => ({
          ...prev,
          [key]: key === 'rating' ? Number(current.toFixed(1)) : Math.floor(current)
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };

    // Staggered animations
    setTimeout(() => animateValue('customers', 0, 1500, 2000), 200);
    setTimeout(() => animateValue('orders', 0, 5000, 2500), 400);
    setTimeout(() => animateValue('rating', 0, 4.9, 2000), 600);
    setTimeout(() => animateValue('dishes', 0, 30, 1500), 800);
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="business-stats"
      className="py-20 bg-gradient-to-br from-cream-50 via-white to-forest-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-forest-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-golden-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-terracotta-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            <TrendingUp className="w-8 h-8 text-forest-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 font-heading">
              Notre Impact
            </h2>
            <TrendingUp className="w-8 h-8 text-forest-600" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Des chiffres qui témoignent de notre engagement envers l'excellence culinaire 
            et la satisfaction de notre communauté gourmande.
          </motion.p>
        </div>

        {/* Main Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {mainStats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Icon */}
              <div className={`${stat.bgColor} p-4 rounded-2xl mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>

              {/* Animated Number */}
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 font-heading`}>
                {stat.id === 'rating' 
                  ? animatedStats[stat.id as keyof typeof animatedStats] 
                  : animatedStats[stat.id as keyof typeof animatedStats].toLocaleString()
                }
                {stat.suffix}
              </div>

              {/* Label */}
              <h3 className="text-charcoal-700 font-semibold mb-2 text-sm md:text-base">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -3,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <achievement.icon className={`w-8 h-8 ${achievement.color} mb-3`} />
              <h4 className="font-semibold text-charcoal-800 mb-2 text-sm">
                {achievement.title}
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-forest-600 to-forest-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <Calendar className="w-8 h-8 text-forest-200 mx-auto mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">
              Notre Parcours
            </h3>
            <p className="text-forest-100">
              4 années d'excellence au service de la cuisine camerounaise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center text-2xl font-bold">
                  {milestone.year}
                </div>
                <h4 className="font-semibold mb-2 text-sm">
                  {milestone.title}
                </h4>
                <p className="text-forest-100 text-xs leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal-800 mb-4">
              Rejoignez notre communauté !
            </h3>
            <p className="text-gray-600 mb-6">
              Faites partie des milliers de gourmets qui savourent l'authenticité camerounaise 
              avec BueaDelights. Votre satisfaction est notre plus belle récompense.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/237699808260?text=Bonjour BueaDelights! Je souhaite rejoindre votre communauté de gourmets et découvrir vos spécialités. 🍽️"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-forest-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-forest-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <ThumbsUp className="w-5 h-5" />
                <span>Nous Rejoindre</span>
              </motion.a>
              
              <motion.a
                href="/menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-forest-600 text-forest-600 px-8 py-3 rounded-full font-semibold hover:bg-forest-600 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <ChefHat className="w-5 h-5" />
                <span>Découvrir le Menu</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BusinessStats;
