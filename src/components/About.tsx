import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="py-28 md:py-32 px-6 md:px-10 lg:px-16 xl:px-12 max-w-[1600px] mx-auto"
    >
      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif mb-16 text-center"
      >
        About Me
      </motion.h2>

      {/* Mini divider line */}
      <div className="h-px w-24 bg-neutral-200 mx-auto mb-12" />

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Profile image */}
        <motion.img
          src="/me.jpeg"
          alt="Geraldine Edwards"
          className="w-full lg:w-1/3 h-auto object-cover"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* About text */}
        <motion.p
          className="font-sans text-lg md:text-xl lg:text-2xl text-neutral-600 lg:flex-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I am a freelance full-stack developer creating calm, minimalist, and elegant digital experiences. I combine thoughtful design, precision, and clarity to craft interfaces that feel intentional and timeless.
        </motion.p>
      </div>
    </section>
  )
}

export default About