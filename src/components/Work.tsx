import { motion } from "framer-motion"

type Project = {
  title: string
  description: string
  image: string
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A calm and thoughtful interface built with React.",
    image: "/chatterbox.png",
    github: "https://github.com/geraldine/project-one",
    live: "https://project-one.example.com",
  },
  {
    title: "Project Two",
    description: "A minimalist web app with precise typography.",
    image: "/chatterbox.png",
    github: "https://github.com/geraldine/project-two",
    live: "https://project-two.example.com",
  },
  {
    title: "Project Three",
    description: "Clean design emphasizing whitespace and clarity.",
    image: "/chatterbox.png",
    github: "https://github.com/geraldine/project-three",
    live: "https://project-three.example.com",
  },
   {
    title: "Project Four",
    description: "Clean design emphasizing whitespace and clarity.",
    image: "/chatterbox.png",
    github: "https://github.com/geraldine/project-three",
    live: "https://project-four.example.com",
  },
   {
    title: "Project Five",
    description: "Clean design emphasizing whitespace and clarity.",
    image: "/chatterbox.png",
    github: "https://github.com/geraldine/project-three",
    live: "https://project-five.example.com",
  },
]

const Work = () => {
  return (
    <section
      id="work"
      className="py-20 px-6 md:px-10 lg:px-16 xl:px-12 max-w-[1600px] mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">
        Selected Work
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-12 lg:gap-16 xl:gap-20">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden cursor-pointer">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <h3 className="text-2xl font-serif">
              {project.title}
            </h3>

            <p className="text-neutral-600 font-sans">
              {project.description}
            </p>

            <div className="flex gap-6 mt-2">
              {project.github && (
                <a href={project.github} className="hover:underline">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} className="hover:underline">
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Work