import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { I as Award, L as ArrowRight, N as Check, P as Building2, S as Flame, T as Factory, d as Quote, f as Phone, h as Mail, i as Warehouse, j as Clock, m as MapPin, s as Star, u as ShieldCheck, w as FileCheckCorner, x as Fuel } from "../_libs/lucide-react.mjs";
import { a as hero_fire_safety_default, n as Footer, o as services, r as Nav, t as Button } from "./hero-fire-safety-K21dijo0.mjs";
import { n as Textarea, t as Input } from "./textarea-BOgRXQcd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-jmWinDIm.js
var import_jsx_runtime = require_jsx_runtime();
var vision2030_default = "/assets/vision2030-ClX9sG0g.png";
var embers = [
	{
		id: 1,
		left: "10%",
		size: "4px",
		delay: "0s",
		duration: "8s",
		opacity: .4
	},
	{
		id: 2,
		left: "25%",
		size: "3px",
		delay: "2s",
		duration: "11s",
		opacity: .3
	},
	{
		id: 3,
		left: "40%",
		size: "5px",
		delay: "1s",
		duration: "7s",
		opacity: .5
	},
	{
		id: 4,
		left: "55%",
		size: "2px",
		delay: "4s",
		duration: "13s",
		opacity: .2
	},
	{
		id: 5,
		left: "70%",
		size: "4px",
		delay: "3s",
		duration: "9s",
		opacity: .4
	},
	{
		id: 6,
		left: "85%",
		size: "3px",
		delay: "5s",
		duration: "10s",
		opacity: .3
	},
	{
		id: 7,
		left: "18%",
		size: "5px",
		delay: "6s",
		duration: "8s",
		opacity: .5
	},
	{
		id: 8,
		left: "33%",
		size: "2px",
		delay: "7s",
		duration: "12s",
		opacity: .2
	},
	{
		id: 9,
		left: "48%",
		size: "4px",
		delay: "2s",
		duration: "9s",
		opacity: .4
	},
	{
		id: 10,
		left: "63%",
		size: "3px",
		delay: "8s",
		duration: "10s",
		opacity: .3
	},
	{
		id: 11,
		left: "78%",
		size: "5px",
		delay: "1.5s",
		duration: "7.5s",
		opacity: .45
	},
	{
		id: 12,
		left: "93%",
		size: "2px",
		delay: "5.5s",
		duration: "14s",
		opacity: .25
	},
	{
		id: 13,
		left: "5%",
		size: "3px",
		delay: "3.5s",
		duration: "10.5s",
		opacity: .35
	},
	{
		id: 14,
		left: "50%",
		size: "4px",
		delay: "4.5s",
		duration: "8.5s",
		opacity: .4
	},
	{
		id: 15,
		left: "80%",
		size: "3px",
		delay: "6.5s",
		duration: "11.5s",
		opacity: .3
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_fire_safety_default,
					alt: "Industrial fire protection",
					className: "h-full w-full object-cover object-bottom animate-ken-burns",
					width: 1920,
					height: 1080
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "var(--gradient-hero)" }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 overflow-hidden pointer-events-none",
				children: embers.map((ember) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute bottom-0 rounded-full bg-amber-500 animate-ember-drift blur-[1px]",
					style: {
						left: ember.left,
						width: ember.size,
						height: ember.size,
						animationDelay: ember.delay,
						"--drift-duration": ember.duration,
						opacity: ember.opacity
					}
				}, ember.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex animate-hero-in items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5 text-accent animate-pulse" }), " Fire Safety • Saudi Arabia"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "animate-hero-in text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl [animation-delay:120ms]",
							children: ["Your Safety Is Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-fire",
								children: "Absolute Priority"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl animate-hero-in text-lg leading-relaxed text-white/85 sm:text-xl [animation-delay:240ms]",
							children: "Hadaf Al Sahel Safety designs, installs, tests and commissions world-class fire protection systems across the Kingdom — engineered by experts, built to code, trusted by industry."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-4 animate-hero-in [animation-delay:360ms]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "bg-gradient-fire text-primary-foreground shadow-fire transition-transform hover:-translate-y-0.5 hover:opacity-95",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									children: ["Get a Free Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-white/40 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									children: "Explore Our Services"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8 animate-hero-in [animation-delay:480ms]",
							children: [
								{
									n: "9+",
									l: "Core Systems"
								},
								{
									n: "100%",
									l: "NFPA Aligned"
								},
								{
									n: "24/7",
									l: "Support"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "transition-transform duration-300 hover:scale-105",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-3xl font-black text-white sm:text-4xl",
									children: s.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs font-semibold uppercase tracking-wider text-white/70",
									children: s.l
								})]
							}, s.l))
						})
					]
				})
			})
		]
	});
}
function ServicesPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-dark py-20 text-white sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent",
							children: "What We Do"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl font-black uppercase leading-tight sm:text-5xl",
							children: ["Fire Safety ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-fire",
								children: "Solutions"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-white/70",
							children: "A complete portfolio of detection, suppression and passive protection — engineered for Saudi Arabia's toughest environments."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: services.slice(0, 6).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-white/[0.06]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-fire opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-fire shadow-fire",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7 text-primary-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-xl font-bold uppercase tracking-tight text-white",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-white/70",
									children: s.desc
								})
							]
						})]
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							children: ["View All Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})
				})
			]
		})
	});
}
var homeSectors = [
	{
		icon: Factory,
		title: "Industrial & Manufacturing",
		desc: "Plant-wide detection, foam and clean-agent suppression tuned to manufacturing hazards."
	},
	{
		icon: Fuel,
		title: "Oil, Gas & Petrochemical",
		desc: "High-hazard foam, deluge and gas detection systems engineered to NFPA and API standards."
	},
	{
		icon: Warehouse,
		title: "Logistics & Warehousing",
		desc: "High-pile storage protection with ESFR sprinklers and in-rack suppression."
	},
	{
		icon: Building2,
		title: "Commercial Buildings",
		desc: "Sprinkler, alarm and passive protection for office towers and commercial developments."
	}
];
function ProjectsPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-20 border-b border-border/40 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary",
							children: "Sectors We Serve"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl font-black uppercase leading-tight sm:text-5xl",
							children: ["Tough Sectors. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-fire",
								children: "Proven Protection."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base text-muted-foreground",
							children: "From high-hazard petrochemical plants to critical logistics hubs — we engineer fire safety for the environments where failure is not an option."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: homeSectors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-fire opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-fire group-hover:text-primary-foreground group-hover:shadow-fire",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-bold uppercase tracking-tight text-foreground",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: s.desc
								})
							]
						})]
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-primary/30 text-primary hover:bg-primary/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects",
							children: ["View All Sectors & Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})
				})
			]
		})
	});
}
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-20 border-b border-border/40 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12 lg:gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Why Choose Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl",
							children: [
								"Your Certified ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-fire",
									children: "Fire Safety"
								}),
								" Partner in KSA"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-relaxed text-muted-foreground",
							children: "Hadaf Al Sahel Safety is a fully licensed contractor specializing in modern fire protection solutions. From complex industrial facilities to commercial complexes, we ensure full compliance with Saudi Civil Defense and SASO regulations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-4",
							children: [
								"Licensed by Saudi Civil Defense",
								"Strict compliance with NFPA standards",
								"Experienced & certified safety engineers",
								"Premium UL-listed & FM-approved hardware"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold uppercase tracking-wide text-foreground/80",
									children: item
								})]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Request a Site Survey"
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7 grid gap-6 sm:grid-cols-2",
					children: [
						{
							icon: FileCheckCorner,
							title: "Civil Defense Licensed",
							desc: "Fully authorized by Saudi authorities to design, install, inspect, and certify fire safety systems."
						},
						{
							icon: ShieldCheck,
							title: "100% Code Compliant",
							desc: "All designs conform strictly to Saudi Building Code (SBC-801) and NFPA regulations."
						},
						{
							icon: Award,
							title: "UL-Listed & FM-Approved",
							desc: "We exclusively install internationally recognized and certified hardware to guarantee reliability."
						},
						{
							icon: Clock,
							title: "24/7 Support & Maintenance",
							desc: "Comprehensive testing, commissioning, and round-the-clock emergency support to keep systems active."
						}
					].map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-fire opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-fire group-hover:text-primary-foreground group-hover:shadow-fire",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-bold uppercase tracking-tight text-foreground",
									children: card.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: card.desc
								})
							]
						})]
					}, card.title))
				})]
			})
		})
	});
}
function CTAStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-gradient-dark py-20 text-white border-t border-white/5 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-fire opacity-20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:gap-16 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl font-black uppercase leading-tight sm:text-5xl",
						children: ["Ready to protect ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-fire",
							children: "your facility?"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-white/70",
						children: "Our engineers will assess your site and recommend a compliant, cost-effective fire safety solution."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-primary-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-bold uppercase tracking-widest text-white/50",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 font-medium text-white",
									children: "Kingdom of Saudi Arabia"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-primary-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-bold uppercase tracking-widest text-white/50",
									children: "Call Us"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 font-medium text-white",
									children: "[phone — to be added]"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-primary-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-bold uppercase tracking-widest text-white/50",
									children: "Email Support"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 font-medium text-white",
									children: "[email — to be added]"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-fire",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-primary-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-bold uppercase tracking-widest text-white/50",
									children: "Business Hours"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 font-medium text-white",
									children: "Sunday – Thursday: 8:00 AM – 5:00 PM"
								})] })]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						alert("Thank you — we'll be in touch shortly.");
					},
					className: "rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8 relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold uppercase tracking-tight text-white mb-6",
							children: "Request a Free Site Assessment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									required: true,
									placeholder: "Your name",
									className: "border-white/20 bg-white/5 text-white placeholder:text-white/40"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70",
									children: "Company"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "Company name",
									className: "border-white/20 bg-white/5 text-white placeholder:text-white/40"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									required: true,
									type: "email",
									placeholder: "you@example.com",
									className: "border-white/20 bg-white/5 text-white placeholder:text-white/40"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "+966 ...",
									className: "border-white/20 bg-white/5 text-white placeholder:text-white/40"
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/70",
								children: "Project Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								required: true,
								rows: 4,
								placeholder: "Tell us about your facility and requirements...",
								className: "border-white/20 bg-white/5 text-white placeholder:text-white/40"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "lg",
							className: "mt-6 w-full bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95",
							children: ["Send Request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					]
				})]
			})
		})]
	});
}
var testimonials = [
	{
		name: "Eng. Abdulaziz Al-Otaibi",
		role: "Director of Facilities",
		company: "Riyadh Logistics Park",
		quote: "Hadaf Al Sahel delivered our ESFR sprinkler system upgrade ahead of schedule. Their understanding of Saudi Civil Defense regulations made the certification process seamless.",
		rating: 5
	},
	{
		name: "Mohammad Al-Harbi",
		role: "HSE Manager",
		company: "Jeddah Industrial City Factory",
		quote: "We contracted Hadaf for our clean-agent FM-200 installation in our server rooms. Absolute engineering precision and professional commissioning.",
		rating: 5
	},
	{
		name: "Eng. Fahad Al-Qahtani",
		role: "Project Director",
		company: "Dammam Commercial Center",
		quote: "Their team installed and tested over 200 fire-rated doors and a complex addressable alarm network. Full compliance and excellent post-installation support.",
		rating: 5
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-muted/40 py-20 border-b border-border/40 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary",
						children: "Testimonials"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl font-black uppercase leading-tight sm:text-5xl",
						children: ["Trusted by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-fire",
							children: "Industry Leaders"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-muted-foreground",
						children: "See what our industrial and commercial partners say about our fire protection engineering and execution."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute right-6 top-6 opacity-[0.08] text-primary transition-opacity duration-300 group-hover:opacity-[0.15]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-10 w-10 fill-current" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1",
								children: Array.from({ length: t.rating }).map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-amber-500 text-amber-500" }, idx))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-base italic leading-relaxed text-muted-foreground",
								children: [
									"\"",
									t.quote,
									"\""
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 border-t border-border pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-foreground",
									children: t.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: t.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary",
									children: t.company
								})
							]
						})
					]
				}, t.name))
			})]
		})
	});
}
function Vision2030Section() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-gradient-dark py-12 text-white border-b border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-fire opacity-10 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row items-center gap-6 max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex shrink-0 items-center justify-center rounded-xl bg-white p-4 w-40 h-24 shadow-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: vision2030_default,
								alt: "Saudi Vision 2030",
								className: "max-h-full max-w-full object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center md:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-xl font-bold uppercase tracking-tight text-white sm:text-2xl",
								children: ["Aligning with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-fire",
									children: "Saudi Vision 2030"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-white/70",
								children: "Hadaf Al Sahel Safety is proud to support the Kingdom's Vision 2030. By safeguarding critical industrial plants, warehousing networks, and urban developments, we secure the foundations of Saudi Arabia's vibrant economy and sustainable future."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-4 flex-wrap justify-center shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold uppercase tracking-widest text-accent",
								children: "Infrastructure"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold mt-0.5 text-white",
								children: "Securing Assets"
							})]
						})
					})
				]
			})
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesPreview, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsPreview, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vision2030Section, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAStrip, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { HomePage as component };
