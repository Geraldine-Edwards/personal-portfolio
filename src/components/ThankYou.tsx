import { motion } from "framer-motion"

const ThankYou = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#daddc9] px-6 md:px-12">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 text-center"
      >
        Thank You!
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-prose"
      >
        Your message has been sent. I’ll get back to you soon!
      </motion.p>

      {/* Back to Home Button with Motion */}
      <motion.a
        href="/personal-portfolio/#/"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="mt-6 inline-block bg-neutral-700 text-white font-sans px-6 py-3 rounded-md
                   hover:bg-neutral-900 transition-colors duration-300
                   focus:outline-none focus:ring-4 focus:ring-white 
                   focus:ring-offset-2 focus:ring-offset-[#daddc9]"
      >
        Back to Home
      </motion.a>

    </main>
  )
}

export default ThankYou