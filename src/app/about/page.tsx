export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32 px-6 md:px-10 pb-24">
      {/* Page title */}
      <h1 className="font-[family-name:var(--font-playfair)] text-[13vw] md:text-[10vw] lg:text-[8vw] font-bold tracking-tight leading-[0.85] mb-16 md:mb-20">
        About
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Portrait */}
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-portrait.jpg"
            alt="BrujaMaruja — portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio */}
        <div className="md:pt-12">
          <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-light leading-snug italic mb-10">
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
              <h3 className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
                Based in
              </h3>
              <p className="text-lg">Warsaw, Poland</p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
                Specialties
              </h3>
              <p className="text-lg">
                Editorial, Fashion, Fine Art
              </p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
                Available for
              </h3>
              <p className="text-lg">
                Commissions, Editorials, Collaborations
              </p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
                Shoots on
              </h3>
              <p className="text-lg">Digital &amp; 35mm Film</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
