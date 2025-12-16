import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Package,
  Snowflake,
  Truck,
  Clock,
  ShieldCheck,
  Calendar,
  ThermometerSnowflake,
  Box,
  MapPin,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Timer,
  Refrigerator,
} from "lucide-react";

export default function Shipping() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-white/5"></div>
        <div className="relative container mx-auto px-4 text-center space-y-6">
          <span className="uppercase tracking-[0.3em] text-sm font-sans font-medium text-accent">
            Shipping Information
          </span>
          <h1 className="font-sans text-4xl md:text-6xl leading-tight max-w-4xl mx-auto font-medium">
            Fresh to Your Door
          </h1>
          <p className="font-serif text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Shucked, packed, and shipped within 24 hours
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent" />
              <span className="text-white/80">Same-Day Processing</span>
            </div>
            <div className="flex items-center gap-3">
              <Snowflake className="w-6 h-6 text-accent" />
              <span className="text-white/80">Cold Chain Guaranteed</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <span className="text-white/80">Quality Promise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shipping Costs What It Does */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 text-accent uppercase tracking-widest text-sm font-bold">
              <span className="w-12 h-[1px] bg-accent"></span>
              Understanding Our Shipping
              <span className="w-12 h-[1px] bg-accent"></span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl text-foreground leading-tight font-medium">
              Why Premium Shipping Matters
            </h2>
            <p className="text-muted-foreground text-lg font-serif leading-relaxed">
              Shipping live oysters is not like shipping a book or a t-shirt. Every shipment requires
              specialized materials, careful handling, and expedited delivery to ensure your oysters
              arrive as fresh as the moment they left Willapa Bay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-border rounded p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full">
                <Box className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-medium text-foreground">Specialized Packaging</h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                Each shipment uses food-grade styrofoam coolers specifically designed for seafood.
                These aren't off-the-shelf coolers - they're engineered to maintain temperature for
                48+ hours.
              </p>
            </div>

            <div className="bg-white border border-border rounded p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full">
                <ThermometerSnowflake className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-medium text-foreground">Cold Chain Maintenance</h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                Multiple gel ice packs are strategically placed to create a consistent cold
                environment. Oysters must stay between 33-40 degrees F throughout transit.
              </p>
            </div>

            <div className="bg-white border border-border rounded p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-medium text-foreground">Expedited Shipping</h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                Perishable goods require overnight or 2-day express delivery. Standard ground
                shipping would compromise freshness and safety. Speed is non-negotiable.
              </p>
            </div>

            <div className="bg-white border border-border rounded p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full">
                <Package className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-medium text-foreground">Careful Handling</h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                "Perishable" and "Keep Refrigerated" labels ensure your package receives priority
                treatment. Our shipping partners understand the delicate nature of live seafood.
              </p>
            </div>

            <div className="bg-white border border-border rounded p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-medium text-foreground">Quality Guarantee</h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                We stand behind every shipment. If your oysters arrive in anything less than perfect
                condition, we make it right. Your satisfaction is our reputation.
              </p>
            </div>

            <div className="bg-white border border-border rounded p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full">
                <Timer className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-medium text-foreground">Same-Day Processing</h3>
              <p className="text-muted-foreground font-serif leading-relaxed">
                Orders placed before our cutoff time are harvested, processed, and packed the same
                day. From bay to box in hours, not days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Packaging Breakdown */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 text-accent uppercase tracking-widest text-sm font-bold">
              <span className="w-12 h-[1px] bg-accent"></span>
              What is Inside
              <span className="w-12 h-[1px] bg-accent"></span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl text-foreground leading-tight font-medium">
              Your Shipment, Unpacked
            </h2>
            <p className="text-muted-foreground text-lg font-serif leading-relaxed">
              Every box is carefully assembled to protect your oysters during their journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual representation placeholder */}
            <div className="relative">
              <div className="aspect-square bg-white rounded border-2 border-dashed border-primary/30 flex items-center justify-center p-8">
                <div className="text-center space-y-8">
                  {/* Stylized package diagram */}
                  <div className="relative mx-auto w-64 h-64">
                    {/* Outer box */}
                    <div className="absolute inset-0 bg-primary/5 border-2 border-primary/20 rounded transform rotate-3"></div>
                    {/* Inner cooler */}
                    <div className="absolute inset-4 bg-white border-2 border-primary/30 rounded shadow-inner flex flex-col items-center justify-center gap-2 p-4">
                      <Box className="w-16 h-16 text-primary/40" />
                      <span className="text-sm font-sans text-muted-foreground">Insulated Cooler</span>
                    </div>
                    {/* Ice pack indicators */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-100 px-3 py-1 rounded-full text-xs font-sans text-primary flex items-center gap-1">
                      <Snowflake className="w-3 h-3" /> Gel Ice
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-100 px-3 py-1 rounded-full text-xs font-sans text-primary flex items-center gap-1">
                      <Snowflake className="w-3 h-3" /> Gel Ice
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-serif">
                    Cross-section view of typical shipment
                  </p>
                </div>
              </div>
            </div>

            {/* Package contents list */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded border border-border">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-full shrink-0">
                  <span className="font-sans font-bold text-accent">1</span>
                </div>
                <div>
                  <h4 className="font-sans text-lg font-medium text-foreground mb-2">
                    Outer Shipping Box
                  </h4>
                  <p className="text-muted-foreground font-serif">
                    Sturdy corrugated cardboard protects the inner cooler during transit and
                    displays handling instructions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded border border-border">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-full shrink-0">
                  <span className="font-sans font-bold text-accent">2</span>
                </div>
                <div>
                  <h4 className="font-sans text-lg font-medium text-foreground mb-2">
                    Styrofoam Cooler
                  </h4>
                  <p className="text-muted-foreground font-serif">
                    Food-grade, high-density foam insulation maintains temperature for extended
                    periods, even in summer heat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded border border-border">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-full shrink-0">
                  <span className="font-sans font-bold text-accent">3</span>
                </div>
                <div>
                  <h4 className="font-sans text-lg font-medium text-foreground mb-2">
                    Gel Ice Packs
                  </h4>
                  <p className="text-muted-foreground font-serif">
                    Multiple frozen gel packs placed strategically above and below the product
                    maintain optimal 33-40 degree F temperature.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded border border-border">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-full shrink-0">
                  <span className="font-sans font-bold text-accent">4</span>
                </div>
                <div>
                  <h4 className="font-sans text-lg font-medium text-foreground mb-2">
                    Your Fresh Oysters
                  </h4>
                  <p className="text-muted-foreground font-serif">
                    Carefully packed in moisture-barrier bags with absorbent pads, your oysters
                    arrive ready to enjoy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Zones/Rates */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 text-accent uppercase tracking-widest text-sm font-bold">
              <span className="w-12 h-[1px] bg-accent"></span>
              Delivery Areas
              <span className="w-12 h-[1px] bg-accent"></span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl text-foreground leading-tight font-medium">
              Shipping Zones and Rates
            </h2>
            <p className="text-muted-foreground text-lg font-serif leading-relaxed">
              We ship to most locations in the contiguous United States. Rates vary by distance
              from our facility in Washington State.
            </p>
          </div>

          {/* Shipping Zones Table */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-6 py-4 text-left font-sans text-sm uppercase tracking-wider">
                        Zone
                      </th>
                      <th className="px-6 py-4 text-left font-sans text-sm uppercase tracking-wider">
                        Coverage Area
                      </th>
                      <th className="px-6 py-4 text-left font-sans text-sm uppercase tracking-wider">
                        Transit Time
                      </th>
                      <th className="px-6 py-4 text-right font-sans text-sm uppercase tracking-wider">
                        Starting At
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-secondary/30 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-sans font-bold text-sm">
                            1
                          </div>
                          <span className="font-sans font-medium">West Coast</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-muted-foreground font-serif">
                        WA, OR, CA, NV, ID, AZ
                      </td>
                      <td className="px-6 py-5 text-muted-foreground font-serif">1-2 Days</td>
                      <td className="px-6 py-5 text-right">
                        <span className="font-sans font-bold text-foreground">$29.99</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-secondary/30 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-sans font-bold text-sm">
                            2
                          </div>
                          <span className="font-sans font-medium">Mountain</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-muted-foreground font-serif">
                        MT, WY, CO, UT, NM
                      </td>
                      <td className="px-6 py-5 text-muted-foreground font-serif">1-2 Days</td>
                      <td className="px-6 py-5 text-right">
                        <span className="font-sans font-bold text-foreground">$39.99</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-secondary/30 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center font-sans font-bold text-sm">
                            3
                          </div>
                          <span className="font-sans font-medium">Central</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-muted-foreground font-serif">
                        TX, OK, KS, NE, SD, ND, MN, IA, MO
                      </td>
                      <td className="px-6 py-5 text-muted-foreground font-serif">2 Days</td>
                      <td className="px-6 py-5 text-right">
                        <span className="font-sans font-bold text-foreground">$49.99</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-secondary/30 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center font-sans font-bold text-sm">
                            4
                          </div>
                          <span className="font-sans font-medium">East Coast</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-muted-foreground font-serif">
                        All Eastern States
                      </td>
                      <td className="px-6 py-5 text-muted-foreground font-serif">2 Days</td>
                      <td className="px-6 py-5 text-right">
                        <span className="font-sans font-bold text-foreground">$59.99</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/10 rounded border border-accent/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-serif">
                  <strong className="font-sans">Free Shipping:</strong> Orders over $150 qualify
                  for free standard shipping to Zone 1 and 2 destinations. Exact rates are
                  calculated at checkout based on your delivery address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Calendar */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 text-accent uppercase tracking-widest text-sm font-bold">
              <span className="w-12 h-[1px] bg-accent"></span>
              Shipping Schedule
              <span className="w-12 h-[1px] bg-accent"></span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl text-foreground leading-tight font-medium">
              When We Ship
            </h2>
            <p className="text-muted-foreground text-lg font-serif leading-relaxed">
              To ensure your oysters arrive fresh and avoid weekend delays, we follow a strategic
              shipping schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Shipping Days */}
            <div className="bg-white rounded border border-border p-8 space-y-6">
              <div className="flex items-center gap-4">
                <Calendar className="w-8 h-8 text-primary" />
                <h3 className="font-sans text-2xl font-medium text-foreground">Shipping Days</h3>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-7 gap-2 text-center">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                    <div key={day} className="text-xs font-sans uppercase text-muted-foreground">
                      {day}
                    </div>
                  ))}
                  {["", "", "", "", "", "", ""].map((_, i) => {
                    const isShipDay = i === 1 || i === 2 || i === 3; // Mon, Tue, Wed
                    return (
                      <div
                        key={i}
                        className={`aspect-square rounded flex items-center justify-center text-sm font-sans ${
                          isShipDay
                            ? "bg-primary text-white font-bold"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {isShipDay && <CheckCircle2 className="w-5 h-5" />}
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground font-serif">
                    <strong className="font-sans text-foreground">We ship Monday through Wednesday</strong> to ensure your
                    package does not sit in a warehouse over the weekend. This timing is crucial
                    for maintaining freshness.
                  </p>
                </div>
              </div>
            </div>

            {/* Order Cutoffs */}
            <div className="bg-white rounded border border-border p-8 space-y-6">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-primary" />
                <h3 className="font-sans text-2xl font-medium text-foreground">Order Cutoffs</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded">
                  <span className="font-serif text-foreground">Same-Day Processing</span>
                  <span className="font-sans font-bold text-primary">Before 10:00 AM PST</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary rounded">
                  <span className="font-serif text-foreground">Next-Day Processing</span>
                  <span className="font-sans font-bold text-muted-foreground">After 10:00 AM PST</span>
                </div>

                <div className="pt-4 border-t border-border space-y-3">
                  <p className="text-muted-foreground font-serif">
                    <strong className="font-sans text-foreground">Thursday-Sunday Orders:</strong> Will ship the following Monday.
                  </p>
                  <p className="text-muted-foreground font-serif">
                    <strong className="font-sans text-foreground">Holiday Weeks:</strong> Shipping schedule may be adjusted.
                    Check product pages for specific dates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Expectations */}
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded border border-border">
            <h4 className="font-sans text-xl font-medium text-foreground mb-4 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-accent" />
              Delivery Expectations
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground font-serif">
              <div>
                <p className="mb-2">
                  <strong className="font-sans text-foreground">Signature Required:</strong> All shipments require a signature to ensure proper handling.
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="font-sans text-foreground">Tracking Provided:</strong> You will receive tracking information via email once your order ships.
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="font-sans text-foreground">Be Available:</strong> Please ensure someone is available to receive your package on the delivery date.
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="font-sans text-foreground">Refrigerate Promptly:</strong> Move your oysters to refrigeration immediately upon arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unboxing Tips */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 text-accent uppercase tracking-widest text-sm font-bold">
              <span className="w-12 h-[1px] bg-accent"></span>
              When Your Order Arrives
              <span className="w-12 h-[1px] bg-accent"></span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl text-foreground leading-tight font-medium">
              Unboxing and Storage Tips
            </h2>
            <p className="text-muted-foreground text-lg font-serif leading-relaxed">
              Follow these simple steps to ensure maximum freshness and shelf life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-sans font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-xl font-medium text-foreground mb-2">
                      Open Immediately
                    </h4>
                    <p className="text-muted-foreground font-serif leading-relaxed">
                      When your package arrives, open it right away. Remove the oysters from the
                      shipping box and cooler promptly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-sans font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-xl font-medium text-foreground mb-2">
                      Inspect Your Order
                    </h4>
                    <p className="text-muted-foreground font-serif leading-relaxed">
                      Check that shells are tightly closed or close when tapped. Oysters should
                      smell like the ocean - fresh and briny, never fishy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-sans font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-xl font-medium text-foreground mb-2">
                      Refrigerate Properly
                    </h4>
                    <p className="text-muted-foreground font-serif leading-relaxed">
                      Place oysters cup-side down in a bowl and cover with a damp towel. Store in
                      the coldest part of your refrigerator (33-40 degrees F).
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-sans font-bold text-xl">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-xl font-medium text-foreground mb-2">
                      Never Submerge in Water
                    </h4>
                    <p className="text-muted-foreground font-serif leading-relaxed">
                      Do not store oysters in fresh water or sealed airtight containers. They need
                      to breathe. Keep the damp towel moist but not waterlogged.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-sans font-bold text-xl">
                      5
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-xl font-medium text-foreground mb-2">
                      Enjoy Within 5-7 Days
                    </h4>
                    <p className="text-muted-foreground font-serif leading-relaxed">
                      For best quality, enjoy your oysters within 5-7 days of delivery. They are
                      living creatures - fresher is always better.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center">
                      <Refrigerator className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-xl font-medium text-foreground mb-2">
                      Shucked Oysters
                    </h4>
                    <p className="text-muted-foreground font-serif leading-relaxed">
                      Pre-shucked oysters should be kept in their original container. Use within
                      3-5 days and always check the use-by date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4 text-accent uppercase tracking-widest text-sm font-bold">
              <span className="w-12 h-[1px] bg-accent"></span>
              Frequently Asked Questions
              <span className="w-12 h-[1px] bg-accent"></span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl text-foreground leading-tight font-medium">
              Shipping FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded border border-border px-6">
                <AccordionTrigger className="font-sans text-lg font-medium text-foreground hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    Can you ship to my state?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-serif pb-6">
                  We ship to all 48 contiguous United States. Unfortunately, we cannot currently
                  ship to Alaska, Hawaii, or international destinations due to the extended transit
                  times required. If you are unsure about your location, please contact us before
                  placing your order.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded border border-border px-6">
                <AccordionTrigger className="font-sans text-lg font-medium text-foreground hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    How long will my oysters stay fresh?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-serif pb-6">
                  When stored properly (cup-side down, covered with a damp cloth, at 33-40 degrees F),
                  live oysters will stay fresh for 5-7 days after delivery. Shucked oysters should
                  be consumed within 3-5 days. For the best experience, we recommend enjoying them
                  as soon as possible after arrival.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded border border-border px-6">
                <AccordionTrigger className="font-sans text-lg font-medium text-foreground hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    What if my order arrives damaged?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-serif pb-6">
                  We stand behind every shipment. If your oysters arrive in poor condition, please
                  take photos and contact us within 24 hours of delivery. We will either replace
                  your order or provide a full refund. Your satisfaction is our top priority, and
                  we work closely with our shipping partners to ensure quality delivery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded border border-border px-6">
                <AccordionTrigger className="font-sans text-lg font-medium text-foreground hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    Can I choose a specific delivery date?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-serif pb-6">
                  Yes, you can request a specific delivery date during checkout. We will do our best
                  to accommodate your request based on our shipping schedule. For events or special
                  occasions, we recommend placing your order at least one week in advance to ensure
                  timely delivery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded border border-border px-6">
                <AccordionTrigger className="font-sans text-lg font-medium text-foreground hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    Why do you only ship Monday through Wednesday?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-serif pb-6">
                  We limit our shipping days to avoid packages sitting in carrier warehouses over
                  the weekend. Even with our specialized packaging, extended delays can compromise
                  freshness. By shipping Monday through Wednesday, we ensure your oysters arrive
                  within the optimal window for maximum quality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded border border-border px-6">
                <AccordionTrigger className="font-sans text-lg font-medium text-foreground hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    What happens during extreme weather?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-serif pb-6">
                  During heat waves or extreme cold, we may adjust our packaging with additional ice
                  packs or insulation. In rare cases, we may delay shipments to protect product
                  quality. If weather in your area poses a concern, please contact us to discuss
                  the best timing for your order.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded border border-border px-6">
                <AccordionTrigger className="font-sans text-lg font-medium text-foreground hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    Can I send oysters as a gift?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-serif pb-6">
                  Absolutely! Many customers send Goose Point Oysters as gifts. During checkout,
                  you can enter a different shipping address and include a gift message. We will
                  ensure the recipient is aware of the delivery so they can receive and store
                  the oysters properly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 opacity-10 bg-white/5"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center space-y-8">
          <h2 className="font-sans text-3xl md:text-4xl text-white font-medium">
            Ready to Order?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-serif">
            Experience the freshest oysters delivered directly from Willapa Bay to your door.
            Free shipping on orders over $150.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded font-sans"
              >
                Shop Fresh Oysters
              </Button>
            </Link>
            <Link href="https://www.goosepointoysters.com/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded font-sans"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
