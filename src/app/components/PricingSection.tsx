import { motion } from "motion/react";
import { Check, Star, Crown, Sparkles, ArrowRight, GraduationCap, Flame } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-full mb-6">
            <Crown className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] font-medium">Premium Investment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            <GraduationCap className="w-7 h-7 sm:w-9 sm:h-9 text-[#D4AF37] inline-block align-middle mr-1" /> Choose Your{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              Learning Pack
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Invest in yourself. Choose the path that matches your ambition.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Learner's Pack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative h-full p-5 sm:p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl backdrop-blur-sm hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden">
              {/* Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full">
                <Star className="w-3 h-3 text-[#D4AF37]" />
                <span className="text-xs text-[#D4AF37] font-medium">Starter</span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2"><Star className="w-6 h-6 text-[#D4AF37] inline-block align-middle mr-1" /> Learner's Pack</h3>
                <p className="text-white/60">Perfect for beginners who want to start learning high-value skills and build confidence.</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-white/40 line-through">₹10,999</span>
                  <div className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-xs text-red-400 font-semibold">
                    Save 45%
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                    ₹5,999
                  </span>
                  <span className="text-white/60">one-time</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Access to Core Skill Training",
                  "Foundational Learning Modules",
                  "Community Support Access",
                  "Basic Resource Library",
                  "Certificate of Completion"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-xl hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#FFD700] hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                Unlock Learner's Pack
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Master's Pack - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            {/* Spotlight Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

            <div className="relative h-full p-5 sm:p-8 bg-gradient-to-br from-[#D4AF37]/10 via-black to-black border-2 border-[#D4AF37] rounded-3xl backdrop-blur-sm overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full shadow-lg shadow-[#D4AF37]/50">
                <Sparkles className="w-3 h-3 text-black" />
                <span className="text-xs text-black font-bold">MOST POPULAR</span>
              </div>

              <div className="relative z-10 mb-6">
                <h3 className="text-2xl font-bold text-white mb-2"><Crown className="w-6 h-6 text-[#D4AF37] inline-block align-middle mr-1" /> Master's Pack</h3>
                <p className="text-white/80">The complete transformation package for serious learners.</p>
              </div>

              <div className="relative z-10 mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-white/40 line-through">₹20,999</span>
                  <div className="px-2 py-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded text-xs text-black font-bold">
                    Save 38%
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                    ₹12,999
                  </span>
                  <span className="text-white/80 font-semibold">one-time</span>
                </div>
              </div>

              <div className="relative z-10 mb-6">
                <div className="p-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-xl backdrop-blur-sm">
                  <p className="text-sm font-semibold text-[#D4AF37] mb-2"><Flame className="w-4 h-4 text-[#D4AF37] inline-block align-middle mr-1" /> Includes Everything Plus:</p>
                  <ul className="space-y-1 text-sm text-white/80">
                    <li>✓ Full Practical Skill Training</li>
                    <li>✓ Advanced Learning Modules</li>
                    <li>✓ Deeper Mentorship Access</li>
                    <li>✓ Faster Growth Path</li>
                  </ul>
                </div>
              </div>

              <ul className="relative z-10 space-y-4 mb-8">
                {[
                  "Everything in Learner's Pack",
                  "Advanced Skill Workshops",
                  "Personal Mentorship Sessions",
                  "Exclusive Community Access",
                  "Priority Support & Guidance",
                  "Live Training Sessions",
                  "Business Building Resources",
                  "Networking Opportunities"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full mt-0.5">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-xl shadow-2xl shadow-[#D4AF37]/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Unlock Master's Pack
                <Crown className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-[#D4AF37]" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-[#D4AF37]" />
            <span>Lifetime Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-[#D4AF37]" />
            <span>Regular Updates</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
