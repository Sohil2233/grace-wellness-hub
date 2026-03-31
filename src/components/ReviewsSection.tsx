import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rohit Patil",
    text: "I have been visiting Dr. Rachana for hair fall treatment for the last 3 months, and my experience has been very positive. We have recently started PRP sessions, and I can already see wonderful results.",
    rating: 5,
  },
  {
    name: "Aditi Upadhye",
    text: "I got hair reduction done in the chin area and results post one session is astounding. Dr. Sampathkumar and all staff members provide required information before treatment putting patients at ease.",
    rating: 5,
  },
  {
    name: "Ekta Chetiwal",
    text: "My pimples have reduced to almost zero. The treatment has worked wonderfully, and the staff is very friendly, supportive, and kind throughout the process. I would especially like to thank Dr. Rachna.",
    rating: 5,
  },
  {
    name: "Rajveer Narake",
    text: "I visited the clinic for a dental implant, and the experience was excellent. Dr. Sampat Kumar did a fantastic job—the entire procedure was virtually painless, and I experienced no post-treatment pain at all.",
    rating: 5,
  },
  {
    name: "Neha Tendulkar",
    text: "Grace is the secret of my beautiful and flawless skin. This is the place where you can reassure about all beauty treatments in professional way. Special Thanks to Dr. Rachana Ma'am.",
    rating: 5,
  },
  {
    name: "Samrudhi Patil",
    text: "I visited the clinic for acne treatment and HydraFacial and Slush Therapy. The results were amazing. Rachana ma'am patiently understood my history and explained the management well.",
    rating: 5,
  },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">What Our Patients Say</h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-muted-foreground font-medium">4.6 out of 5 · 252 Reviews on Google</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card rounded-lg p-6 shadow-card"
          >
            <Quote className="w-8 h-8 text-primary/20 mb-3" />
            <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{r.text}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">{r.name}</p>
                <div className="flex mt-1">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Google Review</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
