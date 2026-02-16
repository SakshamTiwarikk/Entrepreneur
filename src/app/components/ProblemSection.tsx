import { motion } from "motion/react";
import { X, AlertCircle, Flame } from "lucide-react";

export function ProblemSection() {
  const problems = [
    "They learn theory but not real-world skills",
    "No mentorship or support system",
    "Fear of communication & public speaking",
    "No roadmap for income growth",
    "Lack of confidence, leadership & direction"
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-sm text-red-400 font-medium">The Reality Check</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <Flame className="w-7 h-7 sm:w-9 sm:h-9 text-red-400 inline-block align-middle mr-1" /> Why Most People Stay <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Stuck</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative flex items-start gap-4 p-6 bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-2xl backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-500/20 border border-red-500/30 rounded-full group-hover:bg-red-500/30 transition-colors">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-white/80 text-lg flex-1 group-hover:text-white transition-colors">
                    {problem}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] blur-xl opacity-30" />
              <p className="relative text-2xl sm:text-3xl font-bold text-white px-8 py-4">
                Life Of An Entrepreneur is designed to{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                  change that
                </span>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
