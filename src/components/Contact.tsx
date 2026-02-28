import { motion } from "framer-motion"

const Contact = () => (
  <section
    id="contact"
    className="py-28 md:py-32 px-6 md:px-10 lg:px-16 xl:px-12 max-w-[1600px] mx-auto text-left"
  >
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif mb-12 text-left text-neutral-900"
    >
      Contact
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="font-sans text-lg md:text-xl lg:text-2xl text-neutral-600 mb-8"
    >
      Feel free to reach out for collaborations, projects, or just a friendly chat.
    </motion.p>

    <motion.div
  className="mt-6 flex justify-center gap-6"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
>
  <a
    href="https://docs.google.com/document/d/1GX043skAHR6UFFdXoNJUrFgf0gOA3lSfKMrqYxfKRu8/edit?usp=sharing"
    download
    className="px-6 py-3 bg-[#daddc9] text-neutral-900 font-sans rounded-md hover:opacity-80 transition-opacity"
    aria-label="Download CV"
  >
    Download my CV
  </a>

  <a
    href="mailto:geraldine.edwards25@gmail.com"
    className="px-6 py-3 border border-neutral-900 rounded-md font-sans hover:bg-neutral-100 transition-colors"
    aria-label="Email for further information"  
  >
    Send me an email
  </a>
</motion.div>
  </section>
)

export default Contact