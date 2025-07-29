export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          As a recent graduate, I’m currently exploring entry-level
          opportunities in the IT industry. If you have any questions or just
          want to say hi, feel free to drop a message!
        </p>

        <div className="bg-card p-8 rounded-lg shadow-xs card-hover">
          <h3 className="text-2xl font-semibold mb-6"> Send a Message:</h3>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.hash = "hero";
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-left text-sm font-medium mb-2"
              >
                {" "}
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md boerder border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Your Name...."
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-left text-sm font-medium mb-2"
              >
                {" "}
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md boerder border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="name@example.com...."
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-left text-sm font-medium mb-2"
              >
                {" "}
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md boerder border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your Message...."
              />
            </div>

            <button type="submit" className="cosmic-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
