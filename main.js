/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/input.css":
      /*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/input.css ***!
  \*******************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "/*\\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\\n*//*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: #e5e7eb; /* 2 */\\n}\\n\\n::before,\\n::after {\\n  --tw-content: \'\';\\n}\\n\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user\'s configured `sans` font-family by default.\\n*/\\n\\nhtml {\\n  line-height: 1.5; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -moz-tab-size: 4; /* 3 */\\n  -o-tab-size: 4;\\n     tab-size: 4; /* 3 */\\n  font-family: Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Helvetica Neue, sans-serif; /* 4 */\\n}\\n\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\n\\nbody {\\n  margin: 0; /* 1 */\\n  line-height: inherit; /* 2 */\\n}\\n\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\n\\nhr {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n  border-top-width: 1px; /* 3 */\\n}\\n\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr:where([title]) {\\n  text-decoration: underline;\\n  -webkit-text-decoration: underline dotted currentColor;\\n          text-decoration: underline dotted currentColor;\\n}\\n\\n/*\\nRemove the default font size and weight for headings.\\n*/\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\n\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/*\\n1. Use the user\'s configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\"Liberation Mono\\", \\"Courier New\\", monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/*\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\n\\ntable {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n  border-collapse: collapse; /* 3 */\\n}\\n\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  font-weight: inherit; /* 1 */\\n  line-height: inherit; /* 1 */\\n  color: inherit; /* 1 */\\n  margin: 0; /* 2 */\\n  padding: 0; /* 3 */\\n}\\n\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\n\\nbutton,\\n[type=\'button\'],\\n[type=\'reset\'],\\n[type=\'submit\'] {\\n  -webkit-appearance: button; /* 1 */\\n  background-color: transparent; /* 2 */\\n  background-image: none; /* 2 */\\n}\\n\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type=\'search\'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\n\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user\'s configured gray 400 color.\\n*/\\n\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\n/*\\nSet the default cursor for buttons.\\n*/\\n\\nbutton,\\n[role=\\"button\\"] {\\n  cursor: pointer;\\n}\\n\\n/*\\nMake sure disabled buttons don\'t get the pointer cursor.\\n*/\\n:disabled {\\n  cursor: default;\\n}\\n\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\n\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\n\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n*, ::before, ::after {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n.visible {\\n  visibility: visible;\\n}\\n.fixed {\\n  position: fixed;\\n}\\n.absolute {\\n  position: absolute;\\n}\\n.relative {\\n  position: relative;\\n}\\n.right-10 {\\n  right: 2.5rem;\\n}\\n.bottom-0 {\\n  bottom: 0px;\\n}\\n.top-\\\\[4\\\\.5rem\\\\] {\\n  top: 4.5rem;\\n}\\n.top-\\\\[-2px\\\\] {\\n  top: -2px;\\n}\\n.right-\\\\[0\\\\] {\\n  right: 0;\\n}\\n.col-span-full {\\n  grid-column: 1 / -1;\\n}\\n.row-span-full {\\n  grid-row: 1 / -1;\\n}\\n.row-start-1 {\\n  grid-row-start: 1;\\n}\\n.row-start-3 {\\n  grid-row-start: 3;\\n}\\n.block {\\n  display: block;\\n}\\n.flex {\\n  display: flex;\\n}\\n.table {\\n  display: table;\\n}\\n.grid {\\n  display: grid;\\n}\\n.contents {\\n  display: contents;\\n}\\n.hidden {\\n  display: none;\\n}\\n.h-screen {\\n  height: 100vh;\\n}\\n.h-full {\\n  height: 100%;\\n}\\n.h-fit {\\n  height: -moz-fit-content;\\n  height: fit-content;\\n}\\n.h-\\\\[80\\\\%\\\\] {\\n  height: 80%;\\n}\\n.h-\\\\[70\\\\%\\\\] {\\n  height: 70%;\\n}\\n.h-\\\\[60\\\\%\\\\] {\\n  height: 60%;\\n}\\n.h-\\\\[10\\\\%\\\\] {\\n  height: 10%;\\n}\\n.h-\\\\[75\\\\%\\\\] {\\n  height: 75%;\\n}\\n.max-h-full {\\n  max-height: 100%;\\n}\\n.max-h-\\\\[300px\\\\] {\\n  max-height: 300px;\\n}\\n.min-h-fit {\\n  min-height: -moz-fit-content;\\n  min-height: fit-content;\\n}\\n.w-full {\\n  width: 100%;\\n}\\n.w-screen {\\n  width: 100vw;\\n}\\n.w-fit {\\n  width: -moz-fit-content;\\n  width: fit-content;\\n}\\n.w-\\\\[3rem\\\\] {\\n  width: 3rem;\\n}\\n.min-w-\\\\[450px\\\\] {\\n  min-width: 450px;\\n}\\n.min-w-\\\\[200px\\\\] {\\n  min-width: 200px;\\n}\\n.max-w-\\\\[900px\\\\] {\\n  max-width: 900px;\\n}\\n.max-w-\\\\[1500px\\\\] {\\n  max-width: 1500px;\\n}\\n.max-w-\\\\[750px\\\\] {\\n  max-width: 750px;\\n}\\n.max-w-\\\\[400px\\\\] {\\n  max-width: 400px;\\n}\\n.max-w-\\\\[800px\\\\] {\\n  max-width: 800px;\\n}\\n.border-collapse {\\n  border-collapse: collapse;\\n}\\n.transform {\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n@keyframes pulse {\\n\\n  50% {\\n    opacity: .5;\\n  }\\n}\\n.animate-pulse {\\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\\n}\\n@keyframes ping {\\n\\n  75%, 100% {\\n    transform: scale(2);\\n    opacity: 0;\\n  }\\n}\\n.animate-ping {\\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\\n}\\n.cursor-pointer {\\n  cursor: pointer;\\n}\\n.resize {\\n  resize: both;\\n}\\n.grid-cols-7 {\\n  grid-template-columns: repeat(7, minmax(0, 1fr));\\n}\\n.grid-cols-2 {\\n  grid-template-columns: repeat(2, minmax(0, 1fr));\\n}\\n.grid-cols-1 {\\n  grid-template-columns: repeat(1, minmax(0, 1fr));\\n}\\n.grid-cols-\\\\[40\\\\%_calc\\\\(60\\\\%_-_1rem\\\\)\\\\] {\\n  grid-template-columns: 40% calc(60% - 1rem);\\n}\\n.grid-cols-\\\\[1fr_2fr\\\\] {\\n  grid-template-columns: 1fr 2fr;\\n}\\n.grid-rows-\\\\[4rem_minmax\\\\(400px\\\\2c _calc\\\\(100vh_-_4rem\\\\)\\\\)\\\\] {\\n  grid-template-rows: 4rem minmax(400px, calc(100vh - 4rem));\\n}\\n.grid-rows-\\\\[50\\\\%_30\\\\%_20\\\\%\\\\] {\\n  grid-template-rows: 50% 30% 20%;\\n}\\n.flex-col {\\n  flex-direction: column;\\n}\\n.place-items-start {\\n  align-items: start;\\n  justify-items: start;\\n  place-items: start;\\n}\\n.items-start {\\n  align-items: flex-start;\\n}\\n.items-end {\\n  align-items: flex-end;\\n}\\n.items-center {\\n  align-items: center;\\n}\\n.justify-center {\\n  justify-content: center;\\n}\\n.justify-between {\\n  justify-content: space-between;\\n}\\n.justify-items-start {\\n  justify-items: start;\\n}\\n.gap-4 {\\n  gap: 1rem;\\n}\\n.gap-3 {\\n  gap: 0.75rem;\\n}\\n.gap-6 {\\n  gap: 1.5rem;\\n}\\n.gap-2 {\\n  gap: 0.5rem;\\n}\\n.gap-10 {\\n  gap: 2.5rem;\\n}\\n.gap-14 {\\n  gap: 3.5rem;\\n}\\n.gap-12 {\\n  gap: 3rem;\\n}\\n.gap-20 {\\n  gap: 5rem;\\n}\\n.gap-0 {\\n  gap: 0px;\\n}\\n.gap-40 {\\n  gap: 10rem;\\n}\\n.gap-\\\\[\\\\] {\\n  gap: ;\\n}\\n.gap-\\\\[0\\\\.\\\\] {\\n  gap: 0.;\\n}\\n.gap-\\\\[0\\\\.2rem\\\\] {\\n  gap: 0.2rem;\\n}\\n.overflow-x-hidden {\\n  overflow-x: hidden;\\n}\\n.overflow-x-scroll {\\n  overflow-x: scroll;\\n}\\n.rounded-md {\\n  border-radius: 0.375rem;\\n}\\n.rounded {\\n  border-radius: 0.25rem;\\n}\\n.rounded-full {\\n  border-radius: 9999px;\\n}\\n.rounded-xl {\\n  border-radius: 0.75rem;\\n}\\n.rounded-2xl {\\n  border-radius: 1rem;\\n}\\n.rounded-t-xl {\\n  border-top-left-radius: 0.75rem;\\n  border-top-right-radius: 0.75rem;\\n}\\n.rounded-b-xl {\\n  border-bottom-right-radius: 0.75rem;\\n  border-bottom-left-radius: 0.75rem;\\n}\\n.rounded-bl-xl {\\n  border-bottom-left-radius: 0.75rem;\\n}\\n.rounded-br-xl {\\n  border-bottom-right-radius: 0.75rem;\\n}\\n.border {\\n  border-width: 1px;\\n}\\n.border-2 {\\n  border-width: 2px;\\n}\\n.border-y-0 {\\n  border-top-width: 0px;\\n  border-bottom-width: 0px;\\n}\\n.border-b-2 {\\n  border-bottom-width: 2px;\\n}\\n.border-sky-900 {\\n  --tw-border-opacity: 1;\\n  border-color: rgba(12, 74, 110, var(--tw-border-opacity));\\n}\\n.px-4 {\\n  padding-left: 1rem;\\n  padding-right: 1rem;\\n}\\n.py-2 {\\n  padding-top: 0.5rem;\\n  padding-bottom: 0.5rem;\\n}\\n.py-4 {\\n  padding-top: 1rem;\\n  padding-bottom: 1rem;\\n}\\n.px-8 {\\n  padding-left: 2rem;\\n  padding-right: 2rem;\\n}\\n.px-0 {\\n  padding-left: 0px;\\n  padding-right: 0px;\\n}\\n.px-10 {\\n  padding-left: 2.5rem;\\n  padding-right: 2.5rem;\\n}\\n.px-6 {\\n  padding-left: 1.5rem;\\n  padding-right: 1.5rem;\\n}\\n.py-8 {\\n  padding-top: 2rem;\\n  padding-bottom: 2rem;\\n}\\n.px-20 {\\n  padding-left: 5rem;\\n  padding-right: 5rem;\\n}\\n.py-12 {\\n  padding-top: 3rem;\\n  padding-bottom: 3rem;\\n}\\n.px-12 {\\n  padding-left: 3rem;\\n  padding-right: 3rem;\\n}\\n.py-10 {\\n  padding-top: 2.5rem;\\n  padding-bottom: 2.5rem;\\n}\\n.pb-6 {\\n  padding-bottom: 1.5rem;\\n}\\n.text-left {\\n  text-align: left;\\n}\\n.text-center {\\n  text-align: center;\\n}\\n.align-bottom {\\n  vertical-align: bottom;\\n}\\n.font-sans {\\n  font-family: Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Helvetica Neue, sans-serif;\\n}\\n.text-2xl {\\n  font-size: 1.5rem;\\n  line-height: 2rem;\\n}\\n.text-xl {\\n  font-size: 1.25rem;\\n  line-height: 1.75rem;\\n}\\n.text-lg {\\n  font-size: 1.125rem;\\n  line-height: 1.75rem;\\n}\\n.text-3xl {\\n  font-size: 1.875rem;\\n  line-height: 2.25rem;\\n}\\n.text-4xl {\\n  font-size: 2.25rem;\\n  line-height: 2.5rem;\\n}\\n.font-semibold {\\n  font-weight: 600;\\n}\\n.font-medium {\\n  font-weight: 500;\\n}\\n.font-bold {\\n  font-weight: 700;\\n}\\n.tracking-wider {\\n  letter-spacing: 0.05em;\\n}\\n.tracking-widest {\\n  letter-spacing: 0.1em;\\n}\\n.tracking-wide {\\n  letter-spacing: 0.025em;\\n}\\n.text-white {\\n  --tw-text-opacity: 1;\\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\\n}\\n.text-gray-200 {\\n  --tw-text-opacity: 1;\\n  color: rgba(229, 231, 235, var(--tw-text-opacity));\\n}\\n.text-black {\\n  --tw-text-opacity: 1;\\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\\n}\\n.text-gray-800 {\\n  --tw-text-opacity: 1;\\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\\n}\\n.text-gray-400 {\\n  --tw-text-opacity: 1;\\n  color: rgba(156, 163, 175, var(--tw-text-opacity));\\n}\\n.text-gray-500 {\\n  --tw-text-opacity: 1;\\n  color: rgba(107, 114, 128, var(--tw-text-opacity));\\n}\\n.text-gray-600 {\\n  --tw-text-opacity: 1;\\n  color: rgba(75, 85, 99, var(--tw-text-opacity));\\n}\\n.underline {\\n  text-decoration-line: underline;\\n}\\n.opacity-0 {\\n  opacity: 0;\\n}\\n.opacity-20 {\\n  opacity: 0.2;\\n}\\n.opacity-80 {\\n  opacity: 0.8;\\n}\\n.opacity-60 {\\n  opacity: 0.6;\\n}\\n.opacity-\\\\[70\\\\] {\\n  opacity: 70;\\n}\\n.shadow-xl {\\n  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\\n}\\n.shadow-inner {\\n  --tw-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);\\n  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);\\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\\n}\\n.shadow-2xl {\\n  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\\n}\\n.outline {\\n  outline-style: solid;\\n}\\n.filter {\\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\\n}\\n.transition {\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  transition-duration: 150ms;\\n}\\n.delay-75 {\\n  transition-delay: 75ms;\\n}\\n.delay-100 {\\n  transition-delay: 100ms;\\n}\\n.duration-500 {\\n  transition-duration: 500ms;\\n}\\n.duration-300 {\\n  transition-duration: 300ms;\\n}\\n.duration-75 {\\n  transition-duration: 75ms;\\n}\\n\\n:root {\\n  --primary: #060a21;\\n  --secondary: #021d2b;\\n  --accent: #0c4a6e;\\n}\\n\\n.bg-primary {\\n  background-color: #060a21;\\n  background-color: var(--primary);\\n}\\n.bg-secondary {\\n  background-color: #021d2b;\\n  background-color: var(--secondary);\\n}\\n.border-primary {\\n  border-color: #060a21;\\n  border-color: var(--primary);\\n}\\n.border-secondary {\\n  border-color: #021d2b;\\n  border-color: var(--secondary);\\n}\\n.text-primary {\\n  color: #060a21;\\n  color: var(--primary);\\n}\\n.text-secondary {\\n  color: #021d2b;\\n  color: var(--secondary);\\n}\\n.shadow-secondary {\\n  box-shadow: 0 0 25px 5px #021d2b;\\n  box-shadow: 0 0 25px 5px var(--secondary);\\n}\\n\\n.dropdown {\\n  opacity: 0;\\n  /* position: absolute; */\\n  overflow: hidden;\\n  /* top: -40px; */\\n  /* left: -40px; */\\n  /* transform: translateY(100px); */\\n  /* will-change: opacity; */\\n  display: none;\\n}\\n.trigger-enter .dropdown {\\n  display: flex;\\n}\\n.trigger-enter-active .dropdown {\\n  opacity: 1;\\n}\\n.dropdown-bg {\\n  /* width: 100px; */\\n  /* height: 100px; */\\n  /* position: absolute; */\\n  /* background: #fff; */\\n  /* border-radius: 4px; */\\n  /* transition: all 0.3s, opacity 0.1s, transform 0.2s; */\\n  /* transform-origin: 50% 0; */\\n  /* display: flex;\\n  justify-content: center; */\\n  opacity: 0;\\n}\\n.dropdown-bg.open {\\n  opacity: 1;\\n}\\n\\n.animation-fadein {\\n  animation: fadein 400ms linear 1;\\n}\\n.animation-fadeout {\\n  animation: fadeout 400ms linear 1;\\n}\\n.animation-fadeinLeft {\\n  animation: fadeinLeft 400ms linear 1;\\n}\\n.animation-fadeoutLeft {\\n  animation: fadeoutLeft 400ms linear 1;\\n}\\n.animation-fadeinRight {\\n  animation: fadeinRight 400ms linear 1;\\n}\\n.animation-fadeoutRight {\\n  animation: fadeoutRight 400ms linear 1;\\n}\\n\\n@keyframes fadein {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes fadeout {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n@keyframes fadeinLeft {\\n  from {\\n    opacity: 0;\\n    transform: translateX(-100%);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n}\\n@keyframes fadeoutLeft {\\n  from {\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n  to {\\n    opacity: 0;\\n    transform: translateX(-40%);\\n  }\\n}\\n\\n@keyframes fadeinRight {\\n  from {\\n    opacity: 0;\\n    transform: translateX(20%);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n}\\n@keyframes fadeoutRight {\\n  from {\\n    opacity: 1;\\n    transform: translateX(0);\\n  }\\n  to {\\n    opacity: 0;\\n    transform: translateX(20%);\\n  }\\n}\\n\\n.animation-slideinTop {\\n  animation: slideinTop 12s infinite ease-in-out;\\n}\\n.animation-slideinBtm {\\n  animation: slideinBtm 500ms linear 1;\\n}\\n@keyframes slideinTop {\\n  0% {\\n    top: 100%;\\n  }\\n  4% {\\n    top: 0%;\\n  }\\n  33.33% {\\n    top: 0%;\\n  }\\n  37.33% {\\n    top: -100%;\\n  }\\n  100% {\\n    top: -100%;\\n  }\\n}\\n@keyframes slideinBtm {\\n  from {\\n    translate: 0 100%;\\n  }\\n  to {\\n    translate: 0 0;\\n  }\\n}\\n\\n.hide-details {\\n  transition-property: all;\\n  transition-duration: 0.5s;\\n  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\\n}\\n.hide-details.closed {\\n  max-height: 0;\\n}\\n\\n::-webkit-resizer,\\n::-webkit-scrollbar-track-piece,\\n::-webkit-scrollbar {\\n  background: #021d2b;\\n  background: var(--secondary);\\n  height: 2rem;\\n  width: 2rem;\\n}\\n::-webkit-scrollbar-corner,\\n::-webkit-scrollbar-thumb {\\n  background: #0c4a6e;\\n  background: var(--accent);\\n  border: 0.5rem solid #021d2b;\\n  border: 0.5rem solid var(--secondary);\\n}\\n.hover\\\\:scale-105:hover {\\n  --tw-scale-x: 1.05;\\n  --tw-scale-y: 1.05;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n.hover\\\\:scale-125:hover {\\n  --tw-scale-x: 1.25;\\n  --tw-scale-y: 1.25;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n.hover\\\\:scale-110:hover {\\n  --tw-scale-x: 1.1;\\n  --tw-scale-y: 1.1;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n.hover\\\\:gap-12:hover {\\n  gap: 3rem;\\n}\\n.hover\\\\:text-sky-400:hover {\\n  --tw-text-opacity: 1;\\n  color: rgba(56, 189, 248, var(--tw-text-opacity));\\n}\\n.hover\\\\:text-sky-500:hover {\\n  --tw-text-opacity: 1;\\n  color: rgba(14, 165, 233, var(--tw-text-opacity));\\n}\\n.hover\\\\:underline:hover {\\n  text-decoration-line: underline;\\n}\\n.hover\\\\:underline-offset-8:hover {\\n  text-underline-offset: 8px;\\n}\\n.hover\\\\:opacity-100:hover {\\n  opacity: 1;\\n}\\n@media (min-width: 768px) {\\n\\n  .md\\\\:min-h-\\\\[400px\\\\] {\\n    min-height: 400px;\\n  }\\n\\n  .md\\\\:gap-12 {\\n    gap: 3rem;\\n  }\\n\\n  .md\\\\:px-\\\\[4vw\\\\] {\\n    padding-left: 4vw;\\n    padding-right: 4vw;\\n  }\\n\\n  .md\\\\:px-\\\\[10vw\\\\] {\\n    padding-left: 10vw;\\n    padding-right: 10vw;\\n  }\\n\\n  .md\\\\:px-\\\\[6vw\\\\] {\\n    padding-left: 6vw;\\n    padding-right: 6vw;\\n  }\\n\\n  .md\\\\:text-3xl {\\n    font-size: 1.875rem;\\n    line-height: 2.25rem;\\n  }\\n\\n  .md\\\\:text-2xl {\\n    font-size: 1.5rem;\\n    line-height: 2rem;\\n  }\\n\\n  .md\\\\:text-xl {\\n    font-size: 1.25rem;\\n    line-height: 1.75rem;\\n  }\\n}\\n@media (min-width: 1024px) {\\n\\n  .lg\\\\:grid-cols-\\\\[repeat\\\\(4\\\\2c _calc\\\\(50\\\\%_-_1rem\\\\)\\\\)\\\\] {\\n    grid-template-columns: repeat(4, calc(50% - 1rem));\\n  }\\n\\n  .lg\\\\:px-\\\\[8vw\\\\] {\\n    padding-left: 8vw;\\n    padding-right: 8vw;\\n  }\\n\\n  .lg\\\\:text-4xl {\\n    font-size: 2.25rem;\\n    line-height: 2.5rem;\\n  }\\n\\n  .lg\\\\:text-3xl {\\n    font-size: 1.875rem;\\n    line-height: 2.25rem;\\n  }\\n\\n  .lg\\\\:text-2xl {\\n    font-size: 1.5rem;\\n    line-height: 2rem;\\n  }\\n}\\n@media (min-width: 1280px) {\\n\\n  .xl\\\\:gap-20 {\\n    gap: 5rem;\\n  }\\n\\n  .xl\\\\:gap-12 {\\n    gap: 3rem;\\n  }\\n\\n  .xl\\\\:gap-10 {\\n    gap: 2.5rem;\\n  }\\n}\\n@media (min-width: 1536px) {\\n\\n  .\\\\32xl\\\\:grid-cols-\\\\[repeat\\\\(4\\\\2c _calc\\\\(700px_-_1rem\\\\)\\\\)\\\\] {\\n    grid-template-columns: repeat(4, calc(700px - 1rem));\\n  }\\n\\n  .\\\\32xl\\\\:gap-20 {\\n    gap: 5rem;\\n  }\\n\\n  .\\\\32xl\\\\:gap-10 {\\n    gap: 2.5rem;\\n  }\\n\\n  .\\\\32xl\\\\:gap-12 {\\n    gap: 3rem;\\n  }\\n\\n  .\\\\32xl\\\\:gap-40 {\\n    gap: 10rem;\\n  }\\n\\n  .\\\\32xl\\\\:px-\\\\[18vw\\\\] {\\n    padding-left: 18vw;\\n    padding-right: 18vw;\\n  }\\n\\n  .\\\\32xl\\\\:px-\\\\[8vw\\\\] {\\n    padding-left: 8vw;\\n    padding-right: 8vw;\\n  }\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://real/./src/input.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://real/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://real/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./src/input.css":
      /*!***********************!*\
  !*** ./src/input.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./input.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/input.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://real/./src/input.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://real/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.css */ "./src/input.css");\n/* harmony import */ var _images_icons_main_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icons/main-avatar.png */ "./src/images/icons/main-avatar.png");\n/* harmony import */ var _modules_components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/components/header */ "./src/modules/components/header.js");\n/* harmony import */ var _modules_functions_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/functions/storage */ "./src/modules/functions/storage.js");\n/* harmony import */ var _modules_screen_small__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/screen/small */ "./src/modules/screen/small.js");\n\n\n\n\n\n\ndocument.body.append(_modules_components_header__WEBPACK_IMPORTED_MODULE_2__.header);\ndocument.body.classList.add(\n  "h-screen",\n  "bg-primary",\n  "font-sans",\n  "grid",\n  "grid-rows-[4rem_minmax(400px,_calc(100vh_-_4rem))]",\n  "place-items-start",\n  "overflow-x-hidden"\n);\n\n(0,_modules_functions_storage__WEBPACK_IMPORTED_MODULE_3__.loadLocalStorage)();\n\nfunction changeLayout() {\n  let screenWidth = window.innerWidth;\n\n  if (screenWidth < 769) {\n    (0,_modules_screen_small__WEBPACK_IMPORTED_MODULE_4__.width770PX)();\n  } else {\n    (0,_modules_screen_small__WEBPACK_IMPORTED_MODULE_4__.width1200PX)();\n  }\n}\n\nwindow.addEventListener("resize", changeLayout);\n\n\n//# sourceURL=webpack://real/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/modules/components/aboutText.js":
      /*!*********************************************!*\
  !*** ./src/modules/components/aboutText.js ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "addText": () => (/* binding */ addText),\n/* harmony export */   "showAboutText": () => (/* binding */ showAboutText),\n/* harmony export */   "textCont": () => (/* binding */ textCont)\n/* harmony export */ });\n/* harmony import */ var _functions_typeEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/typeEffect */ "./src/modules/functions/typeEffect.js");\n\n\nconst textCont = document.createElement("div");\ntextCont.classList.add(\n  "flex",\n  "flex-col",\n  "text-left",\n  "items-start",\n  "justify-items-start",\n  "gap-4",\n  "w-full"\n);\n\nconst heading = document.createElement("div");\nheading.classList.add("about", "flex", "items-start", "gap-3");\n\nconst headingLeft = document.createElement("h1");\nheadingLeft.classList.add(\n  "text-2xl",\n  "md:text-3xl",\n  "lg:text-4xl",\n  "text-white",\n  "text-left"\n);\n\nconst headingRight = document.createElement("h1");\nheadingRight.classList.add(\n  "text-2xl",\n  "md:text-3xl",\n  "lg:text-4xl",\n  "text-white",\n  "font-semibold"\n);\n\nconst mainText = document.createElement("h3");\nmainText.classList.add(\n  "about",\n  "text-xl",\n  "md:text-2xl",\n  "lg:text-3xl",\n  "text-white",\n  "pb-6"\n);\n\nfunction showAboutText() {\n  setTimeout(() => {\n    (0,_functions_typeEffect__WEBPACK_IMPORTED_MODULE_0__.typeSentence)("Hi, i\'m", headingLeft, 100);\n  }, 1000);\n\n  setTimeout(() => {\n    (0,_functions_typeEffect__WEBPACK_IMPORTED_MODULE_0__.typeSentence)("Tom.", headingRight, 100);\n  }, 1800);\n\n  setTimeout(() => {\n    (0,_functions_typeEffect__WEBPACK_IMPORTED_MODULE_0__.typeWords)(\n      "I develop modern, powerful and responsive websites.",\n      mainText,\n      150\n    );\n  }, 3000);\n}\n\nfunction addText() {\n  headingLeft.innerText = "Hi, i\'m";\n  headingRight.innerText = "Tom.";\n  mainText.innerText = "I develop modern, powerful and responsive websites.";\n}\n\nheadingLeft.append(_functions_typeEffect__WEBPACK_IMPORTED_MODULE_0__.line);\nheading.append(headingLeft, headingRight);\ntextCont.append(heading, mainText);\n\n\n//# sourceURL=webpack://real/./src/modules/components/aboutText.js?'
        );

        /***/
      },

    /***/ "./src/modules/components/contactForm.js":
      /*!***********************************************!*\
  !*** ./src/modules/components/contactForm.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "form": () => (/* binding */ form)\n/* harmony export */ });\nclass Input {\n  constructor(name, type, placeholder = "") {\n    this.name = name;\n    this.type = type;\n    this.placeholder = placeholder;\n  }\n  build() {\n    const input = document.createElement("input");\n    input.classList.add(\n      "bg-primary",\n      "border-2",\n      "border-sky-900",\n      "rounded-md",\n      "text-white",\n      "text-lg",\n      "md:text-xl",\n      "lg:text-2xl",\n      "px-4",\n      "py-2"\n    );\n    input.name = this.name;\n    input.placeholder = this.placeholder;\n    input.type = this.type;\n\n    return input;\n  }\n}\n\nconst form = document.createElement("form");\nform.classList.add(\n  "flex",\n  "flex-col",\n  "justify-center",\n  "gap-6",\n  "h-full",\n  "w-full",\n  "max-w-[900px]"\n);\nform.action = "https://postmail.invotes.com/send";\nform.method = "post";\nform.id = "email_form";\nform.addEventListener("submit", () => {\n  emailHidden.value = email.value;\n  nameHidden.value = name.value;\n});\n\nconst topForm = document.createElement("div");\ntopForm.classList.add("grid", "grid-cols-[40%_calc(60%_-_1rem)]", "gap-4");\n\nconst contactName = new Input("name", "text", "Name...").build();\n\nconst nameHidden = new Input("extra_name", "hidden").build();\n\nconst email = new Input("email", "text", "Your Email...").build();\nemail.required = true;\n\nconst emailHidden = new Input("subject", "hidden").build();\n\nconst message = document.createElement("textarea");\nmessage.classList.add(\n  "bg-primary",\n  "h-full",\n  "max-h-[300px]",\n  "border-2",\n  "border-sky-900",\n  "rounded-md",\n  "text-white",\n  "text-lg",\n  "md:text-xl",\n  "lg:text-2xl",\n  "px-4",\n  "py-2"\n);\nmessage.placeholder = "Message...";\nmessage.required = true;\nmessage.name = "text";\n\nconst submit = new Input("submit", "submit").build();\nsubmit.classList.remove("py-2");\nsubmit.classList.add("py-4", "font-semibold", "tracking-wider", "hover:text-sky-400", "duration-500");\nsubmit.value = "SEND";\nsubmit.id = "submit_form";\nsubmit.style.cursor = "pointer";\n\nconst emailAccess = new Input("access_token", "hidden").build();\nemailAccess.value = "zdn2o5l11cl7z0m123u7u112";\n\nconst emailSuccess = new Input("success_url", "hidden").build();\nemailSuccess.value = "https://github.com/tomcodedthis";\n\nconst emailError = new Input("error_url", "hidden").build();\nemailError.value = "https://github.com/tomcodedthis";\n\ntopForm.append(contactName, email);\nform.append(\n  topForm,\n  message,\n  nameHidden,\n  emailHidden,\n  emailAccess,\n  emailSuccess,\n  emailError,\n  submit\n);\n\n\n//# sourceURL=webpack://real/./src/modules/components/contactForm.js?'
        );

        /***/
      },

    /***/ "./src/modules/components/followNav.js":
      /*!*********************************************!*\
  !*** ./src/modules/components/followNav.js ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "bsRating": () => (/* binding */ bsRating),\n/* harmony export */   "cssRating": () => (/* binding */ cssRating),\n/* harmony export */   "htmlRating": () => (/* binding */ htmlRating),\n/* harmony export */   "jsRating": () => (/* binding */ jsRating),\n/* harmony export */   "pyRating": () => (/* binding */ pyRating),\n/* harmony export */   "sqlRating": () => (/* binding */ sqlRating),\n/* harmony export */   "twRating": () => (/* binding */ twRating)\n/* harmony export */ });\nclass Rating {\n  constructor(title, rating = 0) {\n    this.title = title;\n    this.rating = rating;\n  }\n  build() {\n    const cont = document.createElement("div");\n    cont.classList.add(\n      "dropdown", \n      "flex-col",\n      "gap-3",\n      "justify-center",\n      "text-center",\n      );\n\n    const text = document.createElement("div");\n    text.innerText = this.title;\n    text.classList.add("text-white")\n\n    const starCont = document.createElement("div");\n    starCont.classList.add(\n      "flex",\n      "gap-[0.2rem]"\n    )\n\n    for (let i = 0; i < 5; i++) {\n      i < this.rating\n        ? starCont.append(this.star(true))\n        : starCont.append(this.star(false));\n    }\n\n    cont.append(text, starCont)\n\n    return cont\n  }\n  star(white) {\n    const icon = document.createElement("i");\n    icon.classList.add("fa-solid", "fa-star", "fa-xs");\n\n    white\n      ? icon.classList.add("text-white")\n      : icon.classList.add("text-gray-600")\n\n    return icon\n  }\n}\n\nconst jsRating = new Rating("JavaScript", 4).build();\nconst cssRating = new Rating("CSS", 4).build();\nconst htmlRating = new Rating("HTML", 4).build();\nconst pyRating = new Rating("Python", 3).build();\nconst sqlRating = new Rating("SQLite", 3).build();\nconst bsRating = new Rating("Bootstrap", 3).build();\nconst twRating = new Rating("TailwindCSS", 4).build();\n\n//# sourceURL=webpack://real/./src/modules/components/followNav.js?'
        );

        /***/
      },

    /***/ "./src/modules/components/header.js":
      /*!******************************************!*\
  !*** ./src/modules/components/header.js ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "header": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _functions_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/storage */ "./src/modules/functions/storage.js");\n/* harmony import */ var _navigation_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigate */ "./src/modules/navigation/navigate.js");\n\n\n\nclass NavItem {\n  constructor(text) {\n    this.text = text;\n  }\n  build() {\n    const button = document.createElement("button");\n    button.classList.add(\n      "nav-btns",\n      "text-white",\n      "items-end",\n      "tracking-widest",\n      "font-medium",\n      "px-8",\n      "h-100",\n      "hover:text-sky-500",\n      "duration-300"\n    );\n    button.innerText = this.text;\n    button.addEventListener("click", processNavBtns);\n\n    return button;\n  }\n}\n\nconst header = document.createElement("header");\nheader.classList.add(\n  "flex",\n  "justify-center",\n  "w-screen",\n  "h-full",\n  "bg-secondary",\n  "border-b-2",\n  "border-sky-900",\n  "shadow-xl",\n  "shadow-secondary",\n  "px-0",\n  "md:px-[4vw]",\n  "lg:px-[8vw]"\n);\n\nconst headerCont = document.createElement("div");\nheaderCont.classList.add(\n  "flex",\n  "justify-between",\n  "h-full",\n  "w-full",\n  "max-w-[1500px]"\n);\n\nconst title = document.createElement("div");\ntitle.classList.add(\n  "flex",\n  "items-center",\n  "text-white",\n  "text-2xl",\n  "tracking-wide",\n  "align-bottom",\n  "font-medium",\n  "px-10",\n  "no-wrap"\n);\ntitle.innerText = "tomcodedthis";\n\nconst nav = document.createElement("nav");\nnav.classList.add("flex", "gap-2");\n\nconst home = new NavItem("About");\nconst projects = new NavItem("Portfolio");\nconst contact = new NavItem("Contact");\n\nlet currentPage = JSON.parse(localStorage.getItem("current-page"));\n\nfunction processNavBtns() {\n  const nextPage = this.innerText;\n  if (nextPage === "") return;\n\n  if (nextPage.toLowerCase() === "about") (0,_navigation_navigate__WEBPACK_IMPORTED_MODULE_1__.fastShowAbout)(currentPage);\n  if (nextPage.toLowerCase() === "portfolio") (0,_navigation_navigate__WEBPACK_IMPORTED_MODULE_1__.fastShowPorfolio)(currentPage);\n  if (nextPage.toLowerCase() === "contact") (0,_navigation_navigate__WEBPACK_IMPORTED_MODULE_1__.fastShowContact)(currentPage);\n\n  currentPage = nextPage.toLowerCase();\n\n  (0,_functions_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)("current-page", currentPage);\n}\n\nnav.append(home.build(), projects.build(), contact.build());\nheaderCont.append(title, nav);\nheader.append(headerCont);\n\n\n//# sourceURL=webpack://real/./src/modules/components/header.js?'
        );

        /***/
      },

    /***/ "./src/modules/components/logos.js":
      /*!*****************************************!*\
  !*** ./src/modules/components/logos.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "dropdowBG": () => (/* binding */ dropdowBG),\n/* harmony export */   "logoCont": () => (/* binding */ logoCont),\n/* harmony export */   "logoHover": () => (/* binding */ logoHover)\n/* harmony export */ });\n/* harmony import */ var _images_icons_javascript_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/icons/javascript-logo.png */ "./src/images/icons/javascript-logo.png");\n/* harmony import */ var _images_icons_css_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/icons/css-logo.png */ "./src/images/icons/css-logo.png");\n/* harmony import */ var _images_icons_html5_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/icons/html5-logo.png */ "./src/images/icons/html5-logo.png");\n/* harmony import */ var _images_icons_python_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/icons/python-logo.png */ "./src/images/icons/python-logo.png");\n/* harmony import */ var _images_icons_sqlite_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/icons/sqlite-logo.png */ "./src/images/icons/sqlite-logo.png");\n/* harmony import */ var _images_icons_bootstrap_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/icons/bootstrap-logo.png */ "./src/images/icons/bootstrap-logo.png");\n/* harmony import */ var _images_icons_tailwind_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/icons/tailwind-logo.png */ "./src/images/icons/tailwind-logo.png");\n/* harmony import */ var _followNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./followNav */ "./src/modules/components/followNav.js");\n\n\n\n\n\n\n\n\n\nclass Logo {\n  constructor(src, alt, name, animation, addedClass) {\n    this.src = src;\n    this.alt = alt;\n    this.animation = animation;\n    this.addedClass = addedClass;\n    this.name = name;\n  }\n  build() {\n    const cont = document.createElement("div");\n    cont.classList.add(\n      "flex",\n      "flex-col",\n      "items-center",\n      "opacity-0",\n      "duration-500",\n      `${this.addedClass}`\n    );\n    cont.addEventListener("mouseenter", handleEnter)\n    cont.addEventListener("mouseleave", handleLeave)\n\n    const image = document.createElement("img");\n    image.classList.add(\n      "logo-img",\n      "h-full"\n    );\n    image.src = this.src;\n    image.alt = this.alt;\n    image.style.minWidth = `${this.minW}px`;\n    image.style.maxWidth = `${this.maxW}px`;\n\n    cont.append(image);\n\n    return cont;\n  }\n}\n\nconst logoCont = document.createElement("div");\nlogoCont.classList.add(\n  "about",\n  "logo-cont",\n  "grid",\n  "col-span-full",\n  "grid-cols-7",\n  "items-center",\n  "justify-between",\n  "max-w-[900px]",\n  "min-w-[450px]",\n  "gap-6",\n  "2xl:gap-10"\n);\n\nconst javaScript = new Logo(\n  "./aba9e11826857c5c4cdb.png",\n  "Javascript-Logo",\n  "Javascript",\n  "delay-75",\n  "h-[75%]"\n).build();\n\nconst css = new Logo(\n  "./acdb21e2fa5890b40dfc.png",\n  "CSS-Logo",\n  "CSS",\n  "delay-100",\n  "h-[75%]"\n).build();\n\nconst html = new Logo(\n  "./b7ea52200ef24d9edb3d.png",\n  "HTML-Logo",\n  "HTLM",\n  "delay-75",\n  "h-[75%]"\n).build();\n\nconst python = new Logo(\n  "./320b403b3cf4662177d3.png",\n  "Python-Logo",\n  "Python",\n  "delay-100",\n  "h-[80%]"\n).build();\n\nconst sqLite = new Logo(\n  "./00922b052c5bb881db9a.png",\n  "SQLite-Logo",\n  "SQLite",\n  "delay-75"\n).build();\nconst boostrap = new Logo(\n  "./4b2881f31594d43cab42.png",\n  "Bootstrap-Logo",\n  "Bootstrap",\n  "delay-100"\n).build();\n\nconst tailwind = new Logo(\n  "./62f2c44a2da19e291293.png",\n  "Tailwind-Logo",\n  "Tailwind",\n  "delay-75"\n).build();\n\nconst dropdowBG = document.createElement("div");\ndropdowBG.classList.add(\n  "dropdown-bg",\n  "absolute",\n  "bg-primary",\n  "rounded",\n  "duration-500",\n  "flex",\n  "items-center"\n  );\n\nfunction logoHover(e, hovered) {\n  hovered\n    ? e.target.classList.remove("animate-pulse")\n    : e.target.classList.add("animate-pulse");\n}\n\nfunction handleEnter() {\n  this.classList.add("trigger-enter");\n  setTimeout(\n    () =>\n      this.classList.contains("trigger-enter") &&\n      this.classList.add("trigger-enter-active"),\n    150\n  );\n  dropdowBG.classList.add("open");\n\n  const dropdown = this.querySelector(".dropdown");\n  const dropdownCoords = dropdown.getBoundingClientRect();\n  const navCoords = logoCont.getBoundingClientRect();\n\n  // const coords = {\n  //   height: dropdownCoords.height,\n  //   width: dropdownCoords.width,\n  //   top: dropdownCoords.top - navCoords.top,\n  //   left: dropdownCoords.left - navCoords.left,\n  // };\n  console.log(dropdownCoords, navCoords)\n  // dropdowBG.style.setProperty("width", `${coords.width}px`);\n  // dropdowBG.style.setProperty("height", `${coords.height}px`);\n  // dropdowBG.style.setProperty(\n  //   "transform",\n  //   `translate(${coords.left}px, ${coords.top}px)`\n  // );\n}\n\nfunction handleLeave() {\n  this.classList.remove("trigger-enter", "trigger-enter-active");\n  dropdowBG.classList.remove("open");\n}\n\njavaScript.append(_followNav__WEBPACK_IMPORTED_MODULE_7__.jsRating);\ncss.append(_followNav__WEBPACK_IMPORTED_MODULE_7__.cssRating);\nhtml.append(_followNav__WEBPACK_IMPORTED_MODULE_7__.htmlRating);\npython.append(_followNav__WEBPACK_IMPORTED_MODULE_7__.pyRating);\nsqLite.append(_followNav__WEBPACK_IMPORTED_MODULE_7__.sqlRating);\nboostrap.append(_followNav__WEBPACK_IMPORTED_MODULE_7__.bsRating);\ntailwind.append(_followNav__WEBPACK_IMPORTED_MODULE_7__.twRating);\n\nlogoCont.append(\n  javaScript,\n  css,\n  html,\n  python,\n  sqLite,\n  boostrap,\n  tailwind,\n);\n\n//# sourceURL=webpack://real/./src/modules/components/logos.js?'
        );

        /***/
      },

    /***/ "./src/modules/components/navBtns.js":
      /*!*******************************************!*\
  !*** ./src/modules/components/navBtns.js ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "seeWorkBtn": () => (/* binding */ seeWorkBtn),\n/* harmony export */   "sendMsgBtn": () => (/* binding */ sendMsgBtn)\n/* harmony export */ });\nclass NavBtn {\n  constructor(text, icon, iconRight = true) {\n    this.text = text;\n    this.icon = icon;\n    this.iconRight = iconRight;\n  }\n  build() {\n    const cont = document.createElement("div");\n    cont.classList.add(\n      "fixed",\n      "top-[4.5rem]",\n      "right-10",\n      "w-fit",\n      "flex",\n      "items-center",\n      "gap-4",\n      "bg-secondary",\n      "border-2",\n      "border-sky-900",\n      "rounded",\n      "text-white",\n      "hover:text-sky-400",\n      "hover:scale-105",\n      "duration-500",\n      "px-6",\n      "py-4",\n      "cursor-pointer"\n    );\n\n    const text = document.createElement("text");\n    text.classList.add("text-xl");\n    text.innerText = this.text;\n\n    const icon = document.createElement("i");\n    icon.classList.add("fa-solid", this.icon, "fa-xl");\n\n    this.iconRight ? cont.append(text, icon) : cont.append(icon, text);\n\n    return cont;\n  }\n}\n\nconst seeWorkBtn = new NavBtn("See my work", "fa-angles-right").build();\nseeWorkBtn.classList.add("opacity-0");\n\nconst sendMsgBtn = new NavBtn("Contact me", "fa-angles-right").build();\n\n\n//# sourceURL=webpack://real/./src/modules/components/navBtns.js?'
        );

        /***/
      },

    /***/ "./src/modules/functions/storage.js":
      /*!******************************************!*\
  !*** ./src/modules/functions/storage.js ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "loadLocalStorage": () => (/* binding */ loadLocalStorage),\n/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _navigation_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation/navigate */ "./src/modules/navigation/navigate.js");\n\n\nfunction loadLocalStorage() {\n  const recentPage = JSON.parse(localStorage.getItem("current-page")) || "";\n\n  if (localStorage.getItem("current-page")) {\n    if (recentPage === "portfolio") return (0,_navigation_navigate__WEBPACK_IMPORTED_MODULE_0__.fastShowPorfolio)("portfolio");\n    if (recentPage === "contact") return (0,_navigation_navigate__WEBPACK_IMPORTED_MODULE_0__.fastShowContact)("contact");\n    (0,_navigation_navigate__WEBPACK_IMPORTED_MODULE_0__.slowShowAbout)("about");\n  } else {\n    localStorage.setItem("current-page", JSON.stringify("about"));\n    (0,_navigation_navigate__WEBPACK_IMPORTED_MODULE_0__.slowShowAbout)("about");\n  }\n}\n\nfunction updateLocalStorage(item, value) {\n  localStorage.setItem(item, JSON.stringify(value));\n}\n\n\n//# sourceURL=webpack://real/./src/modules/functions/storage.js?'
        );

        /***/
      },

    /***/ "./src/modules/functions/typeEffect.js":
      /*!*********************************************!*\
  !*** ./src/modules/functions/typeEffect.js ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "line": () => (/* binding */ line),\n/* harmony export */   "timer": () => (/* binding */ timer),\n/* harmony export */   "typeSentence": () => (/* binding */ typeSentence),\n/* harmony export */   "typeWord": () => (/* binding */ typeWord),\n/* harmony export */   "typeWords": () => (/* binding */ typeWords)\n/* harmony export */ });\nconst line = document.createElement("span");\nline.classList.add(\n  "w-[3rem]",\n  "h-full",\n  "text-white",\n  "animate-ping",\n  "duration-75"\n);\nline.innerText = "";\n\nfunction typeSentence(sentence, elem, speed = 100) {\n  sentence = sentence.split("/[,.]s/");\n\n  sentence.forEach((word) => {\n    typeWord(word, elem, speed);\n  });\n\n  // elem.removeChild(line);\n}\n\nasync function typeWord(text = "", elem, speed = 100) {\n  if (text.length === 0) return;\n\n  await timer(speed);\n\n  text[0] === " " ? (elem.innerText += "\\xa0") : (elem.innerText += text[0]);\n\n  typeWord(text.substring(1), elem, speed);\n}\n\nasync function typeWords(text = "", elem, speed = 100) {\n  if (text.length === 0) return;\n  let textArr = text.split(" ");\n\n  await timer(speed);\n\n  textArr[0] === " "\n    ? (elem.innerText += "\\xa0")\n    : (elem.innerText += ` ${textArr[0]} `);\n\n  typeWords(textArr.splice(1).join(" "), elem, speed);\n}\n\nfunction timer(speed) {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve();\n    }, speed);\n  });\n}\n\n\n//# sourceURL=webpack://real/./src/modules/functions/typeEffect.js?'
        );

        /***/
      },

    /***/ "./src/modules/navigation/navigate.js":
      /*!********************************************!*\
  !*** ./src/modules/navigation/navigate.js ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "fastShowAbout": () => (/* binding */ fastShowAbout),\n/* harmony export */   "fastShowContact": () => (/* binding */ fastShowContact),\n/* harmony export */   "fastShowPorfolio": () => (/* binding */ fastShowPorfolio),\n/* harmony export */   "slowShowAbout": () => (/* binding */ slowShowAbout)\n/* harmony export */ });\n/* harmony import */ var _components_aboutText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/aboutText */ "./src/modules/components/aboutText.js");\n/* harmony import */ var _components_logos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/logos */ "./src/modules/components/logos.js");\n/* harmony import */ var _components_navBtns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navBtns */ "./src/modules/components/navBtns.js");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/about */ "./src/modules/pages/about.js");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/contact */ "./src/modules/pages/contact.js");\n/* harmony import */ var _pages_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/portfolio */ "./src/modules/pages/portfolio.js");\n/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transitions */ "./src/modules/navigation/transitions.js");\n\n\n\n\n\n\n\n\nfunction slowShowAbout(currentPage) {\n  if (currentPage === "portfolio") (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.hidePage)(_pages_portfolio__WEBPACK_IMPORTED_MODULE_5__.portfolio);\n  if (currentPage === "contact") (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.hidePage)(_pages_contact__WEBPACK_IMPORTED_MODULE_4__.contact);\n\n  (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.showPage)(_pages_about__WEBPACK_IMPORTED_MODULE_3__.about);\n  (0,_components_aboutText__WEBPACK_IMPORTED_MODULE_0__.showAboutText)("slow");\n  (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.showElem)(_pages_about__WEBPACK_IMPORTED_MODULE_3__.avatarImage, 2400, "fadeinLeft");\n  (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.showLogos)(4200);\n  (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.showElem)(_components_navBtns__WEBPACK_IMPORTED_MODULE_2__.seeWorkBtn, 5000, "fadeinRight");\n\n  setTimeout(() => {\n    clearAnimations("about");\n  }, 5000);\n}\n\nfunction fastShowAbout(currentPage) {\n  if (currentPage === "portfolio") (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.hidePage)(_pages_portfolio__WEBPACK_IMPORTED_MODULE_5__.portfolio);\n  if (currentPage === "contact") (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.hidePage)(_pages_contact__WEBPACK_IMPORTED_MODULE_4__.contact);\n  if (currentPage !== "about") (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.showPage)(_pages_about__WEBPACK_IMPORTED_MODULE_3__.about);\n  if (currentPage === "about") clearTimeouts();\n\n  clearAnimations("about");\n  (0,_components_aboutText__WEBPACK_IMPORTED_MODULE_0__.addText)();\n\n  (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.showElem)(_pages_about__WEBPACK_IMPORTED_MODULE_3__.avatarImage, 0, "fadein");\n  (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.showLogos)(0);\n  (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.showElem)(_components_navBtns__WEBPACK_IMPORTED_MODULE_2__.seeWorkBtn, 0, "fadein");\n\n  setTimeout(() => {\n    clearAnimations("about");\n  }, 200);\n}\n\nfunction fastShowPorfolio(currentPage) {\n  if (currentPage === "about") (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.hidePage)(_pages_about__WEBPACK_IMPORTED_MODULE_3__.about);\n  if (currentPage === "contact") (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.hidePage)(_pages_contact__WEBPACK_IMPORTED_MODULE_4__.contact);\n\n  (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.showPage)(_pages_portfolio__WEBPACK_IMPORTED_MODULE_5__.portfolio);\n\n  setTimeout(() => {\n    clearAnimations("portfolio");\n  }, 200);\n}\n\nfunction fastShowContact(currentPage) {\n  if (currentPage === "about") (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.hidePage)(_pages_about__WEBPACK_IMPORTED_MODULE_3__.about);\n  if (currentPage === "portfolio") (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.hidePage)(_pages_portfolio__WEBPACK_IMPORTED_MODULE_5__.portfolio);\n\n  (0,_transitions__WEBPACK_IMPORTED_MODULE_6__.showPage)(_pages_contact__WEBPACK_IMPORTED_MODULE_4__.contact);\n\n  setTimeout(() => {\n    clearAnimations("contact");\n  }, 200);\n}\n\nfunction clearTimeouts() {\n  let id = window.setTimeout(() => {}, 0);\n\n  while (id--) {\n    window.clearTimeout(id);\n  }\n}\n\nfunction clearAnimations(currentPage) {\n  if (currentPage === "about") {\n    const aboutElements = [\n      _pages_about__WEBPACK_IMPORTED_MODULE_3__.aboutBackdrop,\n      _pages_about__WEBPACK_IMPORTED_MODULE_3__.avatarImage,\n      _components_aboutText__WEBPACK_IMPORTED_MODULE_0__.textCont,\n      _components_logos__WEBPACK_IMPORTED_MODULE_1__.logoCont,\n      _components_navBtns__WEBPACK_IMPORTED_MODULE_2__.seeWorkBtn,\n    ];\n    for (const elem of aboutElements) {\n      elem.classList.remove(\n        "animation-fadein",\n        "animation-fadeinLeft",\n        "animation-fadeinRight",\n        "animation-fadeout",\n        "animation-fadeoutLeft",\n        "animation-fadeoutRight"\n      );\n    }\n  }\n}\n\n\n//# sourceURL=webpack://real/./src/modules/navigation/navigate.js?'
        );

        /***/
      },

    /***/ "./src/modules/navigation/transitions.js":
      /*!***********************************************!*\
  !*** ./src/modules/navigation/transitions.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "hidePage": () => (/* binding */ hidePage),\n/* harmony export */   "showElem": () => (/* binding */ showElem),\n/* harmony export */   "showLogos": () => (/* binding */ showLogos),\n/* harmony export */   "showPage": () => (/* binding */ showPage)\n/* harmony export */ });\n/* harmony import */ var _components_logos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/logos */ "./src/modules/components/logos.js");\n/* harmony import */ var _functions_typeEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/typeEffect */ "./src/modules/functions/typeEffect.js");\n\n\n\nfunction showElem(elem, speed, animation) {\n  setTimeout(() => {\n    elem.classList.remove("opacity-0");\n    elem.classList.toggle(`animation-${animation}`);\n  }, speed);\n}\n\nfunction showPage(page) {\n  setTimeout(() => {\n    document.body.append(page);\n    page.classList.remove("hidden");\n  }, 300);\n}\n\nfunction hidePage(page) {\n  setTimeout(() => {\n    document.body.removeChild(page);\n    page.classList.add("hidden");\n  }, 200);\n}\n\nfunction showLogos(delay) {\n  setTimeout(async () => {\n    const list = Array.from(_components_logos__WEBPACK_IMPORTED_MODULE_0__.logoCont.childNodes).reverse();\n\n    for (const child of list) {\n      await (0,_functions_typeEffect__WEBPACK_IMPORTED_MODULE_1__.timer)(100);\n\n      child.classList.add(\n        "opacity-20",\n        "animation-fadein",\n        "animate-pulse",\n        "hover:opacity-100",\n        "hover:scale-125"\n      );\n      child.classList.toggle("opacity-0");\n      setTimeout(() => {\n        child.classList.remove("animation-fadein");\n      }, 100);\n\n      child.addEventListener("mouseenter", (e) => {\n        (0,_components_logos__WEBPACK_IMPORTED_MODULE_0__.logoHover)(e, true);\n      });\n      child.addEventListener("mouseleave", (e) => {\n        (0,_components_logos__WEBPACK_IMPORTED_MODULE_0__.logoHover)(e, false);\n      });\n    }\n  }, delay);\n}\n\n\n//# sourceURL=webpack://real/./src/modules/navigation/transitions.js?'
        );

        /***/
      },

    /***/ "./src/modules/pages/about.js":
      /*!************************************!*\
  !*** ./src/modules/pages/about.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "about": () => (/* binding */ about),\n/* harmony export */   "aboutBackdrop": () => (/* binding */ aboutBackdrop),\n/* harmony export */   "avatarImage": () => (/* binding */ avatarImage)\n/* harmony export */ });\n/* harmony import */ var _components_aboutText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/aboutText */ "./src/modules/components/aboutText.js");\n/* harmony import */ var _components_navBtns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navBtns */ "./src/modules/components/navBtns.js");\n/* harmony import */ var _components_logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/logos */ "./src/modules/components/logos.js");\n\n\n\n\nconst about = document.createElement("main");\nabout.classList.add(\n  "grid",\n  "items-center",\n  "w-full",\n  "h-full",\n  "overflow-x-hidden"\n);\nabout.id = "about-main";\n\nconst aboutBackdrop = document.createElement("div");\naboutBackdrop.classList.add(\n  "flex",\n  "justify-center",\n  "bg-secondary",\n  "border-y-0",\n  "border-sky-900",\n  "w-screen",\n  "h-fit",\n  "max-h-full",\n  "min-h-fit",\n  "md:min-h-[400px]",\n  "px-8",\n  "md:px-[4vw]",\n  "lg:px-[8vw]",\n  "py-8",\n  "animation-fadein"\n);\naboutBackdrop.style.boxShadow = "0 0 0 8px #060a21, 0 0 0 10px #0C4A6E";\n\nconst mainCont = document.createElement("div");\nmainCont.classList.add(\n  "grid",\n  "grid-cols-[1fr_2fr]",\n  "items-center",\n  "justify-center",\n  "gap-6",\n  "md:gap-12",\n  "xl:gap-20",\n  "w-fit",\n  "max-w-[1500px]"\n);\n\nconst imageCont = document.createElement("div");\nimageCont.classList.add("flex", "flex-col");\n\nconst avatarImage = document.createElement("img");\navatarImage.classList.add(\n  "about",\n  "w-full",\n  "min-w-[200px]",\n  "max-w-[400px]",\n  "relative",\n  "top-[-2px]",\n  "right-[0]",\n  "rounded-full",\n  "opacity-0"\n);\navatarImage.src = "./8bfdb009cd30e906ec05.png";\navatarImage.alt = "Avatar Tom";\n\n_components_aboutText__WEBPACK_IMPORTED_MODULE_0__.textCont.append(_components_logos__WEBPACK_IMPORTED_MODULE_2__.logoCont);\nimageCont.append(avatarImage);\nmainCont.append(imageCont, _components_aboutText__WEBPACK_IMPORTED_MODULE_0__.textCont);\naboutBackdrop.append(mainCont);\nabout.append(aboutBackdrop, _components_navBtns__WEBPACK_IMPORTED_MODULE_1__.seeWorkBtn, _components_logos__WEBPACK_IMPORTED_MODULE_2__.dropdowBG);\n\n\n//# sourceURL=webpack://real/./src/modules/pages/about.js?'
        );

        /***/
      },

    /***/ "./src/modules/pages/contact.js":
      /*!**************************************!*\
  !*** ./src/modules/pages/contact.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "contact": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _components_contactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/contactForm */ "./src/modules/components/contactForm.js");\n\n\nconst contact = document.createElement("main");\ncontact.classList.add(\n  "grid",\n  "items-center",\n  "h-full",\n  "w-full",\n  "overflow-x-hidden"\n);\ncontact.id = "contact-main";\n\nconst backdrop = document.createElement("div");\nbackdrop.classList.add(\n  "flex",\n  "flex-col",\n  "items-center",\n  "justify-center",\n  "gap-10",\n  "bg-secondary",\n  "h-fit",\n  "max-h-full",\n  "w-full",\n  "px-20",\n  "md:px-[10vw]",\n  "2xl:px-[18vw]",\n  "py-12",\n  "animation-fadein",\n  "shadow-inner",\n  "shadow-2xl"\n);\nbackdrop.style.boxShadow = "0 0 0 8px #060a21, 0 0 0 10px #0C4A6E";\n\nconst heading = document.createElement("h1");\nheading.classList.add(\n  "flex",\n  "gap-2",\n  "text-xl",\n  "md:text-2xl",\n  "lg:text-3xl",\n  "text-white",\n  "tracking-wide"\n);\nheading.innerText = "my e-mail:";\n\nconst myEmail = document.createElement("div");\nmyEmail.classList.add(\n  "text-xl",\n  "md:text-2xl",\n  "lg:text-3xl",\n  "text-white",\n  "hover:underline",\n  "hover:underline-offset-8",\n  "duration-500",\n  "tracking-wide",\n  "font-semibold",\n  "cursor-pointer"\n);\nmyEmail.innerText = "tomcodedthis@gmail.com";\nmyEmail.addEventListener("click", () => {\n  window.open("mailto:tomcodedthis@gmail.com");\n});\n\nconst ghLink = document.createElement("a");\nghLink.href = "https://github.com/tomcodedthis";\nghLink.target = "_blank";\n\nconst ghIcon = document.createElement("i");\nghIcon.classList.add("fa-brands", "fa-github", "fa-4x", "text-white", "hover:scale-125", "duration-500");\n\nheading.append(myEmail);\nghLink.append(ghIcon);\nbackdrop.append(_components_contactForm__WEBPACK_IMPORTED_MODULE_0__.form, heading, ghLink);\ncontact.append(backdrop);\n\n\n//# sourceURL=webpack://real/./src/modules/pages/contact.js?'
        );

        /***/
      },

    /***/ "./src/modules/pages/portfolio.js":
      /*!****************************************!*\
  !*** ./src/modules/pages/portfolio.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "portfolio": () => (/* binding */ portfolio)\n/* harmony export */ });\n/* harmony import */ var _images_site_previews_moneytools_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/site-previews/moneytools.png */ "./src/images/site-previews/moneytools.png");\n/* harmony import */ var _images_site_previews_weather_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/site-previews/weather.png */ "./src/images/site-previews/weather.png");\n/* harmony import */ var _images_site_previews_todolist_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/site-previews/todolist.png */ "./src/images/site-previews/todolist.png");\n/* harmony import */ var _images_site_previews_tictactoe_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/site-previews/tictactoe.png */ "./src/images/site-previews/tictactoe.png");\n/* harmony import */ var _components_navBtns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navBtns */ "./src/modules/components/navBtns.js");\n\n\n\n\n\n\nclass Project {\n  constructor(obj) {\n    this.src = obj.src;\n    this.name = obj.name;\n    this.info = obj.info;\n    this.site = obj.site;\n    this.code = obj.code;\n  }\n  build() {\n    const projectCont = document.createElement("div");\n    projectCont.classList.add(\n      "project-cont",\n      "grid",\n      "grid-rows-[50%_30%_20%]",\n      "rounded-xl",\n      "hover:scale-110",\n      "duration-500"\n    );\n    projectCont.addEventListener("mouseenter", projectEnter);\n    projectCont.addEventListener("mouseleave", projectLeave);\n    projectCont.style.boxShadow = "0 0 0 8px var(--secondary), 0 0 0 10px var(--accent)";\n\n    const top = document.createElement("div");\n    top.classList.add(\n      "hide-details",\n      "col-span-full",\n      "row-start-1",\n      "h-full",\n      "flex",\n      "flex-col",\n      "justify-center",\n      "align-center",\n      "gap-2",\n      "text-left",\n      "bg-primary",\n      "rounded-t-xl",\n      "py-2",\n      "px-4",\n      "opacity-0"\n    );\n    top.setAttribute("position", "top");\n\n    const name = document.createElement("div");\n    name.classList.add(\n      "w-100",\n      "rounded-t-xl",\n      "text-white",\n      "font-bold",\n      "text-2xl",\n      "opacity-80",\n      "text-left"\n    );\n    name.innerText = this.name;\n\n    const info = document.createElement("div");\n    info.classList.add("text-white", "font-medium", "text-lg", "opacity-80");\n    info.innerText = this.info;\n\n    const img = document.createElement("img");\n    img.classList.add(\n      "row-start-1",\n      "col-span-full",\n      "row-span-full",\n      "h-full",\n      "rounded-2xl"\n    );\n    img.src = this.src;\n    img.alt = `${this.name} Screenshot`;\n\n    const bottom = document.createElement("div");\n    bottom.classList.add(\n      "hide-details",\n      "col-span-full",\n      "row-start-3",\n      "relative",\n      "bottom-0",\n      "h-full",\n      "grid",\n      "grid-cols-2",\n      "rounded-b-xl",\n      "opacity-0"\n    );\n    bottom.setAttribute("position", "bottom");\n\n    const siteBtn = this.button(\n      "Site",\n      "fa-window-maximize",\n      "rounded-bl-xl",\n      this.site\n    );\n    const codeBtn = this.button("Code", "fa-code", "rounded-br-xl", this.code);\n\n    top.append(name, info);\n    bottom.append(siteBtn, codeBtn);\n    projectCont.append(img, top, bottom);\n\n    return projectCont;\n  }\n  button(name, iconName, radius, href) {\n    const link = document.createElement("a");\n    link.href = href;\n    link.target = "_blank";\n\n    const button = document.createElement("button");\n    button.classList.add(\n      "flex",\n      "items-center",\n      "justify-center",\n      "gap-4",\n      "text-gray-200",\n      "bg-primary",\n      "border-sky-900",\n      "text-xl",\n      "w-full",\n      "h-full",\n      "opacity-60",\n      "hover:opacity-100",\n      "hover:bg-primary",\n      "duration-500",\n      radius\n    );\n    button.innerText = name;\n    button;\n\n    const icon = document.createElement("i");\n    icon.classList.add("fa-solid", iconName);\n\n    button.append(icon);\n    link.append(button);\n\n    return link;\n  }\n}\n\nconst portfolio = document.createElement("main");\nportfolio.classList.add("grid", "items-center", "h-full", "w-full");\nportfolio.id = "portfolio-main";\n\nconst backdrop = document.createElement("div");\nbackdrop.classList.add(\n  "grid",\n  "grid-cols-1",\n  "lg:grid-cols-[repeat(4,_calc(50%_-_1rem))]",\n  "2xl:grid-cols-[repeat(4,_calc(700px_-_1rem))]",\n  "items-center",\n  "gap-14",\n  "2xl:gap-20",\n  "bg-secondary",\n  "max-h-full",\n  "w-full",\n  "px-12",\n  "md:px-[6vw]",\n  "2xl:px-[8vw]",\n  "py-10",\n  "overflow-x-scroll",\n  "animation-fadein"\n);\nbackdrop.style.boxShadow = "0 0 0 8px var(--primary), 0 0 0 10px var(--accent)";\n\nconst mtData = {\n  src: "./7643686e1a59b56eb4ec.png",\n  name: "Money-Tools",\n  info: "A web-app for tracking investments, using a Python backend and data stored in a postgreSQL database.",\n  site: "https://toolsformoney.herokuapp.com/",\n  code: "https://github.com/tomcodedthis/toolsformoney",\n};\nconst moneytools = new Project(mtData).build();\n\nconst wData = {\n  src: "./648cc877e4e1fa7fa2e2.png",\n  name: "How\'s The Weather",\n  info: "Web-app for checking location weather forecaset, utilising OpenWeather API.",\n  site: "https://tomcodedthis.github.io/odin-weather/",\n  code: "https://github.com/tomcodedthis/odin-weather",\n};\nconst weather = new Project(wData).build();\n\nconst todoData = {\n  src: "./69aca687a70d779b2826.png",\n  name: "To-Do-List",\n  info: "Web-app that uses local storage to write a to-do list. Utilising tags, locks and dates to organise the list.",\n  site: "https://tomcodedthis.github.io/odin-todolist/",\n  code: "https://github.com/tomcodedthis/odin-todolist",\n};\nconst todolist = new Project(todoData).build();\n\nconst tictactoeData = {\n  src: "./a66c02b854d3f58081c9.png",\n  name: "Tic-Tac-Toe",\n  info: "A JavaScript based game of TicTacToe, with both PvP and AI. It has two-levels of increasing difficulty.",\n  site: "https://tomcodedthis.github.io/odin-tictactoe/",\n  code: "https://github.com/tomcodedthis/odin-tictactoe",\n};\nconst tictactoe = new Project(tictactoeData).build();\n\nfunction projectEnter() {\n  const transConts = this.querySelectorAll(".hide-details");\n\n  for (const cont of transConts) {\n    cont.classList.remove("opactiy-0");\n    cont.classList.remove("animation-fadeout");\n\n    cont.classList.add("animation-fadein");\n    cont.classList.add("opacity-[70]");\n  }\n}\n\nfunction projectLeave() {\n  const transConts = this.querySelectorAll(".hide-details");\n\n  for (const cont of transConts) {\n    cont.classList.remove("opacity-[70]");\n    cont.classList.remove("animation-fadein");\n\n    cont.classList.add("opactiy-0"), cont.classList.add("animation-fadeout");\n  }\n}\n\nbackdrop.append(moneytools, weather, todolist, tictactoe);\nportfolio.append(backdrop, _components_navBtns__WEBPACK_IMPORTED_MODULE_4__.sendMsgBtn);\n\n\n//# sourceURL=webpack://real/./src/modules/pages/portfolio.js?'
        );

        /***/
      },

    /***/ "./src/modules/screen/small.js":
      /*!*************************************!*\
  !*** ./src/modules/screen/small.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "width1200PX": () => (/* binding */ width1200PX),\n/* harmony export */   "width770PX": () => (/* binding */ width770PX)\n/* harmony export */ });\n/* harmony import */ var _components_aboutText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/aboutText */ "./src/modules/components/aboutText.js");\n/* harmony import */ var _components_logos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/logos */ "./src/modules/components/logos.js");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/about */ "./src/modules/pages/about.js");\n\n\n\n\nfunction width770PX() {\n  if (!_components_aboutText__WEBPACK_IMPORTED_MODULE_0__.textCont.contains(_components_logos__WEBPACK_IMPORTED_MODULE_1__.logoCont)) return;\n\n  _components_aboutText__WEBPACK_IMPORTED_MODULE_0__.textCont.removeChild(_components_logos__WEBPACK_IMPORTED_MODULE_1__.logoCont);\n  _pages_about__WEBPACK_IMPORTED_MODULE_2__.about.append(_components_logos__WEBPACK_IMPORTED_MODULE_1__.logoCont);\n\n  _components_logos__WEBPACK_IMPORTED_MODULE_1__.logoCont.classList.add("px-10");\n}\nfunction width1200PX() {\n  if (_components_aboutText__WEBPACK_IMPORTED_MODULE_0__.textCont.contains(_components_logos__WEBPACK_IMPORTED_MODULE_1__.logoCont)) return;\n\n  _pages_about__WEBPACK_IMPORTED_MODULE_2__.about.removeChild(_components_logos__WEBPACK_IMPORTED_MODULE_1__.logoCont);\n  _components_aboutText__WEBPACK_IMPORTED_MODULE_0__.textCont.append(_components_logos__WEBPACK_IMPORTED_MODULE_1__.logoCont);\n}\n\n\n//# sourceURL=webpack://real/./src/modules/screen/small.js?'
        );

        /***/
      },

    /***/ "./src/images/icons/bootstrap-logo.png":
      /*!*********************************************!*\
  !*** ./src/images/icons/bootstrap-logo.png ***!
  \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "4b2881f31594d43cab42.png";\n\n//# sourceURL=webpack://real/./src/images/icons/bootstrap-logo.png?'
        );

        /***/
      },

    /***/ "./src/images/icons/css-logo.png":
      /*!***************************************!*\
  !*** ./src/images/icons/css-logo.png ***!
  \***************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "acdb21e2fa5890b40dfc.png";\n\n//# sourceURL=webpack://real/./src/images/icons/css-logo.png?'
        );

        /***/
      },

    /***/ "./src/images/icons/html5-logo.png":
      /*!*****************************************!*\
  !*** ./src/images/icons/html5-logo.png ***!
  \*****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "b7ea52200ef24d9edb3d.png";\n\n//# sourceURL=webpack://real/./src/images/icons/html5-logo.png?'
        );

        /***/
      },

    /***/ "./src/images/icons/javascript-logo.png":
      /*!**********************************************!*\
  !*** ./src/images/icons/javascript-logo.png ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "aba9e11826857c5c4cdb.png";\n\n//# sourceURL=webpack://real/./src/images/icons/javascript-logo.png?'
        );

        /***/
      },

    /***/ "./src/images/icons/main-avatar.png":
      /*!******************************************!*\
  !*** ./src/images/icons/main-avatar.png ***!
  \******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "8bfdb009cd30e906ec05.png";\n\n//# sourceURL=webpack://real/./src/images/icons/main-avatar.png?'
        );

        /***/
      },

    /***/ "./src/images/icons/python-logo.png":
      /*!******************************************!*\
  !*** ./src/images/icons/python-logo.png ***!
  \******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "320b403b3cf4662177d3.png";\n\n//# sourceURL=webpack://real/./src/images/icons/python-logo.png?'
        );

        /***/
      },

    /***/ "./src/images/icons/sqlite-logo.png":
      /*!******************************************!*\
  !*** ./src/images/icons/sqlite-logo.png ***!
  \******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "00922b052c5bb881db9a.png";\n\n//# sourceURL=webpack://real/./src/images/icons/sqlite-logo.png?'
        );

        /***/
      },

    /***/ "./src/images/icons/tailwind-logo.png":
      /*!********************************************!*\
  !*** ./src/images/icons/tailwind-logo.png ***!
  \********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "62f2c44a2da19e291293.png";\n\n//# sourceURL=webpack://real/./src/images/icons/tailwind-logo.png?'
        );

        /***/
      },

    /***/ "./src/images/site-previews/moneytools.png":
      /*!*************************************************!*\
  !*** ./src/images/site-previews/moneytools.png ***!
  \*************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "7643686e1a59b56eb4ec.png";\n\n//# sourceURL=webpack://real/./src/images/site-previews/moneytools.png?'
        );

        /***/
      },

    /***/ "./src/images/site-previews/tictactoe.png":
      /*!************************************************!*\
  !*** ./src/images/site-previews/tictactoe.png ***!
  \************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "a66c02b854d3f58081c9.png";\n\n//# sourceURL=webpack://real/./src/images/site-previews/tictactoe.png?'
        );

        /***/
      },

    /***/ "./src/images/site-previews/todolist.png":
      /*!***********************************************!*\
  !*** ./src/images/site-previews/todolist.png ***!
  \***********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "69aca687a70d779b2826.png";\n\n//# sourceURL=webpack://real/./src/images/site-previews/todolist.png?'
        );

        /***/
      },

    /***/ "./src/images/site-previews/weather.png":
      /*!**********************************************!*\
  !*** ./src/images/site-previews/weather.png ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "648cc877e4e1fa7fa2e2.png";\n\n//# sourceURL=webpack://real/./src/images/site-previews/weather.png?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
