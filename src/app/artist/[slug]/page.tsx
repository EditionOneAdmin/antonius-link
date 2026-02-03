import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artworks } from '@/data/artworks';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const artwork = artworks.find((a) => a.slug === slug);
  if (!artwork) return { title: 'Artwork Not Found' };
  
  return {
    title: `${artwork.title} | Antonius Link`,
    description: artwork.description,
  };
}

export default async function ArtworkPage({ params }: PageProps) {
  const { slug } = await params;
  const artwork = artworks.find((a) => a.slug === slug);
  
  if (!artwork) notFound();

  const currentIndex = artworks.findIndex((a) => a.slug === slug);
  const prevArtwork = artworks[currentIndex - 1];
  const nextArtwork = artworks[currentIndex + 1];

  return (
    <>
      {/* Back Link */}
      <div className="fixed top-24 left-6 z-30">
        <Link
          href="/artist"
          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-[var(--background)]/80 backdrop-blur-sm rounded-full border border-[var(--border)] hover:bg-[var(--surface)] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gallery
        </Link>
      </div>

      {/* Hero Image */}
      <section className="pt-20">
        <div className="relative h-[70vh] md:h-[80vh]">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-contain bg-[var(--surface)]"
            priority
          />
        </div>
      </section>

      {/* Artwork Details */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="md:col-span-2">
              <span className="text-sm font-mono text-[var(--text-secondary)] mb-2 block uppercase">
                {artwork.category}
              </span>
              <h1 className="text-headline font-bold mb-6">{artwork.title}</h1>
              <p className="text-xl leading-relaxed text-[var(--text-secondary)] mb-8">
                {artwork.description}
              </p>
            </div>

            {/* Metadata */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-mono text-[var(--text-secondary)] mb-1">Year</h3>
                <p className="font-medium">{artwork.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-mono text-[var(--text-secondary)] mb-1">Materials</h3>
                <p className="font-medium">{artwork.materials}</p>
              </div>
              <div>
                <h3 className="text-sm font-mono text-[var(--text-secondary)] mb-1">Availability</h3>
                <p className="font-medium">Price on request</p>
              </div>
              <a
                href="https://editionone.art/your-edition"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Inquire
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto flex justify-between">
          {prevArtwork ? (
            <Link
              href={`/artist/${prevArtwork.slug}`}
              className="group flex items-center gap-3"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <span className="text-xs text-[var(--text-secondary)] block">Previous</span>
                <span className="font-medium">{prevArtwork.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextArtwork ? (
            <Link
              href={`/artist/${nextArtwork.slug}`}
              className="group flex items-center gap-3 text-right"
            >
              <div>
                <span className="text-xs text-[var(--text-secondary)] block">Next</span>
                <span className="font-medium">{nextArtwork.title}</span>
              </div>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  );
}
