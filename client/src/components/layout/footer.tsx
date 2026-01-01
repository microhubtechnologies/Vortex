import { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

import { cn } from "@/lib/utils";

export function Footer() {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 40);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
         <Link href="/" className="inline-block">
  <div className="bg-white rounded-xl px-4 py-2 shadow-sm">
    <img
      src="/logo.png"
      alt="Vortex Logo"
      className="h-14 md:h-16 object-contain"
    />
  </div>
</Link>


           
            <p className="text-gray-400 leading-relaxed">
              Professional painting company delivering high-quality residential and commercial painting services across New Zealand with pride and professionalism.
            </p>
            {/* <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>

         <div>
  <h4 className="text-xl font-bold mb-6">Quick Links</h4>
  <ul className="space-y-4 text-gray-400">
    <li>
      <Link href="/about">
        <span className="cursor-pointer hover:text-primary transition-colors">
          About Us
        </span>
      </Link>
    </li>

    <li>
      <Link href="/services">
        <span className="cursor-pointer hover:text-primary transition-colors">
          Services
        </span>
      </Link>
    </li>

    <li>
      <Link href="/contact">
        <span className="cursor-pointer hover:text-primary transition-colors">
          Contact
        </span>
      </Link>
    </li>
  </ul>
</div>
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
  <li>Residential Painting</li>
  <li>Commercial & Industrial Painting</li>
  <li>New Builds & Renovations</li>
  <li>Repaints & Maintenance</li>
  <li>Roof, Fence & Deck Painting</li>
</ul>

          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>Auckland, NZ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>0204972690</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>sales@vortexpainting.nz</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 Vortex. All Rights Reserved.</p>
          {/* <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
