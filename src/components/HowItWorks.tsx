import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageSquare, Video, Share2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Enter a Prompt",
    description: "Describe your idea in a simple sentence. That's all it takes.",
  },
  {
    icon: Video,
    number: "02",
    title: "AI Generates Video",
    description: "Our AI creates professional video content optimized for each platform.",
  },
  {
    icon: Share2,
    number: "03",
    title: "Publish Everywhere",
    description: "One click distributes your content across all major platforms simultaneously.",
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="section-spacing relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, hsl(270 80% 65% / 0.06) 0%, transparent 70%)",
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
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Three steps. <span className="gradient-text">Zero effort.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group relative p-8 rounded-2xl glass gradient-border transition-all duration-500 hover:glow-primary"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground/40 text-sm font-mono">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
