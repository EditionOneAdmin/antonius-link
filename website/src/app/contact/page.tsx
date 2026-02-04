'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/content';

export default function ContactPage() {
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
            CONTACT
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display font-bold mb-8"
          >
            Let's Talk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-[var(--text-secondary)] max-w-2xl"
          >
            Whether you're interested in collaboration, commissions, or just want to connect—I'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-title font-bold mb-6">Direct Contact</h2>
              <p className="text-[var(--text-secondary)] mb-8">
                For business inquiries, collaboration proposals, or art commissions—reach out directly.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-mono text-[var(--text-secondary)] mb-2">EMAIL</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xl font-medium link-underline"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-mono text-[var(--text-secondary)] mb-2">LOCATION</h3>
                <p className="text-xl font-medium">Berlin, Germany</p>
              </div>

              <div>
                <h3 className="text-sm font-mono text-[var(--text-secondary)] mb-2">SOCIAL</h3>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:opacity-70 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:opacity-70 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specific Inquiries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <h2 className="text-title font-bold mb-6">Specific Inquiries</h2>

            <div className="space-y-6">
              <a
                href="https://hygh.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover-lift"
              >
                <h3 className="text-lg font-bold mb-2">HYGH Advertising</h3>
                <p className="text-[var(--text-secondary)] mb-3">
                  Book digital out-of-home campaigns across Germany.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  Visit hygh.tech
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>

              <a
                href="https://editionone.art/your-edition"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover-lift"
              >
                <h3 className="text-lg font-bold mb-2">Art Commissions</h3>
                <p className="text-[var(--text-secondary)] mb-3">
                  Commission a custom sculpture or artwork through Edition One.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  Start Commission
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>

              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover-lift"
              >
                <h3 className="text-lg font-bold mb-2">Speaking & Media</h3>
                <p className="text-[var(--text-secondary)] mb-3">
                  Available for podcasts, conferences, and media appearances.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  Connect on LinkedIn
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-light"
          >
            "The best conversations start with a simple hello."
          </motion.p>
        </div>
      </section>
    </>
  );
}
