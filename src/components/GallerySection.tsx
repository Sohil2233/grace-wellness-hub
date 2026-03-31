import { motion } from "framer-motion";
import clinicCerts from "@/assets/clinic-certificates.webp";
import clinicReception from "@/assets/clinic-reception.webp";
import clinicWaiting from "@/assets/clinic-waiting.webp";
import clinicEvent from "@/assets/clinic-event.webp";
import smileResult from "@/assets/smile-result.jpg";
import heroDental from "@/assets/hero-dental.jpg";

const images = [
  { src: clinicReception, alt: "Clinic reception area", span: "md:col-span-2" },
  { src: clinicCerts, alt: "Certificates and credentials", span: "" },
  { src: clinicWaiting, alt: "Patient waiting area with certificates", span: "" },
  { src: clinicEvent, alt: "Community health event by Grace Clinic", span: "md:col-span-2" },
  { src: smileResult, alt: "Happy patient smile result", span: "" },
  { src: heroDental, alt: "Modern dental treatment room", span: "" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Gallery</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Our Clinic & Results</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`overflow-hidden rounded-lg ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
