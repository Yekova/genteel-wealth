import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Le Cabinet", href: "/cabinet" },
  {
    label: "Expertises",
    href: "#",
    children: [
      { label: "Gestion patrimoniale", href: "/gestion-patrimoniale" },
      { label: "Fiscalité du patrimoine", href: "/fiscalite" },
      { label: "Patrimoine professionnel", href: "/patrimoine-professionnel" },
      { label: "Financement & crédit", href: "/financement" },
    ],
  },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-heading text-2xl font-bold tracking-wide text-primary-foreground">
          PATRIMONIA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="text-sm font-medium tracking-wide text-primary-foreground/80 hover:text-gold transition-colors duration-300 flex items-center gap-1">
                  {link.label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                    dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-navy-deep/95 backdrop-blur-md border border-primary-foreground/10 rounded-sm py-2 min-w-[240px] shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-5 py-2.5 text-sm text-primary-foreground/75 hover:text-gold hover:bg-primary-foreground/5 transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium tracking-wide text-primary-foreground/80 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2.5 text-sm font-medium tracking-wide border border-gold text-gold hover:bg-gold hover:text-navy-deep transition-all duration-300 rounded-sm"
          >
            Prendre rendez-vous
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 relative z-[60]"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-navy-deep/98 backdrop-blur-lg transition-all duration-500 flex flex-col items-center justify-center gap-6 z-[55] ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) =>
          link.children ? (
            <div key={link.label} className="flex flex-col items-center gap-3">
              <span className="text-sm font-medium tracking-wider text-primary-foreground/50 uppercase">{link.label}</span>
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className="text-lg font-heading tracking-wide text-primary-foreground/90 hover:text-gold transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={link.href}
              to={link.href}
              className="text-lg font-heading tracking-wide text-primary-foreground/90 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          )
        )}
        <Link
          to="/contact"
          className="mt-4 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-navy-deep transition-all duration-300 rounded-sm"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </header>
  );
}
