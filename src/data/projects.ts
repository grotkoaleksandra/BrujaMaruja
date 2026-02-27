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

export const projects: Project[] = [
  {
    slug: "violet-reverie",
    title: "Violet Reverie",
    category: "Editorial",
    year: "2024",
    description:
      "A study in texture and color — brown wool against purple stockings, torn paper edges framing moments of quiet contemplation.",
    cover: {
      src: "/images/violet-reverie/cover.jpg",
      alt: "Model in brown blazer and purple tights, seated on white cube",
      width: 1200,
      height: 1600,
    },
    photos: [
      {
        src: "/images/violet-reverie/01.jpg",
        alt: "Four-panel collage with torn paper edges",
        width: 1200,
        height: 1500,
      },
      {
        src: "/images/violet-reverie/02.jpg",
        alt: "Overhead shot, model reading book cross-legged",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/violet-reverie/03.jpg",
        alt: "Portrait, hand on neck, looking up",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/violet-reverie/04.jpg",
        alt: "Reclining pose with crossed legs",
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/violet-reverie/05.jpg",
        alt: "Seated on cube, legs crossed, looking away",
        width: 1200,
        height: 1600,
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
      src: "/images/blue-mask/cover.jpg",
      alt: "Figure in balaclava, dramatic blue lighting from behind",
      width: 1200,
      height: 1600,
    },
    photos: [
      {
        src: "/images/blue-mask/01.jpg",
        alt: "Back muscles illuminated, balaclava portrait",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/blue-mask/02.jpg",
        alt: "Full seated figure, silhouette against blue",
        width: 1200,
        height: 1800,
      },
      {
        src: "/images/blue-mask/03.jpg",
        alt: "Close-up, eyes through balaclava",
        width: 1200,
        height: 1600,
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
      src: "/images/ember/cover.jpg",
      alt: "Model crouching against orange backdrop, looking over shoulder",
      width: 1200,
      height: 1600,
    },
    photos: [
      {
        src: "/images/ember/01.jpg",
        alt: "Crouching from behind, orange glow",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/ember/02.jpg",
        alt: "Profile portrait, eyes closed, orange backdrop",
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/ember/03.jpg",
        alt: "Futuristic visor, braid held up, spotlight",
        width: 1600,
        height: 1100,
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
      src: "/images/urban-rebel/cover.jpg",
      alt: "Model in leather jacket crouching by toy store window",
      width: 1600,
      height: 1100,
    },
    photos: [
      {
        src: "/images/urban-rebel/01.jpg",
        alt: "Standing in street, leather jacket and boots",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/urban-rebel/02.jpg",
        alt: "Close-up by toy store, looking away",
        width: 1200,
        height: 1600,
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
      src: "/images/golden-mist/cover.jpg",
      alt: "Girl spinning with arms outstretched in fountain mist, backlit",
      width: 1200,
      height: 1800,
    },
    photos: [
      {
        src: "/images/golden-mist/01.jpg",
        alt: "Child running through spray, rickshaw silhouette",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/golden-mist/02.jpg",
        alt: "Two figures playing, golden backlighting",
        width: 1600,
        height: 1100,
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
      src: "/images/soft-armour/cover.jpg",
      alt: "Model in beige trench coat, portrait",
      width: 1200,
      height: 1600,
    },
    photos: [
      {
        src: "/images/soft-armour/01.jpg",
        alt: "Full length in dark knit dress, barefoot",
        width: 1200,
        height: 1800,
      },
      {
        src: "/images/soft-armour/02.jpg",
        alt: "Reclining in satin trench, looking at camera",
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/soft-armour/03.jpg",
        alt: "Standing in trench coat, confident pose",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/soft-armour/04.jpg",
        alt: "Close-up portrait, ribbed black dress",
        width: 1200,
        height: 1600,
      },
    ],
  },
];

export const categories = ["All", ...new Set(projects.map((p) => p.category))];
