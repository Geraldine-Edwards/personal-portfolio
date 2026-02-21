import { motion } from "framer-motion"

const testimonials = [
  `"Working with Geraldine was a delight — she brings clarity and elegance to every project."`,
  `"Geraldine’s attention to detail is exceptional. Her work is calm, thoughtful, and precise."`,
  `"A true professional with a minimalist approach that elevates every digital experience."`,
]

const Testimonials = () => (
  <section
    id="testimonials" 
    className="py-28 md:py-32 px-6 md:px-10 lg:px-16 xl:px-12 max-w-[1600px] mx-auto"
  >
    <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">
      What People Say
    </h2>

    {/* Mini divider line */}
    <div className="h-px w-24 bg-neutral-200 mx-auto mb-12" />

    <div className="flex flex-col gap-12 max-w-3xl mx-auto">
      {testimonials.map((quote, i) => (
        <motion.p
          key={i}
          className="font-sans italic text-xl md:text-2xl text-neutral-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          {quote}
        </motion.p>
      ))}
    </div>
  </section>
)

export default Testimonials