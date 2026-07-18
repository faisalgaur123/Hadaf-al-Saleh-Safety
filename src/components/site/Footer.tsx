import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/hadaf-logo.png";
import { services } from "@/lib/site-data";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary py-12 text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 sm:grid-cols-2 md:grid-cols-4 lg:px-8">
        <div>
          <img src={logoAsset} alt="Hadaf Al Sahel Safety" className="h-16 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Protecting people. Securing futures. Fire and safety protection across the Kingdom of Saudi Arabia.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/50">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
            <li><Link to="/projects" className="hover:text-accent transition-colors">Our Projects</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/50">Services</div>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <Link to="/services" className="hover:text-accent transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/50">Connect</div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-[#0077b5] hover:text-white hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-black hover:text-white hover:scale-110 border border-white/5 hover:border-white/20"
              aria-label="Twitter / X"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-gradient-to-tr hover:from-[#f9ce3f] hover:via-[#e1306c] hover:to-[#833ab4] hover:text-white hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-[#1877f2] hover:text-white hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-white/50 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Hadaf Al Sahel Safety. All rights reserved.
      </div>
    </footer>
  );
}