(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<a (click)=\"abrirWhatsapp()\" class=\"whats\">\n  <i style=\"margin-top: 16px\" class=\"fa fa-whatsapp\"></i>\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-5\">\n  <p>Aprenda inglês no seu tempo e no conforto da sua casa.</p>\n  <div class=\"text-center mt-5\">\n    <app-video [src]=\"srcInput\"></app-video>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/planos/planos.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/planos/planos.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-planos\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-12 row justify-content-center\">\n      <h3 class=\"col-3 text-center mt-5\">Nossos Planos</h3>\n    </div>\n    <div *ngFor=\"let plano of planos\" class=\"col-3 ml-2 mt-5\">\n      <div class=\"card\">\n        <div class=\"card-header\" class=\"bg-principal p-2 text-center\">\n          {{ plano.nome }}\n        </div>\n        <div class=\"card-body text-center\">\n          <img width=\"35\" height=\"35\" [src]=\"plano.icone\" />\n          <ul class=\"text-start mt-3\">\n            <li class=\"\">Acompanhamento personalizado</li>\n            <li class=\"\">Aulas individuais ou em grupo</li>\n            <li class=\"\">Material individualizado</li>\n            <li class=\"\">Aulas Online</li>\n            <li class=\"\">{{ plano.descricaoHora }}</li>\n          </ul>\n        </div>\n        <div class=\"card-footer bg-principal p-2 text-center\">\n          {{ plano.valor | currency: \"R$ \" }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quem-somos/quem-somos.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quem-somos/quem-somos.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"d-flex justify-content-center\">\n    <div class=\"s w-50 p-3 mt-5\">\n      <div class=\"s-header text-center\">\n        <h3 class=\"mt-2 mb-5\">Quem Sou</h3>\n        <img\n          width=\"250px\"\n          height=\"220px\"\n          class=\"img-circular\"\n          src=\"/assets//imgs/flaviaqs.png\"\n          alt=\"Flavia's image\"\n        />\n      </div>\n      <div class=\"s-body mt-5\">\n        <p>\n          Me chamo Flávia, formada em história pela Universidade de Brasília.\n          Comecei minha carreira no ensino de inglês no meu último ano da\n          universidade e já estou há dois anos nesse caminho lindo. Sou\n          apaixonada por ensinar e quero poder ajudar cada vez mais alunos a\n          serem fluentes e confiantes na hora de se comunicar em inglês!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/navbar/navbar-component/navbar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/navbar/navbar-component/navbar.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <div class=\"container-fluid\">\n    <div class=\"justify-content-between\">\n      <a class=\"navbar-brand\" (click)=\"selecionarAba(pages[0])\"\n        >Teacher Flavia</a\n      >\n    </div>\n    <div>\n      <!-- <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-mdb-toggle=\"collapse\"\n        data-mdb-target=\"#navbarNav\"\n        aria-controls=\"navbarNav\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\"\n      >\n        <i class=\"fas fa-bars\"></i>\n      </button> -->\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\" *ngFor=\"let page of pages\">\n            <a\n              [class]=\"page.classe\"\n              aria-current=\"page\"\n              (click)=\"selecionarAba(page)\"\n              >{{ page.nome }}</a\n            >\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/planos\">Planos</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/quem-sou\">Quem sou</a>\n          </li> -->\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/navbar/video-component/video.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/navbar/video-component/video.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <video\n    id=\"video\"\n    [width]=\"width\"\n    controls\n    autoplay\n    loop\n    controlsList=\"nodownload\"\n  >\n    <source [src]=\"src\" type=\"video/mp4\" />\n  </video>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _planos_planos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planos/planos.component */ "./src/app/planos/planos.component.ts");
/* harmony import */ var _quem_somos_quem_somos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quem-somos/quem-somos.component */ "./src/app/quem-somos/quem-somos.component.ts");
/* harmony import */ var _shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/models/enums/RotasEnum */ "./src/app/shared/models/enums/RotasEnum.ts");







const routes = [
    {
        path: _shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_6__["RotasEnum"].NONE,
        redirectTo: _shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_6__["RotasEnum"].HOME,
        pathMatch: _shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_6__["RotasEnum"].FULL,
    },
    {
        path: _shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_6__["RotasEnum"].HOME,
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: _shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_6__["RotasEnum"].QUEM_SOMOS,
        component: _quem_somos_quem_somos_component__WEBPACK_IMPORTED_MODULE_5__["QuemSomosComponent"],
    },
    {
        path: _shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_6__["RotasEnum"].PLANOS,
        component: _planos_planos_component__WEBPACK_IMPORTED_MODULE_4__["PlanosComponent"],
    },
    {
        path: "**",
        redirectTo: _shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_6__["RotasEnum"].HOME,
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".whats {\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 40px;\n  right: 40px;\n  background-color: #25d366;\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 30px;\n  box-shadow: 1px 1px 2px #888;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWwtc291emEvRG9jdW1lbnRzL0Rlc2FmaW9zLVRlY25pY29zL1RlYWNoZXJGbGF2aWEvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGF0cyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm90dG9tOiA0MHB4O1xuICByaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1ZDM2NjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAjODg4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuIiwiLndoYXRzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3R0b206IDQwcHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVkMzY2O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4ICM4ODg7XG4gIHotaW5kZXg6IDEwMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = "Teacher Flavia";
        this.linkWhatsapp = "https://api.whatsapp.com/send?phone=5561996825543&text=Oi%2C%20Flavia.%20Eu%20quero%20saber%20como%20melhorar%20meu%20ingl%C3%AAs!";
    }
    ngOnInit() {
        this.router.config.forEach((config) => {
            if (config.path && location.href.includes(config.path)) {
                this.router.navigate([config.path]);
                return;
            }
        });
    }
    abrirWhatsapp() {
        window.open(this.linkWhatsapp, "_blank");
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quem_somos_quem_somos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quem-somos/quem-somos.component */ "./src/app/quem-somos/quem-somos.component.ts");
/* harmony import */ var _planos_planos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planos/planos.component */ "./src/app/planos/planos.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_components_navbar_video_component_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/navbar/video-component/video.component */ "./src/app/shared/components/navbar/video-component/video.component.ts");
/* harmony import */ var _shared_components_navbar_navbar_component_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/navbar/navbar-component/navbar.component */ "./src/app/shared/components/navbar/navbar-component/navbar.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _quem_somos_quem_somos_component__WEBPACK_IMPORTED_MODULE_5__["QuemSomosComponent"],
            _planos_planos_component__WEBPACK_IMPORTED_MODULE_6__["PlanosComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _shared_components_navbar_navbar_component_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _shared_components_navbar_video_component_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"],
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: white;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWwtc291emEvRG9jdW1lbnRzL0Rlc2FmaW9zLVRlY25pY29zL1RlYWNoZXJGbGF2aWEvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4iLCJwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.srcInput = `/assets/videos/videoPrincipal.mp4`;
    }
    ngOnInit() { }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/planos/planos.component.scss":
/*!**********************************************!*\
  !*** ./src/app/planos/planos.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWwtc291emEvRG9jdW1lbnRzL0Rlc2FmaW9zLVRlY25pY29zL1RlYWNoZXJGbGF2aWEvc3JjL2FwcC9wbGFub3MvcGxhbm9zLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3JhZmFlbC1zb3V6YS9Eb2N1bWVudHMvRGVzYWZpb3MtVGVjbmljb3MvVGVhY2hlckZsYXZpYS9zcmMvZXN0aWxvcy9jb3Jlcy5zY3NzIiwic3JjL2FwcC9wbGFub3MvcGxhbm9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0NDTztBQ0ZUIiwiZmlsZSI6InNyYy9hcHAvcGxhbm9zL3BsYW5vcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9lc3RpbG9zL2NvcmVzLnNjc3NcIjtcblxuaDMge1xuICBjb2xvcjogJGJyYW5jbztcbiAgLy8gYmFja2dyb3VuZDogJGJyYW5jbztcbn1cbiIsIiRwcmluY2lwYWw6ICMwZDc1NGE7XG4kYXp1bDogIzNmNjg4NjtcbiRhenVsLWNsYXJvOiAjNDRmNWU2O1xuJHZlcm1lbGhvOiAjZDMyZjJmO1xuJGJyYW5jbzogI2ZmZmZmZjtcbiRwcmV0bzogIzAwMDAwMDtcbiR2ZXJkZTogIzRiYjU0MztcbiRsYXJhbmphOiAjZmZjNDA5O1xuJHJveG86ICM1MjYwZmY7XG4kY2luemE6ICM5Mjk0OWM7XG4kYW1hcmVsbzogI2U5ZTUxZDtcbiIsImgzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/planos/planos.component.ts":
/*!********************************************!*\
  !*** ./src/app/planos/planos.component.ts ***!
  \********************************************/
/*! exports provided: PlanosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanosComponent", function() { return PlanosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlanosComponent = class PlanosComponent {
    constructor() {
        this.planos = [];
    }
    ngOnInit() {
        this.planos.push({
            nome: "Daily Learning",
            valor: 50,
            descricaoHora: "1 Hora",
            icone: "/assets/icons/book2.png",
        });
        this.planos.push({
            nome: "Step by Step",
            valor: 150,
            descricaoHora: "1 Hora por semana",
            icone: "/assets/icons/book3.png",
        });
        this.planos.push({
            nome: "Up to Learn",
            valor: 300,
            descricaoHora: "2 Horas por semana",
            icone: "/assets/icons/book.png",
        });
    }
};
PlanosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-planos",
        template: __webpack_require__(/*! raw-loader!./planos.component.html */ "./node_modules/raw-loader/index.js!./src/app/planos/planos.component.html"),
        styles: [__webpack_require__(/*! ./planos.component.scss */ "./src/app/planos/planos.component.scss")]
    })
], PlanosComponent);



/***/ }),

/***/ "./src/app/quem-somos/quem-somos.component.scss":
/*!******************************************************!*\
  !*** ./src/app/quem-somos/quem-somos.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: justify;\n  color: #ffffff;\n  font-size: 18px;\n}\n\nh3 {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWwtc291emEvRG9jdW1lbnRzL0Rlc2FmaW9zLVRlY25pY29zL1RlYWNoZXJGbGF2aWEvc3JjL2FwcC9xdWVtLXNvbW9zL3F1ZW0tc29tb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3F1ZW0tc29tb3MvcXVlbS1zb21vcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yYWZhZWwtc291emEvRG9jdW1lbnRzL0Rlc2FmaW9zLVRlY25pY29zL1RlYWNoZXJGbGF2aWEvc3JjL2VzdGlsb3MvY29yZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLGNFTE87QURJVCIsImZpbGUiOiJzcmMvYXBwL3F1ZW0tc29tb3MvcXVlbS1zb21vcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9lc3RpbG9zL2NvcmVzLnNjc3NcIjtcblxucCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiAkYnJhbmNvO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmgzIHtcbiAgY29sb3I6ICRicmFuY287XG59XG5cbi8vIC5iZy1xdWVtLXNvbW9zIHtcbi8vICAgYmFja2dyb3VuZDogc2FsbW9uO1xuLy8gfVxuIiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmgzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59IiwiJHByaW5jaXBhbDogIzBkNzU0YTtcbiRhenVsOiAjM2Y2ODg2O1xuJGF6dWwtY2xhcm86ICM0NGY1ZTY7XG4kdmVybWVsaG86ICNkMzJmMmY7XG4kYnJhbmNvOiAjZmZmZmZmO1xuJHByZXRvOiAjMDAwMDAwO1xuJHZlcmRlOiAjNGJiNTQzO1xuJGxhcmFuamE6ICNmZmM0MDk7XG4kcm94bzogIzUyNjBmZjtcbiRjaW56YTogIzkyOTQ5YztcbiRhbWFyZWxvOiAjZTllNTFkO1xuIl19 */"

/***/ }),

/***/ "./src/app/quem-somos/quem-somos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quem-somos/quem-somos.component.ts ***!
  \****************************************************/
/*! exports provided: QuemSomosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuemSomosComponent", function() { return QuemSomosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuemSomosComponent = class QuemSomosComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuemSomosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quem-somos',
        template: __webpack_require__(/*! raw-loader!./quem-somos.component.html */ "./node_modules/raw-loader/index.js!./src/app/quem-somos/quem-somos.component.html"),
        styles: [__webpack_require__(/*! ./quem-somos.component.scss */ "./src/app/quem-somos/quem-somos.component.scss")]
    })
], QuemSomosComponent);



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar-component/navbar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar-component/navbar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li :hover {\n  border-bottom: 3px solid #ffffff;\n}\n\na[class*=active] {\n  border-bottom: 3px solid #ffffff;\n}\n\na {\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWwtc291emEvRG9jdW1lbnRzL0Rlc2FmaW9zLVRlY25pY29zL1RlYWNoZXJGbGF2aWEvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLWNvbXBvbmVudC9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXItY29tcG9uZW50L25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUdFLGdDQUFBO0FDSko7O0FEUUE7RUFDRSxnQ0FBQTtBQ0xGOztBRFFBO0VBQ0UseUJBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXItY29tcG9uZW50L25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9lc3RpbG9zL2NvcmVzLnNjc3NcIjtcblxubGkge1xuICA6aG92ZXIge1xuICAgIC8vIGNvbG9yOiAjNGJiNTQzIDtcbiAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGJyYW5jbztcbiAgfVxufVxuXG5hW2NsYXNzKj1cImFjdGl2ZVwiXSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkYnJhbmNvO1xufVxuXG5hIHtcbiAgY29sb3I6ICRicmFuY28gIWltcG9ydGFudDtcbn1cbiIsImxpIDpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmZmZmO1xufVxuXG5hW2NsYXNzKj1hY3RpdmVdIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmZmZmY7XG59XG5cbmEge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar-component/navbar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar-component/navbar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/enums/RotasEnum */ "./src/app/shared/models/enums/RotasEnum.ts");




let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.pages = [];
    }
    ngOnInit() {
        this.criarAbas();
        this.pages.forEach((page) => {
            if (location.href.includes(page.rota)) {
                page.classe = "nav-link active";
            }
        });
    }
    selecionarAba(page) {
        this.pages.forEach((pag) => {
            if (page.nome == pag.nome) {
                pag.classe = "nav-link active";
                this.router.navigate([pag.rota]);
            }
            else {
                pag.classe = "nav-link ";
            }
        });
    }
    criarAbas() {
        this.pages.push({
            nome: "Home",
            rota: src_app_shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_3__["RotasEnum"].HOME,
            classe: "nav-link ",
        });
        this.pages.push({
            nome: "Planos",
            rota: src_app_shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_3__["RotasEnum"].PLANOS,
            classe: "nav-link ",
        });
        this.pages.push({
            nome: "Quem Sou",
            rota: src_app_shared_models_enums_RotasEnum__WEBPACK_IMPORTED_MODULE_3__["RotasEnum"].QUEM_SOMOS,
            classe: "nav-link ",
        });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/navbar/navbar-component/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/components/navbar/navbar-component/navbar.component.scss")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/components/navbar/video-component/video.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/navbar/video-component/video.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci92aWRlby1jb21wb25lbnQvdmlkZW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/navbar/video-component/video.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/navbar/video-component/video.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideoComponent = class VideoComponent {
    constructor() {
        this.myVideo = document.getElementById("video");
        this.width = "640";
    }
    ngOnInit() { }
    playPause() {
        if (this.myVideo.paused) {
            this.myVideo.play();
        }
        else {
            this.myVideo.pause();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("src")
], VideoComponent.prototype, "src", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("width")
], VideoComponent.prototype, "width", void 0);
VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-video",
        template: __webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/navbar/video-component/video.component.html"),
        styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/shared/components/navbar/video-component/video.component.scss")]
    })
], VideoComponent);



/***/ }),

/***/ "./src/app/shared/models/enums/RotasEnum.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/enums/RotasEnum.ts ***!
  \**************************************************/
/*! exports provided: RotasEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotasEnum", function() { return RotasEnum; });
var RotasEnum;
(function (RotasEnum) {
    RotasEnum["ADMIN"] = "admin";
    RotasEnum["HOME"] = "home";
    RotasEnum["QUEM_SOMOS"] = "quem-sou";
    RotasEnum["PLANOS"] = "planos";
    RotasEnum["NONE"] = "";
    RotasEnum["FULL"] = "full";
})(RotasEnum || (RotasEnum = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rafael-souza/Documents/Desafios-Tecnicos/TeacherFlavia/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map