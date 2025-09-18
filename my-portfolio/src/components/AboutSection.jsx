import { useState } from "react";
import { User, Briefcase, Code, X, Download } from "lucide-react";

export const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewType, setPreviewType] = useState("pdf");

  const openModal = () => {
    setIsModalOpen(true);
    setPreviewType("pdf");
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Web Developer | Recent Computer Science Graduate
            </h3>

            <p className="text-muted-foreground">
              I have a strong interest in building clean, responsive, and
              user-friendly websites. I enjoy working on the visual and
              interactive side of web development, turning ideas and designs
              into real, usable products. I value good design, clear code, and
              thoughtful user experience.
            </p>

            <p className="text-muted-foreground">
              I’ve worked with backend and database tools, which helps me see
              how different parts of a project connect. I enjoy collaborating
              with designers, developers, and project leads, and I believe clear
              communication is just as important as writing good code. I'm
              always open to learning and growing with the team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Let's Get in Touch
              </a>
              <button onClick={openModal} className="cosmic-button">
                Preview CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-text-semibold-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and dynamic web applications
                    with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-text-semibold-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Creating user-centered designs and intuitive interfaces with
                    a focus on usability.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-text-semibold-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Overseeing projects from conception to completion, ensuring
                    they meet client requirements and deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CV Preview Modal as Card */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div
              className="card rounded-xl shadow-lg max-w-2xl w-full flex flex-col border border-border
      bg-neutral-100 dark:bg-neutral-900"
            >
              <div className="flex justify-between items-center p-4 border-b border-border sticky top-0 bg-neutral-100 dark:bg-neutral-900 z-10 rounded-t-xl">
                <h3 className="text-primary font-bold text-lg">CV Preview</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={closeModal}
                    className="p-1 rounded-full hover:bg-primary/10 transition"
                  >
                    <X className="h-5 w-5 text-primary" />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-auto p-4">
                {previewType === "pdf" ? (
                  <iframe
                    src="/CV - Gunio, Dominic.pdf"
                    className="w-full h-[60vh] border rounded"
                    title="CV PDF Preview"
                  />
                ) : (
                  <div className="flex justify-center">
                    <img
                      src="/CV - Gunio_page--0001.jpg"
                      alt="CV Preview"
                      className="max-w-full h-auto border rounded"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-4 p-4 border-t border-border bg-neutral-100 dark:bg-neutral-900 rounded-b-xl">
                <a
                  href="/CV - Gunio-1.png"
                  download="CV - Gunio-1.png"
                  className="cosmic-button flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download PNG
                </a>
                <a
                  href="/CV - Gunio.pdf"
                  download="CV - Gunio.pdf"
                  className="cosmic-button flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
