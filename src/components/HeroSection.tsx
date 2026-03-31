import { motion } from "framer-motion";
import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDental from "@/assets/hero-dental.jpg";

const HeroSection = () => (
  <section id="home" className="relative pt-16 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroDental} alt="Grace Clinic modern dental treatment room" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>

    <div className="relative container mx-auto px-4 py-24 md:py-36 lg:py-44">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-sm font-medium text-primary-foreground/90">4.6 · 252 Google Reviews</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4">
          Grace Skin, Hair &<br />Dental Implant Centre
        </h1>
        <p className="text-lg text-primary-foreground/80 mb-6 max-w-lg font-body">
          Expert dermatology, hair restoration & dental implant services in Kolhapur. Your confidence, our commitment.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <Button size="lg" asChild>
            <a href="#appointment">Book Appointment</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="tel:02312652616">Call Now</a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 text-primary-foreground/70 text-sm">
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Tarabai Park, Kolhapur</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Mon–Sat 10:30 AM – 7 PM</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
