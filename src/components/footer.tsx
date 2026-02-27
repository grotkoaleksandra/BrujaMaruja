import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-lg font-bold tracking-wider"
        >
          BrujaMaruja
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-[0.15em] uppercase text-muted hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@brujamaruja.com"
            className="text-sm tracking-[0.15em] uppercase text-muted hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} BrujaMaruja. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
