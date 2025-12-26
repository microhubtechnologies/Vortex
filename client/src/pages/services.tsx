import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Residential Interior & Exterior",
      description: "High-quality interior and exterior painting for homes with premium materials",
      features: ["Full home repaints", "Individual areas", "Exterior protection", "Durable finishes"]
    },
    {
      title: "Commercial & Industrial",
      description: "Professional painting for offices, retail, warehouses, and factories",
      features: ["Minimal disruption", "Safety standards", "Quick turnaround", "Professional finish"]
    },
    {
      title: "Roof & Deck Services",
      description: "Protective coatings for roofs and decks to enhance durability",
      features: ["Roof cleaning", "Protective coatings", "UV protection", "Weather resistance"]
    },
    {
      title: "New Builds & Renovations",
      description: "Complete painting solutions for new construction and renovation works",
      features: ["Design specs", "Timeline adherence", "Quality finish", "Professional coordination"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Full range of professional painting services for residential and commercial projects with premium materials and expert craftsmanship
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-foreground/80">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Consultation", "Preparation", "Execution", "Finishing"].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-2xl mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-display font-bold text-foreground">{step}</h3>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
