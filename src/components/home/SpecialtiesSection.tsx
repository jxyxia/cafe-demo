import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Link } from "react-router-dom";

const specialties = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Our house blend with notes of dark chocolate and caramel.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
    large: true,
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: "Sourdough, smashed avocado, poached eggs, microgreens.",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80",
    large: false,
  },
  {
    id: 3,
    name: "Matcha Latte",
    description: "Ceremonial grade matcha with oat milk foam.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80",
    large: false,
  },
  {
    id: 4,
    name: "Fresh Pastries",
    description: "Baked in-house daily with locally sourced ingredients.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    large: true,
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
              Our Specialties
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-espresso">
              Crafted with Love
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={index * 0.1}
              className={item.large ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Link to="/menu">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-semibold text-cream mb-2">
                      {item.name}
                    </h3>
                    <p className="font-body text-cream/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
