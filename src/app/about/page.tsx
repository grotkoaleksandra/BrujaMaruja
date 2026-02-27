export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32 px-6 md:px-10 pb-24 max-w-7xl mx-auto">
      {/* Page title */}
      <p className="text-sm tracking-[0.25em] uppercase text-accent mb-3">
        The Artist
      </p>
      <h1 className="font-[family-name:var(--font-cormorant)] text-[13vw] md:text-[10vw] lg:text-[8vw] font-semibold italic tracking-tight leading-[0.85] text-foreground mb-16 md:mb-20">
        About
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Portrait */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://picsum.photos/seed/about-brujamaruja/800/1100"
            alt="BrujaMaruja — portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio */}
        <div className="md:pt-12">
          <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light italic leading-snug text-purple mb-10">
            &ldquo;Every frame is a conversation between light and the
            stories we carry in our skin.&rdquo;
          </p>

          <div className="space-y-5 text-muted text-base md:text-lg leading-relaxed">
            <p>
              BrujaMaruja is a photographer based in Warsaw, working across
              editorial, fashion, and fine art. Her work explores identity,
              vulnerability, and the charged space between subject and lens.
            </p>
            <p>
              With a background in visual arts, she brings a painterly eye
              to every shoot — finding drama in natural light, tension in
              stillness, and beauty in the unguarded moment.
            </p>
            <p>
              Her editorial work has been featured in independent fashion
              publications across Europe. She shoots on both digital and
              film, favouring the texture and warmth of analog processes.
            </p>
          </div>

          {/* Info grid */}
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase text-accent mb-3">
                Based in
              </h3>
              <p className="text-lg font-medium">Warsaw, Poland</p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase text-accent mb-3">
                Specialties
              </h3>
              <p className="text-lg font-medium">
                Editorial, Fashion, Fine Art
              </p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase text-accent mb-3">
                Available for
              </h3>
              <p className="text-lg font-medium">
                Commissions, Editorials, Collaborations
              </p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase text-accent mb-3">
                Shoots on
              </h3>
              <p className="text-lg font-medium">Digital &amp; 35mm Film</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
