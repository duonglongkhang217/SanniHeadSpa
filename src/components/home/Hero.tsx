import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544161515-4ae6ce6db874?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-xs font-medium uppercase tracking-[0.2em]"
          >
            Experience Ultimate Relaxation
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light mb-8 leading-[1.1] tracking-tight">
            Premium Head Spa & Massage <span className="font-serif italic">Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Relax, Rejuvenate, and Restore Your Body and Mind in the Heart of Campsie.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/booking" 
              className="px-10 py-4 bg-white text-brand-dark rounded-full font-medium hover:bg-brand-beige transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Book Now
            </Link>
            <a 
              href="#services" 
              className="px-10 py-4 bg-transparent border border-white/50 text-white rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 space-y-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
