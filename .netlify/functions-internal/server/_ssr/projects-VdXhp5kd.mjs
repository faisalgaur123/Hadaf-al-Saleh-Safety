import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { L as ArrowRight, P as Building2, T as Factory, i as Warehouse, l as ShoppingBag, v as Hotel, x as Fuel } from "../_libs/lucide-react.mjs";
import { a as hero_fire_safety_default, n as Footer, r as Nav, t as Button } from "./hero-fire-safety-K21dijo0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-VdXhp5kd.js
var import_jsx_runtime = require_jsx_runtime();
var sectors = [
	{
		icon: Factory,
		title: "Industrial & Manufacturing",
		desc: "Plant-wide detection, foam and clean-agent suppression tuned to your process risks."
	},
	{
		icon: Fuel,
		title: "Oil, Gas & Petrochemical",
		desc: "High-hazard foam, deluge and gas detection systems engineered to NFPA and API standards."
	},
	{
		icon: Building2,
		title: "Commercial Buildings",
		desc: "Sprinkler, alarm and passive protection for office towers and mixed-use developments."
	},
	{
		icon: Hotel,
		title: "Hospitality & Public",
		desc: "Life-safety systems for hotels, malls and public venues — code-compliant and guest-friendly."
	},
	{
		icon: Warehouse,
		title: "Logistics & Warehousing",
		desc: "High-pile storage protection with ESFR sprinklers and in-rack suppression."
	},
	{
		icon: ShoppingBag,
		title: "Retail & Data Centers",
		desc: "FM200, Novec 1230 and CO2 clean-agent systems for mission-critical environments."
	}
];
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_fire_safety_default,
							alt: "",
							className: "h-full w-full object-cover object-bottom animate-ken-burns"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0",
							style: { background: "var(--gradient-hero)" }
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent animate-hero-in",
								children: "Projects & Sectors"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]",
								children: ["Trusted across the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-fire",
									children: "Kingdom's toughest sectors."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]",
								children: "From petrochemical plants to five-star hotels — we've engineered fire safety for the environments where failure is not an option."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-b border-border bg-background py-20 sm:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: sectors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-fire shadow-fire",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7 text-primary-foreground" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 text-xl font-bold uppercase tracking-tight",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: s.desc
									})
								]
							}, s.title))
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-gradient-dark py-16 text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black uppercase sm:text-3xl",
							children: "Have a project in mind?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-white/70",
							children: "Tell us about your facility and we'll prepare a tailored fire safety proposal."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								children: ["Start a Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ProjectsPage as component };
