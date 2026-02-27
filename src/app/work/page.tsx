"use client";

import { useState, useCallback } from "react";
import { projects, categories } from "@/data/projects";
import type { Project, Photo } from "@/data/projects";

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-purple/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white z-10 text-sm tracking-[0.2em] uppercase"
      >
        Close
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 text-white/40 text-sm tracking-[0.15em]">
        {index + 1} / {photos.length}
      </div>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
        />
      </div>

      {/* Prev/Next */}
      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-5xl px-2"
          >
            &lsaquo;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-5xl px-2"
          >
            &rsaquo;
          </button>
        </>
      )}
    </div>
  );
}

function ProjectSection({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const allPhotos = [project.cover, ...project.photos];

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + allPhotos.length) % allPhotos.length : null
      ),
    [allPhotos.length]
  );
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % allPhotos.length : null
      ),
    [allPhotos.length]
  );

  return (
    <section id={project.slug} className="scroll-mt-24">
      {/* Project header */}
      <div className="mb-8 md:mb-10">
        <p className="text-xs tracking-[0.25em] uppercase text-accent mb-3">
          {project.category} &mdash; {project.year}
        </p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl lg:text-9xl font-semibold italic tracking-tight leading-[0.9] text-foreground">
          {project.title}
        </h2>
        <p className="mt-4 text-muted max-w-xl text-base md:text-lg leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {allPhotos.map((photo, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className={`img-hover block relative cursor-pointer ${
              i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden rounded-lg ${
                i === 0 ? "aspect-[3/4] md:aspect-[4/5]" : "aspect-[3/4]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={allPhotos}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 md:pt-32 px-6 md:px-10 pb-24 max-w-7xl mx-auto">
      {/* Page header */}
      <div className="mb-16 md:mb-20">
        <p className="text-sm tracking-[0.25em] uppercase text-accent mb-3">
          Portfolio
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-[13vw] md:text-[10vw] lg:text-[8vw] font-semibold italic tracking-tight leading-[0.85] text-foreground">
          Work
        </h1>
      </div>

      {/* Category filters */}
      <div className="flex gap-4 md:gap-6 mb-16 md:mb-20 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-sm tracking-[0.2em] uppercase whitespace-nowrap transition-all pb-1 border-b-2 ${
              activeCategory === cat
                ? "text-accent border-accent"
                : "text-muted border-transparent hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="space-y-32 md:space-y-40">
        {filtered.map((project) => (
          <ProjectSection key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
