/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", async () => {\n  const text = document.getElementById('text');\n  const mountain1 = document.getElementById('mountain1');\n  const mountain2 = document.getElementById('mountain2');\n  const mountain3 = document.getElementById('mountain3');\n  const mountain4 = document.getElementById('mountain4');\n  const cloud1 = document.getElementById('cloud1');\n  const cloud2 = document.getElementById('cloud2');\n  const bird = document.getElementById('bird');\n  const pfp = document.getElementById('pfp');\n  window.addEventListener('scroll', () => {\n    let value = window.scrollY;\n    text.style.marginTop = value * 2.5 + 'px';\n    mountain1.style.left = value * -1.5 + 'px';\n    mountain2.style.left = value * -.7 + 'px';\n    mountain3.style.left = value * 1 + 'px';\n    mountain4.style.left = value * .8 + 'px';\n    bird.style.left = value * .5 + 'px';\n    cloud2.style.left = value * -1 + 'px';\n    cloud1.style.left = value * 1 + 'px';\n    pfp.style.bottom = value * 1 + 'px';\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3VudGFpbjEiLCJtb3VudGFpbjIiLCJtb3VudGFpbjMiLCJtb3VudGFpbjQiLCJjbG91ZDEiLCJjbG91ZDIiLCJiaXJkIiwicGZwIiwid2luZG93IiwidmFsdWUiLCJzY3JvbGxZIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJsZWZ0IiwiYm90dG9tIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8yLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpXG4gICAgY29uc3QgbW91bnRhaW4xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50YWluMScpXG4gICAgY29uc3QgbW91bnRhaW4yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50YWluMicpXG4gICAgY29uc3QgbW91bnRhaW4zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50YWluMycpXG4gICAgY29uc3QgbW91bnRhaW40ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50YWluNCcpXG4gICAgY29uc3QgY2xvdWQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3VkMScpXG4gICAgY29uc3QgY2xvdWQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3VkMicpXG4gICAgY29uc3QgYmlyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaXJkJylcbiAgICBjb25zdCBwZnAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGZwJylcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKT0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIHRleHQuc3R5bGUubWFyZ2luVG9wID0gdmFsdWUgKiAyLjUgKyAncHgnO1xuICAgICAgICBtb3VudGFpbjEuc3R5bGUubGVmdCA9IHZhbHVlICogLTEuNSArICdweCdcbiAgICAgICAgbW91bnRhaW4yLnN0eWxlLmxlZnQgPSB2YWx1ZSAqIC0uNyArICdweCdcbiAgICAgICAgbW91bnRhaW4zLnN0eWxlLmxlZnQgPSB2YWx1ZSAqIDEgKyAncHgnXG4gICAgICAgIG1vdW50YWluNC5zdHlsZS5sZWZ0ID0gdmFsdWUgKiAuOCArICdweCdcbiAgICAgICAgYmlyZC5zdHlsZS5sZWZ0ID0gdmFsdWUgKiAuNSArICdweCdcbiAgICAgICAgY2xvdWQyLnN0eWxlLmxlZnQgPSB2YWx1ZSAqIC0xICsgJ3B4J1xuICAgICAgICBjbG91ZDEuc3R5bGUubGVmdCA9IHZhbHVlICogMSArICdweCdcbiAgICAgICAgcGZwLnN0eWxlLmJvdHRvbSA9IHZhbHVlICogMSArICdweCdcbiAgICB9KVxufSlcblxuIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3RELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLE1BQU1DLFNBQVMsR0FBR0osUUFBUSxDQUFDRyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBQ3RELE1BQU1FLFNBQVMsR0FBR0wsUUFBUSxDQUFDRyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBQ3RELE1BQU1HLFNBQVMsR0FBR04sUUFBUSxDQUFDRyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBQ3RELE1BQU1JLFNBQVMsR0FBR1AsUUFBUSxDQUFDRyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBQ3RELE1BQU1LLE1BQU0sR0FBR1IsUUFBUSxDQUFDRyxjQUFjLENBQUMsUUFBUSxDQUFDO0VBQ2hELE1BQU1NLE1BQU0sR0FBR1QsUUFBUSxDQUFDRyxjQUFjLENBQUMsUUFBUSxDQUFDO0VBQ2hELE1BQU1PLElBQUksR0FBR1YsUUFBUSxDQUFDRyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLE1BQU1RLEdBQUcsR0FBR1gsUUFBUSxDQUFDRyxjQUFjLENBQUMsS0FBSyxDQUFDO0VBRTFDUyxNQUFNLENBQUNYLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFLO0lBQ25DLElBQUlZLEtBQUssR0FBR0QsTUFBTSxDQUFDRSxPQUFPO0lBQzFCWixJQUFJLENBQUNhLEtBQUssQ0FBQ0MsU0FBUyxHQUFHSCxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUk7SUFDekNULFNBQVMsQ0FBQ1csS0FBSyxDQUFDRSxJQUFJLEdBQUdKLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJO0lBQzFDUixTQUFTLENBQUNVLEtBQUssQ0FBQ0UsSUFBSSxHQUFHSixLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSTtJQUN6Q1AsU0FBUyxDQUFDUyxLQUFLLENBQUNFLElBQUksR0FBR0osS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJO0lBQ3ZDTixTQUFTLENBQUNRLEtBQUssQ0FBQ0UsSUFBSSxHQUFHSixLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUk7SUFDeENILElBQUksQ0FBQ0ssS0FBSyxDQUFDRSxJQUFJLEdBQUdKLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSTtJQUNuQ0osTUFBTSxDQUFDTSxLQUFLLENBQUNFLElBQUksR0FBR0osS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUk7SUFDckNMLE1BQU0sQ0FBQ08sS0FBSyxDQUFDRSxJQUFJLEdBQUdKLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSTtJQUNwQ0YsR0FBRyxDQUFDSSxLQUFLLENBQUNHLE1BQU0sR0FBR0wsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJO0VBQ3ZDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8yLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;