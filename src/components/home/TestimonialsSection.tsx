import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    quote: "Aroma Haven is my home away from home. The coffee is exceptional, and the atmosphere is perfect for both work and relaxation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 2,
    name: "James Chen",
    quote: "I've tried coffee shops all over the city, but nothing compares to the attention to detail here. Their espresso is a work of art.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    quote: "The pastries are fresh, the staff is friendly, and the ambiance makes every visit special. This is what a cafe should be.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: 4,
    name: "Michael Thompson",
    quote: "From the perfectly pulled shots to the cozy seating, every detail has been thoughtfully considered. A true gem in our neighborhood.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-warm-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-caramel/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-caramel text-sm tracking-[0.3em] uppercase mb-4">
              What People Say
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-cream">
              Guest Experiences
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <Quote className="absolute -top-4 left-0 h-16 w-16 text-caramel/20" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-6 border-4 border-caramel/30"
              />
              
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-caramel text-caramel" />
                ))}
              </div>

              <p className="font-display text-xl md:text-2xl text-cream leading-relaxed mb-6 italic">
                "{testimonials[current].quote}"
              </p>

              <p className="font-body text-caramel font-semibold">
                {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center text-cream hover:bg-cream/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-caramel w-6" : "bg-cream/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center text-cream hover:bg-cream/10 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
