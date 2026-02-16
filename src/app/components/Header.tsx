import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg shadow-[#D4AF37]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
              <span className="text-black font-bold text-xl">L</span>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              Life Of An Entrepreneur
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors"
            >
              Pricing
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("pricing")}
              className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-semibold rounded-full shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all"
            >
              Get Started
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#D4AF37] p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-[#D4AF37]/20"
          >
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-semibold rounded-full shadow-lg shadow-[#D4AF37]/30 text-center"
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
