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

    <motion.a
      href="mailto:geraldine@example.com"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="inline-block font-sans text-lg md:text-xl text-neutral-800 hover:underline"
    >
      Send me an email
    </motion.a>
  </section>
)

export default Contact