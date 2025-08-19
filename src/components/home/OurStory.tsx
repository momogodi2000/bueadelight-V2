import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Award, 
  Users, 
  Star,
  MapPin,
  Clock,
  ChefHat,
  Utensils,
  Coffee,
  Home
} from 'lucide-react';

/**
 * Our Story Section Component
 * 
 * Features:
 * - Company origin story and mission
 * - Founder Caroline Folefack Viviane profile
 * - Values and philosophy
 * - Visual timeline and achievements
 * - Cultural heritage emphasis
 */
const OurStory: React.FC = () => {
  const story = {
    founder: {
      name: 'Caroline Folefack Viviane',
      title: 'Fondatrice & Chef Exécutive',
      image: '/avatars/girls.jpeg',
      quote: "La cuisine camerounaise est un art qui se transmet de cœur à cœur. Chaque plat raconte une histoire, chaque épice porte nos traditions.",
      background: "Passionnée de cuisine depuis l'enfance à Buea, Caroline a appris les secrets culinaires auprès de sa grand-mère. Diplômée en gestion hôtelière, elle combine tradition ancestrale et standards modernes."
    },
    mission: {
      title: 'Notre Mission',
      description: 'Préserver et partager l\'authenticité de la cuisine camerounaise tout en s\'adaptant aux besoins modernes de livraison et de qualité.',
      icon: Heart,
      color: 'text-red-500'
    },
    vision: {
      title: 'Notre Vision',
      description: 'Devenir la référence de la cuisine camerounaise authentique, connectant les cœurs et les palais à travers nos saveurs traditionnelles.',
      icon: Star,
      color: 'text-golden-500'
    }
  };

  const values = [
    {
      icon: ChefHat,
      title: 'Authenticité',
      description: 'Recettes traditionnelles transmises de génération en génération, respectant les méthodes ancestrales.',
      color: 'text-forest-600',
      bgColor: 'bg-forest-50'
    },
    {
      icon: Award,
      title: 'Qualité Premium',
      description: 'Ingrédients soigneusement sélectionnés, préparation méticuleuse et standards d\'hygiène stricts.',
      color: 'text-golden-600',
      bgColor: 'bg-golden-50'
    },
    {
      icon: Heart,
      title: 'Passion Culinaire',
      description: 'Amour pour la cuisine camerounaise et engagement à offrir une expérience gustative memorable.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Créer des liens autour de la table, rassembler les familles et faire découvrir notre culture.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const journey = [
    {
      year: '1995',
      title: 'Les Premières Saveurs',
      description: 'Caroline découvre sa passion pour la cuisine aux côtés de sa grand-mère Mama Folefack.',
      icon: Home,
              image: '/image/admin-caro2.jpeg'
    },
    {
      year: '2018',
      title: 'Formation Culinaire',
      description: 'Perfectionnement des techniques et apprentissage des standards internationaux.',
      icon: ChefHat,
              image: '/image/admin-caro3.jpeg'
    },
    {
      year: '2020',
      title: 'Naissance de BueaDelights',
      description: 'Création officielle du restaurant avec les premières livraisons à Buea.',
      icon: Award,
      image: '/images/story-launch.jpg'
    },
    {
      year: '2024',
      title: 'Leader Reconnu',
      description: '1500+ clients satisfaits, référence de la cuisine camerounaise authentique.',
      icon: Star,
      image: '/images/story-success.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 via-white to-golden-50 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-forest-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-terracotta-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-golden-400 rounded-full blur-2xl"></div>
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
            <Heart className="w-8 h-8 text-red-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 font-heading">
              Notre Histoire
            </h2>
            <Heart className="w-8 h-8 text-red-500" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Une aventure culinaire née de la passion pour les saveurs authentiques du Cameroun. 
            Découvrez l'histoire de BueaDelights et de sa fondatrice visionnaire.
          </motion.p>
        </div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16 border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Founder Image */}
            <div className="order-2 lg:order-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <img
                  src="/avatars/caroline-founder.jpg"
                  alt="Caroline Folefack Viviane - Fondatrice BueaDelights"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/avatars/girls.jpeg'; // Fallback image
                  }}
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-forest-200 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-golden-200 rounded-full blur-xl opacity-70"></div>
              </motion.div>
            </div>

            {/* Founder Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-charcoal-800 mb-2 font-heading">
                  {story.founder.name}
                </h3>
                <p className="text-forest-600 font-semibold text-lg mb-4">
                  {story.founder.title}
                </p>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Buea, Région du Sud-Ouest, Cameroun</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6 pl-6 border-l-4 border-forest-300">
                "{story.founder.quote}"
              </blockquote>

              {/* Background */}
              <p className="text-gray-600 leading-relaxed">
                {story.founder.background}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-forest-50 rounded-xl">
                  <div className="text-2xl font-bold text-forest-600 mb-1">4+</div>
                  <div className="text-sm text-gray-600">Années d'Excellence</div>
                </div>
                <div className="text-center p-4 bg-golden-50 rounded-xl">
                  <div className="text-2xl font-bold text-golden-600 mb-1">1500+</div>
                  <div className="text-sm text-gray-600">Clients Fidèles</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-red-50 p-4 rounded-2xl mr-4">
                <story.mission.icon className={`w-8 h-8 ${story.mission.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-800 font-heading">
                {story.mission.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {story.mission.description}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-golden-50 p-4 rounded-2xl mr-4">
                <story.vision.icon className={`w-8 h-8 ${story.vision.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-800 font-heading">
                {story.vision.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {story.vision.description}
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-charcoal-800 mb-4 font-heading">
              Nos Valeurs
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre passion culinaire et notre engagement envers l'excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`${value.bgColor} p-4 rounded-2xl mx-auto mb-4 w-fit`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h4 className="text-lg font-bold text-charcoal-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-forest-600 to-forest-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <Clock className="w-10 h-10 text-forest-200 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4 font-heading">
              Notre Parcours
            </h3>
            <p className="text-forest-100 max-w-2xl mx-auto">
              Un voyage culinaire qui a débuté dans les cuisines traditionnelles 
              pour devenir la référence de l'authenticité camerounaise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 hover:bg-white/30 transition-colors duration-300">
                  <milestone.icon className="w-8 h-8 text-forest-100 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-2">{milestone.year}</div>
                  <h4 className="font-semibold mb-3 text-sm">{milestone.title}</h4>
                  <p className="text-forest-100 text-xs leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;
