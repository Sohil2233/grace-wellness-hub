import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Find Us</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-accent rounded-lg p-3">
              <MapPin className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Address</h3>
              <p className="text-muted-foreground text-sm">
                In front Ice Magic Parlour, near Kiran Bunglow,<br />
                Tarabai Park, Kolhapur, Maharashtra 416003
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-accent rounded-lg p-3">
              <Phone className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <a href="tel:02312652616" className="text-primary font-medium text-sm">0231 265 2616</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-accent rounded-lg p-3">
              <Clock className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Working Hours</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday – Saturday: 10:30 AM – 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-accent rounded-lg p-3">
              <Mail className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">info@graceclinickolhapur.com</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-card h-80 md:h-auto">
          <iframe
            title="Grace Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8!2d74.22!3d16.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTarabai+Park+Kolhapur!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
