import { motion } from "motion/react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-white via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Life Of An Entrepreneur
              </span>
            </div>
            <p className="text-white/60 text-sm mb-4">
              Empowering individuals with practical skills for real-world success.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all"
              >
                <Facebook className="w-5 h-5 text-white/60 hover:text-[#D4AF37]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all"
              >
                <Instagram className="w-5 h-5 text-white/60 hover:text-[#D4AF37]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all"
              >
                <Linkedin className="w-5 h-5 text-white/60 hover:text-[#D4AF37]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all"
              >
                <Twitter className="w-5 h-5 text-white/60 hover:text-[#D4AF37]" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Learning Packs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Learning Packs</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Learner's Pack
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Master's Pack
                </button>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm">
                  Monthly Qualification
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm">
                  FAQs
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@lifeofanentrepreneur.com" className="hover:text-[#D4AF37] transition-colors break-all">
                  contact@lifeofanentrepreneur.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <a href="tel:+911234567890" className="hover:text-[#D4AF37] transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center sm:text-left">
              © 2026 Life Of An Entrepreneur. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm">
                Refund Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />
    </footer>
  );
}
