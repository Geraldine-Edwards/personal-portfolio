import { motion } from "framer-motion"

const skills = ["React", "TypeScript", "Tailwind", "Node.js", "Git", "Framer Motion"]

const Skills = () => (
  <section
    id="skills"
    className="ppy-28 md:py-32 px-6 md:px-10 lg:px-16 xl:px-12 max-w-[1600px] mx-auto"
  >

    <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-neutral-900">
      Skills
    </h2>

    {/* Mini divider line */}
    <div className="h-px w-24 bg-neutral-200 mx-auto mb-12" />

    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          className="font-sans text-lg md:text-xl text-neutral-700 hover:text-neutral-900 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          viewport={{ once: true }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </section>
)

export default Skills