import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/ember/cover.jpg')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Hero text */}
        <div className="relative z-10 px-6 pb-20 md:px-10 md:pb-24 w-full">
          <h1 className="font-[family-name:var(--font-playfair)] text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tight animate-fade-up">
            BrujaMaruja
          </h1>
          <p className="mt-4 text-lg md:text-xl tracking-[0.3em] uppercase text-white/70 animate-fade-up-delay-1">
            Photography
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
          <div className="w-px h-10 bg-white/40" />
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Selected
            <br />
            Work
          </h2>
          <Link
            href="/work"
            className="hidden md:block text-sm tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors"
          >
            View All &rarr;
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work#${project.slug}`}
              className={`group relative img-hover block ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  i === 0
                    ? "aspect-[3/4]"
                    : i === 1
                    ? "aspect-[4/3]"
                    : "aspect-[4/3]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.cover.src}
                  alt={project.cover.alt}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70">
                    {project.category} &mdash; {project.year}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all link */}
        <Link
          href="/work"
          className="md:hidden block mt-8 text-sm tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors text-center"
        >
          View All Work &rarr;
        </Link>
      </section>

      {/* Statement */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl lg:text-6xl font-light leading-tight italic">
            &ldquo;I photograph the space between who we are and who we
            pretend to be.&rdquo;
          </p>
          <p className="mt-8 text-sm tracking-[0.2em] uppercase text-muted">
            &mdash; BrujaMaruja
          </p>
        </div>
      </section>
    </>
  );
}
