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
      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif mb-16 text-center"
      >
        Selected Work
      </motion.h2>

      {/* Mini dividing line */}
      <div className="h-px w-24 bg-neutral-200 mx-auto mb-12" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-12 lg:gap-16">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {/* Image container with group-hover overlay */}
            <div className="overflow-hidden cursor-pointer group relative">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/5] object-cover transition-transform duration-600 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-15 transition-opacity duration-400 pointer-events-none" />
            </div>

            {/* Project title */}
            <h3 className="text-xl md:text-2xl font-serif leading-tight">
              {project.title}
            </h3>

            {/* Project description */}
            <p className="text-neutral-600 font-sans text-sm md:text-base">
              {project.description}
            </p>

            {/* Project links */}
            <div className="flex gap-4 mt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
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