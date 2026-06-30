import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import SectionHeading from "./ui/SectionHeading";
import SectionDivider from "./ui/SectionDivider";

  {/* insert some quotes text */}
const testimonials = [
  {
    quote: "We met with Geraldine online, talked about what we did and what we thought our issues were, she was very perceptive in understanding what we were trying to do with the resources we had. She had ideas of what resources we could access and signposted us to companies/charities that offered discounts to non-profit organizations, she also identified reputable online IT training courses that we could access. Geraldine was positive and encouraging, she listened to us and helped progress ideas we had. It was a really useful session and we would recommend her to other volunteer organisations who are looking for IT help and solutions.",
    name: "Rose Davis & Dave Morris",
    role: "Volunteer Directors - Lucem House Community Cinema",
    link: "https://www.lucemhouse.co.uk/"
  },
]

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-28 md:py-32 px-6 md:px-10 lg:px-16 xl:px-12 max-w-[1600px] mx-auto"
  >
    <SectionHeading>
      What People Say
    </SectionHeading>

    <SectionDivider />

    <div className="flex flex-wrap justify-center gap-8">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          className="border border-neutral-300 p-8 flex flex-col items-center text-center max-w-md w-ful"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <FaQuoteLeft size={32} className="mb-2 text-neutral-400" aria-hidden="true" />
          <p className="font-sans italic text-lg text-neutral-700 mb-4">{t.quote}</p>
          <div className="mt-4 font-bold text-neutral-900">{t.name}</div>
          <div className="text-sm text-neutral-500">{t.role}</div>
          <div className="mt-4 font-bold text-neutral-900"><a href={t.link} target="_blank" rel="noopener noreferrer">{t.link}</a></div>
          <FaQuoteRight size={32} className="mt-2 text-neutral-400" aria-hidden="true" />
        </motion.div>
      ))}
    </div>
  </section>
)

export default Testimonials