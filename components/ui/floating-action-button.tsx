'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SpeedDialItem {
  id: string
  icon: LucideIcon
  label: string
  onClick: () => void
  className?: string
}

interface FloatingActionButtonProps {
  mainIcon: LucideIcon
  items: SpeedDialItem[]
  onClick?: () => void
  className?: string
}

export function FloatingActionButton({
  mainIcon: MainIcon,
  items,
  onClick,
  className,
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMainClick = () => {
    setIsOpen(!isOpen)
    onClick?.()
  }

  const handleItemClick = (item: SpeedDialItem) => {
    item.onClick()
    setIsOpen(false)
  }

  return (
    <div className={cn('fixed bottom-8 right-8 z-50', className)}>
      {/* Speed Dial Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3"
          >
            {items.map((item, index) => {
              const ItemIcon = item.icon
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.08,
                      type: 'spring',
                      stiffness: 400,
                      damping: 25,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    y: 10,
                    transition: { duration: 0.15 },
                  }}
                  onClick={() => handleItemClick(item)}
                  className={cn(
                    'group relative flex items-center gap-3 rounded-full bg-black px-4 py-3 shadow-lg transition-all duration-300 hover:bg-gray-800 active:scale-95',
                    item.className
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs font-bold tracking-wide text-white">
                    {item.label}
                  </span>
                  <ItemIcon className="h-4 w-4 text-white" />
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-transparent"
            aria-label="Close menu"
          />
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={handleMainClick}
        initial={false}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-white shadow-xl transition-all duration-300 hover:shadow-2xl active:scale-95"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <MainIcon className="h-6 w-6 text-black" strokeWidth={3} />
      </motion.button>
    </div>
  )
}
