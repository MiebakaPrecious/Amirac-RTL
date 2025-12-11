import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#blog" },
    { name: "Pages", href: "#", hasDropdown: true },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Amirac Resources and Technologies Ltd" className="h-14 w-auto" />
            <div className="flex flex-col">
              <span className="text-lg font-heading font-bold text-primary tracking-wide">AMIRAC</span>
              <span className="text-[9px] font-semibold text-muted-foreground tracking-wider leading-tight">RESOURCES &amp; TECHNOLOGIES</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-1 font-medium text-sm transition-colors hover:text-accent ${
                  item.active ? "text-accent" : "text-foreground"
                }`}
              >
                {item.active && (
                  <span className="text-accent">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </span>
                )}
                {!item.active && item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
            <button className="p-2 hover:text-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="outline" className="border-2 border-primary text-primary font-semibold px-6 py-5 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium text-sm py-2 transition-colors hover:text-accent ${
                    item.active ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <Button className="btn-primary mt-4">
                Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
