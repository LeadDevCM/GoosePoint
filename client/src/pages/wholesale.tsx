import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

export default function Wholesale() {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Content */}
        <div className="bg-primary text-white p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-lg mx-auto lg:mx-0 space-y-8">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-accent">Partner With Us</h3>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight">
              Wholesale Programs
            </h1>
            <p className="text-white/80 text-lg leading-relaxed font-light">
              Join the finest restaurants and retailers in serving Goose Point Oysters. We offer year-round availability, consistent quality, and direct delivery.
            </p>
            
            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-2">Farm Direct Freshness</h4>
                  <p className="text-white/60 text-sm">Harvested to order and shipped immediately for maximum shelf life.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-2">Year-Round Availability</h4>
                  <p className="text-white/60 text-sm">Consistent supply thanks to our sustainable farming practices.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-2">Food Safety Certified</h4>
                  <p className="text-white/60 text-sm">Rigorous quality control and traceability for your peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="p-12 lg:p-24 flex flex-col justify-center bg-white">
          <div className="max-w-lg mx-auto w-full space-y-8">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl text-primary">Inquire About Wholesale</h2>
              <p className="text-muted-foreground">Fill out the form below and our sales team will contact you shortly.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Business Name</label>
                  <Input className="rounded-none border-gray-200 focus:border-primary focus:ring-0" placeholder="Restaurant / Company" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Contact Name</label>
                  <Input className="rounded-none border-gray-200 focus:border-primary focus:ring-0" placeholder="Full Name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input type="email" className="rounded-none border-gray-200 focus:border-primary focus:ring-0" placeholder="email@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</label>
                  <Input type="tel" className="rounded-none border-gray-200 focus:border-primary focus:ring-0" placeholder="(555) 555-5555" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Business Type</label>
                <select className="w-full h-10 px-3 rounded-none border border-gray-200 focus:border-primary focus:ring-0 bg-background text-sm">
                  <option>Restaurant</option>
                  <option>Retailer</option>
                  <option>Distributor</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea className="rounded-none border-gray-200 focus:border-primary focus:ring-0 min-h-[120px]" placeholder="Tell us about your needs..." />
              </div>

              <Button className="w-full bg-primary text-white hover:bg-accent hover:text-white border-none rounded-none py-6 text-xs uppercase tracking-widest font-bold">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
