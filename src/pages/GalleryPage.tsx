import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/common/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { id: "all", name: "All" },
  { id: "interior", name: "Interior" },
  { id: "coffee", name: "Coffee Art" },
  { id: "food", name: "Food" },
  { id: "community", name: "Community" },
];

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    category: "interior",
    alt: "Cafe interior with warm lighting",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    category: "coffee",
    alt: "Latte art heart",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    category: "coffee",
    alt: "Coffee cup on table",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80",
    category: "interior",
    alt: "Cozy seating area",
    span: "col-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    category: "food",
    alt: "Fresh croissants",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?w=600&q=80",
    category: "community",
    alt: "Friends enjoying coffee",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
    category: "coffee",
    alt: "Coffee beans close-up",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80",
    category: "food",
    alt: "Avocado toast",
    span: "col-span-2 row-span-2",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80",
    category: "interior",
    alt: "Coffee bar detail",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600&q=80",
    category: "community",
    alt: "Barista serving customer",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    category: "coffee",
    alt: "Pour over coffee",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80",
    category: "food",
    alt: "Açaí bowl",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&q=80",
    category: "interior",
    alt: "Menu board",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=800&q=80",
    category: "community",
    alt: "Community event",
    span: "col-span-2",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    category: "coffee",
    alt: "Espresso shot",
  },
];

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof galleryImages;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const current = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-espresso/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-cream transition-colors z-10"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-cream transition-colors z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-cream transition-colors z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <motion.img
        key={current.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        src={current.src}
        alt={current.alt}
        className="max-w-full max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 font-body text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filteredImages.length) % filteredImages.length : null
    );
  const nextImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % filteredImages.length : null
    );

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-espresso overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1920&q=80"
            alt="Gallery background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-caramel text-sm tracking-[0.3em] uppercase mb-4"
          >
            Our Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream"
          >
            Moments Captured
          </motion.h1>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`font-body font-semibold px-6 py-2.5 rounded-full transition-all ${
                    activeCategory === category.id
                      ? "bg-terracotta text-cream"
                      : "bg-white text-warm-charcoal hover:bg-espresso/5 border border-warm-charcoal/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="break-inside-avoid"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                        <p className="font-body text-cream text-sm uppercase tracking-wider">
                          {image.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filteredImages}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}
