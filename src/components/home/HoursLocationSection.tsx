import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Link } from "react-router-dom";

export default function HoursLocationSection() {
  return (
    <section className="py-24 md:py-32 bg-caramel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
                alt="Cafe interior"
                className="rounded-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-terracotta text-cream p-6 rounded-xl shadow-xl hidden md:block">
                <p className="font-body text-sm uppercase tracking-wider mb-1">Now Open</p>
                <p className="font-display text-2xl font-semibold">7 Days a Week</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="lg:pl-12">
            <ScrollReveal>
              <p className="font-body text-terracotta text-sm tracking-[0.3em] uppercase mb-4">
                Visit Us
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-espresso mb-6">
                We'd Love to<br />See You
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-body text-warm-charcoal/80 text-lg leading-relaxed mb-8">
                Drop by for your morning ritual, a leisurely lunch, or an afternoon pick-me-up. 
                Our doors are always open for coffee lovers and friends.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-espresso mb-1">Location</h4>
                    <p className="font-body text-warm-charcoal/70">
                      123 Brew Street, Coffee District<br />
                      California, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-espresso mb-1">Hours</h4>
                    <div className="font-body text-warm-charcoal/70 space-y-1">
                      <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    className="bg-terracotta hover:bg-terracotta/90 text-cream font-body font-semibold px-8 rounded-full transition-transform hover:scale-[0.98]"
                  >
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button
                    variant="outline"
                    className="border-espresso text-espresso hover:bg-espresso/5 font-body font-semibold px-8 rounded-full"
                  >
                    View Menu
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
