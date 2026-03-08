import { motion } from "framer-motion"

const skills = [
  {
    category: "Front-end / UI",
    items: [
      "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript (beginner)", "React", "Responsive Design"]
  },
  {
    category: "Back-end & Databases",
    items: ["Python", "Django", "Node.js", "Express", "PostgreSQL"]
  },
  {
    category: "Integration & APIs",
    items: ["RESTful APIs", "Third-party integrations"]
  },
  {
    category: "Testing & Development",
    items: ["Unit Testing (Jest, pytest)", "Cross-browser testing", "TDD fundamentals", "OOP"]
  },
  {
    category: "Version Control & Deployment",
    items: ["Git", "GitHub", "Heroku", "Netlify", "Coolify"]
  },
  {
    category: "SEO, Performance & Accessibility",
    items: ["Core Web Vitals", "Metadata & redirects", "Accessibility improvements"]
  },
  {
    category: "Actively Learning",
    items: ["React", "Java", "PHP"]
  },
  {
    category: "Collaboration",
    items: ["Agile teamwork", "Collaborative project development"]
  },
  {
    category: "Soft Skills",
    items: [  "Empathy", "Clear communication", "Teamwork", "Adaptability", "Problem-solving", "Attention to detail", "Time management"    ]
  }
]

const Skills = () => (
  <section
    id="skills"
    className="py-28 md:py-32 px-6 md:px-10 lg:px-16 xl:px-12 max-w-[1600px] mx-auto bg-[#e0d1ce]"
  >
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif mb-16 text-left text-neutral-900"
    >
      Skills
    </motion.h2>

    <div className="h-px w-full bg-neutral-400 mx-auto mb-12" />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: i * 0.04 }}
          viewport={{ once: true , amount: 0.4 }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-2xl md:text-3xl font-serif">{skill.category}</h3>
          <ul className="list-none font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            {skill.items.map((item, idx) => (
              <li key={idx} className="before:content-['•'] before:mr-2 before:text-neutral-400">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Skills