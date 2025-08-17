import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Globe, Truck, ChefHat, Package, Leaf, Phone, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { BUSINESS_INFO, BUSINESS_STATS } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'food-delivery',
      title: 'Livraison de Nourriture',
      titleEn: 'Food Delivery',
      description: 'Livraison rapide et sécurisée de plats authentiques camerounais dans toute la région de Buea.',
      descriptionEn: 'Fast and secure delivery of authentic Cameroonian dishes throughout the Buea region.',
      icon: Truck,
      color: 'bg-blue-500',
      features: ['Livraison en 15-45 min', 'Emballage écologique', 'Suivi en temps réel', 'Livraison 7j/7'],
      pricing: {
        local: 'À partir de 500 FCFA',
        zones: [
          { zone: 'Zone Universitaire', price: '500 FCFA', time: '15-25 min' },
          { zone: 'Centre-ville Buea', price: '700 FCFA', time: '20-30 min' },
          { zone: 'Zones résidentielles', price: '1000 FCFA', time: '25-35 min' },
          { zone: 'Zones étendues', price: '1500 FCFA', time: '35-45 min' }
        ]
      }
    },
    {
      id: 'catering',
      title: 'Services de Restauration',
      titleEn: 'Catering Services',
      description: 'Service traiteur professionnel pour événements, mariages, conférences et célébrations.',
      descriptionEn: 'Professional catering services for events, weddings, conferences and celebrations.',
      icon: ChefHat,
      color: 'bg-orange-500',
      features: ['Menu personnalisé', 'Service sur site', 'Équipe professionnelle', 'Tous types d\'événements'],
      pricing: {
        local: 'À partir de 2500 FCFA/personne',
        packages: [
          { name: 'Package Basique', price: '2500 FCFA/pers', details: 'Plat principal + accompagnement' },
          { name: 'Package Standard', price: '4000 FCFA/pers', details: 'Entrée + plat + dessert + boisson' },
          { name: 'Package Premium', price: '6500 FCFA/pers', details: 'Menu complet + service + décoration' },
          { name: 'Package VIP', price: 'Sur devis', details: 'Service personnalisé complet' }
        ]
      }
    },
    {
      id: 'meal-prep',
      title: 'Préparation de Repas',
      titleEn: 'Meal Preparation',
      description: 'Préparation de repas hebdomadaires nutritifs et équilibrés selon vos préférences.',
      descriptionEn: 'Weekly preparation of nutritious and balanced meals according to your preferences.',
      icon: Package,
      color: 'bg-green-500',
      features: ['Planification nutritionnelle', 'Emballage portion contrôlée', 'Conservation optimale', 'Livraison hebdomadaire'],
      pricing: {
        local: 'À partir de 15000 FCFA/semaine',
        plans: [
          { name: 'Plan 7 jours', price: '15000 FCFA', details: '1 repas/jour, 7 jours' },
          { name: 'Plan 14 repas', price: '25000 FCFA', details: '2 repas/jour, 7 jours' },
          { name: 'Plan 21 repas', price: '35000 FCFA', details: '3 repas/jour, 7 jours' },
          { name: 'Plan Famille', price: 'Sur devis', details: 'Pour 4+ personnes' }
        ]
      }
    },
    {
      id: 'export',
      title: 'Export Alimentaire',
      titleEn: 'Food Export',
      description: 'Export d\'ingrédients et produits camerounais vers l\'Europe, l\'Amérique et l\'Asie.',
      descriptionEn: 'Export of Cameroonian ingredients and products to Europe, America and Asia.',
      icon: Globe,
      color: 'bg-purple-500',
      features: ['Certification internationale', 'Logistique complète', 'Emballage export', 'Documentation légale'],
      pricing: {
        international: 'Tarifs sur devis selon destination',
        regions: [
          { region: 'Europe', description: 'UE, UK, Suisse', lead: '7-14 jours' },
          { region: 'Amérique du Nord', description: 'USA, Canada', lead: '10-21 jours' },
          { region: 'Asie', description: 'Chine, Japon, Corée', lead: '14-28 jours' },
          { region: 'Afrique', description: 'Pays CEMAC/CEDEAO', lead: '3-7 jours' }
        ]
      }
    },
    {
      id: 'preservation',
      title: 'Conservation Alimentaire',
      titleEn: 'Food Preservation',
      description: 'Services de séchage, fumage et conservation traditionnelle des aliments.',
      descriptionEn: 'Drying, smoking and traditional food preservation services.',
      icon: Leaf,
      color: 'bg-yellow-500',
      features: ['Techniques traditionnelles', 'Conservation naturelle', 'Emballage sous vide', 'Longue durée'],
      pricing: {
        local: 'À partir de 1000 FCFA/kg',
        services: [
          { service: 'Séchage fruits/légumes', price: '1000 FCFA/kg', time: '2-5 jours' },
          { service: 'Fumage poisson/viande', price: '1500 FCFA/kg', time: '1-3 jours' },
          { service: 'Fermentation légumes', price: '800 FCFA/kg', time: '7-14 jours' },
          { service: 'Emballage sous vide', price: '200 FCFA/unité', time: 'Immédiat' }
        ]
      }
    },
    {
      id: 'extraction',
      title: 'Extraction d\'Ingrédients',
      titleEn: 'Ingredient Extraction',
      description: 'Extraction d\'huiles, épices et essences naturelles de produits locaux.',
      descriptionEn: 'Extraction of oils, spices and natural essences from local products.',
      icon: Award,
      color: 'bg-red-500',
      features: ['Extraction à froid', 'Pureté garantie', 'Certification bio', 'Tracabilité complète'],
      pricing: {
        local: 'À partir de 5000 FCFA/litre',
        products: [
          { product: 'Huile de palme pure', price: '5000 FCFA/L', min: '1 litre' },
          { product: 'Huile de coco vierge', price: '8000 FCFA/L', min: '1 litre' },
          { product: 'Extraits d\'épices', price: '12000 FCFA/500ml', min: '500ml' },
          { product: 'Essences florales', price: '15000 FCFA/250ml', min: '250ml' }
        ]
      }
    }
  ];

  const teamMembers = [
    {
      name: 'Caroline Folefack Viviane',
      role: 'Fondatrice & Chef Exécutive',
      photo: '/avatars/caroline.jpg',
      story: 'Passionnée de cuisine traditionnelle camerounaise depuis l\'enfance, Caroline a transformé sa passion en entreprise prospère.',
      specialties: ['Ndolé', 'Eru', 'Cuisine traditionnelle'],
      experience: '15+ années'
    },
    {
      name: 'Martin Efon',
      role: 'Chef de Cuisine',
      photo: '/avatars/martin.jpg',
      story: 'Expert en grillades et plats mijotés, Martin apporte son expertise culinaire à chaque création.',
      specialties: ['Grillades', 'Poisson braisé', 'Sauces'],
      experience: '10+ années'
    },
    {
      name: 'Grace Musa',
      role: 'Responsable Qualité',
      photo: '/avatars/grace.jpg',
      story: 'Spécialiste en nutrition et sécurité alimentaire, Grace veille à la qualité de chaque plat.',
      specialties: ['Contrôle qualité', 'Nutrition', 'Hygiène'],
      experience: '8+ années'
    }
  ];

  const WhatsAppServiceButton = ({ service }: { service: any }) => {
    const generateServiceMessage = () => {
      let message = `🍽️ *DEMANDE DE DEVIS - ${service.title.toUpperCase()}*\n\n`;
      message += `Bonjour BueaDelights,\n\n`;
      message += `Je suis intéressé(e) par vos services de ${service.title.toLowerCase()}.\n\n`;
      message += `Pouvez-vous me fournir plus d'informations et un devis personnalisé ?\n\n`;
      message += `Merci !`;
      return encodeURIComponent(message);
    };

    const handleWhatsAppClick = () => {
      const message = generateServiceMessage();
      const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumberFormatted}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    };

    return (
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        <MessageCircle size={16} />
        <span>Demander un devis</span>
      </button>
    );
  };

  return (
    <>
      <Helmet>
        <title>À Propos - Notre Histoire & Services | BueaDelights</title>
        <meta 
          name="description" 
          content="Découvrez l'histoire de BueaDelights et nos services: livraison, traiteur, export alimentaire, conservation et extraction au Cameroun et à l'international." 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-forest-600 to-forest-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-4">{t('about.title')}</h1>
              <p className="text-xl text-forest-100 max-w-3xl mx-auto">
                {t('about.description')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Founder Story */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/avatars/caroline.jpg"
                alt="Caroline Folefack Viviane"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = '/avatars/avartar.jpeg';
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Caroline Folefack Viviane</h2>
                <p className="text-xl text-forest-600 mb-4">Fondatrice & Chef Exécutive</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Née et élevée au Cameroun, Caroline a grandi entourée des arômes et saveurs de la cuisine traditionnelle camerounaise. 
                Sa grand-mère lui a transmis les secrets des recettes ancestrales, l'art du dosage des épices et l'importance de 
                préserver notre patrimoine culinaire.
              </p>
              <p className="text-gray-600 leading-relaxed">
                En 2020, guidée par sa passion et sa vision d'apporter la cuisine camerounaise authentique au monde moderne, 
                Caroline a fondé BueaDelights. Aujourd'hui, l'entreprise s'est développée pour offrir non seulement la livraison 
                de repas, mais aussi des services d'export, de conservation et de transformation alimentaire.
              </p>
              <div className="flex items-center space-x-4">
                <Heart className="text-red-500" size={24} />
                <span className="text-gray-700 font-medium">
                  "Chaque plat raconte une histoire, chaque saveur transporte une émotion."
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Business Stats */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
              <p className="text-xl text-gray-600">Plus de 4 ans d'excellence culinaire</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: BUSINESS_STATS.customersServed, label: t('stats.customers_served'), icon: Users },
                { value: BUSINESS_STATS.dishesDelivered, label: t('stats.dishes_delivered'), icon: Package },
                { value: BUSINESS_STATS.yearsInBusiness, label: t('stats.years_experience'), icon: Award },
                { value: BUSINESS_STATS.averageRating, label: t('stats.average_rating'), icon: Heart, suffix: '/5' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-forest-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value.toLocaleString()}{stat.suffix || ''}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600">Solutions complètes pour tous vos besoins alimentaires</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.titleEn}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-forest-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Tarification:</h4>
                    {service.pricing.local && (
                      <div className="bg-forest-50 p-4 rounded-lg mb-4">
                        <div className="font-semibold text-forest-700">{service.pricing.local}</div>
                      </div>
                    )}
                    
                    {service.pricing.zones && (
                      <div className="space-y-2">
                        {service.pricing.zones.map((zone, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                            <div>
                              <div className="font-medium text-sm">{zone.zone}</div>
                              <div className="text-xs text-gray-500">{zone.time}</div>
                            </div>
                            <div className="font-semibold text-forest-600">{zone.price}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {service.pricing.packages && (
                      <div className="space-y-2">
                        {service.pricing.packages.map((pkg, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                            <div>
                              <div className="font-medium text-sm">{pkg.name}</div>
                              <div className="text-xs text-gray-500">{pkg.details}</div>
                            </div>
                            <div className="font-semibold text-forest-600">{pkg.price}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {service.pricing.international && (
                      <div>
                        <div className="bg-purple-50 p-4 rounded-lg mb-4">
                          <div className="font-semibold text-purple-700">{service.pricing.international}</div>
                        </div>
                        {service.pricing.regions && (
                          <div className="space-y-2">
                            {service.pricing.regions.map((region, idx) => (
                              <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                                <div>
                                  <div className="font-medium text-sm">{region.region}</div>
                                  <div className="text-xs text-gray-500">{region.description}</div>
                                </div>
                                <div className="text-xs text-gray-600">{region.lead}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {service.pricing.services && (
                      <div className="space-y-2">
                        {service.pricing.services.map((svc, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                            <div>
                              <div className="font-medium text-sm">{svc.service}</div>
                              <div className="text-xs text-gray-500">{svc.time}</div>
                            </div>
                            <div className="font-semibold text-forest-600">{svc.price}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {service.pricing.products && (
                      <div className="space-y-2">
                        {service.pricing.products.map((product, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                            <div>
                              <div className="font-medium text-sm">{product.product}</div>
                              <div className="text-xs text-gray-500">Min: {product.min}</div>
                            </div>
                            <div className="font-semibold text-forest-600">{product.price}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <WhatsAppServiceButton service={service} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
              <p className="text-xl text-gray-600">Des experts passionnés à votre service</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-50 rounded-xl p-6 text-center"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/avatars/avartar.jpeg';
                    }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-forest-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.story}</p>
                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-900 mb-1">Spécialités:</div>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-forest-100 text-forest-700 px-2 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{member.experience}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-forest-600 to-forest-700 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Prêt à découvrir nos services ?
              </h2>
              <p className="text-xl text-forest-100 mb-8">
                Contactez-nous pour un devis personnalisé ou pour en savoir plus sur nos offres.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumberFormatted}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </motion.a>
                <motion.a
                  href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-white text-forest-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone size={20} />
                  <span>Appeler</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;