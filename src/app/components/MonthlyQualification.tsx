import { motion } from "motion/react";
import {
  Gift,
  Users,
  TrendingUp,
  Map,
  RefreshCw,
  HeadphonesIcon,
  Handshake,
  Target,
  Award,
  Lock,
  Check,
  Unlock
} from "lucide-react";

export function MonthlyQualification() {
  const benefits = [
    { icon: Gift, text: "Extra Referral Bonuses" },
    { icon: Users, text: "Live Training & Support System" },
    { icon: Handshake, text: "Personal Mentorship & Guidance" },
    { icon: Map, text: "Trips & Incentive Opportunities" },
    { icon: RefreshCw, text: "New Updates & Skill Upgrades" },
    { icon: HeadphonesIcon, text: "Priority Support Access" },
    { icon: Users, text: "Meet & Greet With Founder & CEO" },
    { icon: Target, text: "Roadmap to Financial Freedom" },
    { icon: Award, text: "Chance to Become a Trainer" },
    { icon: Lock, text: "Access to Private Exclusive Zone" }
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      {/* Animated Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#D4AF37]/5 to-[#FFD700]/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] font-medium">Continuous Growth</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            <Unlock className="w-7 h-7 sm:w-9 sm:h-9 text-[#D4AF37] inline-block align-middle mr-1" /> Stay Connected With{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              Continuous Growth
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Optional monthly qualification for those who want to accelerate their journey
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />

            <div className="relative p-4 sm:p-8 lg:p-12 bg-gradient-to-br from-white/5 to-transparent border border-[#D4AF37]/30 rounded-3xl backdrop-blur-sm overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5" />

              <div className="relative z-10">
                {/* Price Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-4 mb-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                    <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full">
                      <span className="text-lg sm:text-2xl font-bold text-black">₹1,999 / Month</span>
                    </div>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
                  </div>
                  <p className="text-white/70">Unlock premium benefits and stay ahead of the curve</p>
                </div>

                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#D4AF37]/50 transition-all duration-300 group/item"
                      >
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <span className="text-white/80 group-hover/item:text-white transition-colors">
                          {benefit.text}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Extra Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center p-6 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 border border-[#D4AF37]/30 rounded-xl backdrop-blur-sm"
                >
                  <p className="text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent mb-2">
                    And much more...
                  </p>
                  <p className="text-white/60">
                    New benefits added regularly based on community feedback
                  </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-8 text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-xl shadow-2xl shadow-[#D4AF37]/40 hover:shadow-[#D4AF37]/60 transition-all duration-300"
                  >
                    Activate Monthly Qualification
                  </motion.button>
                  <p className="mt-4 text-sm text-white/50">
                    Cancel anytime • No long-term commitment
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
