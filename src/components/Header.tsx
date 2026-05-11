import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const logo = "/assets/logos/logo.svg";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <img
              src={logo}
              alt="Amirac Resources and Technologies Ltd"
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain flex-shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-lg font-heading font-bold text-primary tracking-wide leading-none">AMIRAC</span>
              <span className="text-[7px] sm:text-[8px] font-semibold text-muted-foreground tracking-wider leading-tight mt-0.5 truncate">RESOURCES & TECHNOLOGIES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium text-sm transition-colors hover:text-primary ${
                  location.pathname === item.href ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Empty space for balanced layout */}
          <div className="hidden lg:block w-24" />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <nav className="flex flex-col px-6 py-8">
          {navItems.map((item, idx) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`group flex items-center justify-between py-4 border-b border-border/60 font-heading text-xl font-semibold transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                } ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}
                style={{ transitionDelay: isMenuOpen ? `${idx * 60}ms` : "0ms" }}
              >
                <span>{item.name}</span>
                <span className={`text-accent transition-transform duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}>→</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
