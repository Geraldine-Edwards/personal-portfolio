import { useForm, ValidationError } from '@formspree/react';
import { useEffect} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SectionHeading from './ui/SectionHeading';



const Contact = () => {
  const [state, handleSubmit] = useForm("meernknr"); // formspree ID
  const navigateToThankYouPage = useNavigate(); 


  useEffect(() => {
    if (state.succeeded) {
      navigateToThankYouPage("/thank-you");
    }
  }, [state.succeeded, navigateToThankYouPage]);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center py-28 px-6 md:px-12 bg-[#daddc9]"
    >
      <div className="w-full flex flex-col items-center px-4 md:px-0">

        <SectionHeading>
          Let’s Work Together
        </SectionHeading>

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
          className="grid gap-8 w-full max-w-xl"
        >
          <label htmlFor="name" className="flex flex-col font-sans text-sm font-medium tracking-wide text-neutral-900">
            Name
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="mt-2 border-b border-neutral-400 bg-transparent py-2 transition-colors"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </label>

          <label htmlFor="email" className="flex flex-col font-sans text-sm font-medium tracking-wide text-neutral-900">
            Email
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="e.g. example@email.com"
              className="mt-2 border-b border-neutral-400 bg-transparent py-2 transition-colors"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>

          <label htmlFor="message" className="flex flex-col font-sans text-sm font-medium tracking-wide text-neutral-900">
            Message
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Please type your message here"
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
      </div>
    </section>
  );
};

export default Contact;