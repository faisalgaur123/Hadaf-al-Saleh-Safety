import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { E as Facebook, _ as Instagram } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BYt-maTy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CdrJyAmp.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function FloatingSocials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-3.5 sm:right-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://facebook.com",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#1877f2]/30 active:scale-95",
				"aria-label": "Facebook",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-6 w-6 stroke-[1.5]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://instagram.com",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce3f] via-[#e1306c] to-[#833ab4] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#e1306c]/30 active:scale-95",
				"aria-label": "Instagram",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-6 w-6 stroke-[1.5]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://wa.me/966500000000",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#25d366]/30 active:scale-95",
				"aria-label": "WhatsApp",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 448 512",
					fill: "currentColor",
					className: "h-6 w-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
				})
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Hadaf Al Sahel Safety — Fire Safety Systems in Saudi Arabia" },
			{
				name: "description",
				content: "Hadaf Al Sahel Safety designs, installs and commissions fire protection systems across Saudi Arabia — sprinklers, FM200, Novec 1230, CO2, fire alarms, pumps, doors and extinguishers."
			},
			{
				name: "keywords",
				content: "fire safety Saudi Arabia, fire protection, sprinkler systems, FM200, Novec 1230, fire alarm, fire pump, Hadaf Al Sahel"
			},
			{
				property: "og:title",
				content: "Hadaf Al Sahel Safety — Fire Safety Systems in Saudi Arabia"
			},
			{
				property: "og:description",
				content: "World-class fire and safety protection: design, installation, testing and commissioning across the Kingdom."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingSocials, {})]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-jmWinDIm.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Hadaf Al Sahel Safety — Fire Safety Systems in Saudi Arabia" },
		{
			name: "description",
			content: "World-class fire protection design, installation and commissioning across Saudi Arabia. Sprinklers, FM200, Novec 1230, CO2, fire alarms and more."
		},
		{
			property: "og:title",
			content: "Hadaf Al Sahel Safety — Fire Safety Saudi Arabia"
		},
		{
			property: "og:description",
			content: "Engineered fire protection systems for industrial, commercial and public facilities across the Kingdom."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-DmEoJrxo.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Hadaf Al Sahel Safety — Fire Safety Experts in Saudi Arabia" },
		{
			name: "description",
			content: "Learn about Hadaf Al Sahel Safety — our mission, vision and values in delivering world-class fire protection across the Kingdom of Saudi Arabia."
		},
		{
			property: "og:title",
			content: "About Hadaf Al Sahel Safety"
		},
		{
			property: "og:description",
			content: "Certified engineers, NFPA-aligned design, UL/FM approved equipment — protecting people and securing futures."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-Bi8dnmp_.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Hadaf Al Sahel Safety — Fire Safety Saudi Arabia" },
		{
			name: "description",
			content: "Get in touch with Hadaf Al Sahel Safety for a free fire safety consultation, site survey or project proposal in Saudi Arabia."
		},
		{
			property: "og:title",
			content: "Contact Hadaf Al Sahel Safety"
		},
		{
			property: "og:description",
			content: "Free consultations, site surveys and tailored fire protection proposals across the Kingdom."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./projects-VdXhp5kd.mjs");
var Route$1 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Projects & Sectors — Hadaf Al Sahel Safety" },
		{
			name: "description",
			content: "Fire safety projects delivered across industrial, commercial, hospitality, oil & gas, retail and warehousing sectors in Saudi Arabia."
		},
		{
			property: "og:title",
			content: "Projects & Sectors — Hadaf Al Sahel Safety"
		},
		{
			property: "og:description",
			content: "Trusted fire protection delivery across the Kingdom's most demanding sectors."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-C0J2az_p.mjs");
var Route = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Fire Safety Services — Hadaf Al Sahel Safety Saudi Arabia" },
		{
			name: "description",
			content: "Full portfolio of fire protection services: sprinklers, FM200, Novec 1230, CO2, foam, fire alarms, pumps, extinguishers and fire doors across Saudi Arabia."
		},
		{
			property: "og:title",
			content: "Fire Safety Services — Hadaf Al Sahel Safety"
		},
		{
			property: "og:description",
			content: "Detection, suppression and passive protection engineered for Saudi Arabia's toughest environments."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute: Route$3.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$5
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$5
	}),
	ProjectsRoute: Route$1.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$5
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
