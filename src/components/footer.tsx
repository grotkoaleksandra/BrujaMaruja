import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-purple text-white px-6 py-16 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold italic text-accent-light"
            >
              BrujaMaruja
            </Link>
            <p className="mt-3 text-white/60 text-sm max-w-xs">
              Bold vision, cinematic storytelling. Editorial, fashion &amp; fine art photography.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-[0.15em] uppercase text-white/60 hover:text-accent-light transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:hello@brujamaruja.com"
              className="text-sm tracking-[0.15em] uppercase text-white/60 hover:text-accent-light transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} BrujaMaruja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
