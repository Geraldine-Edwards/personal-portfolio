const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-10 lg:px-16 xl:px-12 max-w-[1600px] mx-auto text-center"
    >
      <h2 className="text-4xl md:text-5xl font-serif mb-12">
        Contact
      </h2>
      <p className="font-sans text-lg md:text-xl lg:text-2xl text-neutral-600 mb-8">
        Feel free to reach out for collaborations, projects, or just a friendly chat.
      </p>
      <a
        href="mailto:geraldine@example.com"
        className="inline-block font-sans text-lg md:text-xl text-neutral-800 hover:underline"
      >
        Send me an email
      </a>
    </section>
  )
}

export default Contact