import { motion } from "framer-motion"

type Project = {
  title: string
  description: string
  image: string
  github?: string
  live?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Boost.dev",
    description: "A developer dashboard with confidence-building mini challenges.",
    image: "/boost-dev.png",
    github: "https://github.com/Geraldine-Edwards/boost.dev",
    live: "https://ge-boost-dev.hosting.codeyourfuture.io/",
    featured: true,
  },
  {
    title: "Gift Pal",
    description: "A gift wishlist app with event planning and friends integration.",
    image: "/giftpal.png",
    github: "https://github.com/Geraldine-Edwards/Gift-Pal",
    live: "https://gift-pal-91413d2174b0.herokuapp.com/",
  },
  {
    title: "Bright Futures",
    description: "A mock website supporting parents and educators in fostering empathy, inclusion, and belonging for young people.",
    image: "/bright-futures.png",
    github: "https://github.com/Geraldine-Edwards/Bright-Futures-2",
    live: "https://geraldine-edwards.github.io/Bright-Futures-2/",
  },
  {
    title: "Project Four",
    description: "Clean design emphasizing whitespace and clarity.",
    image: "/chatterbox.png",
    github: "https://github.com/geraldine/project-four",
    live: "https://project-four.example.com",
  },
  {
    title: "Project Five",
    description: "Clean design emphasizing whitespace and clarity.",
    image: "/chatterbox.png",
    github: "https://github.com/geraldine/project-four",
    live: "https://project-four.example.com",
  },
]

const Work = () => {
  return (
    <section
      id="work"
      className="py-28 md:py-32 px-6 md:px-10 lg:px-16 xl:px-20 max-w-[1600px] mx-auto"
    >
      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif mb-16 text-left"
      >
        Selected Work
      </motion.h2>

      <div className="h-px w-full bg-neutral-400 mx-auto mb-12" />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
        {projects.map((project, i) => {
          const isFeatured = project.featured
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`flex flex-col gap-4 ${
                isFeatured ? "md:col-span-2 xl:col-span-2" : ""
              }`}
            >
              {/* Image container with hover overlay */}
              <div className="relative overflow-hidden cursor-pointer group bg-white aspect-[5/3]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 contrast-95 saturate-75 brightness-95 sepia-[0.08]"
                />

                {/* Dark overlay */}
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-15 transition-opacity duration-400 pointer-events-none"
                />

                {/* Title + links on hover */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-4 mt-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Link opens ${project.title} in a new tab`}
                        className="underline text-neutral-900 hover:opacity-80"
                      >
                        Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Link opens ${project.title} Github repository in a new tab`}
                        className="underline text-neutral-900 hover:opacity-80"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Non-hover titles for editorial consistency */}
              <h3 className="text-xl md:text-2xl font-serif leading-tight">
                {project.title}
              </h3>
              <p className="text-neutral-600 font-sans text-sm md:text-base">
                {project.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Work