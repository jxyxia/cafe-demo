import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/common/ScrollReveal";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-espresso overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&q=80"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-caramel text-sm tracking-[0.3em] uppercase mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream"
          >
            We'd Love to<br />Hear From You
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-espresso mb-2">
                  Send Us a Message
                </h2>
                <p className="font-body text-warm-charcoal/70 mb-8">
                  Have a question or feedback? We'd love to hear from you.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-espresso mb-2">
                      Message Sent!
                    </h3>
                    <p className="font-body text-warm-charcoal/70 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-espresso text-espresso hover:bg-espresso/5 font-body font-semibold rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block font-body text-sm font-medium text-espresso mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`bg-cream border-warm-charcoal/20 rounded-lg ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-body text-sm font-medium text-espresso mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`bg-cream border-warm-charcoal/20 rounded-lg ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block font-body text-sm font-medium text-espresso mb-2">
                          Phone
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="bg-cream border-warm-charcoal/20 rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-sm font-medium text-espresso mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        className={`bg-cream border-warm-charcoal/20 rounded-lg resize-none ${
                          errors.message ? "border-red-500" : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-terracotta hover:bg-terracotta/90 text-cream font-body font-semibold py-6 rounded-full transition-transform hover:scale-[0.98] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="font-display text-xl font-semibold text-espresso mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-terracotta" />
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-espresso mb-1">
                          Address
                        </h4>
                        <p className="font-body text-warm-charcoal/70">
                          123 Brew Street<br />
                          Coffee District, CA 90210
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-terracotta" />
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-espresso mb-1">
                          Phone
                        </h4>
                        <a
                          href="tel:+15551234567"
                          className="font-body text-warm-charcoal/70 hover:text-terracotta transition-colors"
                        >
                          (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-terracotta" />
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-espresso mb-1">
                          Email
                        </h4>
                        <a
                          href="mailto:hello@aromahaven.com"
                          className="font-body text-warm-charcoal/70 hover:text-terracotta transition-colors"
                        >
                          hello@aromahaven.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-terracotta" />
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-espresso mb-1">
                          Hours
                        </h4>
                        <div className="font-body text-warm-charcoal/70 text-sm space-y-1">
                          <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                          <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Map */}
              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.38755968478288!3d34.05323698060701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b93d5b5c9f3f%3A0x2b0c8f3b3b5b5c5c!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Aroma Haven Location"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
