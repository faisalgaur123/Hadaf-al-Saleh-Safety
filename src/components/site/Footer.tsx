import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/hadaf-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-secondary py-12 text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <img src={logoAsset.url} alt="Hadaf Al Sahel Safety" className="h-16 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Protecting people. Securing futures. Fire and safety protection across the Kingdom of Saudi Arabia.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/50">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/50">Connect</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent">LinkedIn</a></li>
            <li><a href="#" className="hover:text-accent">Twitter / X</a></li>
            <li><a href="#" className="hover:text-accent">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-white/50 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Hadaf Al Sahel Safety. All rights reserved.
      </div>
    </footer>
  );
}