import { Instagram } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import { motion } from "framer-motion";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80",
    likes: 234,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=400&q=80",
    likes: 189,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
    likes: 312,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
    likes: 278,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&q=80",
    likes: 156,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&q=80",
    likes: 423,
  },
];

export default function InstagramSection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
              @aromahavencafe
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-espresso mb-4">
              Follow Our Journey
            </h2>
            <p className="font-body text-warm-charcoal/70 max-w-xl mx-auto">
              A daily glimpse into our cozy corner of the world. Join our community on Instagram.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.05}>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-square rounded-xl overflow-hidden block"
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Instagram className="h-8 w-8 text-cream" />
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-semibold text-terracotta hover:text-terracotta/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              Follow us on Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
