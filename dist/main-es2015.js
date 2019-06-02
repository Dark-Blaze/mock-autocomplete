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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/auto-complete/auto-complete.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/auto-complete/auto-complete.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auto-complete\">\n  <div class=\"input-container\">\n    <div\n      class=\"meta font-regular\"\n      *ngIf=\"showSpan\"\n      [ngClass]=\"{ 'w-100': showSpan, 'w-0': !showSpan }\"\n      (click)=\"hideSpan()\"\n    >\n      {{ selectedItem.name }}\n    </div>\n    <input\n      [hidden]=\"showSpan\"\n      type=\"text\"\n      class=\"search-input font-regular\"\n      placeholder=\"Search Users by ID, address, name....\"\n      [(ngModel)]=\"searchStr\"\n      (focus)=\"onFocus($event)\"\n      #search\n    />\n  </div>\n  <span *ngIf=\"showDropdown\">\n    <div\n      class=\"scroll-view\"\n      appScrollView\n      [rowHeight]=\"151\"\n      [totalRowElements]=\"data.length\"\n      [currentItem]=\"currentPosition\"\n      [maxHeight]=\"400\"\n    >\n      <app-list-view\n        [listData]=\"filteredData\"\n        [selectedDataItem]=\"activeItem\"\n        [searchString]=\"searchStr\"\n        (itemChange)=\"itemChange($event)\"\n        *ngIf=\"filteredData.length\"\n      ></app-list-view>\n    </div>\n    <div class=\"no-result\" *ngIf=\"!filteredData.length && searchStr !== ''\">\n      No Users Found\n    </div>\n  </span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/list-view/list-view.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/list-view/list-view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-view\">\n  <ul class=\"list\">\n    <li *ngFor=\"let item of listData; index as i\" (click)=\"selectItem(item, i)\" class=\"list-item\" [ngClass]=\"{'active': selectedDataItem && selectedDataItem.id === item.id}\" (mouseover)=\"fireMouseOver($event, item, i)\">\n      <div class=\"list-item-value id font-bold\" innerHTML=\"{{ item.id | highlighter : searchString}}\"></div>\n      <div class=\"list-item-value name font-regular-italic\" innerHTML=\"{{ item.name | highlighter : searchString}}\"></div>\n      <div class=\"list-item-value address\" innerHTML=\"{{ item.address | highlighter : searchString}}\"></div>\n      <div class=\"list-item-value items\" *ngIf=\"isItemFound(item)\"><span class=\"highlight\">\"{{searchString}}\"</span> found in Items </div>\n      <div class=\"list-item-value items font-regular-italic text-mute\" *ngIf=\"!isItemFound(item)\">No match in Items</div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/details/details.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/details/details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-detail\">\n  <app-auto-complete></app-auto-complete>\n</div>\n"

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
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");




const routes = [
    { path: '', component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'mock-autocomplete';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list-view/list-view.component */ "./src/app/components/list-view/list-view.component.ts");
/* harmony import */ var _components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auto-complete/auto-complete.component */ "./src/app/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");
/* harmony import */ var _utils_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/search-filter.pipe */ "./src/app/utils/search-filter.pipe.ts");
/* harmony import */ var _utils_highlighter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/highlighter.pipe */ "./src/app/utils/highlighter.pipe.ts");
/* harmony import */ var _components_auto_complete_scroll_view_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auto-complete/scroll-view.directive */ "./src/app/components/auto-complete/scroll-view.directive.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_6__["ListViewComponent"],
            _components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteComponent"],
            _pages_details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
            _utils_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchFilterPipe"],
            _utils_highlighter_pipe__WEBPACK_IMPORTED_MODULE_10__["HighlighterPipe"],
            _components_auto_complete_scroll_view_directive__WEBPACK_IMPORTED_MODULE_11__["ScrollViewDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [_utils_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchFilterPipe"], _utils_highlighter_pipe__WEBPACK_IMPORTED_MODULE_10__["HighlighterPipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/auto-complete/auto-complete.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/auto-complete/auto-complete.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auto-complete {\n  width: 100%;\n  box-shadow: 0 1px 8px -3px rgba(0, 0, 0, 0.21);\n}\n.auto-complete .input-container {\n  display: flex;\n  flex-direction: row;\n}\n.auto-complete .input-container .meta {\n  overflow: hidden;\n  text-indent: 10px;\n  height: 40px;\n  line-height: 40px;\n  padding-top: 2px;\n}\n.auto-complete .input-container .search-input {\n  width: 100%;\n  height: 40px;\n  background: white;\n  border: none;\n  border-radius: 3px;\n  text-indent: 10px;\n  outline: none;\n  font-size: 1em;\n}\n.auto-complete .input-container .search-input:focus {\n  background-color: white;\n  border-bottom: 1px solid #eaeaea;\n}\n.auto-complete .no-result {\n  width: 100%;\n  height: 90px;\n  text-align: center;\n  line-height: 90px;\n}\n.w-100 {\n  width: 100%;\n}\n.w-0 {\n  width: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRvLWNvbXBsZXRlL006XFxBc3NpZ25tZW50c1xcbW9jay1hdXRvY29tcGxldGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGF1dG8tY29tcGxldGVcXGF1dG8tY29tcGxldGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXV0by1jb21wbGV0ZS9hdXRvLWNvbXBsZXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUVBLDhDQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHTjtBRERJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNHTjtBREZNO0VBQ0UsdUJBQUE7RUFDQSxnQ0FBQTtBQ0lSO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREVBO0VBQ0UsV0FBQTtBQ0NGO0FERUE7RUFDRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0by1jb21wbGV0ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA4cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDhweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yMSk7XHJcbiAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC5tZXRhIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB0ZXh0LWluZGVudDogMTBweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uby1yZXN1bHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogOTBweDtcclxuICB9XHJcbn1cclxuXHJcbi53LTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53LTAge1xyXG4gIHdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIuYXV0by1jb21wbGV0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDhweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yMSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDhweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yMSk7XG59XG4uYXV0by1jb21wbGV0ZSAuaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5hdXRvLWNvbXBsZXRlIC5pbnB1dC1jb250YWluZXIgLm1ldGEge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWluZGVudDogMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cbi5hdXRvLWNvbXBsZXRlIC5pbnB1dC1jb250YWluZXIgLnNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmF1dG8tY29tcGxldGUgLmlucHV0LWNvbnRhaW5lciAuc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xufVxuLmF1dG8tY29tcGxldGUgLm5vLXJlc3VsdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG5cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udy0wIHtcbiAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/auto-complete/auto-complete.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/auto-complete/auto-complete.component.ts ***!
  \*********************************************************************/
/*! exports provided: AutoCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function() { return AutoCompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/components/auto-complete/data.service.ts");
/* harmony import */ var _utils_search_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/search-filter.pipe */ "./src/app/utils/search-filter.pipe.ts");




var KEY_SUPPORT;
(function (KEY_SUPPORT) {
    KEY_SUPPORT[KEY_SUPPORT["ARROW_UP"] = 38] = "ARROW_UP";
    KEY_SUPPORT[KEY_SUPPORT["ARROW_DOWN"] = 40] = "ARROW_DOWN";
    KEY_SUPPORT[KEY_SUPPORT["ENTER"] = 13] = "ENTER";
})(KEY_SUPPORT || (KEY_SUPPORT = {}));
let AutoCompleteComponent = class AutoCompleteComponent {
    constructor(dataService, searchFilter) {
        this.dataService = dataService;
        this.searchFilter = searchFilter;
        /**
         * This variable stores the generated filtered data from the  @var searchStr
         *
         * @type {Array<Model>}
         * @memberof AutoCompleteComponent
         */
        this.filteredData = [];
        /**
         * This variable stores the search string from the input element
         *
         * @memberof AutoCompleteComponent
         */
        this.searchStr = '';
        /**
         * This variable stores the index of the @var activeItem
         *
         * @memberof AutoCompleteComponent
         */
        this.currentPosition = -1;
        /**
         * This variable toggles the visible states of either showing the selected value and input field
         *
         * @memberof AutoCompleteComponent
         */
        this.showSpan = false;
        /**
         * This variable toggles the visible state of the dropdown
         *
         * @memberof AutoCompleteComponent
         */
        this.showDropdown = false;
        this.data = this.dataService.getUserData();
    }
    /**
     * This is a lifecycle hook called as soon as this component is initialized.
     * This method will initialize the @var activeItem
     *
     * @memberof AutoCompleteComponent
     */
    ngOnInit() {
        this.setActiveItem({});
    }
    /**
     * This event listener is to make sure that if the event source is the input field, the up and down keybindings work.
     * The reason for this to be in keyup is because handling this in keydown events would work for the last value and not the current value.
     *
     * @param {KeyboardEvent} e
     * @memberof AutoCompleteComponent
     */
    keyup(e) {
        this.keyHandler(e);
        this.setDataAndPosition();
    }
    /**
     * This event listener is to make sure that the cursor position does not move when the up and down keystrokes are encountered.
     * The reason for this to be in keydown is because before keyup triggers, the cursor would have shifted position.
     *
     * @param {KeyboardEvent} e
     * @memberof AutoCompleteComponent
     */
    keydown(e) {
        if (e.target['className'].includes('search-input')) {
            if (e.keyCode === KEY_SUPPORT.ARROW_UP || e.keyCode === KEY_SUPPORT.ARROW_DOWN) {
                e.preventDefault();
            }
        }
    }
    setSelectedItem(item) {
        this.selectedItem = item;
    }
    getCurrentPosition() {
        return this.currentPosition;
    }
    setCurrentPosition(pos) {
        this.currentPosition = pos;
    }
    setActiveItem(item) {
        this.activeItem = item;
    }
    getActiveItem() {
        return this.activeItem;
    }
    /**
     * This method will identify the up, down and enter key events and perform appropriate actions
     * For UP and DOWN
     * Navigate to the previous and next row item respectively. If the item is the first row, then the up key won't do anything.
     * If the item is the last viewable, then scrollview will start shifting the view appropriately.
     * If the item is the last item, the down key won't do anything.
     *
     * For ENTER
     * The current @var activeItem will be selected and assigned to @var selectedItem
     *
     * @param {KeyboardEvent} e
     * @memberof AutoCompleteComponent
     */
    keyHandler(e) {
        if (e.target['className'].includes('search-input') && this.getFilteredData().length > 0) {
            const code = e['keyCode'];
            if (code === KEY_SUPPORT.ARROW_UP) {
                e.preventDefault();
                if (this.getCurrentPosition() === 0) {
                    this.setCurrentPosition(0);
                }
                else {
                    this.setCurrentPosition(this.getCurrentPosition() - 1);
                }
            }
            else if (code === KEY_SUPPORT.ARROW_DOWN) {
                e.preventDefault();
                if (this.getCurrentPosition() === this.getFilteredData().length - 1) {
                    this.setCurrentPosition(this.getFilteredData().length - 1);
                }
                else {
                    this.setCurrentPosition(this.currentPosition + 1);
                }
            }
            else if (code === KEY_SUPPORT.ENTER) {
                this.itemChange({
                    e,
                    item: this.getFilteredData()[this.getCurrentPosition()],
                    select: true,
                    from: 'keyboard'
                });
            }
            this.setActiveItem(this.getFilteredData()[this.getCurrentPosition()]);
        }
    }
    setFilteredData(items) {
        this.filteredData = items;
    }
    getFilteredData() {
        return this.filteredData;
    }
    /**
     * This method will set the filteredData set and reset the current position everytime the data is re-filtered.
     *
     * @memberof AutoCompleteComponent
     */
    setDataAndPosition() {
        this.setFilteredData(this.data.filter(i => this.searchFilter.transform(this.searchStr, i)));
        if (!this.getFilteredData().length || this.getFilteredData().length === 1) {
            this.setCurrentPosition(0);
        }
    }
    /**
     * This method will identify the event propogation source and perform appropriate actions.
     * If the source is mouse:
     * Only the @var activeItem will be set with the @var currentPosition
     *
     * The event communication follows the @interface ListMessageModel. If the action is the select the item(on mouse click) then the
     * @var selectedItem will be assigned.
     *
     * @param {ListMessageModel} data
     * @memberof AutoCompleteComponent
     */
    itemChange(data) {
        if (data.from !== 'mouse') {
            this.setCurrentPosition(data.index);
        }
        this.setActiveItem(this.getFilteredData()[this.getCurrentPosition()]);
        if (data.select) {
            this.setSelectedItem(data.item);
            this.resetBehaivour();
        }
    }
    /**
     * This method will reset the dropdown view
     *
     * @memberof AutoCompleteComponent
     */
    resetBehaivour() {
        this.setFilteredData([]);
        this.showSpan = true;
        this.showDropdown = false;
        this.searchStr = this.selectedItem.name;
    }
    /**
     * This method will set the data and position when the user focuses in the input field.
     *
     * @param {*} e
     * @memberof AutoCompleteComponent
     */
    onFocus(e) {
        this.setDataAndPosition();
        this.showDropdown = true;
    }
    /**
     * This method will hide the display element and show the input field.
     *
     * @memberof AutoCompleteComponent
     */
    hideSpan() {
        this.showSpan = false;
        setTimeout(() => { this.searchElement.nativeElement.focus(); }, 0);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AutoCompleteComponent.prototype, "searchElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keyup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AutoCompleteComponent.prototype, "keyup", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AutoCompleteComponent.prototype, "keydown", null);
AutoCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auto-complete',
        template: __webpack_require__(/*! raw-loader!./auto-complete.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/auto-complete/auto-complete.component.html"),
        styles: [__webpack_require__(/*! ./auto-complete.component.scss */ "./src/app/components/auto-complete/auto-complete.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _utils_search_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchFilterPipe"]])
], AutoCompleteComponent);



/***/ }),

/***/ "./src/app/components/auto-complete/data.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auto-complete/data.service.ts ***!
  \**********************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataService = class DataService {
    constructor() {
        const data = [
            {
                id: '123-s2-546',
                name: 'John Jacobs',
                items: [
                    'bucket',
                    'bottle'
                ],
                address: '1st Cross, 9th Main, abc Apartment',
                pincode: '5xx012'
            },
            {
                id: '123-s3-146',
                name: 'David Mire',
                items: [
                    'Bedroom Set'
                ],
                address: '2nd Cross, BTI Apartment',
                pincode: '4xx012'
            },
            {
                id: '223-a1-234',
                name: 'Soloman Marshall',
                items: [
                    'bottle'
                ],
                address: 'Riverbed Apartment',
                pincode: '4xx032'
            },
            {
                id: '121-s2-111',
                name: 'Ricky Beno',
                items: [
                    'Mobile Set'
                ],
                address: 'Sunshine City',
                pincode: '5xx072'
            },
            {
                id: '123-p2-246',
                name: 'Sikander Singh',
                items: [
                    'Air Conditioner'
                ],
                address: 'Riverbed Apartment',
                pincode: '4xx032'
            },
            {
                id: 'b23-s2-321',
                name: 'Ross Wheeler',
                items: [
                    'Mobile'
                ],
                address: '1st Cross, 9th Main, abc Apartement',
                pincode: '5xx012'
            },
            {
                id: '113-n2-563',
                name: 'Ben Bish',
                items: [
                    'Kitchen Set',
                    'Chair'
                ],
                address: 'Sunshine City',
                pincode: '5xx072'
            },
            {
                id: '323-s2-112',
                name: 'John Michael',
                items: [
                    'Refrigerator'
                ],
                address: '1st Cross, 9th Main, abc Apartement',
                pincode: '5xx012'
            },
            {
                id: 'abc-34-122',
                name: 'Jason Jordan',
                items: [
                    'Mobile'
                ],
                address: 'Riverbed Apartment',
                pincode: '4xx032'
            }
        ];
        this.setUserData(data);
    }
    getUserData() {
        return this.userData;
    }
    setUserData(data) {
        this.userData = data;
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DataService);



/***/ }),

/***/ "./src/app/components/auto-complete/scroll-view.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/auto-complete/scroll-view.directive.ts ***!
  \*******************************************************************/
/*! exports provided: ScrollViewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollViewDirective", function() { return ScrollViewDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScrollViewDirective = class ScrollViewDirective {
    constructor(el) {
        this.el = el;
        el.nativeElement.style.overflowY = 'scroll';
    }
    isLastViewableItem(cur = 0) {
        if (!cur || cur === 1) {
            return true;
        }
        if (this.maxHeight - (this.rowHeight * cur) < this.rowHeight) {
            return true;
        }
        return false;
    }
    ngOnChanges(changes) {
        const currentVal = changes.currentItem.currentValue;
        if (this.isLastViewableItem(currentVal)) {
            this.el.nativeElement.scrollTop = this.rowHeight * currentVal;
        }
    }
    ngAfterViewInit() {
        this.el.nativeElement.style.maxHeight = this.maxHeight + 'px';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ScrollViewDirective.prototype, "rowHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ScrollViewDirective.prototype, "totalRowElements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ScrollViewDirective.prototype, "currentItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ScrollViewDirective.prototype, "maxHeight", void 0);
ScrollViewDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appScrollView]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ScrollViewDirective);



/***/ }),

/***/ "./src/app/components/list-view/list-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/list-view/list-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-view ul.list li {\n  display: block;\n  border: 1px solid #eaeaea;\n  padding: 20px;\n  line-height: 1.5;\n  cursor: pointer;\n}\n.list-view ul.list li:hover {\n  background-color: rgba(255, 246, 125, 0.17);\n}\n.list-view ul.list li > .list-item-value {\n  pointer-events: none;\n}\n.list-view ul.list li .id {\n  text-transform: uppercase;\n  color: #383f47;\n  font-size: 1.2em;\n}\n.list-view ul.list li .name {\n  margin-bottom: 8px;\n  color: #555a61;\n}\n.list-view ul.list li .address {\n  color: #727672;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.list-view ul.list li .items {\n  border-top: 1px solid #eaeaea;\n  border-bottom: 1px solid #eaeaea;\n  margin: 3px 0;\n  padding: 5px 0 5px 0;\n  font-size: 0.8em;\n}\n.list-view ul.list .active {\n  background-color: rgba(255, 246, 125, 0.17);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXZpZXcvTTpcXEFzc2lnbm1lbnRzXFxtb2NrLWF1dG9jb21wbGV0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGlzdC12aWV3XFxsaXN0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNETjtBREVNO0VBQ0UsMkNBQUE7QUNBUjtBREVNO0VBQ0Usb0JBQUE7QUNBUjtBREVNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDQVI7QURFTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBUjtBREVNO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURHSTtFQUNFLDJDQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3Qtdmlldy9saXN0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC12aWV3IHtcclxuICB1bC5saXN0IHtcclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NiwgMTI1LCAwLjE3KTtcclxuICAgICAgfVxyXG4gICAgICAmID4gLmxpc3QtaXRlbS12YWx1ZSB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmlkIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjMzgzZjQ3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgIH1cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBjb2xvcjogIzU1NWE2MTtcclxuICAgICAgfVxyXG4gICAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgY29sb3I6ICM3Mjc2NzI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgbWFyZ2luOiAzcHggMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggMDtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NiwgMTI1LCAwLjE3KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmxpc3QtdmlldyB1bC5saXN0IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saXN0LXZpZXcgdWwubGlzdCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDYsIDEyNSwgMC4xNyk7XG59XG4ubGlzdC12aWV3IHVsLmxpc3QgbGkgPiAubGlzdC1pdGVtLXZhbHVlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubGlzdC12aWV3IHVsLmxpc3QgbGkgLmlkIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMzODNmNDc7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlzdC12aWV3IHVsLmxpc3QgbGkgLm5hbWUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGNvbG9yOiAjNTU1YTYxO1xufVxuLmxpc3QtdmlldyB1bC5saXN0IGxpIC5hZGRyZXNzIHtcbiAgY29sb3I6ICM3Mjc2NzI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmxpc3QtdmlldyB1bC5saXN0IGxpIC5pdGVtcyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgbWFyZ2luOiAzcHggMDtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4ubGlzdC12aWV3IHVsLmxpc3QgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDYsIDEyNSwgMC4xNyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/list-view/list-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/list-view/list-view.component.ts ***!
  \*************************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_search_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/search-filter.pipe */ "./src/app/utils/search-filter.pipe.ts");



let ListViewComponent = class ListViewComponent {
    constructor(searchFilter) {
        this.searchFilter = searchFilter;
        this.searchString = '';
        this.itemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    fireMouseOver(e, data, index) {
        this.selectedDataItem = data;
        this.itemChange.emit({ e, index, from: 'mouse', select: false });
    }
    selectItem(item, index) {
        this.itemChange.emit({ item, index, select: true, from: 'mouse' });
    }
    isItemFound(item) {
        if (item.items.indexOf(this.searchString) !== -1) {
            return true;
        }
        return false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('listData'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ListViewComponent.prototype, "listData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('selectedDataItem'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListViewComponent.prototype, "selectedDataItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('searchString'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ListViewComponent.prototype, "searchString", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListViewComponent.prototype, "itemChange", void 0);
ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-view',
        template: __webpack_require__(/*! raw-loader!./list-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/list-view/list-view.component.html"),
        styles: [__webpack_require__(/*! ./list-view.component.scss */ "./src/app/components/list-view/list-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utils_search_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchFilterPipe"]])
], ListViewComponent);



/***/ }),

/***/ "./src/app/pages/details/details.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/details/details.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-detail {\n  width: 300px;\n  margin: 20vh auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlscy9NOlxcQXNzaWdubWVudHNcXG1vY2stYXV0b2NvbXBsZXRlL3NyY1xcYXBwXFxwYWdlc1xcZGV0YWlsc1xcZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1kZXRhaWwge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IDIwdmggYXV0bztcclxuXHJcbn1cclxuIiwiLnVzZXItZGV0YWlsIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDIwdmggYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/details/details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DetailsComponent = class DetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/details/details.component.html"),
        styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/pages/details/details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DetailsComponent);



/***/ }),

/***/ "./src/app/utils/highlighter.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/highlighter.pipe.ts ***!
  \*******************************************/
/*! exports provided: HighlighterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlighterPipe", function() { return HighlighterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HighlighterPipe = class HighlighterPipe {
    transform(text, search) {
        if (typeof text !== 'object' || !Array.isArray(text)) {
            let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter((t) => {
                return t.length > 0;
            }).join('|');
            const regex = new RegExp(pattern, 'gi');
            return search ? text.replace(regex, (match) => `<span class="highlight">${match}</span>`) : text;
        }
    }
};
HighlighterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'highlighter'
    })
], HighlighterPipe);



/***/ }),

/***/ "./src/app/utils/search-filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/utils/search-filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchFilterPipe = class SearchFilterPipe {
    transform(searchVal = '', args) {
        let result = [];
        function searchValInObject(val) {
            /**
             * If val is a string, compare and return
             * If val is an object, recurse for each property
             * If val is an array, recure for each property
             * If val is a number, compare and return
             *
             */
            if (typeof val === 'string' || typeof val === 'number') {
                if (searchVal && val.toString().toLowerCase().includes(searchVal.toLowerCase().trim())) {
                    val = `<span>${val}</span>`;
                    return true;
                }
            }
            else if (typeof val === 'object' || Array.isArray(val)) {
                for (const i in val) {
                    if (val.hasOwnProperty(i) && searchValInObject(val[i])) {
                        result.push(val);
                        return result;
                    }
                }
            }
            return false;
        }
        return searchValInObject(args);
    }
};
SearchFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchFilter'
    })
], SearchFilterPipe);



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

module.exports = __webpack_require__(/*! M:\Assignments\mock-autocomplete\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map