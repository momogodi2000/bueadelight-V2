import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Clock, 
  Heart, 
  Award, 
  Truck, 
  ChefHat,
  Star,
  Users,
  Leaf,
  MapPin
} from 'lucide-react';

/**
 * Why Choose Us Section Component
 * 
 * Features:
 * - Highlighting key value propositions
 * - Authentic Cameroonian cuisine focus
 * - Trust indicators and guarantees
 * - Animated statistics and icons
 * - Social proof elements
 */
const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ChefHat,
      title: 'Cuisine Authentique',
      description: 'Recettes traditionnelles camerounaises transmises de génération en génération, préparées avec amour et respect des traditions.',
      color: 'text-forest-600',
      bgColor: 'bg-forest-50',
      stat: '100%',
      statLabel: 'Authenticité'
    },
    {
      icon: Leaf,
      title: 'Ingrédients Frais',
      description: 'Sélection rigoureuse des meilleurs ingrédients locaux, épices importées directement du Cameroun pour un goût incomparable.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      stat: '100%',
      statLabel: 'Fraîcheur'
    },
    {
      icon: Clock,
      title: 'Livraison Rapide',
      description: 'Service de livraison efficace dans tout Buea et ses environs. Vos plats arrivent chauds et à temps, garantis.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      stat: '< 45min',
      statLabel: 'Livraison'
    },
    {
      icon: Award,
      title: 'Qualité Garantie',
      description: 'Standards élevés de qualité et d\'hygiène. Chaque plat est préparé avec soin dans notre cuisine certifiée.',
      color: 'text-golden-600',
      bgColor: 'bg-golden-50',
      stat: '4.9/5',
      statLabel: 'Satisfaction'
    },
    {
      icon: Users,
      title: 'Service Client',
      description: 'Équipe dédiée disponible 7j/7 pour vous assister. Communication directe via WhatsApp pour une expérience personnalisée.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      stat: '24/7',
      statLabel: 'Support'
    },
    {
      icon: Heart,
      title: 'Passion Culinaire',
      description: 'Créé par des passionnés de cuisine camerounaise. Chaque plat raconte l\'histoire de notre belle culture gastronomique.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      stat: '2020',
      statLabel: 'Depuis'
    }
  ];

  const stats = [
    {
      value: '1500+',
      label: 'Clients Satisfaits',
      icon: Users,
      color: 'text-forest-600'
    },
    {
      value: '4.9★',
      label: 'Note Moyenne',
      icon: Star,
      color: 'text-golden-500'
    },
    {
      value: '30+',
      label: 'Plats Traditionnels',
      icon: ChefHat,
      color: 'text-terracotta-600'
    },
    {
      value: '24/7',
      label: 'Service Client',
      icon: Shield,
      color: 'text-blue-600'
    }
  ];

  // Container animation variants
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-50 via-white to-cream-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-forest-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-golden-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-terracotta-300 rounded-full blur-3xl"></div>
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
            <Shield className="w-8 h-8 text-forest-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 font-heading">
              Pourquoi BueaDelights ?
            </h2>
            <Shield className="w-8 h-8 text-forest-600" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Plus qu'un simple restaurant, nous sommes les ambassadeurs de la cuisine camerounaise authentique. 
            Découvrez pourquoi des milliers de clients nous font confiance pour leurs moments gourmands.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mt-4"
          >
            <MapPin className="w-5 h-5 text-forest-600" />
            <span className="text-forest-600 font-semibold">Fiers de servir Buea depuis 2020</span>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              
              {/* Icon and Stat */}
              <div className="flex items-start justify-between mb-6">
                <div className={`${feature.bgColor} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <div className="text-right">
                  <div className={`text-2xl font-bold ${feature.color} leading-none`}>
                    {feature.stat}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">
                    {feature.statLabel}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className={`text-xl font-bold mb-3 ${feature.color} group-hover:text-charcoal-800 transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl ${feature.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-forest-600 to-forest-700 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-12 h-12 border border-white rounded-full"></div>
            </div>

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                Prêt à découvrir l'authenticité ?
              </h3>
              <p className="text-forest-100 mb-6 text-lg max-w-2xl mx-auto">
                Rejoignez notre communauté de gourmets et savourez la vraie cuisine camerounaise. 
                Votre prochain repas mémorable n'est qu'à un clic !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://wa.me/237699808260?text=Bonjour BueaDelights! Je souhaite découvrir votre menu et passer ma première commande. 🍽️"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-forest-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-forest-50 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                >
                  <span>Commander Maintenant</span>
                  <Truck className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="/menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-forest-600 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Voir le Menu</span>
                  <ChefHat className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
