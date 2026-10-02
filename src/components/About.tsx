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
            I’m a digital designer and developer with a background in retail, customer service, admin, and care support. My career started in people-focused roles, teaching me empathy, clear communication, and the importance of understanding people’s needs. After completing training with Code Institute and Code Your Future (CYF), I moved into tech, developing my skills across web development, UX, UI design, accessibility, and responsive design.
          </motion.p>
        
          <motion.p
            className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
          >
            Since then, I’ve built web projects from the ground up, working across everything from design and user experience to development and deployment. My projects include a real-time chat platform, portfolio site, collaborative team builds, and website projects for charities. My recent work with CAVSG has given me the opportunity to apply design and accessibility principles to a real-world website project, considering how content, structure, visual design, and responsive behaviour work together to create a clearer and more accessible experience.
          </motion.p>
        
          <motion.p
            className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I’m constantly growing my knowledge through organisations and communities such as CYF and Codebar. I enjoy creating things that are useful, accessible, and easy to use, combining thoughtful design with clean, maintainable code. I particularly enjoy the space where design and development meet — understanding a problem, exploring possible solutions, and then bringing the chosen idea to life.
          </motion.p>
        
          <motion.p
            className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            What I value in collaboration: kindness, real challenges, and a supportive environment where learning is encouraged and mistakes are treated as part of growth, not something to fear.
          </motion.p>
        
          <motion.p
            className="font-sans text-base md:text-lg text-neutral-800 leading-relaxed"
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
