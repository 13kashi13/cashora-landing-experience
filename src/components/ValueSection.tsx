import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Build an online presence while you study. Cashora automates content so you can focus on learning.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description:
      "Create a side income stream without sacrificing your career. Consistency runs on autopilot.",
  },
  {
    icon: Sparkles,
    title: "Beginners",
    description:
      "No experience needed. No editing skills required. Just your ideas — Cashora handles the rest.",
  },
];

const ValueSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="section-spacing relative overflow-hidden" ref={ref}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(270 80% 65% / 0.2), transparent)",
        }}
      />

      <div className="container-tight relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Built for everyone
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Your time is <span className="gradient-text">valuable.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              className="group text-center p-8 rounded-2xl transition-all duration-500 hover:glass"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <audience.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{audience.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
