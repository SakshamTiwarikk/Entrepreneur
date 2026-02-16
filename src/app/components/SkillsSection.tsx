import { motion } from "motion/react";
import {
  MessageSquare,
  Mic,
  Users,
  Target,
  Briefcase,
  DollarSign,
  TrendingUp,
  Megaphone,
  Zap,
  Brain,
  Award,
  BookOpen,
  Rocket
} from "lucide-react";

export function SkillsSection() {
  const skills = [
    { icon: MessageSquare, name: "Communication Skills" },
    { icon: Mic, name: "Public Speaking" },
    { icon: Users, name: "Leadership Development" },
    { icon: Target, name: "Goal Setting & Execution" },
    { icon: Briefcase, name: "Business Fundamentals" },
    { icon: DollarSign, name: "Financial Awareness" },
    { icon: TrendingUp, name: "Sales & Closing Skills" },
    { icon: Megaphone, name: "Marketing Strategies" },
    { icon: Zap, name: "High Income Skills" },
    { icon: Brain, name: "Human Psychology" },
    { icon: Award, name: "Personal Branding" },
    { icon: BookOpen, name: "And Many More..." }
  ];

  return (
    <section id="skills" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-full mb-6">
            <Zap className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] font-medium">Skill Mastery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            <Rocket className="w-7 h-7 sm:w-9 sm:h-9 text-[#D4AF37] inline-block align-middle mr-1" /> What You Will{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              Master Inside
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Transform yourself with practical, high-value skills that drive real results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative h-full p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37]/30 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-white/60">
            Plus dozens of practical lessons designed to transform your career and life
          </p>
        </motion.div>
      </div>
    </section>
  );
}
