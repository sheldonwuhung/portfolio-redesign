globalThis.process ??= {};
globalThis.process.env ??= {};
import { C as createAstro, h as addAttribute, l as renderTemplate, p as maybeRenderHead, t as spreadAttributes, x as unescapeHTML } from "./chunks/server_9wviQW3k.mjs";
import { b as isRemotePath, c as isESMImportedImage, d as isRemoteAllowed, i as getImage$1, l as isRemoteImage, o as inferRemoteSize$1, r as getConfiguredImageService, s as fetchWithRedirects, u as resolveSrc } from "./chunks/assets_KGi65GMg.mjs";
import { a as deserializeRouteData, c as App, d as routeIsFallback, f as routeIsRedirect, i as deserializeManifest, l as DefaultFetchHandler, m as stringifyParams, n as endImageCollection, o as deserializeRouteInfo, p as callGetStaticPaths, s as serializeRouteData, t as beginImageCollection, u as getFallbackRoute } from "./chunks/entrypoints_j7ANs1Yl.mjs";
import { n as AstroError, p as FontFamilyNotFound, y as ImageMissingAlt } from "./chunks/shorthash_KFJyzn8G.mjs";
import { t as createComponent } from "./chunks/compiler_CgmDlZ6O.mjs";
import "cloudflare:workers";
//#region \0virtual:astro-cloudflare:config
var sessionKVBindingName = "SESSION";
//#endregion
//#region \0virtual:astro:fetchable
var _virtual_astro_fetchable_default = new DefaultFetchHandler();
//#endregion
//#region node_modules/astro/dist/core/build/incremental-content-collector.js
var COLLECTOR_KEY = /* @__PURE__ */ Symbol.for("astro:incremental-content-entries");
function collector() {
	const host = globalThis;
	let value = host[COLLECTOR_KEY];
	if (!value) {
		value = { current: void 0 };
		Object.defineProperty(host, COLLECTOR_KEY, {
			value,
			configurable: false,
			writable: false,
			enumerable: false
		});
	}
	return value;
}
function beginContentEntryCollection() {
	collector().current = /* @__PURE__ */ new Set();
}
function endContentEntryCollection() {
	const c = collector();
	const entries = c.current;
	c.current = void 0;
	return entries ? [...entries] : void 0;
}
//#endregion
//#region \0virtual:astro:renderers
var renderers = [];
[{
	"file": "",
	"links": [],
	"scripts": [],
	"styles": [],
	"routeData": {
		"route": "/",
		"isIndex": true,
		"type": "page",
		"pattern": "^\\/$",
		"segments": [],
		"params": [],
		"component": "src/pages/index.astro",
		"pathname": "/",
		"prerender": true,
		"fallbackRoutes": [],
		"distURL": [],
		"origin": "project",
		"_meta": { "trailingSlash": "ignore" }
	}
}].map(deserializeRouteInfo);
//#endregion
//#region \0virtual:astro:pages
var _page0 = () => import("./chunks/index_cDXwYGmI.mjs");
var pageMap = /* @__PURE__ */ new Map([["src/pages/index.astro", _page0]]);
//#endregion
//#region \0virtual:astro:manifest
var _manifest = deserializeManifest({"rootDir":"file:///C:/Users/sheld/OneDrive/Documents/School/Summer%202026/Portfolio/","cacheDir":"file:///C:/Users/sheld/OneDrive/Documents/School/Summer%202026/Portfolio/node_modules/.astro/","outDir":"file:///C:/Users/sheld/OneDrive/Documents/School/Summer%202026/Portfolio/dist/","srcDir":"file:///C:/Users/sheld/OneDrive/Documents/School/Summer%202026/Portfolio/src/","publicDir":"file:///C:/Users/sheld/OneDrive/Documents/School/Summer%202026/Portfolio/public/","buildClientDir":"file:///C:/Users/sheld/OneDrive/Documents/School/Summer%202026/Portfolio/dist/client/portfolio-redesign/","buildServerDir":"file:///C:/Users/sheld/OneDrive/Documents/School/Summer%202026/Portfolio/dist/server/","adapterName":"@astrojs/cloudflare","assetsDir":"_astro","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/index.CwU__6OJ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"serverLike":false,"middlewareMode":"classic","site":"https://sheldonwuhung.github.io","base":"/portfolio-redesign","trailingSlash":"ignore","compressHTML":"jsx","componentMetadata":[["C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"virtual:cloudflare/worker-entry":"prerender-entry.bldByQFH.mjs","\u0000noop-middleware":"chunks/_noop-middleware_BUe1r0Dc.mjs","\u0000virtual:astro:server-island-manifest":"chunks/_virtual_astro_server-island-manifest_q0HM18kM.mjs","\u0000virtual:astro:session-driver":"chunks/_virtual_astro_session-driver_TyipGO2P.mjs","C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/node_modules/@astrojs/cloudflare/dist/entrypoints/image-service-workerd.js":"chunks/image-service-workerd_D6Ycnt8c.mjs","\u0000virtual:astro:page:src/pages/index@_@astro":"chunks/index_cDXwYGmI.mjs","\u0000virtual:astro:actions/noop-entrypoint":"chunks/noop-entrypoint_BYLrzUxc.mjs","C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/node_modules/@astrojs/cloudflare/dist/utils/static-image-collection.js":"chunks/static-image-collection_CDAqHoGs.mjs","C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/components/hero/Carousel.astro?astro&type=script&index=0&lang.ts":"_astro/Carousel.astro_astro_type_script_index_0_lang.B_aGe6MU.js","C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/components/nav/Nav.astro?astro&type=script&index=0&lang.ts":"_astro/Nav.astro_astro_type_script_index_0_lang.BF61nuko.js","C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BRkX1FTX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/components/nav/Nav.astro?astro&type=script&index=0&lang.ts","globalThis.process??={},globalThis.process.env??={};var e=document.getElementById(`hamburger-button`),t=document.getElementById(`button-list`);e&&t&&(e.addEventListener(`click`,()=>{t.classList.contains(`hidden`)?t.classList.replace(`hidden`,`flex`):t.classList.replace(`flex`,`hidden`)}),window.addEventListener(`resize`,()=>{t&&(window.innerWidth>=640&&t.classList.contains(`hidden`)?t.classList.replace(`hidden`,`flex`):t.classList.replace(`flex`,`hidden`))}));"]],"assets":["/portfolio-redesign/robots.txt","/portfolio-redesign/wrangler.json","/portfolio-redesign/_astro/Carousel.astro_astro_type_script_index_0_lang.B_aGe6MU.js","/portfolio-redesign/_astro/index.astro_astro_type_script_index_0_lang.BRkX1FTX.js","/portfolio-redesign/_astro/rolldown-runtime.C_o-9qvY.js","/portfolio-redesign/projects/hero/1.mp4","/portfolio-redesign/_astro/index.CwU__6OJ.css","/portfolio-redesign/_astro/AppleIiScreenTypeface-2aP3.ORT6HCX-.ttf","/portfolio-redesign/_astro/GreaterTheory.Cf1-W6re.otf","/portfolio-redesign/index.html"],"buildFormat":"directory","checkOrigin":false,"actionBodySizeLimit":1048576,"serverIslandBodySizeLimit":1048576,"allowedDomains":[],"key":"lDL8KOpVXWJscfHcPWwyGAysafdWb3j15SwTj8aGaFo=","sessionConfig":{"driver":"unstorage/drivers/cloudflare-kv-binding","options":{"binding":"SESSION"}},"image":{},"devToolbar":{"enabled":false,"debugInfoOutput":""},"logLevel":"info","shouldInjectCspMetaTags":false});
var manifestRoutes = _manifest.routes;
var manifest = Object.assign(_manifest, {
	renderers,
	actions: () => import("./chunks/noop-entrypoint_BYLrzUxc.mjs"),
	middleware: () => import("./chunks/_noop-middleware_BUe1r0Dc.mjs"),
	sessionDriver: () => import("./chunks/_virtual_astro_session-driver_TyipGO2P.mjs"),
	serverIslandMappings: () => import("./chunks/_virtual_astro_server-island-manifest_q0HM18kM.mjs"),
	routes: manifestRoutes,
	pageMap
});
//#endregion
//#region node_modules/astro/dist/core/app/entrypoints/virtual/prod.js
var createApp$1 = ({ streaming } = {}) => {
	const app = new App(manifest, streaming);
	app.setFetchHandler(_virtual_astro_fetchable_default);
	return app;
};
//#endregion
//#region node_modules/astro/dist/core/app/entrypoints/virtual/index.js
var createApp = createApp$1;
//#endregion
//#region node_modules/astro/dist/runtime/prerender/static-paths.js
var StaticPaths = class {
	#app;
	constructor(app) {
		this.#app = app;
	}
	/**
	* Get all static paths for prerendering with their associated routes.
	* This avoids needing to re-match routes later, which can be incorrect due to route priority.
	*/
	async getAll() {
		const allPaths = [];
		const manifest = this.#app.manifest;
		const routesToGenerate = [];
		for (const { routeData } of manifest.routes) {
			if (!routeData.prerender) continue;
			if (routeIsRedirect(routeData)) {
				routesToGenerate.push(routeData);
				continue;
			}
			if (routeIsFallback(routeData) && manifest.i18n?.fallback) {
				routesToGenerate.push(routeData);
				continue;
			}
			routesToGenerate.push(routeData);
		}
		for (const route of routesToGenerate) for (const currentRoute of eachRouteInRouteData(route)) {
			const paths = await this.#getPathsForRoute(currentRoute);
			for (const path of paths) allPaths.push(path);
		}
		return allPaths;
	}
	/**
	* Get paths for a single route.
	* Note: Does not filter duplicates - that's handled by generate.ts with conflict detection.
	*/
	async #getPathsForRoute(route) {
		const paths = [];
		const manifest = this.#app.manifest;
		const routeCache = this.#app.pipeline.routeCache;
		if (route.pathname) {
			paths.push({
				pathname: route.pathname,
				route
			});
			return paths;
		}
		const componentInstance = await this.#app.pipeline.getComponentByRoute(route);
		const actualRoute = (routeIsRedirect(route) ? route.redirectRoute : routeIsFallback(route) ? getFallbackRoute(route, manifest.routes) : route) ?? route;
		const staticPaths = await callGetStaticPaths({
			mod: componentInstance,
			route: actualRoute,
			routeCache,
			ssr: manifest.serverLike,
			base: manifest.base,
			trailingSlash: manifest.trailingSlash
		});
		for (const staticPath of staticPaths) {
			const pathname = stringifyParams(staticPath.params, route, manifest.trailingSlash);
			paths.push({
				pathname,
				route,
				cacheKey: staticPath.cacheKey === void 0 ? void 0 : String(staticPath.cacheKey)
			});
		}
		return paths;
	}
};
function* eachRouteInRouteData(route) {
	yield route;
	for (const fallbackRoute of route.fallbackRoutes) yield fallbackRoute;
}
//#endregion
//#region node_modules/astro/components/Image.astro
createAstro("https://sheldonwuhung.github.io");
var $$Image = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Image;
	const props = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	if (typeof props.width === "string") props.width = Number.parseInt(props.width);
	if (typeof props.height === "string") props.height = Number.parseInt(props.height);
	if ((props.layout ?? imageConfig.layout ?? "none") !== "none") {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	const image = await getImage(props);
	const additionalAttributes = {};
	if (image.srcSet.values.length > 0) additionalAttributes.srcset = image.srcSet.attribute;
	const { class: className, ...attributes } = {
		...additionalAttributes,
		...image.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/node_modules/astro/components/Image.astro", void 0);
//#endregion
//#region node_modules/mrmime/index.mjs
var mimes = {
	"3g2": "video/3gpp2",
	"3gp": "video/3gpp",
	"3gpp": "video/3gpp",
	"3mf": "model/3mf",
	"aac": "audio/aac",
	"ac": "application/pkix-attr-cert",
	"adp": "audio/adpcm",
	"adts": "audio/aac",
	"ai": "application/postscript",
	"aml": "application/automationml-aml+xml",
	"amlx": "application/automationml-amlx+zip",
	"amr": "audio/amr",
	"apng": "image/apng",
	"appcache": "text/cache-manifest",
	"appinstaller": "application/appinstaller",
	"appx": "application/appx",
	"appxbundle": "application/appxbundle",
	"asc": "application/pgp-keys",
	"atom": "application/atom+xml",
	"atomcat": "application/atomcat+xml",
	"atomdeleted": "application/atomdeleted+xml",
	"atomsvc": "application/atomsvc+xml",
	"au": "audio/basic",
	"avci": "image/avci",
	"avcs": "image/avcs",
	"avif": "image/avif",
	"aw": "application/applixware",
	"bdoc": "application/bdoc",
	"bin": "application/octet-stream",
	"bmp": "image/bmp",
	"bpk": "application/octet-stream",
	"btf": "image/prs.btif",
	"btif": "image/prs.btif",
	"buffer": "application/octet-stream",
	"ccxml": "application/ccxml+xml",
	"cdfx": "application/cdfx+xml",
	"cdmia": "application/cdmi-capability",
	"cdmic": "application/cdmi-container",
	"cdmid": "application/cdmi-domain",
	"cdmio": "application/cdmi-object",
	"cdmiq": "application/cdmi-queue",
	"cer": "application/pkix-cert",
	"cgm": "image/cgm",
	"cjs": "application/node",
	"class": "application/java-vm",
	"coffee": "text/coffeescript",
	"conf": "text/plain",
	"cpl": "application/cpl+xml",
	"cpt": "application/mac-compactpro",
	"crl": "application/pkix-crl",
	"css": "text/css",
	"csv": "text/csv",
	"cu": "application/cu-seeme",
	"cwl": "application/cwl",
	"cww": "application/prs.cww",
	"davmount": "application/davmount+xml",
	"dbk": "application/docbook+xml",
	"deb": "application/octet-stream",
	"def": "text/plain",
	"deploy": "application/octet-stream",
	"dib": "image/bmp",
	"disposition-notification": "message/disposition-notification",
	"dist": "application/octet-stream",
	"distz": "application/octet-stream",
	"dll": "application/octet-stream",
	"dmg": "application/octet-stream",
	"dms": "application/octet-stream",
	"doc": "application/msword",
	"dot": "application/msword",
	"dpx": "image/dpx",
	"drle": "image/dicom-rle",
	"dsc": "text/prs.lines.tag",
	"dssc": "application/dssc+der",
	"dtd": "application/xml-dtd",
	"dump": "application/octet-stream",
	"dwd": "application/atsc-dwd+xml",
	"ear": "application/java-archive",
	"ecma": "application/ecmascript",
	"elc": "application/octet-stream",
	"emf": "image/emf",
	"eml": "message/rfc822",
	"emma": "application/emma+xml",
	"emotionml": "application/emotionml+xml",
	"eps": "application/postscript",
	"epub": "application/epub+zip",
	"exe": "application/octet-stream",
	"exi": "application/exi",
	"exp": "application/express",
	"exr": "image/aces",
	"ez": "application/andrew-inset",
	"fdf": "application/fdf",
	"fdt": "application/fdt+xml",
	"fits": "image/fits",
	"g3": "image/g3fax",
	"gbr": "application/rpki-ghostbusters",
	"geojson": "application/geo+json",
	"gif": "image/gif",
	"glb": "model/gltf-binary",
	"gltf": "model/gltf+json",
	"gml": "application/gml+xml",
	"gpx": "application/gpx+xml",
	"gram": "application/srgs",
	"grxml": "application/srgs+xml",
	"gxf": "application/gxf",
	"gz": "application/gzip",
	"h261": "video/h261",
	"h263": "video/h263",
	"h264": "video/h264",
	"heic": "image/heic",
	"heics": "image/heic-sequence",
	"heif": "image/heif",
	"heifs": "image/heif-sequence",
	"hej2": "image/hej2k",
	"held": "application/atsc-held+xml",
	"hjson": "application/hjson",
	"hlp": "application/winhlp",
	"hqx": "application/mac-binhex40",
	"hsj2": "image/hsj2",
	"htm": "text/html",
	"html": "text/html",
	"ics": "text/calendar",
	"ief": "image/ief",
	"ifb": "text/calendar",
	"iges": "model/iges",
	"igs": "model/iges",
	"img": "application/octet-stream",
	"in": "text/plain",
	"ini": "text/plain",
	"ink": "application/inkml+xml",
	"inkml": "application/inkml+xml",
	"ipfix": "application/ipfix",
	"iso": "application/octet-stream",
	"its": "application/its+xml",
	"jade": "text/jade",
	"jar": "application/java-archive",
	"jhc": "image/jphc",
	"jls": "image/jls",
	"jp2": "image/jp2",
	"jpe": "image/jpeg",
	"jpeg": "image/jpeg",
	"jpf": "image/jpx",
	"jpg": "image/jpeg",
	"jpg2": "image/jp2",
	"jpgm": "image/jpm",
	"jpgv": "video/jpeg",
	"jph": "image/jph",
	"jpm": "image/jpm",
	"jpx": "image/jpx",
	"js": "text/javascript",
	"json": "application/json",
	"json5": "application/json5",
	"jsonld": "application/ld+json",
	"jsonml": "application/jsonml+json",
	"jsx": "text/jsx",
	"jt": "model/jt",
	"jxl": "image/jxl",
	"jxr": "image/jxr",
	"jxra": "image/jxra",
	"jxrs": "image/jxrs",
	"jxs": "image/jxs",
	"jxsc": "image/jxsc",
	"jxsi": "image/jxsi",
	"jxss": "image/jxss",
	"kar": "audio/midi",
	"ktx": "image/ktx",
	"ktx2": "image/ktx2",
	"less": "text/less",
	"lgr": "application/lgr+xml",
	"list": "text/plain",
	"litcoffee": "text/coffeescript",
	"log": "text/plain",
	"lostxml": "application/lost+xml",
	"lrf": "application/octet-stream",
	"m1v": "video/mpeg",
	"m21": "application/mp21",
	"m2a": "audio/mpeg",
	"m2t": "video/mp2t",
	"m2ts": "video/mp2t",
	"m2v": "video/mpeg",
	"m3a": "audio/mpeg",
	"m4a": "audio/mp4",
	"m4p": "application/mp4",
	"m4s": "video/iso.segment",
	"ma": "application/mathematica",
	"mads": "application/mads+xml",
	"maei": "application/mmt-aei+xml",
	"man": "text/troff",
	"manifest": "text/cache-manifest",
	"map": "application/json",
	"mar": "application/octet-stream",
	"markdown": "text/markdown",
	"mathml": "application/mathml+xml",
	"mb": "application/mathematica",
	"mbox": "application/mbox",
	"md": "text/markdown",
	"mdx": "text/mdx",
	"me": "text/troff",
	"mesh": "model/mesh",
	"meta4": "application/metalink4+xml",
	"metalink": "application/metalink+xml",
	"mets": "application/mets+xml",
	"mft": "application/rpki-manifest",
	"mid": "audio/midi",
	"midi": "audio/midi",
	"mime": "message/rfc822",
	"mj2": "video/mj2",
	"mjp2": "video/mj2",
	"mjs": "text/javascript",
	"mml": "text/mathml",
	"mods": "application/mods+xml",
	"mov": "video/quicktime",
	"mp2": "audio/mpeg",
	"mp21": "application/mp21",
	"mp2a": "audio/mpeg",
	"mp3": "audio/mpeg",
	"mp4": "video/mp4",
	"mp4a": "audio/mp4",
	"mp4s": "application/mp4",
	"mp4v": "video/mp4",
	"mpd": "application/dash+xml",
	"mpe": "video/mpeg",
	"mpeg": "video/mpeg",
	"mpf": "application/media-policy-dataset+xml",
	"mpg": "video/mpeg",
	"mpg4": "video/mp4",
	"mpga": "audio/mpeg",
	"mpp": "application/dash-patch+xml",
	"mrc": "application/marc",
	"mrcx": "application/marcxml+xml",
	"ms": "text/troff",
	"mscml": "application/mediaservercontrol+xml",
	"msh": "model/mesh",
	"msi": "application/octet-stream",
	"msix": "application/msix",
	"msixbundle": "application/msixbundle",
	"msm": "application/octet-stream",
	"msp": "application/octet-stream",
	"mtl": "model/mtl",
	"mts": "video/mp2t",
	"musd": "application/mmt-usd+xml",
	"mxf": "application/mxf",
	"mxmf": "audio/mobile-xmf",
	"mxml": "application/xv+xml",
	"n3": "text/n3",
	"nb": "application/mathematica",
	"nq": "application/n-quads",
	"nt": "application/n-triples",
	"obj": "model/obj",
	"oda": "application/oda",
	"oga": "audio/ogg",
	"ogg": "audio/ogg",
	"ogv": "video/ogg",
	"ogx": "application/ogg",
	"omdoc": "application/omdoc+xml",
	"onepkg": "application/onenote",
	"onetmp": "application/onenote",
	"onetoc": "application/onenote",
	"onetoc2": "application/onenote",
	"opf": "application/oebps-package+xml",
	"opus": "audio/ogg",
	"otf": "font/otf",
	"owl": "application/rdf+xml",
	"oxps": "application/oxps",
	"p10": "application/pkcs10",
	"p7c": "application/pkcs7-mime",
	"p7m": "application/pkcs7-mime",
	"p7s": "application/pkcs7-signature",
	"p8": "application/pkcs8",
	"pdf": "application/pdf",
	"pfr": "application/font-tdpfr",
	"pgp": "application/pgp-encrypted",
	"pkg": "application/octet-stream",
	"pki": "application/pkixcmp",
	"pkipath": "application/pkix-pkipath",
	"pls": "application/pls+xml",
	"png": "image/png",
	"prc": "model/prc",
	"prf": "application/pics-rules",
	"provx": "application/provenance+xml",
	"ps": "application/postscript",
	"pskcxml": "application/pskc+xml",
	"pti": "image/prs.pti",
	"qt": "video/quicktime",
	"raml": "application/raml+yaml",
	"rapd": "application/route-apd+xml",
	"rdf": "application/rdf+xml",
	"relo": "application/p2p-overlay+xml",
	"rif": "application/reginfo+xml",
	"rl": "application/resource-lists+xml",
	"rld": "application/resource-lists-diff+xml",
	"rmi": "audio/midi",
	"rnc": "application/relax-ng-compact-syntax",
	"rng": "application/xml",
	"roa": "application/rpki-roa",
	"roff": "text/troff",
	"rq": "application/sparql-query",
	"rs": "application/rls-services+xml",
	"rsat": "application/atsc-rsat+xml",
	"rsd": "application/rsd+xml",
	"rsheet": "application/urc-ressheet+xml",
	"rss": "application/rss+xml",
	"rtf": "text/rtf",
	"rtx": "text/richtext",
	"rusd": "application/route-usd+xml",
	"s3m": "audio/s3m",
	"sbml": "application/sbml+xml",
	"scq": "application/scvp-cv-request",
	"scs": "application/scvp-cv-response",
	"sdp": "application/sdp",
	"senmlx": "application/senml+xml",
	"sensmlx": "application/sensml+xml",
	"ser": "application/java-serialized-object",
	"setpay": "application/set-payment-initiation",
	"setreg": "application/set-registration-initiation",
	"sgi": "image/sgi",
	"sgm": "text/sgml",
	"sgml": "text/sgml",
	"shex": "text/shex",
	"shf": "application/shf+xml",
	"shtml": "text/html",
	"sieve": "application/sieve",
	"sig": "application/pgp-signature",
	"sil": "audio/silk",
	"silo": "model/mesh",
	"siv": "application/sieve",
	"slim": "text/slim",
	"slm": "text/slim",
	"sls": "application/route-s-tsid+xml",
	"smi": "application/smil+xml",
	"smil": "application/smil+xml",
	"snd": "audio/basic",
	"so": "application/octet-stream",
	"spdx": "text/spdx",
	"spp": "application/scvp-vp-response",
	"spq": "application/scvp-vp-request",
	"spx": "audio/ogg",
	"sql": "application/sql",
	"sru": "application/sru+xml",
	"srx": "application/sparql-results+xml",
	"ssdl": "application/ssdl+xml",
	"ssml": "application/ssml+xml",
	"stk": "application/hyperstudio",
	"stl": "model/stl",
	"stpx": "model/step+xml",
	"stpxz": "model/step-xml+zip",
	"stpz": "model/step+zip",
	"styl": "text/stylus",
	"stylus": "text/stylus",
	"svg": "image/svg+xml",
	"svgz": "image/svg+xml",
	"swidtag": "application/swid+xml",
	"t": "text/troff",
	"t38": "image/t38",
	"td": "application/urc-targetdesc+xml",
	"tei": "application/tei+xml",
	"teicorpus": "application/tei+xml",
	"text": "text/plain",
	"tfi": "application/thraud+xml",
	"tfx": "image/tiff-fx",
	"tif": "image/tiff",
	"tiff": "image/tiff",
	"toml": "application/toml",
	"tr": "text/troff",
	"trig": "application/trig",
	"ts": "video/mp2t",
	"tsd": "application/timestamped-data",
	"tsv": "text/tab-separated-values",
	"ttc": "font/collection",
	"ttf": "font/ttf",
	"ttl": "text/turtle",
	"ttml": "application/ttml+xml",
	"txt": "text/plain",
	"u3d": "model/u3d",
	"u8dsn": "message/global-delivery-status",
	"u8hdr": "message/global-headers",
	"u8mdn": "message/global-disposition-notification",
	"u8msg": "message/global",
	"ubj": "application/ubjson",
	"uri": "text/uri-list",
	"uris": "text/uri-list",
	"urls": "text/uri-list",
	"vcard": "text/vcard",
	"vrml": "model/vrml",
	"vtt": "text/vtt",
	"vxml": "application/voicexml+xml",
	"war": "application/java-archive",
	"wasm": "application/wasm",
	"wav": "audio/wav",
	"weba": "audio/webm",
	"webm": "video/webm",
	"webmanifest": "application/manifest+json",
	"webp": "image/webp",
	"wgsl": "text/wgsl",
	"wgt": "application/widget",
	"wif": "application/watcherinfo+xml",
	"wmf": "image/wmf",
	"woff": "font/woff",
	"woff2": "font/woff2",
	"wrl": "model/vrml",
	"wsdl": "application/wsdl+xml",
	"wspolicy": "application/wspolicy+xml",
	"x3d": "model/x3d+xml",
	"x3db": "model/x3d+fastinfoset",
	"x3dbz": "model/x3d+binary",
	"x3dv": "model/x3d-vrml",
	"x3dvz": "model/x3d+vrml",
	"x3dz": "model/x3d+xml",
	"xaml": "application/xaml+xml",
	"xav": "application/xcap-att+xml",
	"xca": "application/xcap-caps+xml",
	"xcs": "application/calendar+xml",
	"xdf": "application/xcap-diff+xml",
	"xdssc": "application/dssc+xml",
	"xel": "application/xcap-el+xml",
	"xenc": "application/xenc+xml",
	"xer": "application/patch-ops-error+xml",
	"xfdf": "application/xfdf",
	"xht": "application/xhtml+xml",
	"xhtml": "application/xhtml+xml",
	"xhvml": "application/xv+xml",
	"xlf": "application/xliff+xml",
	"xm": "audio/xm",
	"xml": "text/xml",
	"xns": "application/xcap-ns+xml",
	"xop": "application/xop+xml",
	"xpl": "application/xproc+xml",
	"xsd": "application/xml",
	"xsf": "application/prs.xsf+xml",
	"xsl": "application/xml",
	"xslt": "application/xml",
	"xspf": "application/xspf+xml",
	"xvm": "application/xv+xml",
	"xvml": "application/xv+xml",
	"yaml": "text/yaml",
	"yang": "application/yang",
	"yin": "application/yin+xml",
	"yml": "text/yaml",
	"zip": "application/zip"
};
function lookup(extn) {
	let tmp = ("" + extn).trim().toLowerCase();
	let idx = tmp.lastIndexOf(".");
	return mimes[!~idx ? tmp : tmp.substring(++idx)];
}
//#endregion
//#region node_modules/astro/components/Picture.astro
createAstro("https://sheldonwuhung.github.io");
var $$Picture = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Picture;
	const defaultFormats = ["webp"];
	const defaultFallbackFormat = "png";
	const specialFormatsFallback = [
		"gif",
		"svg",
		"jpg",
		"jpeg"
	];
	const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
	if (scopedStyleClass) {
		if (pictureAttributes.class) pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
		else pictureAttributes.class = scopedStyleClass;
	}
	const useResponsive = (props.layout ?? imageConfig.layout ?? "none") !== "none";
	if (useResponsive) {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	for (const key in props) if (key.startsWith("data-astro-cid")) pictureAttributes[key] = props[key];
	const originalSrc = await resolveSrc(props.src);
	if (props.inferSize && isRemoteImage(originalSrc)) {
		const remoteSize = await inferRemoteSize(originalSrc);
		delete props.inferSize;
		props.width ??= remoteSize.width;
		props.height ??= remoteSize.height;
	}
	const optimizedImages = await Promise.all(formats.map(async (format) => await getImage({
		...props,
		src: originalSrc,
		format,
		widths: props.widths,
		densities: props.densities
	})));
	const clonedSrc = isESMImportedImage(originalSrc) ? originalSrc.clone ?? originalSrc : originalSrc;
	let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
	if (!fallbackFormat && isESMImportedImage(clonedSrc) && specialFormatsFallback.includes(clonedSrc.format)) resultFallbackFormat = clonedSrc.format;
	const fallbackImage = await getImage({
		...props,
		format: resultFallbackFormat,
		widths: props.widths,
		densities: props.densities
	});
	const imgAdditionalAttributes = {};
	const sourceAdditionalAttributes = {};
	if (props.sizes) sourceAdditionalAttributes.sizes = props.sizes;
	if (fallbackImage.srcSet.values.length > 0) imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
	const { class: className, ...attributes } = {
		...imgAdditionalAttributes,
		...fallbackImage.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
		const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
		return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
	})}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}></picture>`;
}, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/node_modules/astro/components/Picture.astro", void 0);
//#endregion
//#region \0virtual:astro:assets/fonts/internal
var componentDataByCssVariable = /* @__PURE__ */ new Map([]);
//#endregion
//#region node_modules/astro/dist/assets/fonts/core/filter-preloads.js
function filterPreloads(data, preload) {
	if (!preload) return null;
	if (preload === true) return data;
	return data.filter(({ weight, style, subset }) => preload.some((p) => {
		if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) return false;
		if (p.style !== void 0 && p.style !== style) return false;
		if (p.subset !== void 0 && p.subset !== subset) return false;
		return true;
	}));
}
function checkWeight(input, target) {
	const trimmedInput = input.trim();
	if (trimmedInput.includes(" ")) return trimmedInput === target;
	if (target.includes(" ")) {
		const [a, b] = target.split(" ");
		const parsedInput = Number.parseInt(input);
		return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
	}
	return input === target;
}
//#endregion
//#region node_modules/astro/components/Font.astro
createAstro("https://sheldonwuhung.github.io");
var $$Font = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Font;
	const { cssVariable, preload = false } = Astro.props;
	const data = componentDataByCssVariable.get(cssVariable);
	if (!data) throw new AstroError({
		...FontFamilyNotFound,
		message: FontFamilyNotFound.message(cssVariable)
	});
	const filteredPreloadData = filterPreloads(data.preloads, preload);
	return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/node_modules/astro/components/Font.astro", void 0);
//#endregion
//#region node_modules/astro/dist/assets/fonts/infra/remote-runtime-font-file-url-resolver.js
var RemoteRuntimeFontFileUrlResolver = class {
	#urls;
	#address;
	constructor({ urls, address }) {
		this.#urls = urls;
		this.#address = address;
	}
	resolve(url) {
		if (!this.#urls.has(url)) return null;
		if (!this.#address) throw new Error("Server address unavailable, this should not happen. Open an issue.");
		if (!url.startsWith("/")) url = new URL(url).pathname;
		return `http://${this.#address.family === "IPv6" ? `[${this.#address.address}]` : this.#address.address}:${this.#address.port}${url}`;
	}
};
new RemoteRuntimeFontFileUrlResolver({
	urls: /* @__PURE__ */ new Set([]),
	address: null
});
//#endregion
//#region \0astro:assets
var assetQueryParams = void 0;
var imageConfig = {
	"endpoint": {
		"route": "/_image",
		"entrypoint": "@astrojs/cloudflare/image-transform-endpoint"
	},
	"service": {
		"entrypoint": "@astrojs/cloudflare/image-service-workerd",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [],
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: assetQueryParams,
	enumerable: false,
	configurable: true
});
var inferRemoteSize = async (url) => {
	return (await getConfiguredImageService()).getRemoteSize?.(url, imageConfig) ?? inferRemoteSize$1(url, imageConfig);
};
var getImage = async (options) => await getImage$1(options, imageConfig);
//#endregion
//#region node_modules/@astrojs/cloudflare/dist/utils/image-binding-transform.js
var qualityTable = {
	low: 25,
	mid: 50,
	high: 80,
	max: 100
};
async function transformStream(body, params, images) {
	const outputFormat = {
		jpeg: "image/jpeg",
		jpg: "image/jpeg",
		png: "image/png",
		gif: "image/gif",
		webp: "image/webp",
		avif: "image/avif"
	}[params.get("f") ?? ""];
	if (!outputFormat) return new Response(`Unsupported format: ${params.get("f")}`, { status: 400 });
	return (await images.input(body).transform({
		width: params.has("w") ? Number.parseInt(params.get("w")) : void 0,
		height: params.has("h") ? Number.parseInt(params.get("h")) : void 0,
		fit: params.get("fit")
	}).output({
		quality: params.get("q") ? qualityTable[params.get("q")] ?? Number.parseInt(params.get("q")) : void 0,
		format: outputFormat
	})).response();
}
async function transform(rawUrl, images, assets) {
	const url = new URL(rawUrl);
	const href = url.searchParams.get("href");
	if (!href || isRemotePath(href) && !isRemoteAllowed(href, imageConfig)) return new Response("Forbidden", { status: 403 });
	const imageSrc = new URL(href, url.origin);
	let content;
	if (isRemotePath(href)) try {
		content = await fetchWithRedirects({
			url: imageSrc,
			imageConfig
		});
		if (!isRemoteAllowed(content.url, imageConfig)) return new Response("Forbidden", { status: 403 });
	} catch {
		return new Response("Not Found", { status: 404 });
	}
	else content = await assets.fetch(imageSrc);
	if (!content.body) return new Response(null, { status: 404 });
	return transformStream(content.body, url.searchParams, images);
}
//#endregion
//#region node_modules/@astrojs/cloudflare/dist/utils/prerender.js
function arrayBufferToBase64(buffer) {
	const bytes = new Uint8Array(buffer);
	const CHUNK_SIZE = 32768;
	let binary = "";
	for (let i = 0; i < bytes.length; i += CHUNK_SIZE) binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK_SIZE));
	return btoa(binary);
}
function installPrerenderErrorPropagation(app) {
	const originalRenderError = app.renderError.bind(app);
	app.renderError = async (request, options) => {
		if (options.status === 500) {
			if (options.response) return options.response;
			throw options.error;
		}
		return originalRenderError(request, options);
	};
}
function isStaticPathsRequest(request) {
	const { pathname } = new URL(request.url);
	return pathname === "/__astro_static_paths" && request.method === "POST";
}
function isPrerenderRequest(request) {
	const { pathname } = new URL(request.url);
	return pathname === "/__astro_prerender" && request.method === "POST";
}
async function handleStaticPathsRequest(app) {
	const response = { paths: (await new StaticPaths(app).getAll()).map(({ pathname, route, cacheKey }) => ({
		pathname,
		route: serializeRouteData(route, app.manifest.trailingSlash),
		cacheKey
	})) };
	return new Response(JSON.stringify(response), { headers: { "Content-Type": "application/json" } });
}
async function handlePrerenderRequest(app, request) {
	const headers = new Headers();
	for (const [key, value] of request.headers.entries()) headers.append(key, value);
	const body = await request.json();
	const routeData = deserializeRouteData(body.routeData);
	const prerenderRequest = new Request(body.url, {
		method: "GET",
		headers
	});
	try {
		if (body.incremental) {
			beginContentEntryCollection();
			beginImageCollection();
		}
		const response = await app.render(prerenderRequest, { routeData });
		const bufferedBody = await response.arrayBuffer();
		if (body.incremental) {
			const contentEntryKeys = endContentEntryCollection();
			const staticImages = endImageCollection();
			const envelope = {
				status: response.status,
				statusText: response.statusText,
				headers: [...response.headers.entries()],
				body: arrayBufferToBase64(bufferedBody),
				metadata: {
					contentEntryKeys,
					staticImages
				}
			};
			return new Response(JSON.stringify(envelope), { headers: { "Content-Type": "application/json" } });
		}
		return new Response(bufferedBody, {
			status: response.status,
			statusText: response.statusText,
			headers: response.headers
		});
	} catch (err) {
		const message = err instanceof Error ? err.message : String(err);
		const headerSafe = message.replace(/[\r\n]+/g, " ");
		return new Response(message, {
			status: 500,
			headers: {
				"Content-Type": "text/plain",
				"x-astro-prerender-error": headerSafe
			}
		});
	}
}
function isStaticImagesRequest(request) {
	const { pathname } = new URL(request.url);
	return pathname === "/__astro_static_images" && request.method === "POST";
}
function isImageTransformRequest(request) {
	const { pathname } = new URL(request.url);
	return pathname === "/__astro_image_transform" && request.method === "POST";
}
function handleStaticImagesRequest() {
	const staticImages = globalThis.astroAsset?.staticImages;
	if (!staticImages || staticImages.size === 0) return new Response("[]", { headers: { "Content-Type": "application/json" } });
	const entries = [];
	for (const [originalPath, { originalSrcPath, transforms }] of staticImages) {
		const serializedTransforms = [];
		for (const [hash, { finalPath, transform }] of transforms) serializedTransforms.push({
			hash,
			finalPath,
			transform
		});
		entries.push({
			originalPath,
			originalSrcPath,
			transforms: serializedTransforms
		});
	}
	return new Response(JSON.stringify(entries), { headers: { "Content-Type": "application/json" } });
}
async function handleImageTransformRequest(request, { images, assets }) {
	if (!images) return new Response("The Cloudflare IMAGES binding is not available in the prerender worker.", { status: 503 });
	if (request.body) return transformStream(request.body, new URL(request.url).searchParams, images);
	if (!assets) return new Response("The Cloudflare ASSETS binding is not available in the prerender worker.", { status: 503 });
	return transform(request.url, images, assets);
}
//#endregion
//#region node_modules/@astrojs/internal-helpers/dist/request.js
function getFirstForwardedValue(multiValueHeader) {
	return multiValueHeader?.toString()?.split(",").map((e) => e.trim())?.[0];
}
var IP_RE = /^[0-9a-fA-F.:]{1,45}$/;
function isValidIpAddress(value) {
	return IP_RE.test(value);
}
function getValidatedIpFromHeader(headerValue) {
	const raw = getFirstForwardedValue(headerValue);
	if (raw && isValidIpAddress(raw)) return raw;
}
//#endregion
//#region node_modules/@astrojs/cloudflare/dist/utils/cf-helpers.js
function matchStaticAsset(manifest, requestUrl, env) {
	const { pathname } = new URL(requestUrl);
	if (manifest.assets.has(pathname)) return env.ASSETS.fetch(requestUrl.replace(/\.html$/, ""));
}
async function fallbackToAssets(requestUrl, env) {
	const asset = await env.ASSETS.fetch(requestUrl.replace(/index.html$/, "").replace(/\.html$/, ""));
	if (asset.status !== 404) return asset;
}
function createErrorPageFetch(env) {
	return async (url) => {
		return env.ASSETS.fetch(url.replace(/\.html$/, ""));
	};
}
function createLocals(ctx) {
	const locals = { cfContext: ctx };
	Object.defineProperty(locals, "runtime", {
		enumerable: false,
		value: {
			get env() {
				throw new Error(`Astro.locals.runtime.env has been removed in Astro v6. Use 'import { env } from "cloudflare:workers"' instead.`);
			},
			get cf() {
				throw new Error(`Astro.locals.runtime.cf has been removed in Astro v6. Use 'Astro.request.cf' instead.`);
			},
			get caches() {
				throw new Error(`Astro.locals.runtime.caches has been removed in Astro v6. Use the global 'caches' object instead.`);
			},
			get ctx() {
				throw new Error(`Astro.locals.runtime.ctx has been removed in Astro v6. Use 'Astro.locals.cfContext' instead.`);
			}
		}
	});
	return locals;
}
function getClientAddress(request) {
	return getValidatedIpFromHeader(request.headers.get("cf-connecting-ip"));
}
//#endregion
//#region node_modules/@astrojs/cloudflare/dist/utils/cf.js
function injectSessionBinding(manifest, env) {
	if (env["SESSION"]) {
		const sessionConfigOptions = manifest.sessionConfig?.options ?? {};
		Object.assign(sessionConfigOptions, { binding: env[sessionKVBindingName] });
	}
}
var app = createApp();
installPrerenderErrorPropagation(app);
async function handle(request, env, context) {
	if (isStaticPathsRequest(request)) return handleStaticPathsRequest(app);
	if (isPrerenderRequest(request)) return handlePrerenderRequest(app, request);
	if (isStaticImagesRequest(request)) return handleStaticImagesRequest();
	if (isImageTransformRequest(request)) return handleImageTransformRequest(request, {
		images: void 0,
		assets: void 0
	});
	injectSessionBinding(app.manifest, env);
	const staticAsset = matchStaticAsset(app.manifest, request.url, env);
	if (staticAsset) return staticAsset;
	let routeData = void 0;
	if (app.isDev()) {
		const result = await app.devMatch(app.getPathnameFromRequest(request));
		if (result) routeData = result.routeData;
	} else routeData = app.match(request);
	if (!routeData) {
		const asset = await fallbackToAssets(request.url, env);
		if (asset) return asset;
	}
	const locals = createLocals(context);
	const waitUntil = context.waitUntil.bind(context);
	let response = await app.render(request, {
		routeData,
		locals,
		waitUntil,
		prerenderedErrorPageFetch: createErrorPageFetch(env),
		clientAddress: getClientAddress(request)
	});
	const setCookieHeaders = app.setCookieHeaders ? [...app.setCookieHeaders(response)] : [];
	if (setCookieHeaders.length > 0 || false) {
		const applyHeaders = (res) => {
			for (const setCookieHeader of setCookieHeaders) res.headers.append("Set-Cookie", setCookieHeader);
		};
		try {
			applyHeaders(response);
		} catch {
			response = new Response(response.body, response);
			applyHeaders(response);
		}
	}
	return response;
}
//#endregion
//#region \0virtual:cloudflare/worker-entry
var worker_entry_default = { fetch: handle };
//#endregion
export { worker_entry_default as default };
