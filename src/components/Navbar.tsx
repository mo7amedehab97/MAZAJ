import { useState, type MouseEvent } from "react";
import logo from "../assets/MazajLogo.svg";
import { LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed z-50 flex items-center justify-center w-full antialiased top-3 text-neutral-200">
      <div className="relative flex items-center justify-between w-full p-6 gap-x-8 md:shadow-lg md:rounded-full md:max-w-2xl lg:max-w-3xl backdrop-blur-xl">
        <div>
          <img src={logo} alt="Company Logo" height={22} width={80} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-4">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="p-2 capitalize transition hover:opacity-70"
                  onClick={(e) => handleScroll(e, link.id)}
                  aria-label={`Scroll to ${link.label}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="p-1 rounded-md hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>

          {/* Mobile Menu */}
          <nav
            id="mobile-menu"
            className={`absolute left-0 w-full top-full mt-1 z-40 transition-all duration-300 origin-top ${
              isMobileMenuOpen
                ? "opacity-100 scale-y-100 pointer-events-auto"
                : "opacity-0 scale-y-0 pointer-events-none"
            } bg-black/80 rounded-xl shadow-2xl p-4 backdrop-blur-xl`}
          >
            <ul className="flex flex-col gap-y-3">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="block p-3 rounded-lg transition hover:bg-white/10"
                    onClick={(e) => {
                      handleScroll(e, link.id);
                      toggleMobileMenu();
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
