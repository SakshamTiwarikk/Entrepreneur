import { motion } from "motion/react";
import { BookOpen, Users, DollarSign, TrendingUp, CheckCircle, MessageCircle } from "lucide-react";

export function DifferenceSection() {
  const differences = [
    {
      icon: BookOpen,
      title: "Practical Learning, Not Theory",
      description: "Real-world application over textbook knowledge"
    },
    {
      icon: Users,
      title: "Community & Support System",
      description: "Connect with like-minded entrepreneurs and mentors"
    },
    {
      icon: DollarSign,
      title: "Skill-Focused for Modern Income",
      description: "Learn skills that directly translate to earning potential"
    },
    {
      icon: TrendingUp,
      title: "Growth Environment with Mentorship",
      description: "Guided journey with experienced entrepreneurs"
    }
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-full mb-6">
            <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] font-medium">What Sets Us Apart</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            <MessageCircle className="w-7 h-7 sm:w-9 sm:h-9 text-[#D4AF37] inline-block align-middle mr-1" /> What Makes This{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              Different?
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We're not just another online course. We're a complete transformation ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {differences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-5 sm:p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden">
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-4 sm:p-8 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 border border-[#D4AF37]/30 rounded-2xl backdrop-blur-sm">
            <p className="text-xl text-white/80 mb-4">
              Join a community that's committed to your success
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Real Community</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
