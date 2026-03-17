'use client'

import React from 'react'
import { Mail, MessageSquare, Search, Heart, Share2, Plus } from 'lucide-react'
import { FloatingActionButton } from './ui/floating-action-button'
import { toast } from 'sonner'

export function FloatingActionButtonDemo() {
  const speedDialItems = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      onClick: () => toast.success('Email clicked'),
    },
    {
      id: 'message',
      icon: MessageSquare,
      label: 'Message',
      onClick: () => toast.success('Message clicked'),
    },
    {
      id: 'search',
      icon: Search,
      label: 'Search',
      onClick: () => toast.success('Search clicked'),
    },
    {
      id: 'like',
      icon: Heart,
      label: 'Like',
      onClick: () => toast.success('Like clicked'),
    },
    {
      id: 'share',
      icon: Share2,
      label: 'Share',
      onClick: () => toast.success('Share clicked'),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Newspaper-style header */}
      <header className="border-b-4 border-black bg-white px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-2 text-6xl font-black tracking-tight text-black">
            THE GAZETTE
          </h1>
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-black" />
            <p className="text-sm font-bold tracking-widest text-gray-800">
              EST. 2024
            </p>
          </div>
          <p className="mt-4 text-lg text-gray-700">
            Floating Action Button with Speed Dial
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <article className="space-y-6">
          <section>
            <h2 className="mb-3 text-2xl font-black uppercase tracking-tight text-black">
              Featured Interaction
            </h2>
            <div className="border-l-4 border-black pl-4">
              <p className="mb-3 text-base leading-relaxed text-gray-700">
                This floating action button features a newspaper-inspired design with
                a clean white background and bold black borders. Click the plus button
                in the bottom right to reveal a speed dial menu with various actions.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                The menu items appear with smooth animations and close automatically
                when you select an action. The design emphasizes clarity and classic
                typography, reminiscent of traditional newspaper layouts.
              </p>
            </div>
          </section>

          <section className="mt-12 space-y-3 border-t-2 border-black pt-8">
            <h2 className="text-2xl font-black uppercase tracking-tight text-black">
              Key Features
            </h2>
            <ul className="space-y-2 text-base text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold text-black">•</span>
                <span>Smooth spring animations with staggered menu items</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-black">•</span>
                <span>Rotating main button with bold newspaper aesthetic</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-black">•</span>
                <span>Black and white color scheme for classic elegance</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-black">•</span>
                <span>Customizable icons and labels for each action</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-black">•</span>
                <span>Click-outside to close menu</span>
              </li>
            </ul>
          </section>

          <section className="mt-12 space-y-3 border-t-2 border-black pt-8">
            <h2 className="text-2xl font-black uppercase tracking-tight text-black">
              Usage Example
            </h2>
            <pre className="overflow-x-auto rounded border-2 border-black bg-gray-50 p-4 text-xs text-black">
{`import { FloatingActionButton } from '@/components/ui/floating-action-button'
import { Plus, Mail, MessageSquare } from 'lucide-react'

export function MyComponent() {
  const items = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      onClick: () => console.log('Email'),
    },
    {
      id: 'message',
      icon: MessageSquare,
      label: 'Message',
      onClick: () => console.log('Message'),
    },
  ]

  return (
    <FloatingActionButton 
      mainIcon={Plus} 
      items={items}
    />
  )
}`}
            </pre>
          </section>
        </article>
      </main>

      {/* Floating Action Button */}
      <FloatingActionButton mainIcon={Plus} items={speedDialItems} />
    </div>
  )
}
