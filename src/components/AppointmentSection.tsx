import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Skin Treatment",
  "Hair Fall / PRP",
  "Hair Reduction",
  "Dental Implant",
  "Cosmetic Dentistry",
  "HydraFacial",
  "Vitiligo Treatment",
  "Consultation",
];

const AppointmentSection = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Appointment Request Sent!",
      description: "We will contact you shortly to confirm your appointment.",
    });
  };

  return (
    <section id="appointment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Book Online</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
              Schedule Your Visit
            </h2>
            <p className="text-muted-foreground mb-6">
              Book your appointment online and we'll confirm within a few hours. Walk-ins are also welcome during clinic hours.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 bg-accent rounded-lg p-4">
                <CalendarDays className="w-5 h-5 text-accent-foreground mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Clinic Hours</p>
                  <p className="text-muted-foreground">Monday – Saturday: 10:30 AM – 7:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-card rounded-lg p-8 shadow-card text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">Your appointment request has been submitted. We'll contact you shortly.</p>
                <Button className="mt-4" onClick={() => setSubmitted(false)}>Book Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 shadow-card space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Full Name" required />
                  <Input placeholder="Phone Number" type="tel" required />
                </div>
                <Input placeholder="Email (optional)" type="email" />
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Treatment" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="date" required />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10:30">10:30 AM</SelectItem>
                      <SelectItem value="11:30">11:30 AM</SelectItem>
                      <SelectItem value="12:30">12:30 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea placeholder="Any additional notes or concerns..." rows={3} />
                <Button type="submit" className="w-full" size="lg">
                  Request Appointment
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
