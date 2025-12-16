import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// FAQ Data
const faqData = [
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you will receive an email with tracking information. You can use this tracking number on the carrier's website (typically FedEx or UPS) to monitor your shipment's progress. If you have any issues tracking your order, please contact our customer service team."
  },
  {
    question: "What's your return policy?",
    answer: "Due to the perishable nature of our products, we cannot accept returns on fresh or frozen seafood. However, if you receive damaged or spoiled product, please contact us immediately with photos and we will make it right. Non-perishable items like shucking knives can be returned within 30 days in unused condition."
  },
  {
    question: "Do you ship to my state?",
    answer: "We ship to most states in the continental United States. Some states have restrictions on live shellfish shipments. During checkout, you can enter your zip code to confirm delivery availability. We ship Monday through Wednesday to ensure your oysters arrive fresh."
  },
  {
    question: "How should I store my oysters?",
    answer: "Fresh oysters should be stored cup-side down in the refrigerator at 33-40 degrees F. Cover with a damp towel but never submerge in fresh water or store in an airtight container. Properly stored, they will stay fresh for 7-10 days. Pre-shucked oysters should be kept refrigerated and used within the date indicated on the package."
  },
  {
    question: "Can I visit the farm?",
    answer: "Yes! We welcome visitors to The Oystery, our farm store located in Bay Center, Washington. You can browse our fresh selection, learn about our sustainable farming practices, and experience the beauty of Willapa Bay. Check our store hours and plan your visit."
  },
  {
    question: "Do you offer wholesale pricing?",
    answer: "Absolutely! We offer competitive wholesale pricing for restaurants, retailers, and food service businesses. Please visit our Wholesale page or contact our sales team at sales@goosepoint.com to set up a wholesale account and learn about volume discounts."
  }
];

// Team member placeholder data
const teamMembers = [
  { name: "Coming Soon", role: "Team Member", placeholder: true },
  { name: "Coming Soon", role: "Team Member", placeholder: true },
  { name: "Coming Soon", role: "Team Member", placeholder: true },
  { name: "Coming Soon", role: "Team Member", placeholder: true }
];

export default function Connect() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Square email list
    setNewsletterSubmitted(true);
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero/Intro Section */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium">
              Join Our <span className="italic text-accent">Family</span>
            </h1>
            <p className="font-serif text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto">
              Whether you are a longtime friend or just discovering Goose Point, we would love to hear from you.
              Our family has been farming these waters for generations, and we are always excited to connect
              with fellow oyster lovers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Customer Service Card */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-sans text-xl text-foreground">Customer Service</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans text-sm text-muted-foreground mb-1">Phone</p>
                        <a href="tel:3608756629" className="font-serif text-foreground hover:text-primary transition-colors block">
                          360.875.6629
                        </a>
                        <a href="tel:8888756629" className="font-serif text-foreground hover:text-primary transition-colors block">
                          888.875.6629 (toll-free)
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans text-sm text-muted-foreground mb-1">Email</p>
                        <a href="mailto:info@goosepoint.com" className="font-serif text-foreground hover:text-primary transition-colors">
                          info@goosepoint.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans text-sm text-muted-foreground mb-1">Hours of Operation</p>
                        <p className="font-serif text-foreground">Monday - Friday: 9am - 5pm PST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Visit The Oystery Card */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="font-sans text-xl text-foreground">Visit The Oystery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans text-sm text-muted-foreground mb-1">Address</p>
                        <p className="font-serif text-foreground">
                          7081 Niawiakum St. Hwy 101<br />
                          Bay Center, WA 98527
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans text-sm text-muted-foreground mb-1">Store Hours</p>
                        <p className="font-serif text-foreground">
                          <span className="font-medium">Summer:</span> 9am - 5pm<br />
                          <span className="font-medium">Winter:</span> 9am - 4pm
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/the-oystery">
                    <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary/5 rounded py-5 text-xs uppercase tracking-widest font-sans font-bold">
                      Plan Your Visit <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Join Our Team / Careers Section */}
      <section id="careers" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-20 h-1 bg-accent"></div>
                <h2 className="font-sans text-3xl md:text-4xl font-medium text-foreground">
                  Join Our <span className="italic text-primary">Team</span>
                </h2>
                <p className="font-serif text-muted-foreground leading-relaxed text-lg">
                  Working at Goose Point means being part of a family tradition that spans generations.
                  We are always looking for passionate individuals who share our commitment to quality,
                  sustainability, and exceptional customer service.
                </p>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  From farm operations to customer service, there are many ways to join our team.
                  We offer competitive wages, a positive work environment, and the opportunity to
                  be part of something meaningful.
                </p>
                <a href="mailto:careers@goosepoint.com?subject=Career%20Inquiry">
                  <Button className="bg-primary text-white hover:bg-primary/90 border-none rounded px-8 py-6 text-xs uppercase tracking-widest font-sans font-bold mt-4">
                    Contact Us About Opportunities
                  </Button>
                </a>
              </div>
              <div className="relative h-[350px] lg:h-[400px] rounded overflow-hidden bg-secondary">
                <img
                  src="/assets/images/new/family-hero.jpg"
                  alt="Team working at Goose Point Oysters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">The People Behind The Oysters</h3>
            <h2 className="font-sans text-3xl md:text-4xl text-foreground font-medium">Meet the Team</h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team works tirelessly to bring you the finest oysters from Willapa Bay.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="relative aspect-square bg-gray-200 rounded overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                <h3 className="font-sans text-sm font-medium text-foreground">{member.name}</h3>
                <p className="font-serif text-xs text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center font-serif text-sm text-muted-foreground mt-8 italic">
            Team profiles coming soon. Check back to meet the faces behind Goose Point!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">Common Questions</h3>
            <h2 className="font-sans text-3xl md:text-4xl text-foreground font-medium">Frequently Asked Questions</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="font-sans text-base font-medium text-foreground hover:text-primary py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-serif text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <div className="text-center mt-10">
            <p className="font-serif text-muted-foreground mb-4">
              Still have questions? We would love to help.
            </p>
            <a href="mailto:info@goosepoint.com">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded px-8 py-5 text-xs uppercase tracking-widest font-sans font-bold">
                Contact Support
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section id="newsletter" className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <h2 className="font-sans text-3xl md:text-4xl font-medium">
              Join Our Friends & <span className="italic text-accent">Family</span>
            </h2>
            <p className="font-serif text-white/85 leading-relaxed text-lg">
              Get exclusive offers, seasonal recipes, and updates from the farm delivered straight to your inbox.
              Be the first to know about new products and special promotions.
            </p>

            {newsletterSubmitted ? (
              <div className="bg-white/10 rounded p-6 mt-6">
                <p className="font-sans font-medium text-accent">Thank you for joining our family!</p>
                <p className="font-serif text-white/80 text-sm mt-2">
                  You will receive a confirmation email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 mt-8 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent py-6"
                />
                <Button
                  type="submit"
                  className="bg-accent text-white hover:bg-accent/90 border-none rounded px-8 py-6 text-xs uppercase tracking-widest font-sans font-bold whitespace-nowrap"
                >
                  Join the Club
                </Button>
              </form>
            )}

            <p className="font-serif text-white/60 text-xs mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">Stay Connected</h3>
            <h2 className="font-sans text-2xl md:text-3xl text-foreground font-medium">Follow Along</h2>
            <p className="font-serif text-muted-foreground">
              Join our community for behind-the-scenes looks at farm life, delicious recipes, and more.
            </p>

            <div className="flex justify-center gap-6 pt-6">
              <a
                href="https://www.facebook.com/goosepointoysters"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow group"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/goosepointoysters"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow group"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://twitter.com/goosepointoysters"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow group"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://www.pinterest.com/goosepointoysters"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow group"
                aria-label="Pinterest"
              >
                <svg className="w-6 h-6 text-primary group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            <p className="font-serif text-sm text-muted-foreground pt-4">
              Tag us <span className="text-primary font-medium">@goosepointoysters</span> to be featured!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
