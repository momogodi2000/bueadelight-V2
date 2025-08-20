import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Shield } from 'lucide-react';

/**
 * Payment Methods Component
 * 
 * Displays available payment methods with their respective images
 */
const PaymentMethods: React.FC = () => {
  const paymentMethods = [
    {
      name: 'MTN Mobile Money',
      image: '/image/mtn money.jpeg',
      description: 'Pay securely with MTN Mobile Money',
      features: ['Instant transfer', 'Secure', 'Widely accepted']
    },
    {
      name: 'Orange Money',
      image: '/image/orange money.png',
      description: 'Quick payments with Orange Money',
      features: ['Fast processing', 'Reliable', '24/7 service']
    },
    {
      name: 'Cash on Delivery',
      image: null,
      description: 'Pay when you receive your order',
      features: ['No upfront payment', 'Convenient', 'Trusted method']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Méthodes de Paiement Sécurisées
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous acceptons plusieurs méthodes de paiement pour votre commodité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                {method.image ? (
                  <div className="mb-6">
                    <img
                      src={method.image}
                      alt={method.name}
                      className="h-16 w-auto mx-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div className="mb-6 flex justify-center">
                    <div className="bg-green-100 p-4 rounded-full">
                      <CreditCard className="text-green-600" size={32} />
                    </div>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {method.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {method.description}
                </p>

                <div className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Shield className="text-green-500" size={16} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Smartphone className="text-green-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">
                Paiement Sécurisé
              </h3>
            </div>
            <p className="text-gray-600">
              Toutes nos transactions sont sécurisées et protégées. 
              Vos informations de paiement sont toujours en sécurité.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentMethods;
