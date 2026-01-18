import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/common/ScrollReveal";
import { motion } from "framer-motion";
import { Leaf, Heart, Coffee, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Maria Santos",
    role: "Founder & Head Roaster",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Third-generation coffee grower from Colombia who brought her family's passion to our cups.",
  },
  {
    name: "James Chen",
    role: "Head Chef",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Culinary school graduate with a love for farm-to-table cooking and seasonal ingredients.",
  },
  {
    name: "Emma Wilson",
    role: "Head Barista",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Award-winning barista with expertise in latte art and alternative brewing methods.",
  },
];

const values = [
  {
    icon: Coffee,
    title: "Quality First",
    description: "We source only the finest beans from sustainable farms around the world.",
  },
  {
    icon: Heart,
    title: "Community Focus",
    description: "More than a cafe, we're a gathering place for neighbors and friends.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "From compostable cups to local sourcing, we prioritize our planet.",
  },
  {
    icon: Users,
    title: "Inclusive Space",
    description: "Everyone is welcome here. Your story matters to us.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-espresso overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&q=80"
            alt="About background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-caramel text-sm tracking-[0.3em] uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream"
          >
            A Labor of Love
          </motion.h1>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80"
                  alt="Our story"
                  className="rounded-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-caramel/20 rounded-full blur-3xl" />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="font-body text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
                  How It All Began
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-espresso mb-6">
                  From a Dream to Your Daily Ritual
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="space-y-6 font-body text-warm-charcoal/80 text-lg leading-relaxed">
                  <p>
                    Aroma Haven was born in 2018 from a simple belief: that a great cup of coffee 
                    can transform an ordinary moment into something extraordinary.
                  </p>
                  <p>
                    Our founder, Maria Santos, grew up on her family's coffee farm in the Colombian 
                    highlands. She learned to taste the story in every bean—the soil, the rainfall, 
                    the careful hands that harvested it. When she moved to California, she missed 
                    that connection to coffee's origins.
                  </p>
                  <p>
                    So she created Aroma Haven: a place where every cup carries a story, where 
                    strangers become friends, and where the aroma of fresh espresso welcomes 
                    you home.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <blockquote className="mt-8 border-l-4 border-caramel pl-6">
                  <p className="font-display text-xl italic text-espresso">
                    "Coffee is more than a beverage—it's a bridge between cultures, 
                    a moment of peace in a busy day, and a reason to gather."
                  </p>
                  <footer className="mt-4 font-body text-sm text-warm-charcoal">
                    — Maria Santos, Founder
                  </footer>
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-caramel/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
                What We Stand For
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-espresso">
                Our Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-terracotta" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-espresso mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-warm-charcoal/70">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
                The People Behind the Brew
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-espresso">
                Meet Our Team
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group text-center"
                >
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-espresso mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-terracotta font-medium mb-3">{member.role}</p>
                  <p className="font-body text-warm-charcoal/70 text-sm">{member.bio}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 md:py-32 bg-espresso relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-caramel/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <p className="font-body text-caramel text-sm tracking-[0.3em] uppercase mb-4">
                  Our Commitment
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-6">
                  Sustainability at Heart
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="space-y-6 font-body text-cream/80 text-lg leading-relaxed">
                  <p>
                    We believe that great coffee and environmental responsibility go hand in hand. 
                    Every decision we make considers our impact on the planet.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-caramel mt-1 flex-shrink-0" />
                      <span>100% compostable cups, lids, and straws</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-caramel mt-1 flex-shrink-0" />
                      <span>Direct trade relationships with coffee farmers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-caramel mt-1 flex-shrink-0" />
                      <span>Local sourcing for produce within 50 miles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-caramel mt-1 flex-shrink-0" />
                      <span>Solar-powered roasting facility</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="mt-8">
                  <Link to="/contact">
                    <Button
                      className="bg-caramel hover:bg-caramel/90 text-espresso font-body font-semibold px-8 rounded-full transition-transform hover:scale-[0.98]"
                    >
                      Learn More About Our Practices
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
                  alt="Coffee beans"
                  className="rounded-2xl w-full h-[500px] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-espresso mb-6">
              Come Experience<br />Our Story
            </h2>
            <p className="font-body text-warm-charcoal/70 text-lg mb-10 max-w-2xl mx-auto">
              We'd love to welcome you to Aroma Haven. Whether it's your first visit or your hundredth, 
              there's always a warm cup and a friendly smile waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gallery">
                <Button
                  className="bg-terracotta hover:bg-terracotta/90 text-cream font-body font-semibold px-8 rounded-full transition-transform hover:scale-[0.98]"
                >
                  View Gallery
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-espresso text-espresso hover:bg-espresso/5 font-body font-semibold px-8 rounded-full"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
