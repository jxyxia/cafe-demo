import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      {/* Newsletter Section */}
      <div className="border-b border-warm-charcoal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Stay in the Loop
            </h3>
            <p className="font-body text-cream/70 mb-8">
              Subscribe to our newsletter for seasonal menu updates, special events, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-warm-charcoal/50 border-warm-charcoal/30 text-cream placeholder:text-cream/50 rounded-full px-6"
              />
              <Button
                type="submit"
                className="bg-caramel hover:bg-caramel/90 text-espresso font-body font-semibold rounded-full px-8 transition-transform hover:scale-[0.98]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Coffee className="h-8 w-8 text-caramel" />
              <span className="font-display text-2xl font-semibold">
                Aroma Haven
              </span>
            </Link>
            <p className="font-body text-cream/70 text-sm leading-relaxed mb-6">
              A warm neighborhood cafe where every cup tells a story. 
              Crafted with love, served with care.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-warm-charcoal/50 flex items-center justify-center hover:bg-caramel transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-warm-charcoal/50 flex items-center justify-center hover:bg-caramel transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Explore</h4>
            <nav className="space-y-4">
              <Link to="/" className="block font-body text-cream/70 hover:text-caramel transition-colors">
                Home
              </Link>
              <Link to="/menu" className="block font-body text-cream/70 hover:text-caramel transition-colors">
                Menu
              </Link>
              <Link to="/about" className="block font-body text-cream/70 hover:text-caramel transition-colors">
                About Us
              </Link>
              <Link to="/gallery" className="block font-body text-cream/70 hover:text-caramel transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="block font-body text-cream/70 hover:text-caramel transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Hours</h4>
            <div className="space-y-4 font-body text-sm">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-caramel mt-0.5" />
                <div>
                  <p className="text-cream">Monday - Friday</p>
                  <p className="text-cream/70">7:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-caramel mt-0.5" />
                <div>
                  <p className="text-cream">Saturday - Sunday</p>
                  <p className="text-cream/70">8:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4 font-body text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-caramel mt-0.5" />
                <p className="text-cream/70">
                  123 Brew Street<br />
                  Coffee District, CA 90210
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-caramel" />
                <a href="tel:+15551234567" className="text-cream/70 hover:text-caramel transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-caramel" />
                <a href="mailto:hello@aromahaven.com" className="text-cream/70 hover:text-caramel transition-colors">
                  hello@aromahaven.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-charcoal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center font-body text-sm text-cream/50">
            © {new Date().getFullYear()} Aroma Haven Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
