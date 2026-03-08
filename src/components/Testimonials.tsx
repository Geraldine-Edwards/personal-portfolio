import { motion } from "framer-motion"
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

  {/* insert the quotes text */}
const testimonials = [
  `"Geraldine is dedicated, reliable, and always delivers high-quality work."`,
  `"A pleasure to collaborate with—Geraldine brings creativity and enthusiasm to every project."`,
  `"Her professionalism and attention to detail make her stand out in any team."`
]

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-28 md:py-32 px-6 md:px-10 lg:px-16 xl:px-12 max-w-[1600px] mx-auto"
  >
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif mb-12 text-left text-neutral-900"
    >
      What People Say
    </motion.h2>

    <div className="h-px w-full bg-neutral-400 mx-auto mb-12" />
    
    <div className="max-w-3xl mx-auto flex flex-col items-start">
      <FaQuoteLeft size={48} className="mb-4 text-neutral-600" aria-hidden="true" />
      <div className="flex flex-col text-center gap-12 w-full">
        {testimonials.map((quote, i) => (
          <motion.p
            key={i}
            className="font-sans italic text-xl md:text-2xl text-neutral-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {quote}
          </motion.p>
        ))}
      </div>
      <FaQuoteRight size={48} className="mt-4 self-end text-neutral-600" aria-hidden="true" />
  </div>
  </section>
)

export default Testimonials