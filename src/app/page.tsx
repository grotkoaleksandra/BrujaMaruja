import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/hero-brujamaruja/1600/1000')",
          }}
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple/90 via-purple/70 to-purple/40" />

        {/* Hero text */}
        <div className="relative z-10 px-6 md:px-10 w-full max-w-5xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-[14vw] md:text-[10vw] lg:text-[8vw] font-semibold italic leading-[0.9] tracking-tight text-white animate-fade-up">
            BrujaMaruja
          </h1>
          <p className="mt-6 text-lg md:text-xl tracking-[0.3em] uppercase text-white/70 animate-fade-up-delay-1">
            Photography
          </p>
          <div className="mt-10 animate-fade-up-delay-2">
            <Link
              href="/work"
              className="inline-block px-8 py-3 bg-accent text-white text-sm tracking-[0.2em] uppercase rounded-full hover:bg-accent-light transition-colors"
            >
              Explore Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
          <div className="w-px h-10 bg-white/40" />
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-6 py-24 md:px-10 md:py-32 max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <div>
            <p className="text-sm tracking-[0.25em] uppercase text-accent mb-3">
              Portfolio
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-semibold italic tracking-tight text-foreground">
              Selected Work
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:block text-sm tracking-[0.2em] uppercase text-accent hover:text-accent-light transition-colors"
          >
            View All &rarr;
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work#${project.slug}`}
              className={`group relative img-hover block ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-lg ${
                  i === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.cover.src}
                  alt={project.cover.alt}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-purple/0 group-hover:bg-purple/60 transition-all duration-500 rounded-lg" />
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70">
                    {project.category} &mdash; {project.year}
                  </p>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-semibold italic text-white mt-1">
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
          className="md:hidden block mt-8 text-sm tracking-[0.2em] uppercase text-accent hover:text-accent-light transition-colors text-center"
        >
          View All Work &rarr;
        </Link>
      </section>

      {/* Statement — purple band */}
      <section className="bg-purple px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl lg:text-7xl font-light italic leading-tight text-white">
            &ldquo;I photograph the space between who we are and who we
            pretend to be.&rdquo;
          </p>
          <p className="mt-8 text-sm tracking-[0.2em] uppercase text-white/50">
            &mdash; BrujaMaruja
          </p>
        </div>
      </section>
    </>
  );
}
