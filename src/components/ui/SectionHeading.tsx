import  { motion } from "framer-motion";

type SectionHeadingProps = {
    children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-serif mb-16 text-left"
    >
    { children }
  </motion.h2>
)

export default SectionHeading