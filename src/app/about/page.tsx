'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { bio, siteConfig } from '@/data/content';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-sm font-mono text-[var(--text-secondary)] mb-4 block">
                ABOUT
              </span>
              <h1 className="text-display font-bold mb-6">
                Antonius Link
              </h1>
              <p className="text-2xl text-[var(--text-secondary)] mb-8">
                {bio.tagline}
              </p>
              <div className="flex gap-4">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--surface)] border border-[var(--border)] rounded-full hover:bg-[var(--surface-secondary)] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--surface)] border border-[var(--border)] rounded-full hover:bg-[var(--surface-secondary)] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/hero-antonius.jpg"
                alt="Antonius Link"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-neutral dark:prose-invert max-w-none"
          >
            {bio.full.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed mb-6 text-[var(--text-secondary)]">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-title font-bold mb-16 text-center">The Journey</h2>
          <div className="space-y-12">
            {[
              { year: '2018', title: 'Founded HYGH', desc: 'Started the mission to democratize outdoor advertising in Berlin.' },
              { year: '2021', title: 'HYGH Expansion', desc: 'Expanded to seven German cities. Growing the network.' },
              { year: '2023', title: '€21.5M Raised', desc: 'Series funding to accelerate pan-DACH expansion.' },
              { year: '2025', title: 'First Exhibition', desc: 'Debuted sculpture collection. Art becomes tangible.' },
              { year: '2026', title: 'Edition One', desc: 'Co-founded Edition One. Merging business with artistic vision.' },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="text-3xl font-bold text-[var(--text-secondary)] w-24 flex-shrink-0">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10">
            Always interested in new ideas, collaborations, and conversations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
