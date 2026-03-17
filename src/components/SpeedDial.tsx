'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Share2, Bookmark, MessageSquare, Plus, X } from 'lucide-react';

interface SpeedDialItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
}

export const SpeedDial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Get the contact section
    contactSectionRef.current = document.getElementById('contacto');

    const handleScroll = () => {
      if (!contactSectionRef.current) return;

      const contactRect = contactSectionRef.current.getBoundingClientRect();
      const isInContactSection = contactRect.top < window.innerHeight;

      // Hide FAB when contact section is visible
      setIsVisible(!isInContactSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items: SpeedDialItem[] = [
    {
      id: 'email',
      label: 'Email',
      icon: <Mail size={20} />,
      action: () => {
        window.location.href = 'mailto:cesar.dbastidas@gmail.com';
        setIsOpen(false);
      },
    },
    {
      id: 'share',
      label: 'Share',
      icon: <Share2 size={20} />,
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Check out my portfolio',
            url: window.location.href,
          });
        }
        setIsOpen(false);
      },
    },
    {
      id: 'save',
      label: 'Save',
      icon: <Bookmark size={20} />,
      action: () => {
        toast.success('Portfolio saved!');
        setIsOpen(false);
      },
    },
    {
      id: 'message',
      label: 'Message',
      icon: <MessageSquare size={20} />,
      action: () => {
        const element = document.getElementById('contacto');
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 0 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: -(index + 1) * 70,
      transition: {
        delay: index * 0.08,
        duration: 0.3,
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    }),
    exit: { opacity: 0, scale: 0.5, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          className="fixed bottom-8 right-8 z-50 hidden lg:block"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Speed Dial Items */}
          <AnimatePresence>
            {isOpen &&
              items.map((item, index) => (
                <motion.button
                  key={item.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={item.action}
                  className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-white border-3 border-black dark:bg-accent dark:border-accent dark:text-accent-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center group"
                  aria-label={item.label}
                >
                  {item.icon}
                  <span className="absolute right-full mr-3 px-3 py-2 bg-black text-white dark:bg-accent dark:text-accent-foreground font-serif text-xs uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {item.label}
                  </span>
                </motion.button>
              ))}
          </AnimatePresence>

          {/* Main FAB Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 rounded-full bg-white border-4 border-black dark:bg-accent dark:border-accent dark:text-accent-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center font-serif font-bold text-lg uppercase tracking-wider"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Speed dial menu"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div
                  key="plus"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Backdrop Click Handler */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
