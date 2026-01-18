import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InstagramSection from "@/components/home/InstagramSection";
import HoursLocationSection from "@/components/home/HoursLocationSection";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <SpecialtiesSection />
      <TestimonialsSection />
      <InstagramSection />
      <HoursLocationSection />
    </Layout>
  );
}
