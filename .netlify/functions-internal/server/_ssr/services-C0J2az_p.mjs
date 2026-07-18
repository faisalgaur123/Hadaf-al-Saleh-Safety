import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { L as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as hero_fire_safety_default, n as Footer, o as services, r as Nav, t as Button } from "./hero-fire-safety-K21dijo0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-C0J2az_p.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
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
							children: "Our Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl animate-hero-in [animation-delay:120ms]",
							children: [
								"Complete ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-fire",
									children: "Fire Protection"
								}),
								" Portfolio"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg text-white/85 animate-hero-in [animation-delay:240ms]",
							children: "Design, supply, installation, testing and commissioning of every major fire and life-safety system used in modern buildings and industrial plants."
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-gradient-dark py-20 text-white sm:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-95",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								children: ["Request a Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						})
					})]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ServicesPage as component };
