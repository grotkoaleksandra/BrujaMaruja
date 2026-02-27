export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  cover: Photo;
  photos: Photo[];
}

// Using picsum.photos placeholders — replace with real photos later
// Each seed produces a unique, consistent image

export const projects: Project[] = [
  {
    slug: "violet-reverie",
    title: "Violet Reverie",
    category: "Editorial",
    year: "2024",
    description:
      "A study in texture and color — brown wool against purple stockings, torn paper edges framing moments of quiet contemplation.",
    cover: {
      src: "https://picsum.photos/seed/vr-cover/800/1100",
      alt: "Model in brown blazer and purple tights, seated on white cube",
      width: 800,
      height: 1100,
    },
    photos: [
      {
        src: "https://picsum.photos/seed/vr-01/800/1000",
        alt: "Four-panel collage with torn paper edges",
        width: 800,
        height: 1000,
      },
      {
        src: "https://picsum.photos/seed/vr-02/800/1100",
        alt: "Overhead shot, model reading book cross-legged",
        width: 800,
        height: 1100,
      },
      {
        src: "https://picsum.photos/seed/vr-03/800/1100",
        alt: "Portrait, hand on neck, looking up",
        width: 800,
        height: 1100,
      },
      {
        src: "https://picsum.photos/seed/vr-04/1100/800",
        alt: "Reclining pose with crossed legs",
        width: 1100,
        height: 800,
      },
      {
        src: "https://picsum.photos/seed/vr-05/800/1100",
        alt: "Seated on cube, legs crossed, looking away",
        width: 800,
        height: 1100,
      },
    ],
  },
  {
    slug: "blue-mask",
    title: "Blue Mask",
    category: "Fine Art",
    year: "2024",
    description:
      "Dramatic studio lighting sculpts the human form against deep teal — identity hidden, vulnerability exposed.",
    cover: {
      src: "https://picsum.photos/seed/bm-cover/800/1100",
      alt: "Figure in balaclava, dramatic blue lighting from behind",
      width: 800,
      height: 1100,
    },
    photos: [
      {
        src: "https://picsum.photos/seed/bm-01/800/1100",
        alt: "Back muscles illuminated, balaclava portrait",
        width: 800,
        height: 1100,
      },
      {
        src: "https://picsum.photos/seed/bm-02/800/1200",
        alt: "Full seated figure, silhouette against blue",
        width: 800,
        height: 1200,
      },
      {
        src: "https://picsum.photos/seed/bm-03/800/1100",
        alt: "Close-up, eyes through balaclava",
        width: 800,
        height: 1100,
      },
    ],
  },
  {
    slug: "ember",
    title: "Ember",
    category: "Fashion",
    year: "2024",
    description:
      "Warm orange glow meets sharp silhouettes. High fashion in high contrast — the body as architecture.",
    cover: {
      src: "https://picsum.photos/seed/em-cover/800/1100",
      alt: "Model crouching against orange backdrop, looking over shoulder",
      width: 800,
      height: 1100,
    },
    photos: [
      {
        src: "https://picsum.photos/seed/em-01/800/1100",
        alt: "Crouching from behind, orange glow",
        width: 800,
        height: 1100,
      },
      {
        src: "https://picsum.photos/seed/em-02/1100/800",
        alt: "Profile portrait, eyes closed, orange backdrop",
        width: 1100,
        height: 800,
      },
      {
        src: "https://picsum.photos/seed/em-03/1100/800",
        alt: "Futuristic visor, braid held up, spotlight",
        width: 1100,
        height: 800,
      },
    ],
  },
  {
    slug: "urban-rebel",
    title: "Urban Rebel",
    category: "Street",
    year: "2024",
    description:
      "Leather and combat boots against European storefronts. Film grain and city grit — beauty in rebellion.",
    cover: {
      src: "https://picsum.photos/seed/ur-cover/1100/800",
      alt: "Model in leather jacket crouching by toy store window",
      width: 1100,
      height: 800,
    },
    photos: [
      {
        src: "https://picsum.photos/seed/ur-01/800/1100",
        alt: "Standing in street, leather jacket and boots",
        width: 800,
        height: 1100,
      },
      {
        src: "https://picsum.photos/seed/ur-02/800/1100",
        alt: "Close-up by toy store, looking away",
        width: 800,
        height: 1100,
      },
    ],
  },
  {
    slug: "golden-mist",
    title: "Golden Mist",
    category: "Documentary",
    year: "2023",
    description:
      "Children play in fountains as golden light filters through water mist — silhouettes frozen in joy.",
    cover: {
      src: "https://picsum.photos/seed/gm-cover/800/1200",
      alt: "Girl spinning with arms outstretched in fountain mist, backlit",
      width: 800,
      height: 1200,
    },
    photos: [
      {
        src: "https://picsum.photos/seed/gm-01/800/1100",
        alt: "Child running through spray, rickshaw silhouette",
        width: 800,
        height: 1100,
      },
      {
        src: "https://picsum.photos/seed/gm-02/1100/800",
        alt: "Two figures playing, golden backlighting",
        width: 1100,
        height: 800,
      },
    ],
  },
  {
    slug: "soft-armour",
    title: "Soft Armour",
    category: "Fashion",
    year: "2024",
    description:
      "Satin trench coats and knit dresses — softness as strength. Minimal studio, maximum presence.",
    cover: {
      src: "https://picsum.photos/seed/sa-cover/800/1100",
      alt: "Model in beige trench coat, portrait",
      width: 800,
      height: 1100,
    },
    photos: [
      {
        src: "https://picsum.photos/seed/sa-01/800/1200",
        alt: "Full length in dark knit dress, barefoot",
        width: 800,
        height: 1200,
      },
      {
        src: "https://picsum.photos/seed/sa-02/1100/800",
        alt: "Reclining in satin trench, looking at camera",
        width: 1100,
        height: 800,
      },
      {
        src: "https://picsum.photos/seed/sa-03/800/1100",
        alt: "Standing in trench coat, confident pose",
        width: 800,
        height: 1100,
      },
      {
        src: "https://picsum.photos/seed/sa-04/800/1100",
        alt: "Close-up portrait, ribbed black dress",
        width: 800,
        height: 1100,
      },
    ],
  },
];

export const categories = ["All", ...new Set(projects.map((p) => p.category))];
