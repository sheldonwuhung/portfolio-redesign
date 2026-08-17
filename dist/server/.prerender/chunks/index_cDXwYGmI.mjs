globalThis.process ??= {};
globalThis.process.env ??= {};
import { g as createRenderInstruction, i as renderComponent, l as renderTemplate, m as renderHead, p as maybeRenderHead } from "./server_9wviQW3k.mjs";
import { t as createComponent } from "./compiler_CgmDlZ6O.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/logo/Logo.astro
var $$Logo = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<svg width="35" height="34" viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.7916 20.5963H69.9875V12.6134H49.6999L54.3899 8.08122L49.0917 0H20.8958L12.8975 8.17953V12.6158H0V20.5987H12.8975V24.047L20.8958 35.7756H28.9938V40.7034L33.6935 48.4897H0V56.3743H49.0917V59.825L46.6932 61.8944H20.998L17.8989 57.6572L12.8999 62.88L17.3004 68.9901H50.0939L57.0924 61.7961V56.3743H69.9899V48.4897H57.0924V39.1255L49.9942 28.6775H36.2964V24.342L41.7964 20.5963H41.7916ZM20.8958 10.2466L23.8951 7.09324H45.1923L49.0187 12.611H20.8982V10.2466H20.8958ZM46.0899 35.7732L49.0893 40.0104V48.4873H39.2909L36.2915 45.5306V35.7732H46.0899ZM24.8949 28.6775L20.8958 22.9607V20.5963H33.6935L28.9938 28.5792V28.6775H24.8949Z" fill="#939CFB"></path></svg>`;
}, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/components/logo/Logo.astro", void 0);
//#endregion
//#region src/components/nav/Nav.astro
var $$Nav = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="flex justify-start sm:justify-center" data-astro-cid-gyprio74><nav id="nav" class="w-full text-sm sm:text-md md:text-lg lg:text-2xl 2xl:text-3xl sm:flex" data-astro-cid-gyprio74><div class="flex text-center" data-astro-cid-gyprio74><button style="flex:none" id="contact-container" data-astro-cid-gyprio74>${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-gyprio74": true })}</button><div class="flex sm:hidden" id="mobile-div-center" data-astro-cid-gyprio74><div class="w-[80%] flex items-center justify-center text-1" data-astro-cid-gyprio74>SHELDON HUNG</div><button id="hamburger-button" class="w-[5%]" data-astro-cid-gyprio74><span class="material-symbols-outlined" data-astro-cid-gyprio74>menu</span></button></div></div><div id="button-list" class="hidden flex-col w-full sm:flex sm:flex-row" data-astro-cid-gyprio74><button data-astro-cid-gyprio74>ABOUT</button><button data-astro-cid-gyprio74>POSTERS</button><button data-astro-cid-gyprio74>INTERNET</button><button data-astro-cid-gyprio74>3D MODELS</button><button data-astro-cid-gyprio74>GAMES</button><button id="contact-container" data-astro-cid-gyprio74>CONTACT ME</button></div></nav></div>${renderScript($$result, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/components/nav/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/components/nav/Nav.astro", void 0);
//#endregion
//#region src/components/hero/Carousel.astro
var $$Carousel = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="grid-container" data-astro-cid-iwnot54x><video class="element-bottom aspect-9/16 sm:aspect-video" autoplay muted loop playsinline width="100%" data-astro-cid-iwnot54x><source src="../../../public/projects/hero/1.mp4" type="video/mp4" data-astro-cid-iwnot54x></video><span class="p-[1em] element-top" data-astro-cid-iwnot54x>MULTIMEDIA DIGITAL DESIGNER/DEVELOPER VERSED IN A MULTITUDE OF CREATIVE FIELDS</span></div>${renderScript($$result, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/components/hero/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/components/hero/Carousel.astro", void 0);
//#endregion
//#region src/components/about_me/FolderSVG.astro
var $$FolderSVG = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<svg viewBox="0 0 1728 1135" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H843.942L884.873 56.4922L884.873 278.96L1727.75 278.96V1134.84H0L0 0Z" fill="url(#paint0_linear_938_764)"></path><defs><linearGradient id="paint0_linear_938_764" x1="863.876" y1="0" x2="863.876" y2="1230.82" gradientUnits="userSpaceOnUse"><stop stop-color="#ADB4FF"></stop><stop offset="1" stop-color="#D2D6FF"></stop></linearGradient></defs></svg>`;
}, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/components/about_me/FolderSVG.astro", void 0);
//#endregion
//#region src/components/about_me/AboutMe.astro
var $$AboutMe = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "FolderSVG", $$FolderSVG, {
		"class": "folder-svg",
		"data-astro-cid-5obep6te": true
	})}`;
}, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/components/about_me/AboutMe.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Sheldon Hung | Multimedia Computing Student</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Turret+Road:wght@200;300;400;500;700;800&family=Zen+Dots&display=swap" rel="stylesheet">        <link rel="stylesheet" href="style.css"><!-- <meta property="og:type" content="website">
        <meta property="og:title" content="Shelly's Music!">
        <meta property="og:description" content="🦔🎸✨">
        
        <meta property="og:image" content="https://sheldonwuhung.github.io/music/Assets/Images/guitar3.jpg">
        <meta property="og:image:secure_url" content="https://sheldonwuhung.github.io/music/Assets/Images/guitar3.jpg">
        <meta property="og:image:alt" content="aura farming">

        <meta property="og:locale" content="en_us">
        <meta property="og:url" content="https://sheldonwuhung.github.io/music/">
        <meta property="og:site_name" content="Shelly's Music!">
        <meta property="og:type" content="website">
        <meta property="og:logo" content="https://sheldonwuhung.github.io/music/Assets/Images/guitar3.jpg">
        <meta name="twitter:text:title" content="Shelly's Music!">
        <meta name="twitter:image" content="https://sheldonwuhung.github.io/music/Assets/Images/guitar3.jpg">
        <meta name="twitter:card" content="summary_large_image"> -->${renderHead($$result)}</head><body id="body">${renderComponent($$result, "Nav", $$Nav, {})}<div class="grid-container-am">${renderComponent($$result, "Carousel", $$Carousel, { "class": "element-bottom-am" })}${renderComponent($$result, "AboutMe", $$AboutMe, { "class": "element-top-am" })}</div><input id="border-toggle" type="checkbox">${renderScript($$result, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/pages/index.astro", void 0);
var $$file = "C:/Users/sheld/OneDrive/Documents/School/Summer 2026/Portfolio/src/pages/index.astro";
var $$url = "/portfolio-redesign";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
