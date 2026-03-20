import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-12 text-center pt-24"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-6"
        >
          Full-Stack Developer Creating Clean, Accessible, and User-First Web Experiences
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="font-sans text-lg md:text-xl lg:text-2xl xl:text-3xl text-neutral-600 mb-12 max-w-[700px] mx-auto"
        >
          Combining clarity, creativity, and empathy to deliver software that works beautifully for people.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-sm md:text-base text-neutral-600 mt-12"
      >
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, 16, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block text-5xl text-neutral-700"
        >
          &#x25BC;
        </motion.span>
        <span className="sr-only">Scroll down</span>
      </motion.div>
    </section>
  )
}

export default Hero