import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, X } from 'lucide-react';

/**
 * Video Showcase Component
 * 
 * Displays all available videos from the public folder
 */
const VideoShowcase: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const videos = [
    {
      id: 'product',
      title: 'Produits BueaDelights',
      description: 'Découvrez nos délicieux produits camerounais',
      path: '/videos/product.mp4',
      thumbnail: '/image/admin-carol.jpeg',
      category: 'Marketing'
    },
    {
      id: 'product2',
      title: 'Nos Spécialités',
      description: 'Présentation de nos plats signature',
      path: '/videos/product2.mp4',
      thumbnail: '/image/admin-caro2.jpeg',
      category: 'Marketing'
    },
    {
      id: 'product3',
      title: 'Cuisine Traditionnelle',
      description: 'Processus de préparation traditionnelle',
      path: '/videos/product3.mp4',
      thumbnail: '/image/admin-caro3.jpeg',
      category: 'Process'
    },
    {
      id: 'pain',
      title: 'Fabrication du Pain',
      description: 'Processus de fabrication du pain maison',
      path: '/videos/pain.mp4',
      thumbnail: '/image/pain panini.jpeg',
      category: 'Process'
    },
    {
      id: 'beignet',
      title: 'Préparation des Beignets',
      description: 'Fabrication traditionnelle des beignets',
      path: '/videos/beignet.mp4',
      thumbnail: '/image/croquette.jpeg',
      category: 'Process'
    },
    {
      id: 'beignet2',
      title: 'Beignets Artisanaux',
      description: 'Techniques de préparation des beignets',
      path: '/videos/biegnet2.mp4',
      thumbnail: '/image/croquette.jpeg',
      category: 'Process'
    }
  ];

  const handleVideoSelect = (videoPath: string) => {
    setSelectedVideo(videoPath);
    setIsPlaying(true);
    setIsMuted(true);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Découvrez Notre Cuisine en Vidéo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Regardez nos vidéos pour découvrir le processus de préparation de nos plats authentiques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleVideoSelect(video.path)}
            >
              <div className="relative aspect-video bg-gray-200">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/image/admin-carol.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4">
                    <Play className="text-gray-800" size={32} />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {video.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleCloseVideo}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <video
                  src={selectedVideo}
                  className="w-full h-full object-cover"
                  autoPlay={isPlaying}
                  muted={isMuted}
                  loop
                  controls={false}
                />
                
                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={togglePlayPause}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="text-white hover:text-gray-300 transition-colors">
                      <Maximize2 size={24} />
                    </button>
                    <button
                      onClick={handleCloseVideo}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Notre Engagement Qualité
            </h3>
            <p className="text-gray-600">
              Chaque vidéo montre notre engagement envers la qualité et la tradition. 
              Nous préparons chaque plat avec amour et respect des recettes ancestrales.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
