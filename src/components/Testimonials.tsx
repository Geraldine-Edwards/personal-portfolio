import { motion } from "framer-motion"
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

  {/* insert some quotes text */}
const testimonials = [
  {
    quote: "Geraldine is dedicated, reliable, and always delivers high-quality work.",
    name: "Christopher",
    role: "Wordpress Developer",
  },
  {
    quote: "A pleasure to collaborate with—Geraldine brings creativity and enthusiasm to every project.",
    name: "Michael",
    role: "Designer",
  },
   {
    quote: "Her professionalism and attention to detail make her stand out in any team.",
    name: "Ali",
    role: "Team Leader",
  },
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
      className="text-4xl md:text-5xl font-serif mb-16 text-left text-neutral-900"
    >
      What People Say
    </motion.h2>

    <div className="h-px w-full bg-neutral-400 mx-auto mb-12" />

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          className="border border-neutral-300 p-8 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <FaQuoteLeft size={32} className="mb-2 text-neutral-400" aria-hidden="true" />
          <p className="font-sans italic text-lg text-neutral-700 mb-4">{t.quote}</p>
          <div className="mt-4 font-bold text-neutral-900">{t.name}</div>
          <div className="text-sm text-neutral-500">{t.role}</div>
          <FaQuoteRight size={32} className="mt-2 text-neutral-400" aria-hidden="true" />
        </motion.div>
      ))}
    </div>
  </section>
)

export default Testimonials