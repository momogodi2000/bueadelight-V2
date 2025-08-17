import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Phone, Clock, Truck, CreditCard, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_INFO } from '@/constants';

const FAQPage: React.FC = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      title: 'Commandes & Livraison',
      icon: Truck,
      color: 'bg-blue-100 text-blue-600',
      questions: [
        {
          question: 'Comment passer une commande ?',
          answer: 'Vous pouvez passer commande de plusieurs façons : via notre site web en ajoutant les plats au panier puis en cliquant sur "Procéder sur WhatsApp", directement par WhatsApp au +237 6 99 80 82 60, ou par téléphone. Nous recommandons WhatsApp pour une réponse plus rapide.'
        },
        {
          question: 'Quels sont vos délais de livraison ?',
          answer: 'Nos délais varient selon votre zone : Zone Universitaire (15-25 min), Centre-ville Buea (20-30 min), Zones résidentielles (25-35 min), Zones étendues (35-45 min). Ces délais peuvent varier selon l\'affluence et les conditions météorologiques.'
        },
        {
          question: 'Livrez-vous en dehors de Buea ?',
          answer: 'Actuellement, nous livrons principalement dans la région de Buea. Pour les livraisons dans les villes environnantes comme Limbe, Douala ou Yaoundé, nous proposons des services spéciaux sur devis. Contactez-nous pour plus d\'informations.'
        },
        {
          question: 'Y a-t-il des frais de livraison ?',
          answer: 'Oui, les frais varient selon la zone : 500 FCFA (Zone Universitaire), 700 FCFA (Centre-ville), 1000 FCFA (Zones résidentielles), 1500 FCFA (Zones étendues). Livraison gratuite pour les commandes de 5000 FCFA et plus.'
        },
        {
          question: 'Puis-je modifier ou annuler ma commande ?',
          answer: 'Vous pouvez modifier ou annuler votre commande dans les 5 minutes suivant la confirmation. Au-delà, si la préparation a commencé, des frais peuvent s\'appliquer. Contactez-nous immédiatement via WhatsApp.'
        }
      ]
    },
    {
      title: 'Paiement',
      icon: CreditCard,
      color: 'bg-green-100 text-green-600',
      questions: [
        {
          question: 'Quels modes de paiement acceptez-vous ?',
          answer: 'Nous acceptons : Paiement à la livraison (espèces), Mobile Money (MTN MoMo, Orange Money), virement bancaire pour les commandes importantes, et paiement par carte pour les services traiteur. Le paiement à la livraison reste le plus populaire.'
        },
        {
          question: 'Puis-je payer par Mobile Money ?',
          answer: 'Oui ! Nous acceptons MTN Mobile Money et Orange Money. Vous pouvez effectuer le transfert lors de la commande et nous envoyer la capture d\'écran via WhatsApp. C\'est sécurisé et pratique.'
        },
        {
          question: 'Y a-t-il une commande minimum ?',
          answer: 'Oui, notre commande minimum est de 1000 FCFA. Cela nous permet de maintenir la qualité du service et de couvrir les frais de livraison.'
        },
        {
          question: 'Proposez-vous des remises ou promotions ?',
          answer: 'Nous proposons régulièrement des promotions spéciales, des remises pour les clients fidèles, et des offres pour les commandes en groupe. Suivez-nous sur nos réseaux sociaux ou demandez à être ajouté à notre liste de diffusion WhatsApp.'
        }
      ]
    },
    {
      title: 'Menu & Ingrédients',
      icon: Users,
      color: 'bg-orange-100 text-orange-600',
      questions: [
        {
          question: 'Vos plats sont-ils authentiquement camerounais ?',
          answer: 'Absolument ! Tous nos plats sont préparés selon les recettes traditionnelles camerounaises transmises par nos grand-mères. Nous utilisons des ingrédients locaux de qualité et respectons les méthodes de cuisson ancestrales.'
        },
        {
          question: 'Proposez-vous des options végétariennes ?',
          answer: 'Oui, nous avons plusieurs options végétariennes : Koki de haricots, Riz au coco, certains accompagnements, et nous pouvons adapter certains plats. Précisez vos préférences lors de la commande.'
        },
        {
          question: 'Gérez-vous les allergies alimentaires ?',
          answer: 'Nous prenons les allergies très au sérieux. Chaque plat de notre menu indique les allergènes principaux. Informez-nous de vos allergies lors de la commande, nous adapterons la préparation ou vous conseillerons des alternatives.'
        },
        {
          question: 'Puis-je personnaliser le niveau d\'épices ?',
          answer: 'Bien sûr ! Nos plats sont notés de 0 à 5 piments selon leur niveau d\'épices. Vous pouvez demander moins épicé, plus épicé, ou sans piment. Nos chefs s\'adapteront à vos préférences.'
        },
        {
          question: 'Proposez-vous des portions pour enfants ?',
          answer: 'Nos portions "petites" conviennent généralement aux enfants. Nous pouvons aussi adapter certains plats (moins épicés, portions réduites). Demandez conseil à notre équipe lors de votre commande.'
        }
      ]
    },
    {
      title: 'Services Spéciaux',
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
      questions: [
        {
          question: 'Proposez-vous des services traiteur ?',
          answer: 'Oui ! Nous offrons des services traiteur complets pour mariages, anniversaires, événements d\'entreprise, etc. Nos packages vont de 2500 FCFA/personne (basique) à des formules VIP personnalisées. Contactez-nous pour un devis.'
        },
        {
          question: 'Qu\'est-ce que le service de préparation de repas ?',
          answer: 'Notre service "Meal Prep" vous permet de recevoir des repas préparés pour toute la semaine. Plans disponibles : 7, 14, ou 21 repas/semaine, avec emballage portion contrôlée et livraison hebdomadaire. Idéal pour les professionnels occupés.'
        },
        {
          question: 'Exportez-vous vers d\'autres pays ?',
          answer: 'Oui, nous exportons des produits camerounais (épices, ingrédients, produits transformés) vers l\'Europe, l\'Amérique du Nord et l\'Asie. Nous gérons toute la logistique et la documentation. Délais : 7-28 jours selon la destination.'
        },
        {
          question: 'Proposez-vous la conservation d\'aliments ?',
          answer: 'Nous offrons des services de conservation traditionnelle : séchage de fruits/légumes, fumage de poisson/viande, fermentation, emballage sous vide. Parfait pour préserver vos récoltes ou préparer des provisions.'
        }
      ]
    },
    {
      title: 'Support Client',
      icon: MessageCircle,
      color: 'bg-red-100 text-red-600',
      questions: [
        {
          question: 'Quels sont vos horaires d\'ouverture ?',
          answer: 'Nous sommes ouverts 7 jours sur 7, de 8h00 à 22h00. Notre service client via WhatsApp est disponible pendant ces heures. Pour les urgences, vous pouvez laisser un message, nous répondrons dès l\'ouverture.'
        },
        {
          question: 'Comment vous contacter ?',
          answer: 'WhatsApp : +237 6 99 80 82 60 (recommandé), Téléphone : +237 6 99 80 82 60, Email : info@bueadelights.com. WhatsApp est notre canal préféré pour une réponse rapide et efficace.'
        },
        {
          question: 'Que faire si je ne suis pas satisfait ?',
          answer: 'Votre satisfaction est notre priorité ! En cas de problème, contactez-nous immédiatement via WhatsApp avec des photos si nécessaire. Nous offrons un remplacement gratuit, un remboursement, ou un avoir selon la situation.'
        },
        {
          question: 'Puis-je visiter vos locaux ?',
          answer: 'Nos cuisines sont situées à Buea. Les visites sont possibles sur rendez-vous pour des raisons d\'hygiène et de sécurité. Contactez-nous via WhatsApp pour planifier une visite, particulièrement si vous envisagez nos services traiteur.'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap(category => category.questions);

  return (
    <>
      <Helmet>
        <title>FAQ - Questions Fréquentes | BueaDelights</title>
        <meta name="description" content="Trouvez les réponses à toutes vos questions sur nos services, livraison, paiement, menu et plus encore." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-4">{t('faq.title')}</h1>
              <p className="text-xl text-purple-100">{t('faq.subtitle')}</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Quick Contact */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Vous ne trouvez pas votre réponse ?
              </h2>
              <p className="text-gray-600 mb-6">
                Notre équipe est là pour vous aider ! Contactez-nous directement.
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
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone size={20} />
                  <span>Appeler</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                      <category.icon size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = faqCategories
                      .slice(0, categoryIndex)
                      .reduce((sum, cat) => sum + cat.questions.length, 0) + questionIndex;
                    
                    const isOpen = openItems.has(globalIndex);

                    return (
                      <div key={questionIndex} className="border-b border-gray-200 last:border-b-0">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={20} className="text-gray-500" />
                            </motion.div>
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4">
                                <p className="text-gray-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-forest-600 to-forest-700 rounded-xl text-white p-8 mt-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Encore des questions ?
            </h2>
            <p className="text-forest-100 mb-6 max-w-2xl mx-auto">
              Notre équipe de support client est disponible de 8h00 à 22h00, 7 jours sur 7. 
              Nous répondons généralement en moins de 5 minutes sur WhatsApp !
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Clock size={20} className="text-forest-200" />
              <span className="text-forest-100">
                Disponible maintenant • Réponse rapide garantie
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;