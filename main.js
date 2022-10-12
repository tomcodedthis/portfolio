/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/input.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/input.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\\n*//*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: #e5e7eb; /* 2 */\\n}\\n\\n::before,\\n::after {\\n  --tw-content: '';\\n}\\n\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n*/\\n\\nhtml {\\n  line-height: 1.5; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -moz-tab-size: 4; /* 3 */\\n  -o-tab-size: 4;\\n     tab-size: 4; /* 3 */\\n  font-family: Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Helvetica Neue, sans-serif; /* 4 */\\n}\\n\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\n\\nbody {\\n  margin: 0; /* 1 */\\n  line-height: inherit; /* 2 */\\n}\\n\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\n\\nhr {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n  border-top-width: 1px; /* 3 */\\n}\\n\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr:where([title]) {\\n  text-decoration: underline;\\n  -webkit-text-decoration: underline dotted currentColor;\\n          text-decoration: underline dotted currentColor;\\n}\\n\\n/*\\nRemove the default font size and weight for headings.\\n*/\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\n\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/*\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\n\\ntable {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n  border-collapse: collapse; /* 3 */\\n}\\n\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  font-weight: inherit; /* 1 */\\n  line-height: inherit; /* 1 */\\n  color: inherit; /* 1 */\\n  margin: 0; /* 2 */\\n  padding: 0; /* 3 */\\n}\\n\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button; /* 1 */\\n  background-color: transparent; /* 2 */\\n  background-image: none; /* 2 */\\n}\\n\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\n\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\n\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\n/*\\nSet the default cursor for buttons.\\n*/\\n\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\n:disabled {\\n  cursor: default;\\n}\\n\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\n\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\n\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n*, ::before, ::after {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n.visible {\\n  visibility: visible;\\n}\\n.fixed {\\n  position: fixed;\\n}\\n.absolute {\\n  position: absolute;\\n}\\n.relative {\\n  position: relative;\\n}\\n.bottom-8 {\\n  bottom: 2rem;\\n}\\n.right-0 {\\n  right: 0px;\\n}\\n.top-\\\\[75px\\\\] {\\n  top: 75px;\\n}\\n.top-\\\\[5px\\\\] {\\n  top: 5px;\\n}\\n.right-\\\\[0\\\\] {\\n  right: 0;\\n}\\n.col-span-full {\\n  grid-column: 1 / -1;\\n}\\n.my-20 {\\n  margin-top: 5rem;\\n  margin-bottom: 5rem;\\n}\\n.mt-0 {\\n  margin-top: 0px;\\n}\\n.block {\\n  display: block;\\n}\\n.flex {\\n  display: flex;\\n}\\n.table {\\n  display: table;\\n}\\n.grid {\\n  display: grid;\\n}\\n.contents {\\n  display: contents;\\n}\\n.hidden {\\n  display: none;\\n}\\n.h-screen {\\n  height: 100vh;\\n}\\n.h-full {\\n  height: 100%;\\n}\\n.h-\\\\[80\\\\%\\\\] {\\n  height: 80%;\\n}\\n.h-\\\\[40px\\\\] {\\n  height: 40px;\\n}\\n.h-\\\\[350px\\\\] {\\n  height: 350px;\\n}\\n.w-full {\\n  width: 100%;\\n}\\n.w-screen {\\n  width: 100vw;\\n}\\n.min-w-\\\\[450px\\\\] {\\n  min-width: 450px;\\n}\\n.min-w-\\\\[200px\\\\] {\\n  min-width: 200px;\\n}\\n.max-w-\\\\[600px\\\\] {\\n  max-width: 600px;\\n}\\n.max-w-\\\\[400px\\\\] {\\n  max-width: 400px;\\n}\\n.flex-grow {\\n  flex-grow: 1;\\n}\\n.grow {\\n  flex-grow: 1;\\n}\\n.border-collapse {\\n  border-collapse: collapse;\\n}\\n.transform {\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n@keyframes pulse {\\n\\n  50% {\\n    opacity: .5;\\n  }\\n}\\n.animate-pulse {\\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\\n}\\n@keyframes bounce {\\n\\n  0%, 100% {\\n    transform: translateY(-25%);\\n    animation-timing-function: cubic-bezier(0.8,0,1,1);\\n  }\\n\\n  50% {\\n    transform: none;\\n    animation-timing-function: cubic-bezier(0,0,0.2,1);\\n  }\\n}\\n.animate-bounce {\\n  animation: bounce 1s infinite;\\n}\\n@keyframes bounce {\\n\\n  0%, 100% {\\n    transform: translateY(-25%);\\n    animation-timing-function: cubic-bezier(0.8,0,1,1);\\n  }\\n\\n  50% {\\n    transform: none;\\n    animation-timing-function: cubic-bezier(0,0,0.2,1);\\n  }\\n}\\n.animate-\\\\[bounce_2s_ease-in-out_infinite\\\\] {\\n  animation: bounce 2s ease-in-out infinite;\\n}\\n.cursor-pointer {\\n  cursor: pointer;\\n}\\n.resize {\\n  resize: both;\\n}\\n.grid-cols-7 {\\n  grid-template-columns: repeat(7, minmax(0, 1fr));\\n}\\n.grid-rows-\\\\[4rem_calc\\\\(100vh_-_4rem\\\\)\\\\] {\\n  grid-template-rows: 4rem calc(100vh - 4rem);\\n}\\n.flex-col {\\n  flex-direction: column;\\n}\\n.place-content-center {\\n  align-content: center;\\n  justify-content: center;\\n  place-content: center;\\n}\\n.place-items-start {\\n  align-items: start;\\n  justify-items: start;\\n  place-items: start;\\n}\\n.content-center {\\n  align-content: center;\\n}\\n.content-start {\\n  align-content: flex-start;\\n}\\n.items-start {\\n  align-items: flex-start;\\n}\\n.items-end {\\n  align-items: flex-end;\\n}\\n.items-center {\\n  align-items: center;\\n}\\n.justify-end {\\n  justify-content: flex-end;\\n}\\n.justify-center {\\n  justify-content: center;\\n}\\n.justify-between {\\n  justify-content: space-between;\\n}\\n.justify-items-start {\\n  justify-items: start;\\n}\\n.justify-items-center {\\n  justify-items: center;\\n}\\n.gap-2 {\\n  gap: 0.5rem;\\n}\\n.gap-0 {\\n  gap: 0px;\\n}\\n.gap-8 {\\n  gap: 2rem;\\n}\\n.gap-6 {\\n  gap: 1.5rem;\\n}\\n.gap-4 {\\n  gap: 1rem;\\n}\\n.gap-10 {\\n  gap: 2.5rem;\\n}\\n.gap-3 {\\n  gap: 0.75rem;\\n}\\n.gap-5 {\\n  gap: 1.25rem;\\n}\\n.overflow-hidden {\\n  overflow: hidden;\\n}\\n.rounded {\\n  border-radius: 0.25rem;\\n}\\n.rounded-full {\\n  border-radius: 9999px;\\n}\\n.rounded-l-lg {\\n  border-top-left-radius: 0.5rem;\\n  border-bottom-left-radius: 0.5rem;\\n}\\n.border {\\n  border-width: 1px;\\n}\\n.border-2 {\\n  border-width: 2px;\\n}\\n.border-y-2 {\\n  border-top-width: 2px;\\n  border-bottom-width: 2px;\\n}\\n.border-b-2 {\\n  border-bottom-width: 2px;\\n}\\n.border-sky-900 {\\n  --tw-border-opacity: 1;\\n  border-color: rgba(12, 74, 110, var(--tw-border-opacity));\\n}\\n.px-20 {\\n  padding-left: 5rem;\\n  padding-right: 5rem;\\n}\\n.px-8 {\\n  padding-left: 2rem;\\n  padding-right: 2rem;\\n}\\n.px-10 {\\n  padding-left: 2.5rem;\\n  padding-right: 2.5rem;\\n}\\n.px-3 {\\n  padding-left: 0.75rem;\\n  padding-right: 0.75rem;\\n}\\n.py-1 {\\n  padding-top: 0.25rem;\\n  padding-bottom: 0.25rem;\\n}\\n.px-4 {\\n  padding-left: 1rem;\\n  padding-right: 1rem;\\n}\\n.py-3 {\\n  padding-top: 0.75rem;\\n  padding-bottom: 0.75rem;\\n}\\n.py-6 {\\n  padding-top: 1.5rem;\\n  padding-bottom: 1.5rem;\\n}\\n.py-4 {\\n  padding-top: 1rem;\\n  padding-bottom: 1rem;\\n}\\n.py-\\\\[-20px\\\\] {\\n  padding-top: -20px;\\n  padding-bottom: -20px;\\n}\\n.pl-4 {\\n  padding-left: 1rem;\\n}\\n.pr-4 {\\n  padding-right: 1rem;\\n}\\n.pt-4 {\\n  padding-top: 1rem;\\n}\\n.pb-4 {\\n  padding-bottom: 1rem;\\n}\\n.pb-8 {\\n  padding-bottom: 2rem;\\n}\\n.pt-8 {\\n  padding-top: 2rem;\\n}\\n.pt-6 {\\n  padding-top: 1.5rem;\\n}\\n.text-left {\\n  text-align: left;\\n}\\n.text-right {\\n  text-align: right;\\n}\\n[dir=\\\"ltr\\\"] .text-start {\\n  text-align: left;\\n}\\n[dir=\\\"rtl\\\"] .text-start {\\n  text-align: right;\\n}\\n[dir=\\\"ltr\\\"] .text-end {\\n  text-align: right;\\n}\\n[dir=\\\"rtl\\\"] .text-end {\\n  text-align: left;\\n}\\n.align-bottom {\\n  vertical-align: bottom;\\n}\\n.font-sans {\\n  font-family: Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Helvetica Neue, sans-serif;\\n}\\n.text-2xl {\\n  font-size: 1.5rem;\\n  line-height: 2rem;\\n}\\n.text-xl {\\n  font-size: 1.25rem;\\n  line-height: 1.75rem;\\n}\\n.text-3xl {\\n  font-size: 1.875rem;\\n  line-height: 2.25rem;\\n}\\n.text-4xl {\\n  font-size: 2.25rem;\\n  line-height: 2.5rem;\\n}\\n.font-medium {\\n  font-weight: 500;\\n}\\n.font-semibold {\\n  font-weight: 600;\\n}\\n.leading-10 {\\n  line-height: 2.5rem;\\n}\\n.tracking-widest {\\n  letter-spacing: 0.1em;\\n}\\n.tracking-wide {\\n  letter-spacing: 0.025em;\\n}\\n.text-white {\\n  --tw-text-opacity: 1;\\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\\n}\\n.text-slate-300 {\\n  --tw-text-opacity: 1;\\n  color: rgba(203, 213, 225, var(--tw-text-opacity));\\n}\\n.text-slate-400 {\\n  --tw-text-opacity: 1;\\n  color: rgba(148, 163, 184, var(--tw-text-opacity));\\n}\\n.text-gray-200 {\\n  --tw-text-opacity: 1;\\n  color: rgba(229, 231, 235, var(--tw-text-opacity));\\n}\\n.text-gray-400 {\\n  --tw-text-opacity: 1;\\n  color: rgba(156, 163, 175, var(--tw-text-opacity));\\n}\\n.underline {\\n  text-decoration-line: underline;\\n}\\n.opacity-40 {\\n  opacity: 0.4;\\n}\\n.opacity-0 {\\n  opacity: 0;\\n}\\n.opacity-10 {\\n  opacity: 0.1;\\n}\\n.opacity-20 {\\n  opacity: 0.2;\\n}\\n.shadow-xl {\\n  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\\n}\\n.outline {\\n  outline-style: solid;\\n}\\n.filter {\\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\\n}\\n.transition {\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  transition-duration: 150ms;\\n}\\n.delay-200 {\\n  transition-delay: 200ms;\\n}\\n.delay-75 {\\n  transition-delay: 75ms;\\n}\\n.delay-100 {\\n  transition-delay: 100ms;\\n}\\n.duration-300 {\\n  transition-duration: 300ms;\\n}\\n.duration-500 {\\n  transition-duration: 500ms;\\n}\\n.ease-in-out {\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n}\\n\\n.bg-primary {\\n  background-color: #060a21;\\n}\\n.bg-secondary {\\n  background-color: #021d2b;\\n}\\n.shadow-secondary {\\n  box-shadow: 0 0 25px 5px #121a2b;\\n}\\n.trigger-enter .dropdown {\\n  display: block;\\n}\\n.trigger-enter-active .dropdown {\\n  opacity: 1;\\n}\\n.dropdown-cont {\\n  width: 100px;\\n  height: 100px;\\n  position: absolute;\\n  background: #fff;\\n  border-radius: 4px;\\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\\n    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\\n  transition: all 0.3s, opacity 0.1s, transform 0.2s;\\n  transform-origin: 50% 0;\\n  display: flex;\\n  justify-content: center;\\n  opacity: 0;\\n}\\n.dropdown-cont.open {\\n  opacity: 1;\\n}\\n.dropdown {\\n  opacity: 0;\\n  position: absolute;\\n  overflow: hidden;\\n  padding: 20px;\\n  top: -20px;\\n  border-radius: 2px;\\n  transition: all 0.5s;\\n  transform: translateY(100px);\\n  will-change: opacity;\\n  display: none;\\n}\\n\\n.animation-fadein {\\n  animation: fadein 500ms linear 1;\\n}\\n.animation-fadeout {\\n  animation: fadeout 500ms linear 1;\\n}\\n.animation-fadeinLeft {\\n  animation: fadeinLeft 500ms linear 1;\\n}\\n.animation-fadeoutLeft {\\n  animation: fadeoutLeft 500ms linear 1;\\n}\\n.animation-fadeinRight {\\n  animation: fadeinRight 500ms linear 1;\\n}\\n.animation-fadeoutRight {\\n  animation: fadeoutRight 500ms linear 1;\\n}\\n\\n@keyframes fadein {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes fadeout {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n@keyframes fadeinLeft {\\n  from {\\n    opacity: 0;\\n    transform: translateX(-100%);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n}\\n@keyframes fadeoutLeft {\\n  from {\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n  to {\\n    opacity: 0;\\n    transform: translateX(-40%);\\n  }\\n}\\n\\n@keyframes fadeinRight {\\n  from {\\n    opacity: 0;\\n    transform: translateX(20%);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n}\\n@keyframes fadeoutRight {\\n  from {\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n  to {\\n    opacity: 0;\\n    transform: translateX(20%);\\n  }\\n}\\n\\n.next-page-btn:hover {\\n  transform: scale(1.1);\\n}\\n.next-page-btn {\\n  transition: all 0.2s ease-in-out;\\n}\\n.hover\\\\:scale-110:hover {\\n  --tw-scale-x: 1.1;\\n  --tw-scale-y: 1.1;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n.hover\\\\:text-sky-500:hover {\\n  --tw-text-opacity: 1;\\n  color: rgba(14, 165, 233, var(--tw-text-opacity));\\n}\\n.hover\\\\:text-sky-400:hover {\\n  --tw-text-opacity: 1;\\n  color: rgba(56, 189, 248, var(--tw-text-opacity));\\n}\\n.hover\\\\:opacity-100:hover {\\n  opacity: 1;\\n}\\n@media (min-width: 640px) {\\n\\n  .sm\\\\:text-2xl {\\n    font-size: 1.5rem;\\n    line-height: 2rem;\\n  }\\n}\\n@media (min-width: 768px) {\\n\\n  .md\\\\:px-\\\\[10vw\\\\] {\\n    padding-left: 10vw;\\n    padding-right: 10vw;\\n  }\\n\\n  .md\\\\:px-\\\\[12vw\\\\] {\\n    padding-left: 12vw;\\n    padding-right: 12vw;\\n  }\\n\\n  .md\\\\:text-3xl {\\n    font-size: 1.875rem;\\n    line-height: 2.25rem;\\n  }\\n}\\n@media (min-width: 1024px) {\\n\\n  .lg\\\\:text-4xl {\\n    font-size: 2.25rem;\\n    line-height: 2.5rem;\\n  }\\n}\\n@media (min-width: 1536px) {\\n\\n  .\\\\32xl\\\\:px-\\\\[14vw\\\\] {\\n    padding-left: 14vw;\\n    padding-right: 14vw;\\n  }\\n\\n  .\\\\32xl\\\\:px-\\\\[18vw\\\\] {\\n    padding-left: 18vw;\\n    padding-right: 18vw;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://real/./src/input.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://real/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://real/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/input.css":
/*!***********************!*\
  !*** ./src/input.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./input.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/input.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://real/./src/input.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.css */ \"./src/input.css\");\n/* harmony import */ var _images_main_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/main-avatar.png */ \"./src/images/main-avatar.png\");\n/* harmony import */ var _modules_components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/components/header.js */ \"./src/modules/components/header.js\");\n/* harmony import */ var _modules_pages_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pages/about.js */ \"./src/modules/pages/about.js\");\n/* harmony import */ var _modules_components_followNav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/components/followNav.js */ \"./src/modules/components/followNav.js\");\n/* harmony import */ var _modules_components_followNav_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_components_followNav_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_functions_transitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/functions/transitions.js */ \"./src/modules/functions/transitions.js\");\n/* harmony import */ var _modules_components_nextPage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/components/nextPage.js */ \"./src/modules/components/nextPage.js\");\n\n\n\n\n\n\n\n\ndocument.body.classList.add(\n  \"h-screen\",\n  \"bg-primary\",\n  \"font-sans\",\n  \"grid\",\n  \"grid-rows-[4rem_calc(100vh_-_4rem)]\",\n  \"place-items-start\",\n  \"overflow-hidden\"\n);\n\nconst bottom = document.createElement(\"div\");\nbottom.classList.add(\n  \"flex\",\n  \"fixed\",\n  \"px-20\",\n  \"bottom-8\",\n  \"justify-end\",\n  \"w-full\",\n  \"animate-[bounce_2s_ease-in-out_infinite]\"\n);\n\nbottom.append(_modules_components_nextPage_js__WEBPACK_IMPORTED_MODULE_6__.seeWorkBtn);\n\ndocument.body.append(_modules_components_header_js__WEBPACK_IMPORTED_MODULE_2__.header, _modules_pages_about_js__WEBPACK_IMPORTED_MODULE_3__.about, bottom);\n\nconst aboutDivs = document.querySelectorAll(\".about\");\n\nlet currentPage = \"about\";\n\nfunction processNavBtns() {\n  const nextPage = this.innerText;\n  if (nextPage === \"\") return;\n\n  if (nextPage.toLowerCase() === \"portfolio\") (0,_modules_functions_transitions_js__WEBPACK_IMPORTED_MODULE_5__.showPortfolio)(currentPage);\n  if (nextPage.toLowerCase() === \"about\") (0,_modules_functions_transitions_js__WEBPACK_IMPORTED_MODULE_5__.showAbout)(currentPage);\n  if (nextPage.toLowerCase() === \"contact\") (0,_modules_functions_transitions_js__WEBPACK_IMPORTED_MODULE_5__.showContact)(currentPage);\n\n  currentPage = nextPage.toLowerCase();\n}\n\nconst navBtns = document.querySelectorAll(\".nav-btns\");\nnavBtns.forEach((btn) => btn.addEventListener(\"click\", processNavBtns));\n// navBtnCont.childNodes.forEach(btn => btn.addEventListener(\"click\", processNavBtns))\n\nconst logos = document.querySelectorAll(\".logo-img\");\n\nfunction logoHover(e, hovered) {\n  hovered\n    ? e.target.classList.remove(\"animate-pulse\")\n    : e.target.classList.add(\"animate-pulse\");\n}\n\nsetTimeout(() => {\n  logos.forEach((logo) =>\n    logo.addEventListener(\"mouseenter\", (e) => {\n      logoHover(e, true);\n    })\n  );\n  logos.forEach((logo) =>\n    logo.addEventListener(\"mouseleave\", (e) => {\n      logoHover(e, false);\n    })\n  );\n}, 2500);\n\n//# sourceURL=webpack://real/./src/index.js?");

/***/ }),

/***/ "./src/modules/components/aboutText.js":
/*!*********************************************!*\
  !*** ./src/modules/components/aboutText.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"textCont\": () => (/* binding */ textCont)\n/* harmony export */ });\n/* harmony import */ var _functions_typeEffect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/typeEffect.js */ \"./src/modules/functions/typeEffect.js\");\n/* harmony import */ var _logos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logos.js */ \"./src/modules/components/logos.js\");\n\n\n\nconst textCont = document.createElement(\"div\");\ntextCont.classList.add(\n  \"flex\",\n  \"flex-col\",\n  \"text-left\",\n  \"items-start\",\n  \"justify-items-start\",\n  \"gap-4\",\n  \"w-full\"\n);\n\nconst heading = document.createElement(\"div\");\nheading.classList.add(\"about\", \"flex\", \"items-start\", \"gap-3\");\n\nconst headingLeft = document.createElement(\"h1\");\nheadingLeft.classList.add(\n  \"md:text-3xl\",\n  \"lg:text-4xl\",\n  \"text-white\",\n  \"text-left\"\n);\nsetTimeout(() => {\n  (0,_functions_typeEffect_js__WEBPACK_IMPORTED_MODULE_0__.typeSentence)(\"Hi, i'm\", headingLeft, 100);\n}, 500);\n\nconst headingRight = document.createElement(\"h1\");\nheadingRight.classList.add(\n  \"md:text-3xl\",\n  \"lg:text-4xl\",\n  \"text-white\",\n  \"font-semibold\"\n);\nsetTimeout(() => {\n  (0,_functions_typeEffect_js__WEBPACK_IMPORTED_MODULE_0__.typeSentence)(\"Tom.\", headingRight, 100);\n}, 1400);\n\nconst mainText = document.createElement(\"h3\");\nmainText.classList.add(\n  \"about\",\n  \"sm:text-2xl\",\n  \"md:text-3xl\",\n  \"text-white\",\n  \"animation-fadeinRight\"\n);\nsetTimeout(() => {\n  (0,_functions_typeEffect_js__WEBPACK_IMPORTED_MODULE_0__.typeWords)(\"I develop modern and responsive websites.\", mainText, 150);\n}, 3200);\n\nheading.append(headingLeft, headingRight);\ntextCont.append(heading, mainText, _logos_js__WEBPACK_IMPORTED_MODULE_1__.logoCont);\n\n//# sourceURL=webpack://real/./src/modules/components/aboutText.js?");

/***/ }),

/***/ "./src/modules/components/followNav.js":
/*!*********************************************!*\
  !*** ./src/modules/components/followNav.js ***!
  \*********************************************/
/***/ (() => {

eval("const triggers = document.querySelectorAll(\".logo-cont > img\");\nconst background = document.querySelector(\".logo-bg\");\nconst nav = document.querySelector(\".dropdown-cont\");\n\nfunction handleEnter() {\n  this.classList.add(\"trigger-enter\");\n  setTimeout(\n    () =>\n      this.classList.contains(\"trigger-enter\") &&\n      this.classList.add(\"trigger-enter-active\"),\n    150\n  );\n  background.classList.add(\"open\");\n\n  const dropdown = this.querySelector(\".dropdown\");\n  const dropdownCoords = dropdown.getBoundingClientRect();\n  const navCoords = nav.getBoundingClientRect();\n\n  const coords = {\n    height: dropdownCoords.height,\n    width: dropdownCoords.width,\n    top: dropdownCoords.top - navCoords.top,\n    left: dropdownCoords.left - navCoords.left,\n  };\n  console.log(coords);\n  background.style.setProperty(\"width\", `${coords.width}px`);\n  background.style.setProperty(\"height\", `${coords.height}px`);\n  background.style.setProperty(\n    \"transform\",\n    `translate(${coords.left}px, ${coords.top}px)`\n  );\n}\n\nfunction handleLeave() {\n  this.classList.remove(\"trigger-enter\", \"trigger-enter-active\");\n  background.classList.remove(\"open\");\n}\n\ntriggers.forEach((trigger) =>\n  trigger.addEventListener(\"mouseenter\", handleEnter)\n);\ntriggers.forEach((trigger) =>\n  trigger.addEventListener(\"mouseleave\", handleLeave)\n);\n\n\n//# sourceURL=webpack://real/./src/modules/components/followNav.js?");

/***/ }),

/***/ "./src/modules/components/header.js":
/*!******************************************!*\
  !*** ./src/modules/components/header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nclass NavItem {\n  constructor(text) {\n    this.text = text;\n  }\n  build() {\n    const button = document.createElement(\"button\");\n    button.classList.add(\n      \"nav-btns\",\n      \"text-white\",\n      \"items-end\",\n      \"tracking-widest\",\n      \"font-medium\",\n      \"px-8\",\n      \"h-100\",\n      \"hover:text-sky-500\",\n      \"duration-300\"\n    );\n    button.innerText = this.text;\n\n    return button;\n  }\n}\n\nconst header = document.createElement(\"header\");\nheader.classList.add(\n  \"flex\",\n  \"justify-between\",\n  \"w-screen\",\n  \"h-full\",\n  \"px-10\",\n  \"bg-secondary\",\n  \"border-b-2\",\n  \"border-sky-900\",\n  \"shadow-xl\",\n  \"shadow-secondary\",\n  \"md:px-[10vw]\",\n  \"2xl:px-[14vw]\"\n);\n\nconst title = document.createElement(\"div\");\ntitle.classList.add(\n  \"flex\",\n  \"items-center\",\n  \"text-white\",\n  \"text-2xl\",\n  \"tracking-wide\",\n  \"align-bottom\",\n  \"font-medium\",\n  \"px-10\"\n);\ntitle.innerText = \"tom coded this\";\n\nconst nav = document.createElement(\"nav\");\nnav.classList.add(\"flex\", \"gap-2\");\n\nconst home = new NavItem(\"About\");\nconst projects = new NavItem(\"Portfolio\");\nconst contact = new NavItem(\"Contact\");\n\nnav.append(home.build(), projects.build(), contact.build());\nheader.append(title, nav);\n\n\n//# sourceURL=webpack://real/./src/modules/components/header.js?");

/***/ }),

/***/ "./src/modules/components/logos.js":
/*!*****************************************!*\
  !*** ./src/modules/components/logos.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoCont\": () => (/* binding */ logoCont)\n/* harmony export */ });\n/* harmony import */ var _images_javascript_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/javascript-logo.png */ \"./src/images/javascript-logo.png\");\n/* harmony import */ var _images_css_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/css-logo.png */ \"./src/images/css-logo.png\");\n/* harmony import */ var _images_html5_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/html5-logo.png */ \"./src/images/html5-logo.png\");\n/* harmony import */ var _images_python_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/python-logo.png */ \"./src/images/python-logo.png\");\n/* harmony import */ var _images_sqlite_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/sqlite-logo.png */ \"./src/images/sqlite-logo.png\");\n/* harmony import */ var _images_bootstrap_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/bootstrap-logo.png */ \"./src/images/bootstrap-logo.png\");\n/* harmony import */ var _images_tailwind_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/tailwind-logo.png */ \"./src/images/tailwind-logo.png\");\n/* harmony import */ var _functions_typeEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/typeEffect */ \"./src/modules/functions/typeEffect.js\");\n\n\n\n\n\n\n\n\n\nclass Logo {\n  constructor(src, alt, name, animation, addedClass) {\n    this.src = src;\n    this.alt = alt;\n    this.animation = animation;\n    this.addedClass = addedClass;\n    this.name = name;\n  }\n  build() {\n    const image = document.createElement(\"img\");\n    image.classList.add(\n      \"opacity-0\",\n      \"duration-500\",\n      `${this.addedClass}`,\n      \"logo-img\"\n    );\n    image.src = this.src;\n    image.alt = this.alt;\n    image.style.minWidth = `${this.minW}px`;\n    image.style.maxWidth = `${this.maxW}px`;\n\n    const dropdown = document.createElement(\"div\");\n    dropdown.classList.add(\"dropdown\", \"dropdown1\");\n\n    const name = document.createElement(\"h3\");\n    name.classList.add(\"text-white\");\n    name.innerText = this.name;\n\n    dropdown.append(name);\n    image.append(dropdown);\n\n    return image;\n  }\n}\n\nconst logoCont = document.createElement(\"div\");\n\nlogoCont.classList.add(\n  \"about\",\n  \"logo-cont\",\n  \"grid\",\n  \"col-span-full\",\n  \"grid-cols-7\",\n  \"items-center\",\n  \"justify-right\",\n  \"max-w-[600px]\",\n  \"min-w-[450px]\",\n  \"gap-6\",\n  \"pt-6\"\n);\n\nconst javaScript = new Logo(\n  \"aba9e11826857c5c4cdb.png\",\n  \"Javascript-Logo\",\n  \"Javascript\",\n  \"delay-75\",\n  \"h-[80%]\"\n);\nconst css = new Logo(\n  \"acdb21e2fa5890b40dfc.png\",\n  \"CSS-Logo\",\n  \"CSS\",\n  \"delay-100\",\n  \"h-[80%]\"\n);\nconst html = new Logo(\n  \"b7ea52200ef24d9edb3d.png\",\n  \"HTML-Logo\",\n  \"HTLM\",\n  \"delay-75\",\n  \"h-[80%]\"\n);\nconst python = new Logo(\n  \"320b403b3cf4662177d3.png\",\n  \"Python-Logo\",\n  \"Python\",\n  \"delay-100\",\n  \"h-[80%]\"\n);\nconst sqLite = new Logo(\n  \"00922b052c5bb881db9a.png\",\n  \"SQLite-Logo\",\n  \"SQLite\",\n  \"delay-75\"\n);\nconst boostrap = new Logo(\n  \"4b2881f31594d43cab42.png\",\n  \"Bootstrap-Logo\",\n  \"Bootstrap\",\n  \"delay-100\"\n);\nconst tailwind = new Logo(\n  \"b444e9a389162b184fa1.png\",\n  \"Tailwind-Logo\",\n  \"Tailwind\",\n  \"delay-75\"\n);\n\nlogoCont.append(\n  javaScript.build(),\n  css.build(),\n  html.build(),\n  python.build(),\n  sqLite.build(),\n  boostrap.build(),\n  tailwind.build()\n);\n\nsetTimeout(async () => {\n  const list = Array.from(logoCont.childNodes).reverse();\n\n  for (const child of list) {\n    await (0,_functions_typeEffect__WEBPACK_IMPORTED_MODULE_7__.timer)(100);\n    showLogo(child);\n    child.classList.add(\"hover:opacity-100\", \"hover:scale-110\");\n  }\n}, 5000);\n\nfunction showLogo(elem) {\n  elem.classList.add(\"animation-fadein\");\n  elem.classList.add(\"animate-pulse\", \"opacity-20\");\n  elem.classList.remove(\"opacity-0\", \"animation-fadein\");\n}\n\n\n//# sourceURL=webpack://real/./src/modules/components/logos.js?");

/***/ }),

/***/ "./src/modules/components/navBtns.js":
/*!*******************************************!*\
  !*** ./src/modules/components/navBtns.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBtnCont\": () => (/* binding */ navBtnCont)\n/* harmony export */ });\nclass NavBtn {\n  constructor(text, icon = \"\") {\n    this.text = text;\n    this.icon = icon;\n  }\n  build() {\n    const buttonCont = document.createElement(\"div\");\n    buttonCont.classList.add(\n      \"flex\",\n      \"items-center\",\n      \"justify-center\",\n      \"gap-2\",\n      \"bg-secondary\",\n      \"border-sky-900\",\n      \"border-2\",\n      \"rounded-l-lg\",\n      \"text-white\",\n      \"px-3\",\n      \"py-1\",\n      \"h-[40px]\",\n      \"cursor-pointer\",\n      \"hover:text-sky-500\",\n      \"duration-300\"\n    );\n\n    const text = document.createElement(\"div\");\n    text.classList.add(\"nav-btns\", \"tracking-widest\", \"font-medium\", \"h-100\");\n    text.innerText = this.text;\n\n    const icon = document.createElement(\"i\");\n    icon.classList.add(\"fa-solid\", this.icon, \"relative\");\n\n    buttonCont.append(text, icon);\n\n    return buttonCont;\n  }\n}\n\nlet prevPage = \"next\";\nlet nextPage = \"prev\";\n\nconst navBtnCont = document.createElement(\"div\");\nnavBtnCont.classList.add(\n  \"navBtnsCont\",\n  \"absolute\",\n  \"top-[75px]\",\n  \"right-0\",\n  \"items-end\",\n  \"flex\",\n  \"flex-col\",\n  \"gap-2\",\n  \"shadow-[0_35px_60px_0_white\"\n);\n\nconst topBtn = new NavBtn(prevPage, \"fa-angles-right\").build();\ntopBtn.setAttribute(\"data-direction\", \"top\");\n\nconst bottomBtn = new NavBtn(nextPage, \"fa-angles-left\").build();\nbottomBtn.setAttribute(\"data-direction\", \"bottom\");\n\nnavBtnCont.append(topBtn, bottomBtn);\n\n\n//# sourceURL=webpack://real/./src/modules/components/navBtns.js?");

/***/ }),

/***/ "./src/modules/components/nextPage.js":
/*!********************************************!*\
  !*** ./src/modules/components/nextPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"seeWorkBtn\": () => (/* binding */ seeWorkBtn)\n/* harmony export */ });\n/* harmony import */ var _functions_transitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/transitions.js */ \"./src/modules/functions/transitions.js\");\n/* harmony import */ var _navBtns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBtns.js */ \"./src/modules/components/navBtns.js\");\n\n\n// import { about } from \"./about.js\";\n// import { portfolio } from \"./portfolio.js\";\n// import { contact } from \"./contact.js\";\n\nconst topBtn = _navBtns_js__WEBPACK_IMPORTED_MODULE_1__.navBtnCont.querySelector(\"div[data-direction='top']\");\nconst bottomBtn = _navBtns_js__WEBPACK_IMPORTED_MODULE_1__.navBtnCont.querySelector(\"div[data-direction='bottom']\");\n\nclass NextPage {\n  constructor(name) {\n    this.name = name;\n  }\n  build() {\n    const button = document.createElement(\"button\");\n    button.classList.add(\n      \"bg-secondary\",\n      \"text-xl\",\n      \"px-4\",\n      \"py-3\",\n      \"text-white\",\n      \"rounded\",\n      \"border-2\",\n      \"border-sky-900\",\n      \"hover:text-sky-400\",\n      \"delay-200\"\n    );\n    button.innerText = this.name;\n\n    const icon = document.createElement(\"i\");\n    icon.classList.add(\"fa-solid\", \"fa-arrow-down\", \"pl-4\");\n\n    button.append(icon);\n\n    return button;\n  }\n}\n\nconst seeWorkBtn = new NextPage(\"See my work\").build();\nseeWorkBtn.classList.add(\"next-page-btn\", \"opacity-0\");\n(0,_functions_transitions_js__WEBPACK_IMPORTED_MODULE_0__.showElem)(seeWorkBtn, 5200, \"fadeinRight\");\n\n\n//# sourceURL=webpack://real/./src/modules/components/nextPage.js?");

/***/ }),

/***/ "./src/modules/functions/transitions.js":
/*!**********************************************!*\
  !*** ./src/modules/functions/transitions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hidePage\": () => (/* binding */ hidePage),\n/* harmony export */   \"showAbout\": () => (/* binding */ showAbout),\n/* harmony export */   \"showContact\": () => (/* binding */ showContact),\n/* harmony export */   \"showElem\": () => (/* binding */ showElem),\n/* harmony export */   \"showPortfolio\": () => (/* binding */ showPortfolio)\n/* harmony export */ });\n/* harmony import */ var _components_navBtns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navBtns.js */ \"./src/modules/components/navBtns.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/about.js */ \"./src/modules/pages/about.js\");\n/* harmony import */ var _pages_portfolio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/portfolio.js */ \"./src/modules/pages/portfolio.js\");\n/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/contact.js */ \"./src/modules/pages/contact.js\");\n\n\n\n\n\nconst topBtn = _components_navBtns_js__WEBPACK_IMPORTED_MODULE_0__.navBtnCont.querySelector(\"div[data-direction='top']\");\nconst bottomBtn = _components_navBtns_js__WEBPACK_IMPORTED_MODULE_0__.navBtnCont.querySelector(\"div[data-direction='bottom']\");\n\nfunction showAbout(currentPage) {\n  if (currentPage === \"portfolio\") hidePage(\"portfolio\", _pages_portfolio_js__WEBPACK_IMPORTED_MODULE_2__.portfolio);\n  if (currentPage === \"contact\") hidePage(\"contact\", _pages_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact);\n\n  showPage(_pages_about_js__WEBPACK_IMPORTED_MODULE_1__.about);\n}\n\nfunction showPortfolio(currentPage) {\n  if (currentPage === \"about\") hidePage(\"about\", _pages_about_js__WEBPACK_IMPORTED_MODULE_1__.about);\n  if (currentPage === \"contact\") hidePage(\"contact\", _pages_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact);\n\n  showPage(_pages_portfolio_js__WEBPACK_IMPORTED_MODULE_2__.portfolio);\n}\n\nfunction showContact(currentPage) {\n  if (currentPage === \"about\") hidePage(\"about\", _pages_about_js__WEBPACK_IMPORTED_MODULE_1__.about);\n  if (currentPage === \"portfolio\") hidePage(\"portfolio\", _pages_portfolio_js__WEBPACK_IMPORTED_MODULE_2__.portfolio);\n\n  showPage(_pages_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact);\n}\n\nfunction showPage(page) {\n  setTimeout(() => {\n    document.body.append(page);\n    page.classList.remove(\"hidden\");\n  }, 400);\n}\n\nfunction hidePage(name = \"about\", page = _pages_about_js__WEBPACK_IMPORTED_MODULE_1__.about) {\n  let mainCont = document.querySelector(`#${name}-main`);\n\n  setTimeout(() => {\n    changeClasses(mainCont);\n\n    document.body.removeChild(page);\n    page.classList.add(\"hidden\");\n  }, 300);\n}\n\nfunction changeClasses(mainCont) {\n  const fade = mainCont.querySelectorAll(\".animation-fadein\");\n  const fadeLeft = mainCont.querySelectorAll(\".animation-fadeinLeft\");\n  const fadeRight = mainCont.querySelectorAll(\".animation-fadeinRight\");\n\n  fade.forEach((elem) =>\n    elem.classList.replace(\"animation-fadein\", \"animation-fadeout\")\n  );\n  fadeLeft.forEach((elem) =>\n    elem.classList.replace(\"animation-fadeinLeft\", \"animation-fadeoutLeft\")\n  );\n  fadeRight.forEach((elem) =>\n    elem.classList.replace(\"animation-fadeinRight\", \"animation-fadeoutRight\")\n  );\n\n  setTimeout(() => {\n    fade.forEach((elem) =>\n      elem.classList.replace(\"animation-fadeout\", \"animation-fadein\")\n    );\n    fadeLeft.forEach((elem) =>\n      elem.classList.replace(\"animation-fadeoutLeft\", \"animation-fadeinLeft\")\n    );\n    fadeRight.forEach((elem) =>\n      elem.classList.replace(\"animation-fadeoutRight\", \"animation-fadeinRight\")\n    );\n  }, 300);\n}\n\nfunction showElem(elem, speed, animation) {\n  setTimeout(() => {\n    elem.classList.remove(\"opacity-0\");\n    elem.classList.add(`animation-${animation}`);\n  }, speed);\n}\n\n\n//# sourceURL=webpack://real/./src/modules/functions/transitions.js?");

/***/ }),

/***/ "./src/modules/functions/typeEffect.js":
/*!*********************************************!*\
  !*** ./src/modules/functions/typeEffect.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer),\n/* harmony export */   \"typeSentence\": () => (/* binding */ typeSentence),\n/* harmony export */   \"typeWord\": () => (/* binding */ typeWord),\n/* harmony export */   \"typeWords\": () => (/* binding */ typeWords)\n/* harmony export */ });\nfunction typeSentence(sentence, elem, speed = 100) {\n  sentence = sentence.split(\"/[,.]s/\");\n\n  sentence.forEach((word) => {\n    typeWord(word, elem, speed);\n  });\n}\n\nasync function typeWord(text = \"\", elem, speed = 100) {\n  if (text.length === 0) return;\n\n  await timer(speed);\n\n  text[0] === \" \" ? (elem.innerText += \"\\xa0\") : (elem.innerText += text[0]);\n\n  typeWord(text.substring(1), elem, speed);\n}\n\nasync function typeWords(text = \"\", elem, speed = 100) {\n  if (text.length === 0) return;\n  let textArr = text.split(\" \");\n\n  await timer(speed);\n\n  textArr[0] === \" \"\n    ? (elem.innerText += \"\\xa0\")\n    : (elem.innerText += ` ${textArr[0]} `);\n\n  typeWords(textArr.splice(1).join(\" \"), elem, speed);\n}\n\nfunction timer(speed) {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve();\n    }, speed);\n  });\n}\n\n\n//# sourceURL=webpack://real/./src/modules/functions/typeEffect.js?");

/***/ }),

/***/ "./src/modules/pages/about.js":
/*!************************************!*\
  !*** ./src/modules/pages/about.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _functions_transitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/transitions.js */ \"./src/modules/functions/transitions.js\");\n/* harmony import */ var _components_aboutText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/aboutText */ \"./src/modules/components/aboutText.js\");\n\n\n\nconst about = document.createElement(\"main\");\nabout.classList.add(\n  \"grid\",\n  \"items-center\",\n  \"content-center\",\n  \"align-center\",\n  \"gap-0\",\n  \"my-20\",\n  \"max-w-8xl\"\n);\nabout.id = \"about-main\";\n\nconst backdrop = document.createElement(\"div\");\nbackdrop.classList.add(\n  \"flex\",\n  \"items-center\",\n  \"bg-secondary\",\n  \"border-y-2\",\n  \"border-sky-900\",\n  \"px-20\",\n  \"h-[350px]\",\n  \"w-screen\",\n  \"md:px-[12vw]\",\n  \"2xl:px-[18vw]\",\n  \"animation-fadein\"\n);\n\nconst mainCont = document.createElement(\"div\");\nmainCont.classList.add(\n  \"flex\",\n  \"items-center\",\n  \"justify-between\",\n  \"w-full\",\n  \"gap-10\"\n);\n\nconst imageCont = document.createElement(\"div\");\nimageCont.classList.add(\"flex\", \"flex-col\");\n\nconst image = document.createElement(\"img\");\nimage.classList.add(\n  \"about\",\n  \"min-w-[200px]\",\n  \"max-w-[400px]\",\n  \"relative\",\n  \"top-[5px]\",\n  \"right-[0]\",\n  \"rounded-full\",\n  \"opacity-0\"\n);\nimage.src = \"7ec209e927ecd73d3ceb.png\";\nimage.alt = \"Avatar Tom\";\n(0,_functions_transitions_js__WEBPACK_IMPORTED_MODULE_0__.showElem)(image, 2200, \"fadeinLeft\");\n\nimageCont.append(image);\nmainCont.append(imageCont, _components_aboutText__WEBPACK_IMPORTED_MODULE_1__.textCont);\nbackdrop.append(mainCont);\nabout.append(backdrop);\n\n\n//# sourceURL=webpack://real/./src/modules/pages/about.js?");

/***/ }),

/***/ "./src/modules/pages/contact.js":
/*!**************************************!*\
  !*** ./src/modules/pages/contact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _images_javascript_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/javascript-logo.png */ \"./src/images/javascript-logo.png\");\n/* harmony import */ var _images_css_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/css-logo.png */ \"./src/images/css-logo.png\");\n/* harmony import */ var _images_html5_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/html5-logo.png */ \"./src/images/html5-logo.png\");\n/* harmony import */ var _images_python_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/python-logo.png */ \"./src/images/python-logo.png\");\n/* harmony import */ var _images_sqlite_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/sqlite-logo.png */ \"./src/images/sqlite-logo.png\");\n/* harmony import */ var _images_bootstrap_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/bootstrap-logo.png */ \"./src/images/bootstrap-logo.png\");\n/* harmony import */ var _images_tailwind_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/tailwind-logo.png */ \"./src/images/tailwind-logo.png\");\n\n\n\n\n\n\n\n\nclass Logo {\n  constructor(src, alt, name, animation, addedClass) {\n    this.src = src;\n    this.alt = alt;\n    this.animation = animation;\n    this.addedClass = addedClass;\n    this.name = name;\n  }\n  build() {\n    const image = document.createElement(\"img\");\n    image.classList.add(\n      \"opacity-40\",\n      \"hover:opacity-100\",\n      \"hover:scale-110\",\n      \"duration-500\",\n      `${this.addedClass}`,\n      \"animate-pulse\"\n    );\n    image.src = this.src;\n    image.alt = this.alt;\n    image.style.minWidth = `${this.minW}px`;\n    image.style.maxWidth = `${this.maxW}px`;\n\n    const dropdown = document.createElement(\"div\");\n    dropdown.classList.add(\"dropdown\", \"dropdown1\");\n\n    const name = document.createElement(\"h3\");\n    name.classList.add(\"text-white\");\n    name.innerText = this.name;\n\n    dropdown.append(name);\n    image.append(dropdown);\n\n    return image;\n  }\n}\n\nconst contact = document.createElement(\"main\");\ncontact.classList.add(\n  \"grid\",\n  \"items-center\",\n  \"gap-0\",\n  \"my-20\",\n  \"w-100\",\n  \"hidden\"\n);\ncontact.id = \"contact-main\";\n\nconst top = document.createElement(\"div\");\ntop.classList.add(\n  \"flex\",\n  \"items-center\",\n  \"justify-center\",\n  \"content-center\",\n  \"text-white\",\n  \"bg-secondary\",\n  \"border-y-2\",\n  \"border-sky-900\",\n  \"px-10\",\n  \"py-[-20px]\",\n  \"h-[350px]\",\n  \"w-screen\",\n  \"animation-fadein\"\n);\ntop.innerText = \"contact\";\n\ncontact.append(top);\n\n\n//# sourceURL=webpack://real/./src/modules/pages/contact.js?");

/***/ }),

/***/ "./src/modules/pages/portfolio.js":
/*!****************************************!*\
  !*** ./src/modules/pages/portfolio.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"portfolio\": () => (/* binding */ portfolio)\n/* harmony export */ });\n/* harmony import */ var _images_javascript_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/javascript-logo.png */ \"./src/images/javascript-logo.png\");\n/* harmony import */ var _images_css_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/css-logo.png */ \"./src/images/css-logo.png\");\n/* harmony import */ var _images_html5_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/html5-logo.png */ \"./src/images/html5-logo.png\");\n/* harmony import */ var _images_python_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/python-logo.png */ \"./src/images/python-logo.png\");\n/* harmony import */ var _images_sqlite_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/sqlite-logo.png */ \"./src/images/sqlite-logo.png\");\n/* harmony import */ var _images_bootstrap_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/bootstrap-logo.png */ \"./src/images/bootstrap-logo.png\");\n/* harmony import */ var _images_tailwind_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/tailwind-logo.png */ \"./src/images/tailwind-logo.png\");\n\n\n\n\n\n\n\n\nclass Logo {\n  constructor(src, alt, name, animation, addedClass) {\n    this.src = src;\n    this.alt = alt;\n    this.animation = animation;\n    this.addedClass = addedClass;\n    this.name = name;\n  }\n  build() {\n    const image = document.createElement(\"img\");\n    image.classList.add(\n      \"opacity-40\",\n      \"hover:opacity-100\",\n      \"hover:scale-110\",\n      \"duration-500\",\n      `${this.addedClass}`,\n      \"animate-pulse\"\n    );\n    image.src = this.src;\n    image.alt = this.alt;\n    image.style.minWidth = `${this.minW}px`;\n    image.style.maxWidth = `${this.maxW}px`;\n\n    const dropdown = document.createElement(\"div\");\n    dropdown.classList.add(\"dropdown\", \"dropdown1\");\n\n    const name = document.createElement(\"h3\");\n    name.classList.add(\"text-white\");\n    name.innerText = this.name;\n\n    dropdown.append(name);\n    image.append(dropdown);\n\n    return image;\n  }\n}\n\nconst portfolio = document.createElement(\"main\");\nportfolio.classList.add(\n  \"grid\",\n  \"items-center\",\n  \"gap-0\",\n  \"my-20\",\n  \"w-100\",\n  \"hidden\"\n);\nportfolio.id = \"portfolio-main\";\n\nconst top = document.createElement(\"div\");\ntop.classList.add(\n  \"flex\",\n  \"items-center\",\n  \"justify-center\",\n  \"content-center\",\n  \"text-white\",\n  \"bg-secondary\",\n  \"border-y-2\",\n  \"border-sky-900\",\n  \"px-10\",\n  \"py-[-20px]\",\n  \"h-[350px]\",\n  \"w-screen\",\n  \"animation-fadein\",\n  \"opactiy-0\"\n);\ntop.innerText = \"portfolio\";\n\nportfolio.append(top);\n\n\n//# sourceURL=webpack://real/./src/modules/pages/portfolio.js?");

/***/ }),

/***/ "./src/images/bootstrap-logo.png":
/*!***************************************!*\
  !*** ./src/images/bootstrap-logo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4b2881f31594d43cab42.png\";\n\n//# sourceURL=webpack://real/./src/images/bootstrap-logo.png?");

/***/ }),

/***/ "./src/images/css-logo.png":
/*!*********************************!*\
  !*** ./src/images/css-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"acdb21e2fa5890b40dfc.png\";\n\n//# sourceURL=webpack://real/./src/images/css-logo.png?");

/***/ }),

/***/ "./src/images/html5-logo.png":
/*!***********************************!*\
  !*** ./src/images/html5-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b7ea52200ef24d9edb3d.png\";\n\n//# sourceURL=webpack://real/./src/images/html5-logo.png?");

/***/ }),

/***/ "./src/images/javascript-logo.png":
/*!****************************************!*\
  !*** ./src/images/javascript-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"aba9e11826857c5c4cdb.png\";\n\n//# sourceURL=webpack://real/./src/images/javascript-logo.png?");

/***/ }),

/***/ "./src/images/main-avatar.png":
/*!************************************!*\
  !*** ./src/images/main-avatar.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8bfdb009cd30e906ec05.png\";\n\n//# sourceURL=webpack://real/./src/images/main-avatar.png?");

/***/ }),

/***/ "./src/images/python-logo.png":
/*!************************************!*\
  !*** ./src/images/python-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"320b403b3cf4662177d3.png\";\n\n//# sourceURL=webpack://real/./src/images/python-logo.png?");

/***/ }),

/***/ "./src/images/sqlite-logo.png":
/*!************************************!*\
  !*** ./src/images/sqlite-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"00922b052c5bb881db9a.png\";\n\n//# sourceURL=webpack://real/./src/images/sqlite-logo.png?");

/***/ }),

/***/ "./src/images/tailwind-logo.png":
/*!**************************************!*\
  !*** ./src/images/tailwind-logo.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"62f2c44a2da19e291293.png\";\n\n//# sourceURL=webpack://real/./src/images/tailwind-logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;