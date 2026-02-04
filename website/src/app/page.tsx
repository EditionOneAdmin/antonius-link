'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { featuredArtworks } from '@/data/artworks';
import { bio, hyghContent, editionOneContent } from '@/data/content';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-antonius.jpg"
            alt="Antonius Link"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-display font-bold tracking-tight mb-6"
          >
            ANTONIUS LINK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light tracking-wide text-white/90"
          >
            Entrepreneur · Artist · Visionary
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Intro Quote */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-headline font-light leading-relaxed"
          >
            {bio.quote}
          </motion.blockquote>
        </div>
      </section>

      {/* Two Worlds Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-title font-bold text-center mb-16"
          >
            Two Worlds, One Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* HYGH Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/hygh" className="group block">
                <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-10 hover-lift overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <span className="text-sm font-mono text-[var(--text-secondary)] mb-4 block">
                    01 — TECHNOLOGY
                  </span>
                  
                  <h3 className="text-4xl font-bold mb-2">HYGH</h3>
                  <p className="text-[var(--text-secondary)] mb-4">{hyghContent.role}</p>
                  
                  <p className="text-lg mb-6 leading-relaxed">
                    {hyghContent.tagline}
                  </p>
                  
                  <div className="flex gap-6 mb-8">
                    {hyghContent.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    Explore HYGH
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Edition One Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/edition-one" className="group block">
                <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-10 hover-lift overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <span className="text-sm font-mono text-[var(--text-secondary)] mb-4 block">
                    02 — ARTISTRY
                  </span>
                  
                  <h3 className="text-4xl font-bold mb-2">EDITION ONE</h3>
                  <p className="text-[var(--text-secondary)] mb-4">{editionOneContent.role} · Est. 2026</p>
                  
                  <p className="text-lg mb-8 leading-relaxed">
                    {editionOneContent.tagline}
                  </p>
                  
                  <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    Discover Edition One
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-32 px-6 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-mono text-[var(--text-secondary)] mb-2 block"
              >
                SELECTED WORKS
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-title font-bold"
              >
                The Art
              </motion.h2>
            </div>
            <Link
              href="/artist"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              View All Works
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtworks.map((artwork, i) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/artist/${artwork.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:opacity-70 transition-opacity">
                    {artwork.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/artist"
              className="inline-flex items-center gap-2 text-sm font-medium"
            >
              View All Works
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-headline font-bold mb-6"
          >
            Let's Create Something
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--text-secondary)] mb-10"
          >
            Whether it's a campaign, a commission, or a conversation—I'm always open to new possibilities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
