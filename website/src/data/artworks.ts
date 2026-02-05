import { basePath } from '@/lib/config';

export interface Artwork {
  id: string;
  title: string;
  slug: string;
  year: string;
  description: string;
  image: string;
  category: 'sculpture' | 'conceptual';
  featured?: boolean;
}

const img = (path: string) => `${basePath}${path}`;

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Tangled Mind',
    slug: 'tangled-mind',
    year: '2025',
    description: 'A meditation on the complexity of human thought. Intricate forms weave through space, capturing the beautiful chaos of consciousness—where clarity and confusion dance in eternal embrace.',
    image: img('/images/artwork/Tangled_Mind.jpg'),
    category: 'sculpture',
    featured: true,
  },
  {
    id: '2',
    title: 'I Eat Attention',
    slug: 'i-eat-attention',
    year: '2025',
    description: 'In an age of infinite distraction, attention becomes currency. This piece embodies the insatiable hunger of modern media—a predator reflecting your own gaze back at you.',
    image: img('/images/artwork/I_Eat_Attention.jpg'),
    category: 'sculpture',
    featured: true,
  },
  {
    id: '3',
    title: 'Veins of Eternity',
    slug: 'veins-of-eternity',
    year: '2025',
    description: 'Life flows through all things. This sculptural network traces the invisible connections between us—arteries of existence rendered in permanent form.',
    image: img('/images/artwork/Veins_of_Eternity.jpg'),
    category: 'sculpture',
    featured: true,
  },
  {
    id: '4',
    title: 'Would You Kill Baby Hitler',
    slug: 'would-you-kill-baby-hitler',
    year: '2025',
    description: 'The ultimate moral paradox made physical. A provocative exploration of ethics, determinism, and the weight of impossible choices.',
    image: img('/images/artwork/Would_You_Kill_Baby_Hitler.jpg'),
    category: 'conceptual',
    featured: true,
  },
  {
    id: '5',
    title: 'Alien Intelligence',
    slug: 'alien-intelligence',
    year: '2025',
    description: 'What does consciousness look like from the outside? This piece imagines intelligence as something both familiar and utterly foreign—an entity observing humanity.',
    image: img('/images/artwork/Alien_Intelligence.jpg'),
    category: 'sculpture',
  },
  {
    id: '6',
    title: 'Bubble Baba',
    slug: 'bubble-baba',
    year: '2025',
    description: 'Childhood wonder preserved. Spherical forms float in frozen motion, capturing the ephemeral joy of soap bubbles made permanent.',
    image: img('/images/artwork/Bubble_Baba.jpg'),
    category: 'sculpture',
  },
  {
    id: '7',
    title: 'Cherry Cherry Lady',
    slug: 'cherry-cherry-lady',
    year: '2025',
    description: 'Sweetness and seduction. A pop-art inspired sculpture that celebrates desire in its most playful, unapologetic form.',
    image: img('/images/artwork/Cherry_Cherry_Lady.jpg'),
    category: 'sculpture',
  },
  {
    id: '8',
    title: 'Running Thoughts',
    slug: 'running-thoughts',
    year: '2025',
    description: 'Ideas never stand still. This kinetic piece captures the perpetual motion of the creative mind—thoughts racing, colliding, evolving.',
    image: img('/images/artwork/Running_Thoughts.jpg'),
    category: 'conceptual',
  },
  {
    id: '9',
    title: 'I Was Born Champion',
    slug: 'i-was-born-champion',
    year: '2025',
    description: 'Victory is not achieved—it is inherent. A triumphant statement on self-belief, rendered in the eternal gleam of champions.',
    image: img('/images/artwork/I_Was_Born_Champion.jpg'),
    category: 'sculpture',
  },
  {
    id: '10',
    title: 'The Canvas Remembers',
    slug: 'the-canvas-remembers',
    year: '2025',
    description: 'Every surface holds memory. This piece explores the relationship between artist and medium—the marks we leave and the stories materials tell.',
    image: img('/images/artwork/The_Canvas_Remembers.jpg'),
    category: 'conceptual',
  },
  {
    id: '11',
    title: "What's Behind the Simulation",
    slug: 'whats-behind-the-simulation',
    year: '2025',
    description: 'Are we players or played? A meditation on reality, perception, and the thin membrane between what we see and what truly exists.',
    image: img('/images/artwork/Whats_Behind_The_Simulation.png'),
    category: 'conceptual',
  },
  {
    id: '12',
    title: 'Jesus',
    slug: 'jesus',
    year: '2025',
    description: 'Divinity meets modernity. The most recognized figure in human history, reimagined through the lens of contemporary materialism.',
    image: img('/images/artwork/Jesus.jpg'),
    category: 'sculpture',
  },
  {
    id: '13',
    title: 'Reiß Dich Zusammen',
    slug: 'reiss-dich-zusammen',
    year: '2025',
    description: '"Pull yourself together." A German imperative made physical—the tension between falling apart and holding on, captured in form.',
    image: img('/images/artwork/Reiss_Dich_Zusammen.jpg'),
    category: 'conceptual',
  },
];

export const featuredArtworks = artworks.filter(a => a.featured);
