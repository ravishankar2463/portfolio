(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\GAMEING\Documents\Codeing\WebDev\Angular\portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BRre":
/*!*******************************************************!*\
  !*** ./src/app/sections/contact/contact.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-tilt */ "WPFe");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__);



class ContactComponent {
    constructor() { }
    ngOnInit() {
        this.tilt();
    }
    tilt() {
        const contact_card = document.getElementById("contact-card");
        console.log(contact_card);
        vanilla_tilt__WEBPACK_IMPORTED_MODULE_1___default.a.init(contact_card, {
            max: 5,
            speed: 300,
            scale: 1.05,
            // speed: 1000,    // Speed of the enter/exit transition
            transition: true,
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 53, vars: 1, consts: [["id", "contact", 1, "d-flex", "align-items-center"], [1, "container"], [1, "row", "justify-content-center"], ["id", "contact-card", 1, "col-lg-10"], [1, "wrapper"], [1, "row", "no-gutters"], ["id", "contact-left", 1, "col-md-6", "p-0", "d-flex", "align-items-stretch"], [1, "contact-wrap", "w-100", "p-md-5", "p-4", "py-5"], [1, "mb-4", "text-capitalize"], ["id", "form-message-warning", 1, "mb-4"], ["id", "form-message-success", 1, "mb-4"], ["id", "contactForm", "name", "contactForm", 1, "contactForm"], [1, "row"], [1, "col-md-12"], [1, "form-group", "hoverable"], ["type", "text", "name", "name", "id", "name", "placeholder", "Name", 1, "form-control"], ["type", "email", "name", "email", "id", "email", "placeholder", "Email", 1, "form-control"], ["type", "text", "name", "subject", "id", "subject", "placeholder", "Subject", 1, "form-control"], ["name", "message", "id", "message", "cols", "30", "rows", "6", "placeholder", "Message", 1, "form-control"], [1, "col-md-12", "mt-3"], ["type", "submit", "value", "Send Message", 1, "btn", "btn-primary", 3, "disabled"], [1, "submitting"], ["id", "contact-right", 1, "col-md-6", "p-0", "d-flex", "align-items-stretch"], [1, "info-wrap", "w-100", "p-md-5", "p-4", "py-5", "img"], [1, "heading"], [1, "mb-4"], [1, "dbox", "d-flex", "align-items-center"], [1, "text", "hoverable"], [1, ""], ["href", "mailto:john-doe@gmail.com"], [1, "heading", "mt-5"], ["id", "social-icons", 1, "dbox", "d-flex", "mt-2", "mt-md-3"], ["href", "https://github.com/ravishankar2463", "target", "_blank"], [1, "icon", "social-icon", "d-flex", "align-items-center", "justify-content-center"], [1, "fa", "fa-github"], ["href", "https://www.linkedin.com/in/ravi-shankar-216b101a9/", "target", "_blank"], [1, "icon", "social-icon", "d-flex", "align-items-center", "justify-content-center", "ms-3"], [1, "fa", "fa-linkedin"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Write to me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Your message was sent, thank you! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Connect with me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "I'm open for any suggestion or just to have a chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "john-doe@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "See my work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    } }, styles: ["input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, textarea[_ngcontent-%COMP%]:-webkit-autofill, textarea[_ngcontent-%COMP%]:-webkit-autofill:hover, textarea[_ngcontent-%COMP%]:-webkit-autofill:focus, select[_ngcontent-%COMP%]:-webkit-autofill, select[_ngcontent-%COMP%]:-webkit-autofill:hover, select[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  -webkit-text-fill-color: beige;\n  box-shadow: 0 0 0px 1000px #000 inset;\n  -webkit-box-shadow: 0 0 0px 1000px #000 inset;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n#contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 3em;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.8) !important;\n  font-size: 1.4em;\n  border-radius: 0px;\n  box-shadow: none !important;\n  margin-bottom: 2em;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n#contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: rgba(255, 255, 255, 0.5) !important;\n}\n#contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: rgba(255, 255, 255, 0.5) !important;\n}\n#contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: rgba(255, 255, 255, 0.5) !important;\n}\n#contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: rgba(255, 255, 255, 0.5) !important;\n}\n#contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, #contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:active {\n  background: transparent;\n  border-color: rgba(255, 255, 255, 0.829) !important;\n}\n#contactForm[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  height: inherit !important;\n}\n#contact[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  border-radius: 1em;\n  box-shadow: 2px 2px 18px black;\n}\n#contact[_ngcontent-%COMP%]   .contact-wrap[_ngcontent-%COMP%] {\n  background: #272a34;\n}\n#contact[_ngcontent-%COMP%]   .contact-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%] {\n  background: #1c1e25;\n  font-size: 1.5em;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  position: relative;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   .dbox[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 2.5em;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   .dbox[_ngcontent-%COMP%]:last-child() {\n  margin-bottom: 0;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   .dbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   .dbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #d6d6d6;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   .dbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.521);\n  transition: color 0.2s;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   .dbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f65c78;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   .dbox[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.02);\n  transition: transform 0.2s ease-out;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   .dbox[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   .dbox[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   .dbox[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:hover   .fa[_ngcontent-%COMP%] {\n  transition: color 0.3s linear;\n  color: #f65c78 !important;\n}\n#contact[_ngcontent-%COMP%]   .info-wrap[_ngcontent-%COMP%]   .dbox[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: calc(100% - 50px);\n}\n#contact[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-width: 1px;\n  border-radius: 2px;\n  font-size: 14px;\n  font-weight: 400;\n}\n#contact[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  padding: 0;\n}\n#contactForm[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: #f65c78;\n  font-size: 12px;\n}\n#contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n#message[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n#form-message-warning[_ngcontent-%COMP%], #form-message-success[_ngcontent-%COMP%] {\n  display: none;\n}\n#form-message-warning[_ngcontent-%COMP%] {\n  color: red;\n}\n#form-message-success[_ngcontent-%COMP%] {\n  color: greenyellow;\n  font-size: 18px;\n  font-weight: 500;\n}\n.submitting[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  padding: 10px 0;\n  display: none;\n  font-size: 16px;\n  font-weight: 500;\n}\n#contact[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #faeee7;\n}\n@media (max-width: 768px) {\n  #contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    height: 2em;\n  }\n\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin: 2em 0em;\n    padding: 2em;\n    text-align: center;\n  }\n\n  #contact[_ngcontent-%COMP%]   #contact-right[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  #contact[_ngcontent-%COMP%]   #contact-right[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  #contact[_ngcontent-%COMP%]   #contact-right[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n#contact[_ngcontent-%COMP%]   #contact-card[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFBO0FBQ0E7Ozs7Ozs7OztFQVNFLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLHlEQUFBO0VBQUEsaURBQUE7QUFDRjtBQUVBO0VBQ0MsV0FBQTtFQUVBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDRyxrQkFBQTtFQUNILGlEQUFBO0FBQUQ7QUFFQztFQUErQix3QkFBQTtFQUM3QiwwQ0FBQTtBQUNIO0FBQ0M7RUFBc0IsZ0JBQUE7RUFDcEIsMENBQUE7QUFFSDtBQUFDO0VBQTBCLFVBQUE7RUFDeEIsMENBQUE7QUFHSDtBQURDO0VBQXFCLGdCQUFBO0VBQ25CLDBDQUFBO0FBSUg7QUFGQztFQUNDLHVCQUFBO0VBQ0EsbURBQUE7QUFJRjtBQURBO0VBQ0MsMEJBQUE7QUFJRDtBQUNBO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSw4QkFBQTtBQUVEO0FBQUE7RUFDQyxtQkFBQTtBQUdEO0FBRkM7RUFDQyxZQUFBO0FBSUY7QUFFQTtFQUNDLG1CQUFBO0VBQ0csZ0JBQUE7QUFDSjtBQUFDO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQUM7RUFDQyxXQUFBO0VBQ0Esb0JBQUE7QUFFRjtBQURFO0VBQ0MsZ0JBQUE7QUFHSDtBQUFFO0VBQ0MsZ0JBQUE7QUFFSDtBQURHO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FBR0o7QUFERztFQUNDLGlDQUFBO0VBQ1ksc0JBQUE7QUFHaEI7QUFEWTtFQUNJLGNBQUE7QUFHaEI7QUFBRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNTLG1DQUFBO0FBRVo7QUFERztFQUNDLGVBQUE7RUFDQSxZQUFBO0FBR0o7QUFDUTtFQUNJLHFCQUFBO0FBQ1o7QUFFUTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7QUFBWjtBQUdFO0VBQ0Msd0JBQUE7QUFESDtBQVVBO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUEQ7QUFvQkM7RUFDQyxZQUFBO0VBQ0EsaURBQUE7RUFDQSxVQUFBO0FBakJGO0FBc0JDO0VBQ0MsY0FBQTtFQUNBLGVBQUE7QUFuQkY7QUFxQkM7RUFDQyxlQUFBO0FBbkJGO0FBc0JBO0VBQ0MsZ0JBQUE7QUFuQkQ7QUFxQkE7RUFDQyxhQUFBO0FBbEJEO0FBb0JBO0VBQ0MsVUFBQTtBQWpCRDtBQW1CQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaEJEO0FBa0JBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWZEO0FBcUJBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQWxCSjtBQXFCQTtFQUVJO0lBQ0ksV0FBQTtFQW5CTjs7RUFzQkU7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBbkJOOztFQXNCRTtJQUNJLGdCQUFBO0VBbkJOOztFQXNCRTtJQUNJLGtCQUFBO0VBbkJOOztFQXNCRTtJQUNJLGtCQUFBO0VBbkJOO0FBQ0Y7QUF1QkE7RUFDQyxlQUFBO0FBckJEIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2hhbmdlIEF1dG9jb21wbGV0ZSBzdHlsZXMgaW4gQ2hyb21lKi9cclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlciwgXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGwsXHJcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXHJcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsLFxyXG5zZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbDpob3Zlcixcclxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBiZWlnZTtcclxuICBib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCAjMDAwIGluc2V0O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggIzAwMCBpbnNldDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4jY29udGFjdEZvcm0gLmZvcm0tY29udHJvbCB7XHJcblx0aGVpZ2h0OiAzZW07XHJcbiAgICBcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCkgIWltcG9ydGFudDtcclxuXHRmb250LXNpemU6IDEuNGVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xyXG5cclxuXHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG5cdCAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCY6Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xyXG5cdCAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMCsgKi9cclxuXHQgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQmOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xyXG5cdCAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdCY6Zm9jdXMsICY6YWN0aXZlIHtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODI5KSAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG4jY29udGFjdEZvcm0gdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuXHRoZWlnaHQ6IGluaGVyaXQhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbiNjb250YWN0IC53cmFwcGVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym9yZGVyLXJhZGl1czogMWVtO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDIxcHggNDFweCAtMTNweCByZ2JhKDAsMCwwLDAuMTgpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogMHB4IDIxcHggNDFweCAtMTNweCByZ2JhKDAsMCwwLDAuMTgpO1xyXG5cdGJveC1zaGFkb3c6IDJweCAycHggMThweCBibGFjaztcclxufVxyXG4jY29udGFjdCAuY29udGFjdC13cmFwe1xyXG5cdGJhY2tncm91bmQ6ICMyNzJhMzQ7XHJcblx0aDN7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiNjb250YWN0IC5pbmZvLXdyYXB7XHJcblx0YmFja2dyb3VuZDogZGFya2VuKCMyNzJhMzQsNSUpO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuXHRoM3tcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQuZGJveHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMi41ZW07XHJcblx0XHQmOmxhc3QtY2hpbGQoKXtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdH1cclxuICAgICAgICBcclxuXHRcdHB7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdHNwYW57XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRjb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGF7XHJcblx0XHRcdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjEpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmNjVjNzg7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHRcdC5pY29ue1xyXG5cdFx0XHR3aWR0aDogNTBweDtcclxuXHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjAyKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XHJcblx0XHRcdHNwYW57XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuICAgICAgICAuc29jaWFsLWljb246aG92ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NpYWwtaWNvbjpob3ZlciAuZmF7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgbGluZWFyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y2NWM3OCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcblx0XHQudGV4dHtcclxuXHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNjb250YWN0IC5idG4ge1xyXG5cdHBhZGRpbmc6IDEycHggMTZweDtcclxuXHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNjb250YWN0IC5jb250YWN0Rm9ybXtcclxuXHQuZm9ybS1jb250cm9se1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHR9XHJcbn1cclxuLy8gRm9ybXMgc3R5bGVcclxuI2NvbnRhY3RGb3JtIHtcclxuXHQuZXJyb3Ige1xyXG5cdFx0Y29sb3I6ICNmNjVjNzg7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG5cdC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdH1cclxufVxyXG4jbWVzc2FnZSB7XHJcblx0cmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4jZm9ybS1tZXNzYWdlLXdhcm5pbmcsICNmb3JtLW1lc3NhZ2Utc3VjY2VzcyB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4jZm9ybS1tZXNzYWdlLXdhcm5pbmcge1xyXG5cdGNvbG9yOiByZWQ7XHJcbn1cclxuI2Zvcm0tbWVzc2FnZS1zdWNjZXNzIHtcclxuXHRjb2xvcjogZ3JlZW55ZWxsb3c7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnN1Ym1pdHRpbmcge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDEwcHggMDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4jY29udGFjdHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZWVlNztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgI2NvbnRhY3RGb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0IC5jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAyZW0gMGVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3QgI2NvbnRhY3QtcmlnaHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdCAjY29udGFjdC1yaWdodCAuaGVhZGluZ3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3QgI2NvbnRhY3QtcmlnaHQgLmhlYWRpbmcgKyBwe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiNjb250YWN0ICNjb250YWN0LWNhcmR7XHJcblx0bWFyZ2luLXRvcDogMmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "page-footer", "font-small"], [1, "footer-copyright", "text-center", "py-3", "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2021 Copyright: Ravi Shankar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-footer[_ngcontent-%COMP%] {\n  background-color: #1c1e25;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFlMjU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/landing/landing.component */ "lx6Z");
/* harmony import */ var _sections_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/about/about.component */ "mnDm");
/* harmony import */ var _sections_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/skills/skills.component */ "tFjX");
/* harmony import */ var _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/contact/contact.component */ "BRre");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");







class AppComponent {
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"], _sections_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _sections_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var lottie_web_build_player_lottie_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-web/build/player/lottie_light */ "qFE6");
/* harmony import */ var lottie_web_build_player_lottie_light__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_web_build_player_lottie_light__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/landing/landing.component */ "lx6Z");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _sections_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/about/about.component */ "mnDm");
/* harmony import */ var _sections_skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/skills/skills.component */ "tFjX");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/contact/contact.component */ "BRre");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");















function playerFactory() {
    return lottie_web_build_player_lottie_light__WEBPACK_IMPORTED_MODULE_3___default.a;
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_2__["LottieModule"].forRoot({
                player: playerFactory,
                useCache: true,
            }),
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _sections_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _sections_skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
        _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_2__["LottieModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _sections_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _sections_skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
                    _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_2__["LottieModule"].forRoot({
                        player: playerFactory,
                        useCache: true,
                    }),
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 4, vars: 0, consts: [[1, "navbar", "sticky-top", "navbar-dark", "bg-dark", "p-4"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sticky top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5ke1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lx6Z":
/*!*******************************************************!*\
  !*** ./src/app/sections/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lottie */ "DPnb");



class LandingComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.options = {
            path: 'assets/56922-code-typing-concept.json',
        };
    }
    ngOnInit() {
    }
    animationCreated(animationItem) {
        this.animationItem = animationItem;
    }
    stop() {
        this.ngZone.runOutsideAngular(() => this.animationItem.stop());
    }
    play() {
        this.ngZone.runOutsideAngular(() => this.animationItem.play());
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 19, vars: 1, consts: [["id", "landing", 1, "d-flex", "align-items-center"], [1, "container-fluid"], [1, "row", "d-flex", "align-items-center", "justify-content-between"], [1, "col-12", "col-md-6", "d-flex", "justify-content-center", "mb-5", "order-1", "order-md-0"], [1, "content", "bg-white", "rounded-big", "p-5", "text-center", "hoverable"], [1, "text-muted", "mt-4"], [1, "d-block", "text-light-red"], ["href", "#contact", "role", "button", 1, "btn", "btn-primary", "btn-xl", "hoverable"], ["aria-hidden", "true", 1, "fa", "fa-address-card", "me-3"], [1, "col-12", "col-md-6", "d-flex", "justify-content-center", "order-0", "order-md-1"], [1, "animation", "ml-5", "hoverable"], [3, "options", "animationCreated"], ["id", "arrow", "href", "#about", 1, "arrow", "down", "hoverable"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " You have landed on the portfolio of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ravi Shankar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-lottie", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationCreated", function LandingComponent_Template_ng_lottie_animationCreated_17_listener($event) { return ctx.animationCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_1__["LottieComponent"]], styles: [".arrow[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  border-right: 3.5px solid black;\n  border-bottom: 3.5px solid black;\n  display: inline-block;\n  transition: transform 0.2s ease-in-out;\n}\n\n.down[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.down[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(45deg);\n}\n\n@media (max-width: 1024px) {\n  .arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n#landing[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 1.3rem;\n  width: auto;\n  height: 100vh;\n  background-color: rgba(255, 255, 255, 0.01);\n}\n\n#landing[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n#landing[_ngcontent-%COMP%]::after {\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: -3;\n  position: absolute;\n  content: \"\";\n  background-image: url('geometric-leaves.png');\n  background-color: rgba(161, 255, 206, 0.4);\n  background-blend-mode: multiply;\n  opacity: 0.5;\n}\n\n#landing[_ngcontent-%COMP%]   #arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 90%;\n  left: 47%;\n  width: 4em;\n  height: 4em;\n}\n\n#landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 88ch;\n  box-shadow: 5px 10px 18px #888888;\n  transform: skewX(1deg) rotate(-0.5deg);\n  animation: fade-in 2s ease;\n  transition: transform 0.2s ease-in-out;\n}\n\n#landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:hover {\n  transform: skewX(1deg) rotate(-1deg) scale(1.1);\n}\n\n#landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5.5em;\n  align-self: start;\n}\n\n#landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n}\n\n#landing[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n  --anim: transform 0.1s ease-in-out;\n  position: relative;\n  width: 50%;\n  height: auto;\n  margin-bottom: 5em;\n  transform: rotate(2deg);\n  transition: transform 0.1s linear;\n}\n\n#landing[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n#landing[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  width: 130%;\n  height: 150%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) skewY(-3deg);\n  border-radius: 10%;\n  background-color: rgba(98, 210, 206, 0.22);\n  z-index: -1;\n  box-shadow: 10px 7px 12px #888888;\n  transition: var(--anim);\n}\n\n#landing[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  width: 130%;\n  height: 150%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) skewY(3deg) skewX(3deg);\n  border-radius: 10%;\n  background-color: rgba(195, 60, 18, 0.22);\n  z-index: -2;\n  box-shadow: -3px -7px 12px #888888;\n  transition: var(--anim);\n}\n\n#landing[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]:hover:after {\n  transform: translate(-50%, -50%) skewY(3deg);\n  box-shadow: -3px -7px 12px #888888;\n  z-index: -2;\n}\n\n#landing[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]:hover::before {\n  transform: translate(-50%, -50%) skewY(-3deg);\n  box-shadow: 10px 7px 12px #888888;\n  z-index: -1;\n}\n\n@media (max-width: 1024px) {\n  #landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin: 0.5em 0 4.3em 1em;\n    text-align: justify;\n  }\n}\n\n@media (max-width: 768px) {\n  #landing[_ngcontent-%COMP%] {\n    width: auto;\n    height: auto;\n  }\n\n  #landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin: 0.5em 0 4.3em 0;\n    text-align: justify;\n  }\n\n  #landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 2.5em;\n  }\n\n  #landing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    padding: 0 0.5em;\n  }\n\n  #landing[_ngcontent-%COMP%]   #arrow[_ngcontent-%COMP%] {\n    left: auto;\n    top: 93%;\n    width: 2em;\n    height: 2em;\n  }\n\n  #landing[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n    width: 35%;\n    margin: 3.1em auto 5em auto;\n  }\n\n  #landing[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]::after {\n    width: 120%;\n    height: 130%;\n  }\n}\n\n@media (max-width: 640px) {\n  #landing[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n    width: 60%;\n    margin: 5.4em auto 5em auto;\n    transform: rotate(0deg);\n  }\n\n  #landing[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]::after {\n    width: 110%;\n    height: 120%;\n  }\n\n  #landing[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]::before {\n    width: 110%;\n    height: 120%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1DQUFBO0FBQ0o7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtBQUNGOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QUFGSjs7QUFLQTtFQUNJLHFCQUFBO0FBRko7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0VBQ0EsMENBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLHNDQUFBO0FBSEo7O0FBTUE7RUFDSSwrQ0FBQTtBQUhKOztBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU9BO0VBQ0ksZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtBQUpKOztBQU9BO0VBQ0kscUJBQUE7QUFKSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU9BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdEQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FBSko7O0FBT0E7RUFDSSw0Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU9BO0VBQ0ksNkNBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7QUFKSjs7QUFPQTtFQUNJO0lBQ0kseUJBQUE7SUFDQSxtQkFBQTtFQUpOO0FBQ0Y7O0FBUUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBTk47O0VBU0U7SUFDSSx1QkFBQTtJQUNBLG1CQUFBO0VBTk47O0VBU0U7SUFDSSxrQkFBQTtJQUNBLGdCQUFBO0VBTk47O0VBU0U7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBTk47O0VBU0U7SUFDSSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBTk47O0VBU0U7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUFOTjs7RUFTRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBTk47QUFDRjs7QUFTQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0lBQ0EsdUJBQUE7RUFQTjs7RUFVRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBUE47O0VBVUU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQVBOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJyb3cge1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzLjVweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206IDMuNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmRvd24ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4uZG93bjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmFycm93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiNsYW5kaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMSUpO1xyXG59XHJcblxyXG4jbGFuZGluZyBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuI2xhbmRpbmc6OmFmdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHotaW5kZXg6IC0zO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZ2VvbWV0cmljLWxlYXZlcy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAyNTUsIDIwNiwwLjQpO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuI2xhbmRpbmcgI2Fycm93e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5MCU7XHJcbiAgICBsZWZ0OiA0NyU7XHJcbiAgICB3aWR0aDogNGVtO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbn1cclxuXHJcbiNsYW5kaW5nIC5jb250ZW50e1xyXG4gICAgd2lkdGg6IDg4Y2g7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICM4ODg4ODg7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDFkZWcpIHJvdGF0ZSgtMC41ZGVnKTtcclxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAycyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNsYW5kaW5nIC5jb250ZW50OmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgxZGVnKSByb3RhdGUoLTFkZWcpIHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbiNsYW5kaW5nIC5jb250ZW50IGgxe1xyXG4gICAgZm9udC1zaXplOiA1LjVlbTtcclxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG59XHJcblxyXG5cclxuI2xhbmRpbmcgLmNvbnRlbnQgcHtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuXHJcbiNsYW5kaW5nIC5hbmltYXRpb257XHJcbiAgICAtLWFuaW06IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgbGluZWFyO1xyXG59XHJcblxyXG4jbGFuZGluZyAuYW5pbWF0aW9uOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4jbGFuZGluZyAuYW5pbWF0aW9uOjphZnRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEzMCU7XHJcbiAgICBoZWlnaHQ6IDE1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2tld1koLTNkZWcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk4IDIxMCAyMDYgLyAyMiUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDdweCAxMnB4ICM4ODg4ODg7XHJcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1hbmltKTtcclxufVxyXG5cclxuI2xhbmRpbmcgLmFuaW1hdGlvbjo6YmVmb3Jle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTMwJTtcclxuICAgIGhlaWdodDogMTUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBza2V3WSgzZGVnKSBza2V3WCgzZGVnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUgNjAgMTggLyAyMiUpO1xyXG4gICAgei1pbmRleDogLTI7XHJcbiAgICBib3gtc2hhZG93OiAtM3B4IC03cHggMTJweCAjODg4ODg4O1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tYW5pbSk7XHJcbn1cclxuXHJcbiNsYW5kaW5nIC5hbmltYXRpb246aG92ZXI6YWZ0ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNrZXdZKDNkZWcpO1xyXG4gICAgYm94LXNoYWRvdzogLTNweCAtN3B4IDEycHggIzg4ODg4ODtcclxuICAgIHotaW5kZXg6IC0yO1xyXG59XHJcblxyXG4jbGFuZGluZyAuYW5pbWF0aW9uOmhvdmVyOjpiZWZvcmV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNrZXdZKC0zZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggN3B4IDEycHggIzg4ODg4ODtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAjbGFuZGluZyAuY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDAuNWVtIDAgNC4zZW0gMWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICNsYW5kaW5ne1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAjbGFuZGluZyAuY29udGVudHtcclxuICAgICAgICBtYXJnaW46IDAuNWVtIDAgNC4zZW0gMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG5cclxuICAgICNsYW5kaW5nIC5jb250ZW50IGgxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgICNsYW5kaW5nIC5jb250ZW50IHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgICNsYW5kaW5nICNhcnJvd3tcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHRvcDogOTMlO1xyXG4gICAgICAgIHdpZHRoOiAyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAyZW07XHJcbiAgICB9XHJcblxyXG4gICAgI2xhbmRpbmcgLmFuaW1hdGlvbntcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIG1hcmdpbjogMy4xZW0gYXV0byA1ZW0gYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAjbGFuZGluZyAuYW5pbWF0aW9uOjphZnRlcntcclxuICAgICAgICB3aWR0aDogMTIwJTtcclxuICAgICAgICBoZWlnaHQ6IDEzMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgI2xhbmRpbmcgLmFuaW1hdGlvbntcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIG1hcmdpbjogNS40ZW0gYXV0byA1ZW0gYXV0bztcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAjbGFuZGluZyAuYW5pbWF0aW9uOjphZnRlcntcclxuICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI2xhbmRpbmcgLmFuaW1hdGlvbjo6YmVmb3Jle1xyXG4gICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgIGhlaWdodDogMTIwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "mnDm":
/*!***************************************************!*\
  !*** ./src/app/sections/about/about.component.ts ***!
  \***************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AboutComponent_p_231_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Currently open to jobs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.currentlyOpenToJobs = false;
        this.options = {
            path: 'assets/58598-humans.json',
        };
    }
    ngOnInit() {
    }
    animationCreated(animationItem) {
        this.animationItem = animationItem;
        this.animationItem.setSpeed(0.6);
        console.log(animationItem);
    }
    stop() {
        this.ngZone.runOutsideAngular(() => this.animationItem.stop());
    }
    play() {
        this.ngZone.runOutsideAngular(() => this.animationItem.play());
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 236, vars: 2, consts: [["id", "about"], ["id", "hexagon-hover-background"], [1, "hexagon-container"], [1, "hexagon-row"], [1, "hexagon"], ["id", "about-front", 1, "d-flex", "align-items-center", "flex-column", "justify-content-start"], [1, "container", "align-self-start"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-8", "d-flex", "justify-content-center", "heading", "hoverable"], [1, "text-dark", "text-center", "px-3"], [1, "container-fluid"], [1, "row", "d-flex", "justify-content-evenly", "align-items-center", "flex-column", "flex-lg-row"], [1, "col-12", "col-md-5", "animation", "hoverable"], [3, "options", "animationCreated"], [1, "col-12", "col-md-5", "content", "text-center", "text-md-justify"], [1, "d-block", "d-sm-inline"], [1, "d-block", "d-sm-inline", "mt-3", "mt-sm-0"], ["class", "mb-0 mt-4 p-0 text-dark-red", 4, "ngIf"], ["href", "https://ravishankar2463.github.io/my-cv/", "target", "_blank", 1, "hoverable", "connect"], [1, "mb-0", "mt-4", "p-0", "text-dark-red"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "ng-lottie", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationCreated", function AboutComponent_Template_ng_lottie_animationCreated_221_listener($event) { return ctx.animationCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " My name is Ravi Shankar, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "I'm a Software developer from India. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "My goal is to create meaningful experiences that generate value for users and businesses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " I'm always open to learning about new technologies, methods & ideas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](231, AboutComponent_p_231_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " Interested? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "See my whole CV!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentlyOpenToJobs);
    } }, directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_1__["LottieComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#about[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  overflow: hidden;\n}\n\n#about-front[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n#about-front[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n#about-front[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-size: 2em;\n  width: 60ch;\n  padding: 3em 3em;\n  border-radius: 0.3em;\n  background-color: white;\n  margin: 0;\n  z-index: -2;\n}\n\n#about-front[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%] {\n  --transition: 0.2s;\n  margin-left: 0.3em;\n  display: inline-block;\n  line-height: 0.85;\n  position: relative;\n  transition: var(--transition);\n}\n\n#about-front[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 120%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  border-bottom: 2px solid #b4b4b4;\n  z-index: -1;\n  transition: var(--transition);\n  transform: scale(1.02);\n}\n\n#about-front[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05) rotate(-1deg);\n}\n\n#about-front[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.05);\n}\n\n#about-front[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n  height: 35em;\n  width: 35em;\n  position: relative;\n}\n\n#about-front[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 8px #c7c7c7;\n  background-color: beige;\n  border-radius: 1em;\n  transform: skewX(-1.5deg) skewY(-1deg);\n  z-index: -1;\n}\n\n#about-front[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 5em;\n  padding: 0.2em;\n  border-radius: 0.2em;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  position: relative;\n}\n\n#about-front[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  border-radius: 0.2em;\n  box-shadow: 2px 2px 8px black;\n  background-color: #e9e0dd;\n  z-index: -1;\n}\n\n@media (max-width: 1024px) {\n  #about-front[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n    height: 30em;\n    width: 30em;\n  }\n\n  #about-front[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n    padding: 2em 1em;\n  }\n}\n\n@media (max-width: 992px) {\n  #about[_ngcontent-%COMP%] {\n    height: 110vw;\n  }\n\n  #about-front[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 3em;\n  }\n\n  #about-front[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n  }\n}\n\n@media (max-width: 768px) {\n  #about[_ngcontent-%COMP%] {\n    height: 120vw;\n  }\n\n  #about-front[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n    height: 25em;\n    width: 25em;\n  }\n}\n\n@media (max-width: 640px) {\n  #about[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n\n  #about-front[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    font-size: 3em;\n    margin-top: 7vh;\n    margin-bottom: 0em;\n  }\n\n  #about-front[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n    height: 14em;\n    margin-top: 5em;\n  }\n\n  #about-front[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]::after {\n    transform: translateX(20%) translateY(-5%) skewX(-1.5deg) skewY(-1deg);\n    width: 70%;\n    height: 110%;\n  }\n\n  #about-front[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 5em;\n    width: 45ch;\n  }\n}\n\n#hexagon-hover-background[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.hexagon-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  animation: animate 4s linear infinite;\n  background-color: black;\n}\n\n.hexagon-row[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: -3.2em;\n  margin-left: -5em;\n}\n\n.hexagon-row[_ngcontent-%COMP%]:nth-child(even) {\n  margin-left: 1px;\n}\n\n.hexagon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 10em;\n  height: 11em;\n  background-color: #111;\n  margin: 3.5px 2px 2px 2px;\n  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  transition: background-color 2s;\n}\n\n.last-row-hexagons[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 0%, 100% 25%, 0 25%);\n          clip-path: polygon(50% 0%, 100% 25%, 0 25%);\n}\n\n.hexagon[_ngcontent-%COMP%]:hover {\n  transition: background-color 0s;\n  background-color: #0f0;\n}\n\n.hexagon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0.4em;\n  bottom: 0.4em;\n  left: 0.4em;\n  right: 0.4em;\n  background-color: #111;\n  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  z-index: 1;\n}\n\n.hexagon[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  pointer-events: none;\n  background: rgba(255, 255, 255, 0.02);\n  z-index: 2;\n}\n\n@keyframes animate {\n  0% {\n    filter: hue-rotate(0deg);\n  }\n  100% {\n    filter: hue-rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksbUJBQUE7QUFMSjs7QUFRQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUxKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUFMSjs7QUFRQTtFQUNJLG9DQUFBO0FBTEo7O0FBUUE7RUFDSSx1QkFBQTtBQUxKOztBQVFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVdBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFFQSx5QkFBQTtFQUNBLFdBQUE7QUFUSjs7QUFZQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RUFUTjs7RUFZRTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7RUFUTjtBQUNGOztBQVlBO0VBQ0k7SUFDSSxhQUFBO0VBVk47O0VBYUU7SUFDSSxlQUFBO0VBVk47O0VBYUU7SUFDSSxrQkFBQTtFQVZOO0FBQ0Y7O0FBYUE7RUFDSTtJQUNJLGFBQUE7RUFYTjs7RUFjRTtJQUNJLFlBQUE7SUFDQSxXQUFBO0VBWE47QUFDRjs7QUFjQTtFQUNJO0lBQ0ksYUFBQTtFQVpOOztFQWVFO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQVpOOztFQWVFO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUFaTjs7RUFlRTtJQUNJLHNFQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFaTjs7RUFlRTtJQUNJLGVBQUE7SUFDQSxXQUFBO0VBWk47QUFDRjs7QUEwREE7RUFDSSxnQkFBQTtBQXhESjs7QUEyREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkFBQTtBQXhESjs7QUEyREE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUF4REo7O0FBMkRBO0VBQ0ksZ0JBQUE7QUF4REo7O0FBNERBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnRkFBQTtVQUFBLHdFQUFBO0VBQ0EsK0JBQUE7QUF6REo7O0FBOERBO0VBQ0ksbURBQUE7VUFBQSwyQ0FBQTtBQTNESjs7QUE4REE7RUFDSSwrQkFBQTtFQUNBLHNCQUFBO0FBM0RKOztBQThEQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdGQUFBO1VBQUEsd0VBQUE7RUFDQSxVQUFBO0FBM0RKOztBQThEQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsVUFBQTtBQTNESjs7QUE4REE7RUFDSTtJQUNJLHdCQUFBO0VBM0ROO0VBOERFO0lBQ0ksMEJBQUE7RUE1RE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNhYm91dC1mcm9udHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNhYm91dC1mcm9udCAucm93ID4gKntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbiNhYm91dC1mcm9udCAuY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgd2lkdGg6IDYwY2g7XHJcbiAgICBwYWRkaW5nOiAzZW0gM2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHotaW5kZXg6IC0yO1xyXG59XHJcblxyXG4jYWJvdXQtZnJvbnQgLmNvbnRlbnQgLmNvbm5lY3R7XHJcbiAgICAtLXRyYW5zaXRpb246IDAuMnM7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMC44NTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG59XHJcblxyXG4jYWJvdXQtZnJvbnQgLmNvbnRlbnQgLmNvbm5lY3Q6OmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDE4MCwgMTgwLCAxODApO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbn1cclxuXHJcbiNhYm91dC1mcm9udCAuY29udGVudCAuY29ubmVjdDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgcm90YXRlKC0xZGVnKTtcclxufVxyXG5cclxuI2Fib3V0LWZyb250IC5jb250ZW50IC5jb25uZWN0OmhvdmVyOjphZnRlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMDUpO1xyXG59XHJcblxyXG4jYWJvdXQtZnJvbnQgLmFuaW1hdGlvbntcclxuICAgIGhlaWdodDogMzVlbTtcclxuICAgIHdpZHRoOiAzNWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jYWJvdXQtZnJvbnQgLmFuaW1hdGlvbjo6YWZ0ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYigxOTksIDE5OSwgMTk5KTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goLTEuNWRlZykgc2tld1koLTFkZWcpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcblxyXG5cclxuI2Fib3V0LWZyb250IC5oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNhYm91dC1mcm9udCAuaGVhZGluZzo6YWZ0ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggYmxhY2s7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTBkZDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAjYWJvdXQtZnJvbnQgLmFuaW1hdGlvbntcclxuICAgICAgICBoZWlnaHQ6IDMwZW07XHJcbiAgICAgICAgd2lkdGg6IDMwZW07XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0LWZyb250IC5jb250ZW50e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgICAgcGFkZGluZzogMmVtIDFlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAjYWJvdXR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTB2dztcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtZnJvbnQgLmNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dC1mcm9udCAuaGVhZGluZ3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2Fib3V0e1xyXG4gICAgICAgIGhlaWdodDogMTIwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0LWZyb250IC5hbmltYXRpb257XHJcbiAgICAgICAgaGVpZ2h0OiAyNWVtO1xyXG4gICAgICAgIHdpZHRoOiAyNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICNhYm91dHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dC1mcm9udCAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3ZoO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtZnJvbnQgLmFuaW1hdGlvbntcclxuICAgICAgICBoZWlnaHQ6IDE0ZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNWVtO1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dC1mcm9udCAuYW5pbWF0aW9uOjphZnRlcntcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKSB0cmFuc2xhdGVZKC01JSkgc2tld1goLTEuNWRlZykgc2tld1koLTFkZWcpO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTAlO1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dC1mcm9udCAuY29udGVudHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgICAgICAgd2lkdGg6IDQ1Y2g7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNoZXhhZ29uLWhvdmVyLWJhY2tncm91bmR7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaGV4YWdvbi1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDRzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaGV4YWdvbi1yb3d7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1hcmdpbi10b3A6IC0zLjJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xyXG59XHJcblxyXG4uaGV4YWdvbi1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxufVxyXG5cclxuXHJcbi5oZXhhZ29ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwZW07XHJcbiAgICBoZWlnaHQ6IDExZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gICAgbWFyZ2luOiAzLjVweCAycHggMnB4IDJweDtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMjUlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAlIDc1JSwgMCUgMjUlKTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMnM7XHJcbn1cclxuXHJcblxyXG5cclxuLmxhc3Qtcm93LWhleGFnb25ze1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAyNSUsIDAgMjUlKTtcclxufVxyXG5cclxuLmhleGFnb246aG92ZXJ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDBzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMDtcclxufVxyXG5cclxuLmhleGFnb246OmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAuNGVtO1xyXG4gICAgYm90dG9tOiAwLjRlbTtcclxuICAgIGxlZnQ6IDAuNGVtO1xyXG4gICAgcmlnaHQ6IDAuNGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMjUlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAlIDc1JSwgMCUgMjUlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5oZXhhZ29uOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAgIDAle1xyXG4gICAgICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAle1xyXG4gICAgICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "tFjX":
/*!*****************************************************!*\
  !*** ./src/app/sections/skills/skills.component.ts ***!
  \*****************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SkillsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / ctx_r0.gridColumns + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card card-", i_r2, " hoverable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", skill_r1.title.toLowerCase(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", skill_r1.title.toLowerCase(), " icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r1.description, " ");
} }
class SkillsComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.gridColumns = 4;
        this.skillsArray = [
            { 'title': 'Angular',
                'description': "This is the description for Angular" },
            { 'title': 'Python',
                'description': "This is the description for python" },
            { 'title': 'Java',
                'description': "This is the description for Java" },
            { 'title': 'Html',
                'description': "This is the description for HTML" },
            { 'title': 'Css',
                'description': "This is the description for CSS" },
            { 'title': 'JavaScript',
                'description': "This is the description for Javascript" }
        ];
        this.options = {
            path: 'assets/49862-shooting-star.json',
        };
    }
    ngOnInit() {
        window.onload = this.shuffle;
    }
    shuffle() {
        let max = 8;
        let min = -8;
        var cards = document.getElementsByClassName("card");
        let globalStyles = '';
        function css(style) {
            globalStyles += style;
        }
        // if(screen.width > 640)
        if (screen.width > 0) {
            if (cards.length > 0) {
                for (let i = 0; i < cards.length; i++) {
                    // generating a random number
                    let a = Math.floor(Math.random() * (max - min + 1)) + min;
                    if (a == 0) {
                        a = Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                    // display a random number
                    // console.log(`Random value between ${min} and ${max} is ${a}`);
                    css('.card-' + i + '{' +
                        'transform-origin: 50% 0%;' +
                        'transform: rotate(' + a + 'deg);' +
                        '}');
                }
            }
        }
        var style = document.getElementById('global-styles');
        style.innerHTML = globalStyles;
    }
    animationCreated(animationItem) {
        this.animationItem = animationItem;
        this.animationItem.setSpeed(0.5);
        console.log(animationItem);
    }
    stop() {
        this.ngZone.runOutsideAngular(() => this.animationItem.stop());
    }
    play() {
        this.ngZone.runOutsideAngular(() => this.animationItem.play());
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 14, vars: 2, consts: [["id", "skills"], [1, "animation"], ["width", "auto", "height", "100%", 3, "options", "animationCreated"], [1, "row", "d-flex", "justify-content-center", "heading"], [1, "col-8", "d-flex", "justify-content-center"], [1, "text-white", "text-uppercase", "hoverable"], [1, "container-fluid"], ["fxLayout", "row wrap", "fxLayoutGap", " 1.6em grid", 1, "grid"], ["fxFlex.xs", "100%", "fxFlex.sm", "33%", 3, "fxFlex", 4, "ngFor", "ngForOf"], ["id", "magic", 1, "row", "d-flex", "justify-content-center"], [1, "col-3", "d-flex", "justify-content-center", "hoverable"], [1, "btn", "btn-primary", "py-3", 3, "click"], ["fxFlex.xs", "100%", "fxFlex.sm", "33%", 3, "fxFlex"], [1, "container", "d-flex", "justify-content-center", "my-5"], [1, "card-img-top", "mt-3", 3, "src", "alt"], [1, "card-body", "text-center"], [1, "card-title", "align-self-center", "text-dark", "text-uppercase"], [1, "card-text", "text-muted"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-lottie", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationCreated", function SkillsComponent_Template_ng_lottie_animationCreated_2_listener($event) { return ctx.animationCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Some Technologies that I Am familiar with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SkillsComponent_div_9_Template, 9, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_Template_button_click_12_listener() { return ctx.shuffle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Click Here To See Some Magic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsArray);
    } }, directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_1__["LottieComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"]], styles: ["#skills[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  overflow: hidden;\n  position: relative;\n}\n\n#skills[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  z-index: -12;\n}\n\n@media (max-width: 640px) {\n  #skills[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n    top: 19.5%;\n    transform-origin: center;\n    transform: rotate(84deg) scale(9);\n  }\n}\n\n#skills[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin-top: 5em;\n}\n\n#skills[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  letter-spacing: 0.2em;\n  text-align: center;\n  font-size: 1.2em;\n  word-spacing: 1em;\n  border-bottom: 0.1em solid #b4b4b4;\n}\n\n#skills[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-width: 13em;\n  max-width: 17em;\n  height: 18em;\n  transform-origin: 50% 0%;\n  transition: transform 0.3s ease-out;\n}\n\n#skills[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n#skills[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 30%;\n  align-self: center;\n}\n\n#skills[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  font-size: 1em;\n  border-bottom: 0.1em solid #b4b4b4;\n  margin-bottom: 2em;\n}\n\n#skills[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n#magic[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\n@media (max-width: 640px) {\n  #magic[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0U7SUFFRSxVQUFBO0lBQ0Esd0JBQUE7SUFDQSxpQ0FBQTtFQURGO0FBQ0Y7O0FBS0E7RUFDSSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0FBSEo7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0FBSko7O0FBT0E7RUFDSSxxQkFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNJLHVCQUFBO0FBSko7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0E7RUFDRTtJQUNJLHdCQUFBO0VBTko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2tpbGxze1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jc2tpbGxzIC5hbmltYXRpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xMjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgI3NraWxscyAuYW5pbWF0aW9uIHtcclxuICAgIC8vICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdG9wOjE5LjUlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoODRkZWcpIHNjYWxlKDkpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiBzY2FsZVkoMTApIDtcclxuICB9XHJcbn1cclxuXHJcbiNza2lsbHMgLmhlYWRpbmd7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuXHJcbiNza2lsbHMgLmhlYWRpbmcgcHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB3b3JkLXNwYWNpbmc6IDFlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcclxufVxyXG5cclxuXHJcbiNza2lsbHMgLmNhcmR7XHJcbiAgICBtaW4td2lkdGg6IDEzZW07XHJcbiAgICBtYXgtd2lkdGg6IDE3ZW07XHJcbiAgICBoZWlnaHQ6IDE4ZW07XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuI3NraWxscyAuY2FyZDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuI3NraWxscyAuY2FyZCBpbWd7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNza2lsbHMgLmNhcmQgLmNhcmQtdGl0bGV7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xZW0gc29saWQgcmdiKDE4MCwgMTgwLCAxODApO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4jc2tpbGxzIC5ncmlke1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuI21hZ2ljIC5idG57XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgI21hZ2lje1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map