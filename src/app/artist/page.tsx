'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { artworks, Artwork } from '@/data/artworks';

const categories = [
  { id: 'all', label: 'All Works' },
  { id: 'sculpture', label: 'Sculptures' },
  { id: 'chrome', label: 'Chrome' },
  { id: 'conceptual', label: 'Conceptual' },
];

export default function ArtistPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArtworks = activeCategory === 'all'
    ? artworks
    : artworks.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-mono text-[var(--text-secondary)] mb-4 block"
          >
            THE ART OF
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display font-bold mb-8"
          >
            ANTONIUS LINK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--text-secondary)] max-w-2xl"
          >
            Every piece tells a story of obsession, precision, and the relentless
            pursuit of meaning in material form. Chrome becomes canvas. Metal becomes
            meditation.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-[var(--foreground)] text-[var(--background)]'
                    : 'bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--text-secondary)]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArtworks.map((artwork, i) => (
              <ArtworkCard key={artwork.id} artwork={artwork} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commission CTA */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-title font-bold mb-4">Commission Your Own</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Every masterpiece begins with a vision. Let's bring yours to life.
          </p>
          <a
            href="https://editionone.art/your-edition"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Commission
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}

function ArtworkCard({ artwork, index }: { artwork: Artwork; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/artist/${artwork.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-[var(--surface)]">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <h3 className="font-semibold text-lg group-hover:opacity-70 transition-opacity">
          {artwork.title}
        </h3>
      </Link>
    </motion.div>
  );
}
