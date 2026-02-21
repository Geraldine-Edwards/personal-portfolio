const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-10 lg:px-16 xl:px-12 max-w-[1600px] mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <img
          src="/me.jpeg"
          alt="Geraldine Edwards"
          className="w-full lg:w-1/3 h-auto object-cover"
        />
        <p className="font-sans text-lg md:text-xl lg:text-2xl text-neutral-600 lg:flex-1">
          I am a freelance full-stack developer creating calm, minimalist, and elegant digital experiences. I combine thoughtful design, precision, and clarity to craft interfaces that feel intentional and timeless.
        </p>
      </div>
    </section>
  )
}

export default About