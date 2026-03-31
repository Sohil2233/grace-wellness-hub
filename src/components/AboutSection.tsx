import { motion } from "framer-motion";
import { Award, Users, Smile, ShieldCheck } from "lucide-react";
import doctorImg from "@/assets/doctor-harvard.webp";

const stats = [
  { icon: Users, value: "10,000+", label: "Patients Treated" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Smile, value: "252", label: "Google Reviews" },
  { icon: ShieldCheck, value: "100%", label: "Hygienic Standards" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <img
              src={doctorImg}
              alt="Dr. Sampathkumar at Harvard School of Dental Medicine"
              className="rounded-lg shadow-elevated w-full max-w-md mx-auto"
              loading="lazy"
              width={400}
              height={600}
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-lg px-4 py-2 shadow-card">
              <p className="text-xs font-medium">Harvard Trained</p>
              <p className="text-sm font-bold">Dr. Sampathkumar</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
            Where Expertise Meets Compassion
          </h2>
          <p className="text-muted-foreground mb-4">
            Located in the heart of Tarabai Park, Grace Skin, Hair and Dental Implant Centre offers a comprehensive suite of cosmetic and medical services. Our expert team, led by Dr. Rachana and Dr. Sampathkumar, provides exceptional care across dermatology, dental implants, skincare, and hair restoration.
          </p>
          <p className="text-muted-foreground mb-8">
            We are dedicated to helping our clients look and feel their best with advanced techniques and a focus on professionalism.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-accent rounded-lg p-4 text-center">
                <s.icon className="w-6 h-6 mx-auto mb-2 text-accent-foreground" />
                <p className="text-xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
