'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const WelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Trigger modal on page load
  useEffect(() => {
    console.log('WelcomeModal useEffect triggered');
    setIsOpen(true);
  }, []);

  // Close modal handler
  const closeModal = (): void => {
    console.log('Closing modal');
    setIsOpen(false);
  };

  console.log('WelcomeModal rendering, isOpen:', isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/70 backdrop-blur-lg pt-8 md:pt-12"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: 'easeOut', type: 'spring', stiffness: 120 }}
            className="relative max-w-lg w-full mx-4 bg-white/95 rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden border-4 border-blue-200/20"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Decorative Background Element */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 opacity-50" />

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <Icon icon="mdi:close" className="w-7 h-7" />
            </button>

            {/* Modal Content */}
            <div className="relative text-center">
              <div className="flex justify-center mb-6">
                <Icon icon="mdi:tractor" className="w-12 h-12 text-blue-600 animate-pulse" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif tracking-tight">
                Welcome to WIMA
              </h2>
              <p className="text-gray-700 mb-8 text-lg font-sans leading-relaxed">
                Discover cutting-edge mechanized solutions tailored for you. How can we empower your projects today?
              </p>
              <Link
                href="/equipment-hire"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={closeModal}
              >
                <Icon icon="mdi:tractor" className="w-6 h-6 mr-3" />
                Explore Equipment Rentals Near You
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;