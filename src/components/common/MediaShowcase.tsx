import React from 'react';
import { motion } from 'framer-motion';
import { Play, Image, Video, FileText } from 'lucide-react';

/**
 * Media Showcase Component
 * 
 * Displays all media files from the public folder with proper categorization
 * This helps ensure all media is being used appropriately
 */
const MediaShowcase: React.FC = () => {
  const mediaCategories = [
    {
      title: 'Food & Beverage Images',
      icon: Image,
      items: [
        {
          name: 'Ndolé Main',
          path: '/image/ndole_main.webp',
          description: 'Traditional Cameroonian ndolé dish',
          category: 'Traditional Dishes'
        },
        {
          name: 'Pain Panini',
          path: '/image/pain panini.jpeg',
          description: 'Fresh homemade bread',
          category: 'Bread & Pastries'
        },
        {
          name: 'Brioche Maison',
          path: '/image/brioche-maison.jpeg',
          description: 'Homemade brioche bread',
          category: 'Bread & Pastries'
        },
        {
          name: 'Cake Maison',
          path: '/image/cake maison.jpeg',
          description: 'Homemade cake',
          category: 'Desserts'
        },
        {
          name: 'Cake',
          path: '/image/cake.jpeg',
          description: 'Traditional cake',
          category: 'Desserts'
        },
        {
          name: 'Cake 2',
          path: '/image/cake2.jpeg',
          description: 'Another cake variety',
          category: 'Desserts'
        },
        {
          name: 'Croquette',
          path: '/image/croquette.jpeg',
          description: 'Plantain croquettes',
          category: 'Snacks'
        },
        {
          name: 'Fufu and Eru',
          path: '/image/fufu and erru.jpeg',
          description: 'Traditional fufu with eru sauce',
          category: 'Traditional Dishes'
        },
        {
          name: 'Chips de Plantain',
          path: '/image/Chips de plantain.jpeg',
          description: 'Crispy plantain chips',
          category: 'Snacks'
        },
        {
          name: 'Beignet Sucré',
          path: '/image/beignet sucre.jpg',
          description: 'Sweet sugar beignets',
          category: 'Desserts'
        },
        {
          name: 'Croissant',
          path: '/image/crousant.jpg',
          description: 'Buttery croissant',
          category: 'Bread & Pastries'
        },
        {
          name: 'Hamburger Camerounais',
          path: '/image/humborgue.jpg',
          description: 'Local-style hamburger',
          category: 'Grilled Specialties'
        },
        {
          name: 'Pizza Camerounaise',
          path: '/image/piza.jpg',
          description: 'Cameroonian-style pizza',
          category: 'Grilled Specialties'
        },
        {
          name: 'Pizza Variant',
          path: '/image/pizza 2.pg.jpg',
          description: 'Another pizza variety',
          category: 'Grilled Specialties'
        },
        {
          name: 'Sauce Pili-Pili',
          path: '/image/pili pili.jpg',
          description: 'Spicy pili-pili sauce',
          category: 'Condiments & Sauces'
        },
        {
          name: 'Pack Spécial',
          path: '/image/packages 12 mille facfa.jpg',
          description: 'Special family package deal',
          category: 'Packages & Deals'
        }
      ]
    },
    {
      title: 'Beverage Images',
      icon: Image,
      items: [
        {
          name: 'Jus de Mague',
          path: '/image/jus de mague.jpeg',
          description: 'Traditional mague juice',
          category: 'Traditional Drinks'
        },
        {
          name: 'Kossam',
          path: '/image/kossam.jpeg',
          description: 'Traditional fermented milk drink',
          category: 'Traditional Drinks'
        },
        {
          name: 'Jus New',
          path: '/image/jus-new.jpeg',
          description: 'Fresh fruit juice',
          category: 'Fresh Juices'
        },
        {
          name: 'Jus Cocktail',
          path: '/image/jus-cocktail.jpeg',
          description: 'Mixed fruit cocktail',
          category: 'Cocktails'
        },
        {
          name: 'Jus',
          path: '/image/jus.jpeg',
          description: 'Traditional juice',
          category: 'Traditional Drinks'
        },
        {
          name: 'Jus Cocktail 2',
          path: '/image/jus-cocktail2.jpeg',
          description: 'Another cocktail variety',
          category: 'Cocktails'
        },
        {
          name: 'Jus Baobab 2',
          path: '/image/jus-baoba2.jpeg',
          description: 'Baobab fruit juice',
          category: 'Superfruit Drinks'
        },
        {
          name: 'Jus Folere',
          path: '/image/jus-folere.jpeg',
          description: 'Traditional ginger drink',
          category: 'Traditional Drinks'
        }
      ]
    },
    {
      title: 'Team & Admin Images',
      icon: Image,
      items: [
        {
          name: 'Admin Carol',
          path: '/image/admin-carol.jpeg',
          description: 'Caroline Folefack Viviane - Founder',
          category: 'Team'
        },
        {
          name: 'Admin Caro 2',
          path: '/image/admin-caro2.jpeg',
          description: 'Caroline in kitchen',
          category: 'Team'
        },
        {
          name: 'Admin Caro 3',
          path: '/image/admin-caro3.jpeg',
          description: 'Caroline cooking',
          category: 'Team'
        }
      ]
    },
    {
      title: 'Payment Methods',
      icon: Image,
      items: [
        {
          name: 'MTN Money',
          path: '/image/mtn money.jpeg',
          description: 'MTN Mobile Money payment',
          category: 'Payment'
        },
        {
          name: 'Orange Money',
          path: '/image/orange money.png',
          description: 'Orange Money payment',
          category: 'Payment'
        }
      ]
    },
    {
      title: 'Flyer Images',
      icon: Image,
      items: [
        {
          name: 'Ananas Flyer',
          path: '/flyer/ananas.jpeg',
          description: 'Pineapple juice promotion',
          category: 'Promotions'
        },
        {
          name: 'Baoba Flyer',
          path: '/flyer/baoba.jpeg',
          description: 'Baobab juice promotion',
          category: 'Promotions'
        },
        {
          name: 'Cassy Flyer',
          path: '/flyer/cassy.jpeg',
          description: 'Cassy traditional dish promotion',
          category: 'Promotions'
        },
        {
          name: 'Cocktail Flyer',
          path: '/flyer/cocktail.jpeg',
          description: 'Fruit cocktail promotion',
          category: 'Promotions'
        },
        {
          name: 'Flyser',
          path: '/flyer/flyser.jpeg',
          description: 'General menu promotion',
          category: 'Promotions'
        },
        {
          name: 'Flyser 2',
          path: '/flyer/flyser2.jpeg',
          description: 'Special offers promotion',
          category: 'Promotions'
        }
      ]
    },
    {
      title: 'Avatar Images',
      icon: Image,
      items: [
        {
          name: 'Avatar 1',
          path: '/avatars/avatar1.jpg',
          description: 'Team member avatar',
          category: 'Team'
        },
        {
          name: 'Avatar 2',
          path: '/avatars/avatar2.jpg',
          description: 'Team member avatar',
          category: 'Team'
        },
        {
          name: 'Avatar 3',
          path: '/avatars/avatar3.png',
          description: 'Team member avatar',
          category: 'Team'
        },
        {
          name: 'Girls',
          path: '/avatars/girls.jpeg',
          description: 'Team photo',
          category: 'Team'
        },
        {
          name: 'Avatar',
          path: '/avatars/avartar.jpeg',
          description: 'Default avatar',
          category: 'Team'
        }
      ]
    },
    {
      title: 'Logo Images',
      icon: Image,
      items: [
        {
          name: 'Logo Caroline BBY',
          path: '/logo/logo_caroline_bby.png',
          description: 'Main business logo',
          category: 'Branding'
        },
        {
          name: 'Logo',
          path: '/logo/logo.png',
          description: 'Alternative logo',
          category: 'Branding'
        },
        {
          name: 'Icon 192x192',
          path: '/image/icon-192x192.png',
          description: 'PWA icon',
          category: 'Branding'
        }
      ]
    },
    {
      title: 'Videos',
      icon: Video,
      items: [
        {
          name: 'Product Video',
          path: '/videos/product.mp4',
          description: 'Main product showcase video',
          category: 'Marketing'
        },
        {
          name: 'Product Video 2',
          path: '/videos/product2.mp4',
          description: 'Secondary product video',
          category: 'Marketing'
        },
        {
          name: 'Product Video 3',
          path: '/videos/product3.mp4',
          description: 'Additional product video',
          category: 'Marketing'
        },
        {
          name: 'Pain Video',
          path: '/videos/pain.mp4',
          description: 'Bread making process',
          category: 'Process'
        },
        {
          name: 'Beignet Video',
          path: '/videos/beignet.mp4',
          description: 'Beignet making process',
          category: 'Process'
        },
        {
          name: 'Beignet Video 2',
          path: '/videos/biegnet2.mp4',
          description: 'Alternative beignet video',
          category: 'Process'
        }
      ]
    },
    {
      title: 'Documents',
      icon: FileText,
      items: [
        {
          name: 'Cahier de Charges',
          path: '/doc/Cahier de Charges - BueaDelights Site Vitrine Officiel.pdf',
          description: 'Official business requirements document',
          category: 'Business'
        }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Media Library Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete inventory of all media files used across the BueaDelights application
          </p>
        </motion.div>

        <div className="space-y-12">
          {mediaCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <category.icon className="text-golden-500" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                    className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    {category.title === 'Videos' ? (
                      <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
                        <video
                          src={item.path}
                          className="w-full h-full object-cover"
                          muted
                          loop
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="text-white bg-black bg-opacity-50 rounded-full p-2" size={32} />
                        </div>
                      </div>
                    ) : category.title === 'Documents' ? (
                      <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                        <FileText className="text-gray-500" size={48} />
                      </div>
                    ) : (
                      <img
                        src={item.path}
                        alt={item.name}
                        className="w-full aspect-square object-cover rounded-lg mb-3"
                        onError={(e) => {
                          e.currentTarget.src = '/image/placeholder.jpg';
                        }}
                      />
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.description}
                      </p>
                      <span className="inline-block bg-golden-100 text-golden-800 text-xs px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
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
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Media Usage Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-golden-500">
                  {mediaCategories.reduce((acc, cat) => acc + cat.items.length, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Files</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">
                  {mediaCategories.filter(cat => cat.title.includes('Images')).reduce((acc, cat) => acc + cat.items.length, 0)}
                </div>
                <div className="text-sm text-gray-600">Images</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500">
                  {mediaCategories.find(cat => cat.title === 'Videos')?.items.length || 0}
                </div>
                <div className="text-sm text-gray-600">Videos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-500">
                  {mediaCategories.find(cat => cat.title === 'Documents')?.items.length || 0}
                </div>
                <div className="text-sm text-gray-600">Documents</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MediaShowcase;
