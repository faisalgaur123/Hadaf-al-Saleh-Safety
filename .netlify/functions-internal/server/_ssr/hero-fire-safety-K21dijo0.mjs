import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as Cloud, C as FireExtinguisher, E as Facebook, F as BellRing, O as Droplets, _ as Instagram, a as Twitter, b as Gauge, c as Sparkles, g as Linkedin, k as DoorClosed, n as Wind, p as Menu, r as Waves, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hero-fire-safety-K21dijo0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var hadaf_logo_default = "/assets/hadaf-logo-BAbpWAni.png";
var links = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Projects",
		to: "/projects"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hadaf_logo_default,
						alt: "Hadaf Al Sahel Safety",
						className: "h-12 w-auto sm:h-14"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						activeProps: { className: "text-primary" },
						className: "text-sm font-semibold uppercase tracking-wide text-foreground/80 transition hover:text-primary",
						children: l.label
					}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-90",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Request Quote"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden",
					onClick: () => setOpen(!open),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1 px-4 py-3",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: l.to === "/" },
					activeProps: { className: "text-primary" },
					className: "rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-muted",
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "sm",
					className: "mt-2 bg-gradient-fire text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						children: "Request Quote"
					})
				})]
			})
		})]
	});
}
var services = [
	{
		icon: Droplets,
		title: "Water Base Sprinkler System",
		desc: "Automatic sprinkler arrays connected to a water supply through networked pipes and fire hose cabinets — the most widely deployed fire protection system in the world."
	},
	{
		icon: Wind,
		title: "CO2 Fire Suppression",
		desc: "Carbon-dioxide suppression that extinguishes fires by displacing oxygen. Ideal for data centers, electrical rooms and industrial machinery — fast-acting and residue-free."
	},
	{
		icon: Sparkles,
		title: "FM 200 Suppression",
		desc: "A waterless chemical agent that discharges within 10 seconds, breaking the fire triangle by removing heat and free radicals."
	},
	{
		icon: Waves,
		title: "Foam Suppression System",
		desc: "A highly effective solution for protecting flammable and combustible liquids across industrial and storage environments."
	},
	{
		icon: Cloud,
		title: "Novec 1230 Suppression",
		desc: "A clean-agent halon replacement offering the highest margin of safety for human occupancy among modern clean agents."
	},
	{
		icon: BellRing,
		title: "Fire Alarm System",
		desc: "Addressable and conventional systems for early detection — audio-visual devices for smoke, fire and carbon-monoxide monitoring."
	},
	{
		icon: Gauge,
		title: "Fire Pump",
		desc: "NFPA 20-designed, UL listed / FM approved pumps for commercial and industrial buildings, retrofits and foam / water-mist applications."
	},
	{
		icon: FireExtinguisher,
		title: "Fire Extinguishers",
		desc: "Supply and installation of water, foam, dry powder, CO2 and wet-chemical extinguishers rated for every fire class."
	},
	{
		icon: DoorClosed,
		title: "Fire Doors",
		desc: "UL-listed fire-rated doors engineered for high-transit environments — shopping centers, public buildings and industrial facilities."
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-secondary py-12 text-secondary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 sm:grid-cols-2 md:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hadaf_logo_default,
					alt: "Hadaf Al Sahel Safety",
					className: "h-16 w-auto brightness-0 invert"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm text-white/60",
					children: "Protecting people. Securing futures. Fire and safety protection across the Kingdom of Saudi Arabia."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold uppercase tracking-widest text-white/50",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-accent transition-colors",
							children: "Home"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-accent transition-colors",
							children: "About Us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-accent transition-colors",
							children: "Our Services"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "hover:text-accent transition-colors",
							children: "Our Projects"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-accent transition-colors",
							children: "Contact Us"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold uppercase tracking-widest text-white/50",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: services.slice(0, 5).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "hover:text-accent transition-colors",
						children: s.title
					}) }, s.title))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-bold uppercase tracking-widest text-white/50",
					children: "Connect"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://linkedin.com",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-[#0077b5] hover:text-white hover:scale-110",
							"aria-label": "LinkedIn",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://twitter.com",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-black hover:text-white hover:scale-110 border border-white/5 hover:border-white/20",
							"aria-label": "Twitter / X",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://instagram.com",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-gradient-to-tr hover:from-[#f9ce3f] hover:via-[#e1306c] hover:to-[#833ab4] hover:text-white hover:scale-110",
							"aria-label": "Instagram",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://facebook.com",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-[#1877f2] hover:text-white hover:scale-110",
							"aria-label": "Facebook",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-5 w-5" })
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-white/50 sm:px-6 lg:px-8",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Hadaf Al Sahel Safety. All rights reserved."
			]
		})]
	});
}
var hero_fire_safety_default = "/assets/hero-fire-safety-CJYRDolX.jpg";
//#endregion
export { hero_fire_safety_default as a, cn as i, Footer as n, services as o, Nav as r, Button as t };
