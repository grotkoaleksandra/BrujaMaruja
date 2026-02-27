export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-32 px-6 md:px-10 pb-24 min-h-screen flex flex-col max-w-7xl mx-auto">
      {/* Page title */}
      <p className="text-sm tracking-[0.25em] uppercase text-accent mb-3">
        Get in Touch
      </p>
      <h1 className="font-[family-name:var(--font-cormorant)] text-[13vw] md:text-[10vw] lg:text-[8vw] font-semibold italic tracking-tight leading-[0.85] text-foreground mb-16 md:mb-20">
        Contact
      </h1>

      <div className="flex-1 flex flex-col justify-center max-w-3xl">
        {/* Big email */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-4">
            Email
          </p>
          <a
            href="mailto:hello@brujamaruja.com"
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl lg:text-7xl font-semibold italic text-accent hover:text-purple transition-colors break-all"
          >
            hello@brujamaruja.com
          </a>
        </div>

        {/* Social links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase text-accent mb-3">
              Instagram
            </h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:text-purple transition-colors"
            >
              @brujamaruja
            </a>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase text-accent mb-3">
              Based in
            </h3>
            <p className="text-lg font-medium">Warsaw, Poland</p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase text-accent mb-3">
              Available for
            </h3>
            <p className="text-lg font-medium">
              Editorials, Campaigns,
              <br />
              Collaborations
            </p>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light italic text-purple leading-relaxed">
            Currently booking for Spring/Summer 2026.
            <br />
            Let&rsquo;s create something bold.
          </p>
        </div>
      </div>
    </div>
  );
}
