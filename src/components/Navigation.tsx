import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 650);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const textColor = isScrolled ? 'text-black' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => scrollToSection('hero')} className=" md:cursor-pointer flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="bg-gradient-to-r from-[hsl(hsl(25, 70%, 40%)] to-[hsl(25, 70%, 40%)] bg-golden bg-clip-text text-transparent text-xl font-bold">Sweet Delights</span>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 glass rounded-lg p-4 ${textColor}`}>
            <button onClick={() => scrollToSection('hero')} className={`hover:text-primary transition-colors ${textColor}`}>
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className={`hover:text-primary transition-colors ${textColor}`}>
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className={`hover:text-primary transition-colors ${textColor}`}>
              About Us
            </button>
            <button onClick={() => scrollToSection('packages')} className={`hover:text-primary transition-colors ${textColor}`}>
              Packages
            </button>
            <button onClick={() => scrollToSection('contact')} className={`hover:text-primary transition-colors ${textColor}`}>
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${textColor}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 w-full bg-white glass p-6 z-40">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className={`text-left hover:text-primary transition-colors ${textColor}`}>
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className={`text-left hover:text-primary transition-colors ${textColor}`}>
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className={`text-left hover:text-primary transition-colors ${textColor}`}>
                Services
              </button>
              <button onClick={() => scrollToSection('packages')} className={`text-left hover:text-primary transition-colors ${textColor}`}>
                Packages
              </button>
              <button onClick={() => scrollToSection('contact')} className={`text-left hover:text-primary transition-colors ${textColor}`}>
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;