import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from "react"; 
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("meernknr");  //formspree ID

  useEffect(() => {
    if (state.succeeded) {
      window.location.href = "/personal-portfolio/#/thank-you";
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-28 px-6 md:px-12 bg-[#daddc9]"
    >
      <div className="max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-4xl md:text-5xl font-serif tracking-tight text-neutral-900 mb-10"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="font-sans text-lg md:text-xl text-neutral-700 leading-relaxed mb-14 max-w-prose"
        >
          If you're building something meaningful, I’d love to hear about it.
          Whether it’s a collaboration, a project, or you're just exploring ideas — let's chat.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-8 max-w-xl"
        >
          <label htmlFor="name" className="flex flex-col font-sans text-sm tracking-wide text-neutral-800">
            Name
            <input
              id="name"
              type="text"
              name="name"
              required
              className="mt-2 border-b border-neutral-400 bg-transparent py-2 transition-colors"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </label>

          <label htmlFor="email" className="flex flex-col font-sans text-sm tracking-wide text-neutral-800">
            Email
            <input
              id="email"
              type="email"
              name="email"
              required
              className="mt-2 border-b border-neutral-400 bg-transparent py-2 transition-colors"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>

          <label htmlFor="message" className="flex flex-col font-sans text-sm tracking-wide text-neutral-800">
            Message
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-2 border-b border-neutral-400 bg-transparent py-2 transition-colors"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </label>

          <button
            type="submit"
            disabled={state.submitting}
            className="mt-6 self-start font-sans text-sm tracking-wide bg-neutral-700 border border-neutral-900 px-6 py-3 hover:bg-neutral-900 text-white transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white 
                   focus:ring-offset-2 focus:ring-offset-[#daddc9]"
          >
            Send Message
          </button>
        </motion.form>

        <div className="flex gap-6 mt-8">
          <motion.a
            href="https://www.linkedin.com/in/geraldine-edwards-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-neutral-700 hover:text-blue-700"
          >
            <FaLinkedin size={40} />
          </motion.a>

          <motion.a
            href="https://github.com/Geraldine-Edwards"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-neutral-700 hover:text-black"
          >
            <FaGithub size={40} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;