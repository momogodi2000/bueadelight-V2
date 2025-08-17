import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { BUSINESS_INFO, OPERATING_HOURS } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      alert('Veuillez remplir au moins votre nom et votre message');
      return;
    }

    const whatsappMessage = `🌟 *NOUVEAU MESSAGE DE CONTACT*\n\n` +
      `👤 *Nom:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email || 'Non fourni'}\n` +
      `📱 *Téléphone:* ${formData.phone || 'Non fourni'}\n` +
      `📋 *Sujet:* ${formData.subject || 'Contact général'}\n\n` +
      `💬 *Message:*\n${formData.message}\n\n` +
      `🕐 Envoyé le ${new Date().toLocaleString('fr-FR')}`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumberFormatted}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    alert('Message envoyé via WhatsApp !');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact - Nous Contacter | BueaDelights</title>
        <meta name="description" content="Contactez BueaDelights par WhatsApp, téléphone ou email. Service client disponible 7j/7 pour vos commandes et questions." />
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
              <h1 className="text-5xl font-bold mb-4">{t('contact.title')}</h1>
              <p className="text-xl text-forest-100">{t('contact.subtitle')}</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Informations de Contact</h2>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <MessageCircle className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600 mb-2">Notre méthode préférée de communication</p>
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsappNumberFormatted}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        {BUSINESS_INFO.whatsappNumber}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Téléphone</h3>
                      <p className="text-gray-600 mb-2">Appelez-nous directement</p>
                      <a
                        href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        {BUSINESS_INFO.whatsappNumber}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Mail className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Email</h3>
                      <p className="text-gray-600 mb-2">Pour les demandes professionnelles</p>
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-purple-600 hover:text-purple-700 font-medium"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <MapPin className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Localisation</h3>
                      <p className="text-gray-600 mb-2">Nous desservons toute la région</p>
                      <p className="text-red-600 font-medium">{BUSINESS_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="text-forest-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Heures d'Ouverture</h3>
                </div>
                <div className="space-y-2">
                  {Object.entries(OPERATING_HOURS).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center py-2">
                      <span className="text-gray-700 capitalize font-medium">
                        {day === 'monday' ? 'Lundi' :
                         day === 'tuesday' ? 'Mardi' :
                         day === 'wednesday' ? 'Mercredi' :
                         day === 'thursday' ? 'Jeudi' :
                         day === 'friday' ? 'Vendredi' :
                         day === 'saturday' ? 'Samedi' : 'Dimanche'}
                      </span>
                      <span className="text-forest-600 font-medium">
                        {hours.open} - {hours.close}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm font-medium">
                    🎉 Ouvert 7 jours sur 7 pour vous servir !
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.form.title')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.name_placeholder')}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.form.email_placeholder')}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contact.form.phone_placeholder')}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder={t('contact.form.subject_placeholder')}
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  />
                </div>
                
                <textarea
                  name="message"
                  placeholder={t('contact.form.message_placeholder')}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                />
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-forest-600 text-white py-3 rounded-lg font-semibold hover:bg-forest-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Envoyer via WhatsApp</span>
                </motion.button>
              </form>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 text-sm">
                  💡 <strong>Astuce:</strong> Votre message sera envoyé directement via WhatsApp pour une réponse plus rapide !
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;