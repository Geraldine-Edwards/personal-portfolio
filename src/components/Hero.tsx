const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-12 text-center"
    >
      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6">
        This is my Portfolio
      </h1>
      <p className="font-sans text-lg md:text-xl lg:text-2xl xl:text-3xl text-neutral-600 mb-12">
        I build calm, thoughtful digital experiences — combining precision, clarity, and a minimalist aesthetic.
      </p>
      <div className="text-sm md:text-base text-neutral-400 animate-bounce">
        Scroll ↓
      </div>
    </section>
  )
}

export default Hero