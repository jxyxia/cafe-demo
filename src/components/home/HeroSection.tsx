import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=90"
          alt="Latte art"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-caramel text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Welcome to Aroma Haven
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight mb-6"
        >
          Where Every Cup<br />
          <span className="text-caramel">Tells a Story</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Artisanal coffee, freshly baked goods, and a cozy atmosphere 
          designed for connection and creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-terracotta hover:bg-terracotta/90 text-cream font-body font-semibold px-8 py-6 text-lg rounded-full transition-transform hover:scale-[0.98] active:scale-95"
            >
              Explore Our Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-cream text-espresso hover:bg-cream/90 font-body font-semibold px-8 py-6 text-lg rounded-full transition-transform hover:scale-[0.98]"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visit Us
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-caramel rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
