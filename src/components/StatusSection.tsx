import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StatusSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="section-spacing relative overflow-hidden" ref={ref}>
      <div className="container-tight relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass gradient-border mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              In Early Development
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            We're building something{" "}
            <span className="gradient-text">meaningful.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Cashora is in its early stages. We're focused on getting the
            foundation right — thoughtful design, reliable AI, and a genuinely
            useful product.
          </p>

          <motion.button
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full glass gradient-border glow-primary transition-all duration-500 hover:scale-105 hover:glow-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="gradient-text font-semibold text-lg">
              Get Early Access
            </span>
            <svg
              className="w-5 h-5 text-primary transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatusSection;
