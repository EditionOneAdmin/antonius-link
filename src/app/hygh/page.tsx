'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { hyghContent } from '@/data/content';

export default function HyghPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-mono text-[var(--text-secondary)] mb-4 block"
          >
            01 — TECHNOLOGY
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display font-bold mb-4"
          >
            HYGH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-[var(--text-secondary)]"
          >
            {hyghContent.role}
          </motion.p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-headline font-light leading-relaxed mb-8"
          >
            {hyghContent.tagline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--text-secondary)] leading-relaxed"
          >
            {hyghContent.vision}
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 px-6 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8"
          >
            {hyghContent.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-bold mb-2 chrome-text">
                  {stat.value}
                </div>
                <div className="text-[var(--text-secondary)] text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 px-6">
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
              Outdoor advertising was broken.
            </h3>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {hyghContent.problem}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-sm font-mono text-[var(--text-secondary)] mb-4 block">
              THE SOLUTION
            </span>
            <h3 className="text-title font-bold mb-6">
              HYGH changed everything.
            </h3>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {hyghContent.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Networks */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-[var(--text-secondary)] mb-4 block text-center"
          >
            THE NETWORKS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-title font-bold mb-12 text-center"
          >
            Seven Networks. One Platform.
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hyghContent.networks?.map((network, i) => (
              <motion.div
                key={network.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[var(--background)] rounded-2xl border border-[var(--border)]"
              >
                <h3 className="text-lg font-bold mb-2">{network.name}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{network.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-title font-bold mb-12 text-center">
            What Makes HYGH Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Programmatic Booking',
                desc: 'Book and deploy campaigns in minutes, not weeks. Real-time availability. No agencies required.',
              },
              {
                title: 'Hyperlocal Precision',
                desc: 'Target by city, district, or specific screen. Reach your audience exactly where they are.',
              },
              {
                title: '100% Dynamic',
                desc: 'Full-motion video. Real-time content updates. Analytics that matter. Modern advertising for modern brands.',
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[var(--surface)] rounded-2xl border border-[var(--border)]"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-secondary)]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 px-6 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-title font-bold mb-8"
          >
            Live in 15 German Cities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] leading-relaxed"
          >
            Berlin · Hamburg · Frankfurt · Köln · München · Düsseldorf · Leipzig · Dresden · Essen · Dortmund · Stuttgart · Hannover · Bremen · Wiesbaden · Tegernsee
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline font-bold mb-6">
            Ready to Go HYGH?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10">
            Join thousands of brands already transforming their outdoor advertising.
          </p>
          <a
            href={hyghContent.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Visit hygh.tech
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
