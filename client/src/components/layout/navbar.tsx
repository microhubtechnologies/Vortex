import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import QuoteModal from "../../pages/Quote/Quote";
const navLinks = [
  { name: "Home", href: "/" },
 
  { name: "About", href: "/about" },
   { name: "Services", href: "/services" },
  // { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  
 
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const [isQuoteOpen, setIsQuoteOpen] = useState(false); // modal state

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm h-24"
          : "bg-transparent h-28"
      )}
    >
<div className="container mx-auto px-6 h-full">

        {/* GRID */}
     <div className="grid grid-cols-[auto_1fr_auto] items-center h-full">


      <Link
  href="/"
  className="flex items-center ml-6 lg:ml-12"
>


            <img
              src="/logo.png"
              alt="Vortex Logo"
              className={cn(
                "object-contain transition-all duration-300",
                scrolled ? "h-12 md:h-14" : "h-14 md:h-16"
              )}
            />
          </Link>

          {/* DESKTOP NAV — center */}
          <div className="hidden md:flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
             className="text-base lg:text-lg font-semibold text-foreground/80 hover:text-primary transition-colors"


              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT — CTA + HAMBURGER */}
          <div className="flex items-center justify-end gap-4">
            <div className="hidden md:block mr-6">
                 {/* <Button
                  onClick={() => setIsQuoteOpen(true)}
                  className="rounded-full bg-primary px-6 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Get Quote
                </Button> */}
<Button asChild className="rounded-full bg-primary px-8 py-4 text-lg flex items-center gap-3">
  <Link href="/quote" className="flex items-center">
    <Phone className="w-6 h-6" /> {/* icon size bada kiya */}
    Get Quote
  </Link>
</Button>

</div>


            {/* MOBILE ICON — HARD RIGHT */}
            <button
              className="md:hidden flex items-center justify-end"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="md:hidden bg-background border-t shadow-lg"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
             {/* <Link href="/quote">
  <Button className="w-full bg-primary text-primary-foreground">
    Get Quote
  </Button>
</Link> */}
 <Button
                  onClick={() => {
                    setIsQuoteOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary text-primary-foreground"
                >
                  Get Quote
                </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
