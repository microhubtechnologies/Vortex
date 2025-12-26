import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message is required"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info Side */}
          <div className="space-y-10">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl mt-4 font-display font-bold text-foreground">
                Let's Discuss Your <br /> Next Project
              </h2>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                Ready to transform your space? Fill out the form or contact us directly. We provide free estimates and color consultations.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone", info: "0204972690", sub: "Call us today" },
                { icon: Mail, title: "Email", info: "sale@vortexpainting.nz", sub: "Email Support" },
                { icon: MapPin, title: "Location", info: "New Zealand", sub: "We serve across NZ" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-[#FDFBF7] border border-border group hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-foreground font-medium">{item.info}</p>
                    <p className="text-sm text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10" />
            
            <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="h-12 bg-[#F9F9F9] border-transparent focus:border-primary/20 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email Address" {...field} className="h-12 bg-[#F9F9F9] border-transparent focus:border-primary/20 rounded-xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Phone Number" {...field} className="h-12 bg-[#F9F9F9] border-transparent focus:border-primary/20 rounded-xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project..." {...field} className="min-h-[150px] bg-[#F9F9F9] border-transparent focus:border-primary/20 rounded-xl resize-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Get Free Quote
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
