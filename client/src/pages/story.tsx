import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Leaf, Users, Anchor, ShieldCheck } from "lucide-react";

export default function Story() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gray-900 overflow-hidden">
        <img 
          src="/assets/images/new/family-hero-crouched.jpg" 
          alt="Nisbet family three generations" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white space-y-6">
          <span className="uppercase tracking-[0.3em] text-sm font-medium text-accent drop-shadow-md">Est. 1975</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight max-w-4xl drop-shadow-lg">
            A Legacy Born on<br/>Willapa Bay
          </h1>
          <p className="font-sans text-lg md:text-xl text-white max-w-2xl font-light leading-relaxed drop-shadow-md">
            From 10 acres and a pickup truck to a leader in sustainable aquaculture. This is the story of the Nisbet family.
          </p>
        </div>
      </div>

      {/* The Beginning */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-accent uppercase tracking-widest text-sm font-bold">
                <span className="w-12 h-[1px] bg-accent"></span>
                The Beginning
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                One Truck and a Dream
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                In 1975, Dave and Maureene Nisbet founded the Nisbet Oyster Company with a simple but ambitious vision. Armed with just 10 acres of tideland in Willapa Bay and a single pickup truck, Dave sold fresh oysters directly from the back of his vehicle.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Dave had fallen in love with the bay years earlier while researching oyster seed. He saw the potential of these pristine waters not just to grow shellfish, but to sustain a community. That passion became the foundation of Goose Point Oysters.
              </p>
            </div>
            <div className="relative aspect-[4/5] md:aspect-square bg-gray-100 overflow-hidden rounded-sm">
              <img 
                src="/assets/images/new/family-mudflats-2.jpg" 
                alt="Two Generations of Oyster Farmers" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Next Generation */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 relative aspect-video bg-gray-100 overflow-hidden rounded-sm shadow-xl">
              <img 
                src="/assets/images/new/women-farmers.jpg" 
                alt="Kathleen Nisbet Moncy and team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-4 text-accent uppercase tracking-widest text-sm font-bold">
                <span className="w-12 h-[1px] bg-accent"></span>
                Family Legacy
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                Generations Deep
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Kathleen Nisbet Moncy, Dave's daughter, made her first trip to the oyster beds at just two years old, riding in a basket on her father's back. Today, she serves as COO, working side-by-side with her father to lead the company into the future.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                "Working alongside my daughter is probably the biggest joy of my life," says Dave. This multi-generational bond extends to the crew as well, with many employees' families working with the Nisbets for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-sky-50 text-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl">Stewards of the Bay</h2>
            <p className="text-primary/80 text-lg font-light">
              We don't just farm oysters; we care for the ecosystem that sustains us all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center p-6 border border-primary/10 bg-white/60 rounded-sm hover:bg-white transition-colors shadow-sm">
              <div className="mx-auto w-12 h-12 bg-white flex items-center justify-center rounded-full mb-4 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl">Safety First</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                We pioneered High Hydrostatic Pressure (HHP) processing on the West Coast. This "Fresher Under Pressure" technology ensures our BlueSeal™ oysters are vibrio-free and safe to eat raw, without using heat.
              </p>
            </div>

            <div className="space-y-4 text-center p-6 border border-primary/10 bg-white/60 rounded-sm hover:bg-white transition-colors shadow-sm">
              <div className="mx-auto w-12 h-12 bg-white flex items-center justify-center rounded-full mb-4 shadow-sm">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl">Sustainable Future</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                To combat ocean acidification, we built a solar-powered hatchery in Hawaii. This allows us to produce healthy seed stock year-round, ensuring a sustainable supply of shellfish for the entire West Coast.
              </p>
            </div>

            <div className="space-y-4 text-center p-6 border border-primary/10 bg-white/60 rounded-sm hover:bg-white transition-colors shadow-sm">
              <div className="mx-auto w-12 h-12 bg-white flex items-center justify-center rounded-full mb-4 shadow-sm">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl">Community Core</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                From 10 acres to over 2,000, we've grown to support nearly 100 families in our small community of Bay Center. We are proud to provide year-round employment in a region we love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <Anchor className="w-12 h-12 mx-auto text-accent opacity-50" />
          <blockquote className="font-serif text-3xl md:text-5xl leading-tight text-primary italic">
            "We are trying to be a sustainable company that is vertically integrated from seed to table. Farming oysters is the most rewarding job in the world."
          </blockquote>
          <cite className="block font-sans text-sm font-bold tracking-widest text-muted-foreground not-italic">
            — KATHLEEN NISBET MONCY, COO
          </cite>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gray-900">
          <img 
            src="/assets/images/story/high-pressure.jpg" 
            alt="Oyster processing" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-white">Taste the Tradition</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Experience the quality and care that goes into every Goose Point oyster. Delivered fresh from our family farm to your door.
          </p>
          <Link href="/shop">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-none">
              Shop Our Oysters
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
