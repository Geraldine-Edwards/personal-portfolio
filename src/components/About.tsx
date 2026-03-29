import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";

const About = () => (
  <section
    id="about"
    className="w-full bg-[#daddc9]"
  >
    <div className="py-28 md:py-32 px-6 md:px-12 max-w-6xl mx-auto"> 
      <SectionHeading
      >
        About Me
      </SectionHeading>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        <motion.img
          src="/personal-portfolio/ge.webp"
          alt="Portrait of Geraldine Edwards"
          className="w-full max-w-sm object-cover shadow-md contrast-95 saturate-75 brightness-95 sepia-[0.08]"
          width="800"
          height="1149"
          loading="lazy"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
                />

        <div className="space-y-8">
          <motion.p
            className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I’m a full-stack developer with a background in retail, customer service, admin, and care support. My career started in people-focused roles, teaching me empathy and clear communication. After completing training courses with Code Institute and Code Your Future (CYF), I pivoted into tech. Since then, I’ve built web apps from the ground up, working on everything from design to deployment—including a real-time chat platform, portfolio site, and collaborative team builds.
          </motion.p>
          <motion.p
            className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
          >
            I’m constantly growing my knowledge, especially through involvement with organizations like CYF and Codebar. I love creating things that are useful and easy to use, writing clean, accessible code, and working with others to solve problems thoughtfully—bringing my strong communication, teamwork, and empathy into every project.
          </motion.p>
          <motion.p
            className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            What I value in collaboration: kindness, real challenges, and a supportive environment where learning is encouraged and mistakes are treated as part of growth, not something to fear.
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