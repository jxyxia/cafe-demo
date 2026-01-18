import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/common/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Milk, Wheat, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All" },
  { id: "coffee", name: "Coffee" },
  { id: "tea", name: "Tea" },
  { id: "breakfast", name: "Breakfast" },
  { id: "lunch", name: "Lunch" },
  { id: "pastries", name: "Pastries" },
];

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  featured?: boolean;
  dietary?: string[];
  allergens?: string[];
  fullDescription?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Our house blend with notes of dark chocolate and caramel",
    fullDescription: "Our signature blend, sourced from small-batch roasters in Colombia and Ethiopia. This double-shot espresso features rich notes of dark chocolate, caramel, and a hint of citrus. Perfectly balanced with a velvety crema.",
    price: "$4.50",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    featured: true,
    dietary: ["vegan"],
  },
  {
    id: 2,
    name: "Vanilla Oat Latte",
    description: "Creamy oat milk latte with house-made vanilla syrup",
    fullDescription: "A silky-smooth latte crafted with our house espresso and creamy oat milk. We add just a touch of our house-made vanilla bean syrup for subtle sweetness. Finished with beautiful latte art.",
    price: "$6.00",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80",
    dietary: ["vegan", "dairy-free"],
  },
  {
    id: 3,
    name: "Cold Brew",
    description: "24-hour steeped cold brew, smooth and refreshing",
    fullDescription: "Our cold brew is steeped for 24 hours using a special single-origin Guatemalan bean. The result is an impossibly smooth, naturally sweet coffee with low acidity. Served over ice.",
    price: "$5.50",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    dietary: ["vegan"],
  },
  {
    id: 4,
    name: "Ceremonial Matcha Latte",
    description: "Premium grade matcha with oat milk foam",
    fullDescription: "We use only ceremonial-grade matcha from Uji, Japan. Whisked to perfection and combined with silky oat milk for a creamy, earthy, and slightly sweet experience. Available hot or iced.",
    price: "$6.50",
    category: "tea",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80",
    featured: true,
    dietary: ["vegan", "dairy-free"],
  },
  {
    id: 5,
    name: "London Fog",
    description: "Earl Grey tea, vanilla, and steamed milk",
    fullDescription: "A comforting classic made with organic Earl Grey tea, house-made vanilla syrup, and your choice of steamed milk. The bergamot notes pair beautifully with the sweet vanilla.",
    price: "$5.50",
    category: "tea",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80",
  },
  {
    id: 6,
    name: "Avocado Toast",
    description: "Sourdough, smashed avocado, poached eggs, microgreens",
    fullDescription: "Our bestseller. Thick-cut sourdough from a local bakery, topped with perfectly ripe avocado, two poached eggs, pickled red onion, microgreens, and a drizzle of extra virgin olive oil. Finished with sea salt and cracked pepper.",
    price: "$14.00",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80",
    featured: true,
    dietary: ["vegetarian"],
    allergens: ["gluten", "eggs"],
  },
  {
    id: 7,
    name: "Açaí Bowl",
    description: "Organic açaí blend with fresh fruits and granola",
    fullDescription: "A thick, smoothie-like bowl made with organic açaí, banana, and mixed berries. Topped with house-made granola, fresh strawberries, blueberries, sliced banana, coconut flakes, and a drizzle of local honey.",
    price: "$13.00",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80",
    dietary: ["vegan", "gluten-free"],
  },
  {
    id: 8,
    name: "Classic Eggs Benedict",
    description: "Poached eggs, Canadian bacon, hollandaise",
    fullDescription: "Two perfectly poached eggs nestled on toasted English muffins with premium Canadian bacon, smothered in our silky house-made hollandaise sauce. Served with crispy breakfast potatoes.",
    price: "$16.00",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1608039829572-8b6f4b3f0f1a?w=600&q=80",
    allergens: ["gluten", "eggs", "dairy"],
  },
  {
    id: 9,
    name: "Mediterranean Grain Bowl",
    description: "Quinoa, falafel, hummus, roasted vegetables",
    fullDescription: "A nourishing bowl of fluffy quinoa topped with house-made falafel, creamy hummus, roasted red peppers, cucumber, cherry tomatoes, kalamata olives, and a lemon-tahini dressing.",
    price: "$15.00",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    featured: true,
    dietary: ["vegan", "gluten-free"],
  },
  {
    id: 10,
    name: "Grilled Chicken Sandwich",
    description: "Herb-marinated chicken, pesto aioli, ciabatta",
    fullDescription: "Juicy herb-marinated chicken breast grilled to perfection, topped with basil pesto aioli, fresh mozzarella, sun-dried tomatoes, and arugula. Served on toasted ciabatta with a side of mixed greens.",
    price: "$14.00",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&q=80",
    allergens: ["gluten", "dairy"],
  },
  {
    id: 11,
    name: "Butter Croissant",
    description: "Flaky, golden, baked fresh daily",
    fullDescription: "Our croissants are made using a traditional French technique with high-quality European butter. Laminated over three days for maximum flakiness. Baked fresh every morning.",
    price: "$4.50",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    allergens: ["gluten", "dairy"],
  },
  {
    id: 12,
    name: "Almond Croissant",
    description: "Filled with almond cream, topped with sliced almonds",
    fullDescription: "A twice-baked croissant filled with house-made almond frangipane cream, soaked in simple syrup, and topped with toasted sliced almonds and a dusting of powdered sugar. Decadent and nutty.",
    price: "$5.50",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=600&q=80",
    featured: true,
    allergens: ["gluten", "dairy", "nuts"],
  },
];

function DietaryIcon({ type }: { type: string }) {
  switch (type) {
    case "vegan":
      return <Leaf className="h-4 w-4 text-green-600" />;
    case "vegetarian":
      return <Leaf className="h-4 w-4 text-green-500" />;
    case "dairy-free":
      return <Milk className="h-4 w-4 text-blue-500" />;
    case "gluten-free":
      return <Wheat className="h-4 w-4 text-amber-600" />;
    default:
      return null;
  }
}

function MenuItemCard({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
        item.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden ${item.featured ? "h-64" : "h-48"}`}>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.featured && (
          <div className="absolute top-4 left-4 bg-terracotta text-cream text-xs font-body font-semibold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-semibold text-espresso">{item.name}</h3>
          <span className="font-display text-lg font-semibold text-terracotta whitespace-nowrap">
            {item.price}
          </span>
        </div>
        <p className="font-body text-warm-charcoal/70 text-sm mb-3">{item.description}</p>
        {item.dietary && item.dietary.length > 0 && (
          <div className="flex gap-2">
            {item.dietary.map((d) => (
              <div
                key={d}
                className="flex items-center gap-1 text-xs font-body text-warm-charcoal/60 bg-cream rounded-full px-2 py-1"
              >
                <DietaryIcon type={d} />
                <span className="capitalize">{d}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ItemDetailModal({ item, onClose }: { item: MenuItem | null; onClose: () => void }) {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-espresso/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-cream rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-espresso/80 hover:bg-espresso rounded-full flex items-center justify-center text-cream transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-espresso">
              {item.name}
            </h2>
            <span className="font-display text-2xl font-semibold text-terracotta">
              {item.price}
            </span>
          </div>
          <p className="font-body text-warm-charcoal leading-relaxed mb-6">
            {item.fullDescription || item.description}
          </p>

          {item.dietary && item.dietary.length > 0 && (
            <div className="mb-6">
              <h4 className="font-display text-sm font-semibold text-espresso mb-2 uppercase tracking-wider">
                Dietary Info
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.dietary.map((d) => (
                  <div
                    key={d}
                    className="flex items-center gap-1 text-sm font-body text-warm-charcoal bg-white border border-warm-charcoal/20 rounded-full px-3 py-1"
                  >
                    <DietaryIcon type={d} />
                    <span className="capitalize">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.allergens && item.allergens.length > 0 && (
            <div className="mb-6">
              <h4 className="font-display text-sm font-semibold text-espresso mb-2 uppercase tracking-wider">
                Allergens
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.allergens.map((a) => (
                  <span
                    key={a}
                    className="text-sm font-body text-terracotta bg-terracotta/10 rounded-full px-3 py-1 capitalize"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Button
            className="w-full bg-terracotta hover:bg-terracotta/90 text-cream font-body font-semibold py-6 rounded-full transition-transform hover:scale-[0.98]"
          >
            Add to Cart (Coming Soon)
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-espresso">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1920&q=80"
            alt="Menu background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-caramel text-sm tracking-[0.3em] uppercase mb-4"
          >
            Our Menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream"
          >
            Crafted for You
          </motion.h1>
        </div>
      </section>

      {/* Menu Content */}
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

          {/* Menu Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 0.05}>
                  <MenuItemCard item={item} onClick={() => setSelectedItem(item)} />
                </ScrollReveal>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </Layout>
  );
}
