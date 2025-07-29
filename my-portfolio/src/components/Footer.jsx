import { ArrowUp, Linkedin, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 px-8 bg-card relative border-t border-border mt-1 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground text-center w-full md:w-auto">
        &copy; {new Date().getFullYear()} Dominic Gunio. All rights reserved.
      </p>
      <div className="flex items-center gap-4 justify-center w-full md:w-auto">
        <a
          href="https://www.linkedin.com/in/dominic-reymar-gunio-620274374/"
          target="_blank"
          className="text-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
        </a>
        <a
          href="https://www.facebook.com/dominicreymar.29"
          target="_blank"
          className="text-foreground hover:text-primary transition-colors"
        >
          <Facebook className="transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
        </a>
        <a
          href="https://www.instagram.com/dominicreymar/"
          target="_blank"
          className="text-foreground hover:text-primary transition-colors"
        >
          <Instagram className="transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
        </a>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};
