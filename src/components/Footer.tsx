const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">Grace Clinic</h3>
          <p className="text-primary-foreground/60 text-sm">
            Expert skin, hair & dental care in Kolhapur. Your confidence, our commitment.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
          <div className="space-y-2 text-sm text-primary-foreground/60">
            <a href="#about" className="block hover:text-primary-foreground transition-colors">About</a>
            <a href="#treatments" className="block hover:text-primary-foreground transition-colors">Treatments</a>
            <a href="#gallery" className="block hover:text-primary-foreground transition-colors">Gallery</a>
            <a href="#appointment" className="block hover:text-primary-foreground transition-colors">Book Appointment</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Services</h4>
          <div className="space-y-2 text-sm text-primary-foreground/60">
            <p>Skin Treatments</p>
            <p>Hair Restoration & PRP</p>
            <p>Dental Implants</p>
            <p>Cosmetic Dentistry</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Grace Skin, Hair and Dental Implant Centre. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
