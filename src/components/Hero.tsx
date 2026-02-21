export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center max-w-[900px] mx-auto px-6 md:px-10 text-center"
    >
      {/* Name / headline */}
      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-16">
        This is my Portfolio
      </h1>

      {/* Tagline / description */}
      <p className="font-sans text-lg md:text-xl lg:text-2xl text-neutral-600 mb-12">
        I build accessible, secure, thoughtful digital experiences — combining precision, clarity, and a minimalist aesthetic.
      </p>

      {/* Optional subtle scroll indicator */}
      <div className="text-sm md:text-base text-neutral-400 animate-bounce">
        Scroll ↓
      </div>
    </section>
  )
}