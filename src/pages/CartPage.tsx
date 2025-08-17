import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { CURRENCY, DELIVERY_ZONES, BUSINESS_INFO } from '@/constants';

const CartPage: React.FC = () => {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } = useCart();
  const { t } = useLanguage();
  const [selectedZone, setSelectedZone] = useState<string>('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const deliveryZones = Object.values(DELIVERY_ZONES);
  const selectedDeliveryZone = deliveryZones.find(zone => zone.id === selectedZone);
  const deliveryFee = selectedDeliveryZone ? selectedDeliveryZone.fee : 0;
  const grandTotal = total + deliveryFee;

  const handleQuantityChange = (id: string, size: 'small' | 'medium' | 'large', newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id, size);
    } else {
      updateQuantity(id, size, newQuantity);
    }
  };

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';

    let message = `🍽️ *NOUVELLE COMMANDE BUEADELIGHTS*\n\n`;
    message += `👤 *Client:* ${customerInfo.name}\n`;
    message += `📱 *Téléphone:* ${customerInfo.phone}\n`;
    
    if (selectedDeliveryZone) {
      message += `📍 *Zone de livraison:* ${selectedDeliveryZone.name}\n`;
      message += `⏱️ *Temps estimé:* ${selectedDeliveryZone.estimatedTime}\n`;
    }
    
    if (customerInfo.address) {
      message += `🏠 *Adresse:* ${customerInfo.address}\n`;
    }
    
    message += `\n📝 *DÉTAILS DE LA COMMANDE:*\n\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   • Taille: ${item.size}\n`;
      message += `   • Quantité: ${item.quantity}\n`;
      message += `   • Prix unitaire: ${item.price} FCFA\n`;
      message += `   • Sous-total: ${item.price * item.quantity} FCFA\n\n`;
    });
    
    message += `💰 *RÉSUMÉ FINANCIER:*\n`;
    message += `• Sous-total plats: ${total} FCFA\n`;
    message += `• Frais de livraison: ${deliveryFee} FCFA\n`;
    message += `• *TOTAL: ${grandTotal} FCFA*\n\n`;
    
    if (customerInfo.notes) {
      message += `📋 *Notes spéciales:*\n${customerInfo.notes}\n\n`;
    }
    
    message += `🕐 Commande passée le ${new Date().toLocaleString('fr-FR')}\n\n`;
    message += `Merci de confirmer cette commande et le délai de livraison. 🙏`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    if (items.length === 0) {
      alert('Votre panier est vide');
      return;
    }
    
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Veuillez remplir votre nom et numéro de téléphone');
      return;
    }
    
    if (!selectedZone) {
      alert('Veuillez sélectionner une zone de livraison');
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumberFormatted}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Panier - BueaDelights</title>
          <meta name="description" content="Votre panier de commande BueaDelights" />
        </Helmet>

        <div className="min-h-screen bg-gray-50 pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 text-gray-400">
                <ShoppingCart size={80} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('cart.empty')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('cart.empty_description')}
              </p>
              <motion.a
                href="/menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-forest-600 text-white px-6 py-3 rounded-lg hover:bg-forest-700 transition-colors"
              >
                <ShoppingCart size={20} />
                <span>{t('common.view_menu')}</span>
              </motion.a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Panier ({itemCount}) - BueaDelights</title>
        <meta name="description" content="Finalisez votre commande de cuisine camerounaise authentique" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{t('cart.title')}</h1>
                <p className="text-gray-600 mt-1">
                  {t('cart.item_count', { count: itemCount })}
                </p>
              </div>
              <button
                onClick={clearCart}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
              >
                <Trash2 size={18} />
                <span>{t('cart.clear')}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={`${item.id}-${item.size}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <div className="flex items-center space-x-4">
                    {/* Image */}
                    <img
                      src={`/image/${item.image}`}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = '/image/placeholder.jpg';
                      }}
                    />
                    
                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 capitalize">{item.size}</p>
                      <div className="text-lg font-bold text-forest-600">
                        {item.price} {CURRENCY.symbol}
                      </div>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                        className="p-1 rounded-full bg-forest-600 text-white hover:bg-forest-700 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary & Customer Info */}
            <div className="space-y-6">
              {/* Customer Information */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Informations Client</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Votre nom complet"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Numéro de téléphone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Adresse de livraison (optionnel)"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Instructions spéciales (optionnel)"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Delivery Zone Selection */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Zone de Livraison</h3>
                <div className="space-y-3">
                  {deliveryZones.map((zone) => (
                    <label
                      key={zone.id}
                      className={`block p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedZone === zone.id
                          ? 'border-forest-500 bg-forest-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="deliveryZone"
                        value={zone.id}
                        checked={selectedZone === zone.id}
                        onChange={(e) => setSelectedZone(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{zone.name}</div>
                          <div className="text-sm text-gray-600">{zone.estimatedTime}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{zone.fee} {CURRENCY.symbol}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Résumé de Commande</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>{t('common.subtotal')}</span>
                    <span>{total} {CURRENCY.symbol}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('common.delivery_fee')}</span>
                    <span>{deliveryFee} {CURRENCY.symbol}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>{t('common.total')}</span>
                      <span>{grandTotal} {CURRENCY.symbol}</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Order Button */}
                <motion.button
                  onClick={handleWhatsAppOrder}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>{t('cart.checkout')}</span>
                </motion.button>

                <div className="mt-4 text-center">
                  <a
                    href="/menu"
                    className="text-forest-600 hover:text-forest-700 font-medium"
                  >
                    {t('cart.continue_shopping')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;