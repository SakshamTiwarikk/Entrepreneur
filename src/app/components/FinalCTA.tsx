import { motion } from "motion/react";
import { Sparkles, ArrowRight, Clock, Shield, Award, Flame } from "lucide-react";

export function FinalCTA() {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Dramatic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main CTA Box */}
          <div className="relative max-w-5xl mx-auto">
            {/* Outer Glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-3xl blur-3xl opacity-30" />

            <div className="relative p-5 sm:p-8 lg:p-16 bg-gradient-to-br from-[#D4AF37]/5 via-black to-black border-2 border-[#D4AF37] rounded-3xl backdrop-blur-sm overflow-hidden">
              {/* Animated Background Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full mb-8 shadow-2xl shadow-[#D4AF37]/50"
              >
                <Sparkles className="w-4 h-4 text-black animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-sm text-black font-bold">LIMITED TIME OFFER</span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
              >
                <span className="block mb-2"><Flame className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37] inline-block align-middle mr-1" /> FINAL CALL</span>
                <span className="block bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  TO ACTION
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-2xl md:text-3xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto"
              >
                Your growth starts with{" "}
                <span className="text-[#D4AF37] font-bold">one decision</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(212, 175, 55, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToPricing}
                  className="group relative px-6 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-sm sm:text-xl rounded-full shadow-2xl shadow-[#D4AF37]/50 overflow-hidden w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    JOIN THE LIFE OF AN ENTREPRENEUR NOW
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToPricing}
                  className="px-6 sm:px-12 py-4 sm:py-6 bg-white/5 border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-sm sm:text-xl rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300 w-full sm:w-auto"
                >
                  ENROLL TODAY
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-8 text-white/70"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm">Certified Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm">Instant Access</span>
                </div>
              </motion.div>

              {/* Urgency Element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 p-6 bg-red-500/10 border border-red-500/30 rounded-xl backdrop-blur-sm"
              >
                <p className="text-red-400 font-semibold text-center">
                  <Clock className="w-5 h-5 text-red-400 inline-block align-middle mr-1" /> Special pricing ends soon. Don't miss this opportunity to transform your life!
                </p>
              </motion.div>

              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-32 sm:h-32 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-[#D4AF37] rounded-tl-3xl opacity-50" />
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-[#D4AF37] rounded-tr-3xl opacity-50" />
              <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-32 sm:h-32 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-[#D4AF37] rounded-bl-3xl opacity-50" />
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-32 sm:h-32 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-[#D4AF37] rounded-br-3xl opacity-50" />
            </div>
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 text-center text-white/60"
          >
            <p className="text-sm mb-4">Join 500+ entrepreneurs who have already started their journey</p>
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                  className="w-6 h-6 text-[#D4AF37] fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </motion.svg>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
