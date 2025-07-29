import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  {
    name: "Theme",
    component: ({ isDarkMode, toggleTheme }) => (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full transition-colors duration-300 focus:outline-none"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <Sun className="h-4 w-4 text-yellow-200" />
        ) : (
          <Moon className="h-4 w-4 text-blue-900" />
        )}
      </button>
    ),
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme effect
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Dominic |</span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, key) =>
            item.href ? (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ) : (
              <item.component
                key={key}
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
              />
            )
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div
          className={cn(
            "fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center pt-20",
            "transition-all duration-300 ease-in-out md:hidden",
            isMenuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-[-20px] opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl w-full px-4 ">
            {navItems.map((item, key) =>
              item.href ? (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={key}
                  onClick={() => {
                    toggleTheme();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-center p-4 rounded-full transition-colors duration-300 focus:outline-none mx-auto"
                  aria-label={
                    isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="h-5 w-5 text-yellow-200 mr-2" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5 text-blue-900 mr-2" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
