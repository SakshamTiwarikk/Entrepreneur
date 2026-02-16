import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Target } from "lucide-react";

export function TransformationSection() {
  const benefits = [
    "Practical, hands-on skill training",
    "Real-world application over theory",
    "Supportive community ecosystem",
    "Mentorship from successful entrepreneurs",
    "Clear roadmap for personal growth",
    "Proven strategies for financial success"
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-full mb-6">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm text-[#D4AF37] font-medium">Real Transformation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              <Target className="w-7 h-7 sm:w-9 sm:h-9 text-[#D4AF37] inline-block align-middle mr-1" /> Real Skills{" "}
              <ArrowRight className="inline w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37] mx-2" />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-xl text-white/80 leading-relaxed">
                This is not just another course.
              </p>
              <p className="text-xl text-white/80 leading-relaxed">
                This is a <span className="text-[#D4AF37] font-semibold">practical skills-based learning ecosystem</span> to help you grow personally and financially.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                  </div>
                  <p className="text-white/80">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[280px] sm:max-w-md mx-auto">
              {/* Center Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FFD700] rounded-full shadow-lg shadow-[#FFD700]/50" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#D4AF37] rounded-full shadow-lg shadow-[#D4AF37]/50" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FFD700] rounded-full shadow-lg shadow-[#FFD700]/50" />
                </motion.div>

                <div className="relative w-44 h-44 sm:w-64 sm:h-64 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 rounded-full border border-[#D4AF37]/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-[#D4AF37]/30 to-[#FFD700]/30 rounded-full border border-[#D4AF37]/40 flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full shadow-2xl shadow-[#D4AF37]/50 flex items-center justify-center">
                      <span className="text-black text-2xl sm:text-4xl font-bold">∞</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-0 px-4 py-2 bg-black/80 border border-[#D4AF37]/50 rounded-lg backdrop-blur-sm"
              >
                <p className="text-[#D4AF37] font-semibold text-sm">Skills</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/4 right-0 px-4 py-2 bg-black/80 border border-[#FFD700]/50 rounded-lg backdrop-blur-sm"
              >
                <p className="text-[#FFD700] font-semibold text-sm">Growth</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-0 px-4 py-2 bg-black/80 border border-[#D4AF37]/50 rounded-lg backdrop-blur-sm"
              >
                <p className="text-[#D4AF37] font-semibold text-sm">Income</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-1/4 right-0 px-4 py-2 bg-black/80 border border-[#FFD700]/50 rounded-lg backdrop-blur-sm"
              >
                <p className="text-[#FFD700] font-semibold text-sm">Success</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
