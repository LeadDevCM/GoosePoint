import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Phone, Clock, Compass } from "lucide-react";
import { useState } from "react";

export default function TheOystery() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gray-900 overflow-hidden">
        <img
          src="/assets/images/the-oystery-sunset.jpg"
          alt="The Oystery storefront at sunset on Willapa Bay"
          className="absolute inset-0 w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white space-y-6">
          <span className="uppercase tracking-[0.3em] text-sm font-sans font-medium text-accent drop-shadow-md">
            Visit Us
          </span>
          <h1 className="font-sans text-4xl md:text-6xl leading-tight max-w-4xl drop-shadow-lg font-medium">
            Welcome to The Oystery
          </h1>
          <p className="font-serif text-lg md:text-xl text-white max-w-2xl font-light leading-relaxed drop-shadow-md">
            Experience fresh oysters, local flavor, and Willapa Bay hospitality at our beloved farm store.
          </p>
        </div>
      </div>

      {/* Store Information Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Address Card */}
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                <h3 className="font-sans text-xl font-medium">Our Location</h3>
              </div>
              <p className="text-muted-foreground font-serif text-lg">
                7081 Niawiakum St. Hwy 101
              </p>
              <p className="text-muted-foreground font-serif text-lg">
                Bay Center, WA 98527
              </p>
              <a
                href="https://maps.google.com/?q=7081+Niawiakum+St+Bay+Center+WA+98527"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent hover:text-accent/80 font-sans font-medium mt-4 transition-colors"
              >
                Get Directions
              </a>
            </div>

            {/* Hours Card */}
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Clock className="w-6 h-6 text-accent flex-shrink-0" />
                <h3 className="font-sans text-xl font-medium">Store Hours</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-sans font-medium text-foreground">Summer (May - Sept)</p>
                  <p className="text-muted-foreground font-serif text-lg">9am - 5pm</p>
                </div>
                <div>
                  <p className="font-sans font-medium text-foreground">Winter (Oct - Apr)</p>
                  <p className="text-muted-foreground font-serif text-lg">9am - 4pm</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-serif italic pt-2">
                Closed major holidays
              </p>
            </div>

            {/* Phone Card */}
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                <h3 className="font-sans text-xl font-medium">Get in Touch</h3>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground font-serif text-lg">
                  <a href="tel:3608756629" className="hover:text-accent transition-colors">
                    360.875.6629
                  </a>
                </p>
                <p className="text-muted-foreground font-serif text-lg">
                  <a href="tel:8888756629" className="hover:text-accent transition-colors">
                    888.875.6629
                  </a>
                </p>
              </div>
              <p className="text-sm text-muted-foreground font-serif italic pt-2">
                Call us with questions or large orders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-sans text-3xl md:text-4xl font-medium text-center mb-12">
            Find Us on the Map
          </h2>
          <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.7899999999994!2d-123.85!3d46.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5493%3A0x0!2sGoose%20Point%20Oysters!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Oystery Location Map"
            />
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-sans text-3xl md:text-4xl font-medium">
              What to Expect at The Oystery
            </h2>
            <p className="text-muted-foreground text-lg font-serif">
              More than just a store, The Oystery is a destination where you can experience the heart of our farm operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-sans text-2xl font-medium text-accent">Fresh Oysters, Daily</h3>
                <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                  Walk up to our counter and select from freshly harvested oysters, pulled straight from Willapa Bay. Watch our expert shuckers work while you browse or chat about your favorite varieties.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans text-2xl font-medium text-accent">Farm Store Selection</h3>
                <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                  Beyond oysters, discover our full range of Goose Point products: shucked oysters, smoked oysters, seafood meals, gift cards, and special seasonal offerings you won't find online.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans text-2xl font-medium text-accent">Local Knowledge</h3>
                <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                  Our team knows every corner of the bay and every detail about our farming practices. Get recommendations, cooking tips, and stories about the season directly from people who live it.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans text-2xl font-medium text-accent">Scenic Location</h3>
                <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                  Situated right on Highway 101 with views of Willapa Bay, The Oystery is the perfect pit stop during your coastal drive. Take a moment to breathe in the salt air and coastal charm.
                </p>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="/assets/images/new/oysters-lemon-knife.jpg"
                    alt="Fresh oysters on display"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="/assets/images/story/hp-oysters-open.jpg"
                    alt="Shucked oysters ready to serve"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="/assets/images/new/family-mudflats.jpg"
                    alt="Willapa Bay scenic view"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="/assets/images/story/shooters-and-sauce.jpg"
                    alt="Farm store interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Available */}
          <div className="bg-secondary/50 rounded-lg p-12 space-y-8">
            <h3 className="font-sans text-2xl font-medium">Products You'll Find In Store</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-3 text-muted-foreground font-serif text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Fresh whole oysters (multiple varieties)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Pre-shucked oysters (fresh and frozen)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Smoked and specialty oyster products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Ready-to-cook seafood meals</span>
                </li>
              </ul>
              <ul className="space-y-3 text-muted-foreground font-serif text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Oyster shooters and specialty items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Gift cards (perfect for the oyster lover)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Seasonal and limited edition offerings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Farm merchandise and branded items</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Attractions Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="flex items-center justify-center gap-2 text-accent">
              <Compass className="w-5 h-5" />
              <span className="uppercase tracking-widest text-sm font-sans font-bold">
                Plan Your Visit
              </span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl font-medium">
              Make a Day of It on Willapa Bay
            </h2>
            <p className="text-muted-foreground text-lg font-serif">
              The Oystery is just the beginning. Explore the natural beauty and local attractions of Willapa Bay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4 p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-border">
              <h3 className="font-sans text-xl font-medium text-foreground">
                Willapa Hills & Trails
              </h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                Hike through pristine forests with stunning bay views. The surrounding area offers numerous trails for all skill levels, from leisurely walks to challenging hikes through old-growth timber.
              </p>
            </div>

            <div className="space-y-4 p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-border">
              <h3 className="font-sans text-xl font-medium text-foreground">
                Wildlife Viewing & Birdwatching
              </h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                Willapa Bay is a haven for wildlife. Bring binoculars to spot bald eagles, osprey, harbor seals, and numerous migratory birds. Spring and fall migrations are particularly spectacular.
              </p>
            </div>

            <div className="space-y-4 p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-border">
              <h3 className="font-sans text-xl font-medium text-foreground">
                Long Beach Peninsula
              </h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                Just 20 minutes away, explore sandy beaches, quirky beach towns, lighthouses, and fresh seafood restaurants. Long Beach is a classic Washington coastal destination.
              </p>
            </div>

            <div className="space-y-4 p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-border">
              <h3 className="font-sans text-xl font-medium text-foreground">
                Local Restaurants & Cafés
              </h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                Bay Center and surrounding communities feature charming local restaurants that often feature Goose Point oysters on their menus. Ask us for recommendations.
              </p>
            </div>

            <div className="space-y-4 p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-border">
              <h3 className="font-sans text-xl font-medium text-foreground">
                Scenic Drives
              </h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                The drive itself is beautiful. Highway 101 offers spectacular coastal and bay views. Stop at scenic pullouts to take photos and breathe in the Pacific Northwest atmosphere.
              </p>
            </div>

            <div className="space-y-4 p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-border">
              <h3 className="font-sans text-xl font-medium text-foreground">
                Photography Opportunities
              </h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                Sunset views over the bay, dramatic coastal landscapes, and the farm operation itself provide endless subjects for photographers. Capture the magic of Willapa Bay.
              </p>
            </div>
          </div>

          {/* Bay Recommendation Card */}
          <div className="mt-16 bg-accent/10 border-2 border-accent rounded-lg p-12 text-center space-y-6">
            <h3 className="font-sans text-2xl font-medium text-foreground">
              Pro Tip: Plan a Full Day Adventure
            </h3>
            <p className="text-muted-foreground font-serif text-lg max-w-3xl mx-auto">
              Start your morning at The Oystery, grab fresh oysters and coffee, then explore the hiking trails and scenic areas around the bay. Return to the store before it closes to pick up dinner, or visit one of the local restaurants that serve our oysters. End the day watching the sunset over Willapa Bay—it's an experience you'll never forget.
            </p>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="space-y-8 text-center">
            <h2 className="font-sans text-3xl md:text-4xl font-medium">
              Join the Family & Friends Club
            </h2>
            <p className="text-muted-foreground text-lg font-serif">
              Get exclusive offers, seasonal recipes, and updates from the farm delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 bg-white border border-border rounded text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                  required
                />
                <Button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 font-sans rounded"
                >
                  Join the Club
                </Button>
              </div>
              {subscribed && (
                <p className="text-accent font-sans font-medium">
                  Welcome to the family! Check your email for a welcome message.
                </p>
              )}
            </form>

            <p className="text-sm text-muted-foreground font-serif">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <img
            src="/assets/images/story/family-walking-away.jpg"
            alt="Willapa Bay sunset"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-sans text-3xl md:text-4xl text-white font-medium">
              Can't Visit in Person?
            </h2>
            <p className="text-white/80 text-lg font-serif max-w-2xl mx-auto">
              No problem. Shop our full selection online and we'll ship fresh oysters directly to your door, anywhere in the country.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded font-sans">
                  Shop Online
                </Button>
              </Link>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg rounded font-sans"
              >
                <a href="tel:3608756629">Call Us: 360.875.6629</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
