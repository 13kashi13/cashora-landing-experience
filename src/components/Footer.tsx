const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(270 80% 65% / 0.15), transparent)",
        }}
      />

      <div className="container-tight relative z-10">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold gradient-text mb-2">Cashora</h3>
          <p className="text-muted-foreground/60 text-sm max-w-sm">
            AI-powered content automation for the next generation of creators.
          </p>

          <div className="mt-8 text-muted-foreground/40 text-xs">
            © {new Date().getFullYear()} Cashora. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
