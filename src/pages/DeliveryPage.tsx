import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Truck, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { DELIVERY_ZONES, CURRENCY } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const DeliveryPage: React.FC = () => {
  const { t } = useLanguage();
  const deliveryZones = Object.values(DELIVERY_ZONES);

  return (
    <>
      <Helmet>
        <title>Livraison - Zones et Tarifs | BueaDelights</title>
        <meta name="description" content="Découvrez nos zones de livraison à Buea, nos tarifs et délais. Livraison rapide et sécurisée de 15 à 45 minutes." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-4">{t('delivery.title')}</h1>
              <p className="text-xl text-blue-100">Livraison rapide et sécurisée dans toute la région de Buea</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Delivery Zones */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('delivery.zones')}</h2>
              <p className="text-xl text-gray-600">Nous couvrons toute la région de Buea avec des tarifs transparents</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliveryZones.map((zone, index) => (
                <motion.div
                  key={zone.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{zone.name}</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign size={16} className="text-green-600" />
                        <span className="text-sm text-gray-600">Prix:</span>
                      </div>
                      <span className="font-bold text-green-600">{zone.fee} {CURRENCY.symbol}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-blue-600" />
                        <span className="text-sm text-gray-600">Délai:</span>
                      </div>
                      <span className="font-medium text-blue-600">{zone.estimatedTime}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Points de repère:</h4>
                    <div className="space-y-1">
                      {zone.landmarks.map((landmark, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="text-xs text-gray-600">{landmark}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Delivery Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comment ça marche</h3>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Commandez',
                    description: 'Choisissez vos plats préférés et ajoutez-les au panier',
                    icon: '🛒'
                  },
                  {
                    step: 2,
                    title: 'Confirmez',
                    description: 'Envoyez votre commande via WhatsApp avec vos informations',
                    icon: '📱'
                  },
                  {
                    step: 3,
                    title: 'Préparation',
                    description: 'Nos chefs préparent votre commande avec soin',
                    icon: '👨‍🍳'
                  },
                  {
                    step: 4,
                    title: 'Livraison',
                    description: 'Recevez votre commande chaude et fraîche chez vous',
                    icon: '🚚'
                  }
                ].map((step) => (
                  <div key={step.step} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {step.step}. {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Delivery Policies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Conditions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conditions de livraison</h3>
                <div className="space-y-3">
                  {[
                    'Commande minimum: 1000 FCFA',
                    'Livraison gratuite à partir de 5000 FCFA',
                    'Paiement à la livraison accepté',
                    'Délais garantis ou livraison gratuite',
                    'Emballage écologique et sécurisé'
                  ].map((condition, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-gray-700 text-sm">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <AlertCircle className="text-amber-600" size={20} />
                  <h3 className="text-lg font-semibold text-amber-800">Important</h3>
                </div>
                <div className="space-y-2 text-sm text-amber-700">
                  <p>• Les délais peuvent varier selon les conditions météorologiques</p>
                  <p>• Veuillez fournir une adresse précise avec des points de repère</p>
                  <p>• Notre équipe vous contactera si l'adresse est difficile à localiser</p>
                  <p>• Les livraisons en dehors des zones définies font l'objet d'un devis</p>
                </div>
              </div>

              {/* Contact for Delivery */}
              <div className="bg-green-50 rounded-xl border border-green-200 p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Question sur la livraison ?</h3>
                <p className="text-green-700 text-sm mb-4">
                  Notre équipe est disponible pour répondre à toutes vos questions concernant la livraison.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://wa.me/237699808260"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    <Truck size={16} />
                    <span>Contacter la livraison</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryPage;