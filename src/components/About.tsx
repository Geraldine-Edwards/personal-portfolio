import { motion } from "framer-motion"

const About = () => (
  <section
    id="about"
    className="w-full bg-[#daddc9]"
  >
    <div className="py-28 md:py-32 px-6 md:px-12 max-w-6xl mx-auto"> 
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif mb-16 text-left"
      >
        About
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Image */}
        <motion.img
          src="/ge.jpeg"
          alt="Geraldine Edwards"
          className="w-full max-w-sm object-cover shadow-md contrast-95 saturate-75 brightness-95 sepia-[0.08]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Text */}
        <div className="space-y-8">
          <motion.p
            className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
           I’m a full-stack developer who loves building things that are clear, useful, and easy to use. I care about writing clean code and making sure my work is accessible and performs well. I enjoy solving problems and working with others to create thoughtful solutions</motion.p>
          <motion.p
            className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            What I value in a team: kindness, real challenges, and a supportive environment where learning is encouraged and mistakes are treated as part of growth, not something to fear.
          </motion.p>
          <motion.p
            className="font-sans text-base md:text-lg text-800 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
          If that sounds like your world, I’d love to be part of it.
          </motion.p>
        </div>
      </div>
    </div>
  </section>
)

export default About