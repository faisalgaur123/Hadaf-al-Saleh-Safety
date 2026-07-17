import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/hadaf-logo.png.asset.json";

const links = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Hadaf Al Sahel Safety" className="h-12 w-auto sm:h-14" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-90">
            <Link to="/contact">Request Quote</Link>
          </Button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2 bg-gradient-fire text-primary-foreground">
              <Link to="/contact" onClick={() => setOpen(false)}>Request Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}