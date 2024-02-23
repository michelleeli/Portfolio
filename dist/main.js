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

eval("document.addEventListener(\"DOMContentLoaded\", async () => {\n  const text = document.getElementById('text');\n  const mountain1 = document.getElementById('mountain1');\n  const mountain2 = document.getElementById('mountain2');\n  const mountain3 = document.getElementById('mountain3');\n  const mountain4 = document.getElementById('mountain4');\n  const bird = document.getElementById('bird');\n  window.addEventListener('scroll', () => {\n    let value = window.scrollY;\n    text.style.marginTop = value * 2.5 + 'px';\n    mountain1.style.left = value * -1.5 + 'px';\n    mountain2.style.left = value * -.7 + 'px';\n    mountain3.style.left = value * 1 + 'px';\n    mountain4.style.left = value * .8 + 'px';\n    bird.style.left = value * 1 + 'px';\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3VudGFpbjEiLCJtb3VudGFpbjIiLCJtb3VudGFpbjMiLCJtb3VudGFpbjQiLCJiaXJkIiwid2luZG93IiwidmFsdWUiLCJzY3JvbGxZIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJsZWZ0Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8yLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpXG4gICAgY29uc3QgbW91bnRhaW4xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50YWluMScpXG4gICAgY29uc3QgbW91bnRhaW4yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50YWluMicpXG4gICAgY29uc3QgbW91bnRhaW4zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50YWluMycpXG4gICAgY29uc3QgbW91bnRhaW40ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50YWluNCcpXG4gICAgY29uc3QgYmlyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaXJkJylcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKT0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIHRleHQuc3R5bGUubWFyZ2luVG9wID0gdmFsdWUgKiAyLjUgKyAncHgnO1xuICAgICAgICBtb3VudGFpbjEuc3R5bGUubGVmdCA9IHZhbHVlICogLTEuNSArICdweCdcbiAgICAgICAgbW91bnRhaW4yLnN0eWxlLmxlZnQgPSB2YWx1ZSAqIC0uNyArICdweCdcbiAgICAgICAgbW91bnRhaW4zLnN0eWxlLmxlZnQgPSB2YWx1ZSAqIDEgKyAncHgnXG4gICAgICAgIG1vdW50YWluNC5zdHlsZS5sZWZ0ID0gdmFsdWUgKiAuOCArICdweCdcbiAgICAgICAgYmlyZC5zdHlsZS5sZWZ0ID0gdmFsdWUgKiAxICsgJ3B4J1xuICAgIH0pXG59KVxuXG4iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdEQsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDNUMsTUFBTUMsU0FBUyxHQUFHSixRQUFRLENBQUNHLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDdEQsTUFBTUUsU0FBUyxHQUFHTCxRQUFRLENBQUNHLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDdEQsTUFBTUcsU0FBUyxHQUFHTixRQUFRLENBQUNHLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDdEQsTUFBTUksU0FBUyxHQUFHUCxRQUFRLENBQUNHLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDdEQsTUFBTUssSUFBSSxHQUFHUixRQUFRLENBQUNHLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFFNUNNLE1BQU0sQ0FBQ1IsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQUs7SUFDbkMsSUFBSVMsS0FBSyxHQUFHRCxNQUFNLENBQUNFLE9BQU87SUFDMUJULElBQUksQ0FBQ1UsS0FBSyxDQUFDQyxTQUFTLEdBQUdILEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSTtJQUN6Q04sU0FBUyxDQUFDUSxLQUFLLENBQUNFLElBQUksR0FBR0osS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUk7SUFDMUNMLFNBQVMsQ0FBQ08sS0FBSyxDQUFDRSxJQUFJLEdBQUdKLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJO0lBQ3pDSixTQUFTLENBQUNNLEtBQUssQ0FBQ0UsSUFBSSxHQUFHSixLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUk7SUFDdkNILFNBQVMsQ0FBQ0ssS0FBSyxDQUFDRSxJQUFJLEdBQUdKLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSTtJQUN4Q0YsSUFBSSxDQUFDSSxLQUFLLENBQUNFLElBQUksR0FBR0osS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJO0VBQ3RDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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