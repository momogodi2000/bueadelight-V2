import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Award, Users, Globe, Truck, ChefHat, Package, Leaf, 
  Phone, MessageCircle, MapPin, Clock, DollarSign, Calendar,
  Plane, Star, Gift, Crown, Flower2, Building2, Music
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { BUSINESS_INFO, CURRENCY } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>('local');
  const [guestCount, setGuestCount] = useState<number>(50);
  const [selectedEventType, setSelectedEventType] = useState<string>('wedding');

  // Local Services
  const localServices = [
    {
      id: 'food-delivery',
      title: t('services.food_delivery'),
      description: t('services.food_delivery_desc'),
      icon: Truck,
      color: 'bg-blue-500',
      pricing: 'from_500',
      features: ['15-45 min delivery', 'Eco-friendly packaging', 'Real-time tracking', '7 days a week']
    },
    {
      id: 'catering',
      title: t('services.event_catering'),
      description: t('services.catering_desc'),
      icon: ChefHat,
      color: 'bg-orange-500',
      pricing: 'from_2500_per_person',
      features: ['Custom menu', 'On-site service', 'Professional team', 'All event types']
    },
    {
      id: 'meal-prep',
      title: t('services.meal_prep'),
      description: t('services.meal_prep_desc'),
      icon: Package,
      color: 'bg-green-500',
      pricing: 'from_15000_per_week',
      features: ['Nutritional planning', 'Portion control', 'Optimal preservation', 'Weekly delivery']
    }
  ];

  // Event Packages with Dynamic Pricing
  const eventPackages = [
    {
      id: 'wedding',
      title: t('services.wedding_package'),
      description: t('event.wedding.includes'),
      icon: Heart,
      color: 'bg-pink-500',
      basePrice: 8500,
      includes: [
        'Traditional ceremony menu',
        'Wedding cake',
        'Decorations & setup',
        'Full service staff',
        'Photography coordination',
        'Music system setup'
      ]
    },
    {
      id: 'birthday',
      title: t('services.birthday_package'),
      description: t('event.birthday.includes'),
      icon: Gift,
      color: 'bg-purple-500',
      basePrice: 4500,
      includes: [
        'Birthday menu selection',
        'Custom birthday cake',
        'Party decorations',
        'Entertainment coordination',
        'Party games setup',
        'Cleanup service'
      ]
    },
    {
      id: 'funeral',
      title: t('services.funeral_package'),
      description: t('event.funeral.includes'),
      icon: Flower2,
      color: 'bg-gray-600',
      basePrice: 3500,
      includes: [
        'Respectful catering service',
        'Traditional comfort dishes',
        'Professional setup',
        'Discrete service',
        'Extended serving hours',
        'Cleanup included'
      ]
    },
    {
      id: 'corporate',
      title: t('services.corporate_package'),
      description: t('event.corporate.includes'),
      icon: Building2,
      color: 'bg-blue-600',
      basePrice: 6000,
      includes: [
        'Business menu options',
        'Professional presentation',
        'Custom branding',
        'Meeting room setup',
        'Audio-visual support',
        'Networking facilitation'
      ]
    },
    {
      id: 'cultural',
      title: t('services.cultural_events'),
      description: t('event.cultural.includes'),
      icon: Music,
      color: 'bg-yellow-600',
      basePrice: 7000,
      includes: [
        'Authentic cultural dishes',
        'Traditional presentation',
        'Cultural decorations',
        'Traditional music',
        'Cultural performers',
        'Educational materials'
      ]
    }
  ];

  // International Services
  const internationalServices = [
    {
      id: 'international-delivery',
      title: t('intl.delivery.title'),
      description: t('intl.delivery.desc'),
      icon: Globe,
      color: 'bg-green-600',
      regions: [
        { name: 'Europe', countries: 'EU, UK, Switzerland', processing: '7-14 days', minOrder: '€150' },
        { name: 'North America', countries: 'USA, Canada', processing: '10-21 days', minOrder: '$200' },
        { name: 'Asia', countries: 'China, Japan, Korea', processing: '14-28 days', minOrder: '¥20,000' },
        { name: 'Africa', countries: 'CEMAC/ECOWAS countries', processing: '3-7 days', minOrder: '50,000 FCFA' }
      ]
    },
    {
      id: 'chef-travel',
      title: t('intl.chef.title'),
      description: t('intl.chef.desc'),
      icon: Plane,
      color: 'bg-purple-600',
      services: [
        { duration: '1-3 days', teamSize: '1 chef', price: '$2,500/day', includes: 'Equipment, ingredients' },
        { duration: '1 week', teamSize: '1-2 chefs', price: '$15,000', includes: 'Full team, equipment' },
        { duration: '2 weeks', teamSize: '2-3 chefs', price: '$25,000', includes: 'Complete service' },
        { duration: 'Custom', teamSize: 'Variable', price: 'Quote', includes: 'Tailored service' }
      ]
    }
  ];

  const calculateEventPrice = (basePrice: number, guests: number) => {
    let totalPrice = basePrice * guests;
    
    // Volume discounts
    if (guests >= 200) totalPrice *= 0.85; // 15% discount for 200+ guests
    else if (guests >= 100) totalPrice *= 0.90; // 10% discount for 100+ guests
    else if (guests >= 50) totalPrice *= 0.95; // 5% discount for 50+ guests
    
    return Math.round(totalPrice);
  };

  const selectedPackage = eventPackages.find(pkg => pkg.id === selectedEventType);
  const estimatedPrice = selectedPackage ? calculateEventPrice(selectedPackage.basePrice, guestCount) : 0;

  const generateQuoteWhatsAppMessage = () => {
    const service = selectedService === 'event' ? selectedPackage?.title : 
                   selectedService === 'international' ? 'International Services' : 
                   'Local Services';
    
    let message = `🎯 *SERVICE QUOTE REQUEST*\n\n`;
    message += `📋 *Service:* ${service}\n`;
    
    if (selectedService === 'event' && selectedPackage) {
      message += `👥 *Guest Count:* ${guestCount}\n`;
      message += `💰 *Estimated Price:* ${estimatedPrice.toLocaleString()} FCFA\n`;
    }
    
    message += `📅 *Request Date:* ${new Date().toLocaleDateString()}\n\n`;
    message += `Please provide a detailed quote for this service. Thank you!\n\n`;
    message += `🌐 Contact: ${BUSINESS_INFO.name}`;
    
    return encodeURIComponent(message);
  };

  const handleQuoteRequest = () => {
    const message = generateQuoteWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumberFormatted}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{t('services.title')} - BueaDelights</title>
        <meta name="description" content={t('services.international_desc')} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-forest-600 to-forest-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-4">{t('services.title')}</h1>
              <p className="text-xl text-forest-100 max-w-3xl mx-auto">
                {t('services.international_desc')}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'local', label: 'Local Services', icon: MapPin },
              { id: 'event', label: 'Event Packages', icon: Crown },
              { id: 'international', label: 'International', icon: Globe }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedService(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedService === category.id
                    ? 'bg-forest-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon size={20} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Local Services */}
          {selectedService === 'local' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {localServices.map((service) => (
                <div key={service.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Star size={12} className="text-golden-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={handleQuoteRequest}
                    className="w-full bg-forest-600 text-white py-2 rounded-lg hover:bg-forest-700 transition-colors"
                  >
                    {t('services.request_quote')}
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {/* Event Packages */}
          {selectedService === 'event' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Guest Count Selector */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{t('services.guest_count')}</h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="10"
                    max="500"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="flex-1"
                  />
                  <div className="flex items-center space-x-2">
                    <Users size={20} className="text-forest-600" />
                    <span className="font-bold text-xl">{guestCount}</span>
                  </div>
                </div>
              </div>

              {/* Event Package Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all ${
                      selectedEventType === pkg.id
                        ? 'ring-2 ring-forest-500 transform scale-105'
                        : 'hover:shadow-xl'
                    }`}
                    onClick={() => setSelectedEventType(pkg.id)}
                  >
                    <div className={`${pkg.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                      <pkg.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                    
                    <div className="space-y-1 mb-4">
                      {pkg.includes.map((item, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-600">
                          <Star size={10} className="text-golden-500 mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-gray-500">{t('services.package_from')}</div>
                      <div className="text-lg font-bold text-forest-600">
                        {pkg.basePrice.toLocaleString()} {CURRENCY.symbol}
                      </div>
                      <div className="text-xs text-gray-500">{t('services.per_person')}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Calculator */}
              {selectedPackage && (
                <div className="bg-gradient-to-r from-forest-600 to-forest-700 rounded-xl shadow-lg p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{selectedPackage.title}</h3>
                      <p className="text-forest-100">{guestCount} guests</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-forest-200">Estimated Total</div>
                      <div className="text-3xl font-bold">
                        {estimatedPrice.toLocaleString()} {CURRENCY.symbol}
                      </div>
                      {guestCount >= 50 && (
                        <div className="text-sm text-golden-300">
                          Volume discount applied!
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={handleQuoteRequest}
                    className="w-full mt-6 bg-white text-forest-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>{t('services.request_quote')}</span>
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* International Services */}
          {selectedService === 'international' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {internationalServices.map((service) => (
                <div key={service.id} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mr-4`}>
                      <service.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  {service.id === 'international-delivery' && service.regions && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.regions.map((region) => (
                        <div key={region.name} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-bold text-forest-600 mb-2">{region.name}</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div>{region.countries}</div>
                            <div className="flex items-center">
                              <Clock size={12} className="mr-1" />
                              {region.processing}
                            </div>
                            <div className="flex items-center">
                              <DollarSign size={12} className="mr-1" />
                              Min: {region.minOrder}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {service.id === 'chef-travel' && service.services && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.services.map((svc, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-bold text-forest-600 mb-2">{svc.duration}</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div>Team: {svc.teamSize}</div>
                            <div className="font-semibold text-golden-600">{svc.price}</div>
                            <div>{svc.includes}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={handleQuoteRequest}
                    className="mt-6 bg-forest-600 text-white px-8 py-3 rounded-lg hover:bg-forest-700 transition-colors flex items-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>{t('services.contact_for_booking')}</span>
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;