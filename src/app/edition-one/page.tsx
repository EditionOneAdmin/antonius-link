'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { editionOneContent } from '@/data/content';
import { featuredArtworks } from '@/data/artworks';

export default function EditionOnePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-amber-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-mono text-[var(--text-secondary)] mb-4 block"
          >
            02 — ARTISTRY
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display font-bold mb-4"
          >
            EDITION ONE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-[var(--text-secondary)]"
          >
            {editionOneContent.role} · Est. Berlin
          </motion.p>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-headline font-light leading-relaxed italic"
          >
            "{editionOneContent.tagline}"
          </motion.blockquote>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono text-[var(--text-secondary)] mb-4 block">
              THE PROBLEM
            </span>
            <h3 className="text-title font-bold mb-6">
              Mass production killed the soul of art.
            </h3>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {editionOneContent.problem}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-sm font-mono text-[var(--text-secondary)] mb-4 block">
              THE ANSWER
            </span>
            <h3 className="text-title font-bold mb-6">
              Direct connection. Pure creation.
            </h3>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {editionOneContent.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Create */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-title font-bold mb-12 text-center">What We Create</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {editionOneContent.offerings.map((offering, i) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[var(--surface)] rounded-2xl border border-[var(--border)] hover-lift"
              >
                <h3 className="text-2xl font-bold mb-3">{offering.title}</h3>
                <p className="text-[var(--text-secondary)]">{offering.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-title font-bold">Selected Works</h2>
            <Link
              href="/artist"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredArtworks.map((artwork, i) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/artist/${artwork.slug}`} className="group block">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Collective */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-mono text-[var(--text-secondary)] mb-4 block">
            THE COLLECTIVE
          </span>
          <h2 className="text-title font-bold mb-12">Founded by Visionaries</h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {editionOneContent.collective.map((name) => (
              <div key={name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center mb-3 mx-auto">
                  <span className="text-2xl font-bold">{name.charAt(0)}</span>
                </div>
                <p className="font-medium">{name}</p>
                <p className="text-sm text-[var(--text-secondary)]">Co-Founder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline font-bold mb-6">
            Create Your Masterpiece
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10">
            Transform your vision into reality with our bespoke artistic services.
          </p>
          <a
            href={editionOneContent.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Commission Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
