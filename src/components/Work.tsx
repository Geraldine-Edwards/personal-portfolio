import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

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
    description: "Built during a team hackathon, Boost.dev is a developer dashboard with confidence-building mini challenges, motivating resources and an encouraging community.",
    image: "/personal-portfolio/boost-dev.webp",
    github: "https://github.com/Geraldine-Edwards/boost.dev",
    live: "https://ge-boost-dev.hosting.codeyourfuture.io/",
  },
  {
    title: "REELtalk",
    description: "A movie-centric platform that combines discovering new films with the  experience of a community forum.",
    image: "/personal-portfolio/reeltalk.webp",
    github: "https://github.com/Geraldine-Edwards/REELtalk",
    live: "https://reel-talk-app-9059e75acb3d.herokuapp.com/",
  },
   {
    title: "Chatterbox",
    description: "A minimal proof-of-concept, real-time chat application enabling instant messaging between users, featuring both long-polling and websocket technology for seamless communication.",
    image: "/personal-portfolio/chatterbox.webp",
    github: "https://github.com/Geraldine-Edwards/Chat-Application",
    live: "https://geraldine-edwards-chat-app-websockets-frontend.hosting.codeyourfuture.io/",
  },
  {
    title: "Gift Pal",
    description: "A gift wishlist app with event planning and friends integration.",
    image: "/personal-portfolio/giftpal.webp",
    github: "https://github.com/Geraldine-Edwards/Gift-Pal",
    live: "https://gift-pal-91413d2174b0.herokuapp.com/",
  },
  {
    title: "Bright Futures",
    description: "A mock website supporting parents and educators in fostering empathy, inclusion, and belonging for young people.",
    image: "/personal-portfolio/bright-futures.webp",
    github: "https://github.com/Geraldine-Edwards/Bright-Futures-2",
    live: "https://geraldine-edwards.github.io/Bright-Futures-2/",
  }
]

const Work = () => {
  return (
    <section
      id="work"
      className="py-28 md:py-32 px-6 md:px-10 lg:px-16 xl:px-20 max-w-[1600px] mx-auto"
    >

      <SectionHeading>
        Selected Work
      </SectionHeading>

      <div className="h-px w-full bg-neutral-400 mx-auto mb-12" />

      {/* Grid div for projects (but flex for project cards)*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-16">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-serif leading-tight">
                {project.title}
              </h3>

              <p className="text-neutral-600 font-sans text-sm md:text-base">
                {project.description}
              </p>
            </div>

            <div className="relative overflow-hidden bg-white aspect-[5/3] group mt-4">
              <motion.img
                src={project.image}
                alt={`Screenshot of ${project.title} project`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 contrast-95 saturate-75 brightness-95 sepia-[0.08]"
              />
              {/* Dark overlay */}
              <motion.div
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-15 transition-opacity duration-400 pointer-events-none"
              />

              {/* Links panel: always visible */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-sm">
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
            
          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default Work