import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const messages = [
  {
    quote: "Consistency leads to monetization.",
    detail: "The algorithm rewards those who show up every day. Cashora ensures you never miss a beat.",
  },
  {
    quote: "Cashora removes the effort barrier.",
    detail: "No editing. No scheduling. No burnout. Just results.",
  },
  {
    quote: "AI handles creation and distribution.",
    detail: "From concept to published content — entirely automated, endlessly scalable.",
  },
];

const MonetizationSection = () => {
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
            The long game
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
            Automation meets{" "}
            <span className="gradient-text">monetization.</span>
          </h2>
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-2xl glass gradient-border transition-all duration-500 hover:glow-primary"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-lg sm:text-xl font-semibold gradient-text mb-2">
                "{msg.quote}"
              </p>
              <p className="text-muted-foreground text-sm">{msg.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonetizationSection;
