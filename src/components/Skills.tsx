import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import SectionDivider from "./ui/SectionDivider";

const techSkills = [
  {
    category: "Front-end / UI",
    items: [
      "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript (beginner)", "React", "Responsive Design"
    ]
  },
  {
    category: "Back-end & Databases",
    items: ["Python", "Django", "Node.js", "Express", "PostgreSQL"]
  },
  {
    category: "Integration & APIs",
    items: ["RESTful APIs", "Third-party integrations", "Formspree"]
  },
  {
    category: "Testing & Development",
    items: ["Unit Testing (Jest, pytest)", "Cross-browser testing", "TDD fundamentals", "OOP"]
  },
  {
    category: "Version Control & Deployment",
    items: ["Git", "GitHub", "GitHub Pages", "GitHub Actions (CI/CD)", "Heroku", "Netlify", "Coolify"]
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
  }
]

const softSkills = [
  {
    category: "Communication",
    items: [
      "Clear communication",
      "Active listening",
      "Openness to feedback"
    ]
  },
  {
    category: "Interpersonal",
    items: [
      "Empathy",
      "Teamwork",
      "Patience"
    ]
  },
  {
    category: "Cognitive",
    items: [
      "Problem-solving",
      "Critical thinking",
      "Creativity",
      "Resourcefulness"
    ]
  },
  {
    category: "Work Habits",
    items: [
      "Attention to detail",
      "Time management",
      "Adaptability",
      "Initiative"
    ]
  }
]

const Skills = () => (
  <section
    id="skills"
    className="py-28 md:py-32 px-6 md:px-10 lg:px-16 xl:px-12 max-w-[1600px] mx-auto bg-[#e0d1ce]"
  >
    <SectionHeading>
      Technical Skills
    </SectionHeading>

    <SectionDivider />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-28">
      {techSkills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: i * 0.04 }}
          viewport={{ once: true , amount: 0.4 }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-xl md:text-2xl font-serif">{skill.category}</h3>
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

    {/* Soft Skills Section */}
    <SectionHeading>
      Soft Skills
    </SectionHeading>

    <SectionDivider />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-[#e7e3e0] rounded-xl p-8">
      {softSkills.map((group, i) => (
        <div key={i} className="flex flex-col gap-4">
          <h3 className="text-lg md:text-xl font-serif text-neutral-900">{group.category}</h3>
          <ul className="list-none font-sans text-neutral-700 text-sm md:text-base leading-relaxed">
            {group.items.map((item, idx) => (
              <li key={idx} className="before:content-['•'] before:mr-2 before:text-neutral-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
)

export default Skills