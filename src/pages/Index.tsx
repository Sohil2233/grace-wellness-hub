import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import AppointmentSection from "@/components/AppointmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <TreatmentsSection />
    <GallerySection />
    <ReviewsSection />
    <AppointmentSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
