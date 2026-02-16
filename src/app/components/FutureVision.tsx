import { motion } from "motion/react";
import { Mic, Briefcase, TrendingUp, Crown, Sparkles, Zap } from "lucide-react";

export function FutureVision() {
  const visions = [
    {
      icon: Mic,
      text: "Speaking confidently in front of people"
    },
    {
      icon: Briefcase,
      text: "Understanding business & money better"
    },
    {
      icon: TrendingUp,
      text: "Building multiple skills for higher income"
    },
    {
      icon: Crown,
      text: "Becoming a leader instead of a follower"
    }
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#D4AF37]/5 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] font-medium">Your Future Awaits</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            <Zap className="w-7 h-7 sm:w-9 sm:h-9 text-[#D4AF37] inline-block align-middle mr-1" /> Imagine{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              6 Months From Now
            </span>
            ...
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {visions.map((vision, index) => {
              const Icon = vision.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 flex items-center gap-4">
                      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl shadow-lg shadow-[#D4AF37]/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-black" />
                      </div>
                      <p className="text-lg text-white/90 group-hover:text-white transition-colors">
                        {vision.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Powerful Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-3xl blur-xl opacity-20" />

            <div className="relative p-6 sm:p-12 bg-gradient-to-br from-[#D4AF37]/10 via-black to-black border-2 border-[#D4AF37] rounded-3xl backdrop-blur-sm overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[size:30px_30px] opacity-10"
                />
              </div>

              <div className="relative z-10 text-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Your future changes when your{" "}
                  <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                    skills change
                  </span>
                  .
                </p>
                <p className="text-lg text-white/70">
                  The only question is: Will you take the first step today?
                </p>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#D4AF37] rounded-br-3xl" />
            </div>
          </motion.div>

          {/* Stats/Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              { number: "500+", label: "Active Learners" },
              { number: "50+", label: "Skills Taught" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "100%", label: "Real Results" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
