import { motion } from "framer-motion";
import skinImg from "@/assets/skin-treatment.jpg";
import hairImg from "@/assets/hair-treatment.jpg";
import dentalImg from "@/assets/dental-implant.jpg";
import smileImg from "@/assets/smile-result.jpg";

const treatments = [
  {
    title: "Skin Treatments",
    desc: "Acne management, pigmentation correction, HydraFacial, chemical peels, vitiligo treatment, and anti-aging solutions.",
    image: skinImg,
    items: ["Acne Treatment", "HydraFacial", "Pigmentation", "Vitiligo", "Anti-Aging"],
  },
  {
    title: "Hair Restoration",
    desc: "PRP therapy, hair fall treatment, hair reduction, and advanced hair transplant solutions for men and women.",
    image: hairImg,
    items: ["PRP Therapy", "Hair Fall Treatment", "Hair Reduction", "Hair Transplant"],
  },
  {
    title: "Dental Implants",
    desc: "State-of-the-art dental implants, painless procedures, crowns, bridges, and complete smile makeovers.",
    image: dentalImg,
    items: ["Dental Implants", "Crowns & Bridges", "Root Canal", "Teeth Whitening"],
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Smile design, veneers, teeth alignment, and aesthetic dental procedures for a confident smile.",
    image: smileImg,
    items: ["Smile Design", "Veneers", "Teeth Alignment", "Cosmetic Fillings"],
  },
];

const TreatmentsSection = () => (
  <section id="treatments" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Treatments We Offer</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Comprehensive skin, hair, and dental care with cutting-edge technology and personalized treatment plans.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {treatments.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-bold mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{t.desc}</p>
              <div className="flex flex-wrap gap-2">
                {t.items.map((item) => (
                  <span key={item} className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TreatmentsSection;
