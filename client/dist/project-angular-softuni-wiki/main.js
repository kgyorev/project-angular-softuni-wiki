(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/404/404.component.css":
/*!***************************************!*\
  !*** ./src/app/404/404.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/404/404.component.html":
/*!****************************************!*\
  !*** ./src/app/404/404.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"errorMessage\">Page Not Found</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/404/404.component.ts":
/*!**************************************!*\
  !*** ./src/app/404/404.component.ts ***!
  \**************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.getBack = function () {
        window.history.back();
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-404',
            template: __webpack_require__(/*! ./404.component.html */ "./src/app/404/404.component.html"),
            styles: [__webpack_require__(/*! ./404.component.css */ "./src/app/404/404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Wiki</title>\n  <link rel='stylesheet' href='../assets/stylesheets/site.css'/>\n  <script src=\"../assets/javascripts/jquery-1.10.2.js\"></script>\n  <script src=\"../assets/javascripts/bootstrap.js\"></script>\n</head>\n\n<body>\n<div>\n  <!--<aside>-->\n  <!--<div class=\"center\">-->\n  <!--<img class=\"logo\" src=\"../assets/img/logo.png\" alt=\"logo\">-->\n  <!--</div>-->\n\n  <!--<nav>-->\n  <!--<a href=\"/\">Main Page</a>-->\n  <!--<a href=\"article.html\">Latest Article</a>-->\n  <!--<a href=\"/article/all\">All Articles</a>-->\n  <!--<form>-->\n  <!--<input type=\"text\">-->\n  <!--<input type=\"submit\" value=\"Search\">-->\n  <!--</form>-->\n  <!--<a href=\"/article/create\">Create New Article</a>-->\n  <!--</nav>-->\n  <!--</aside>-->\n <app-navigation-article></app-navigation-article>\n  <div id=\"container\">\n    <!--<header>-->\n      <!--<a href=\"/user/login\">Login</a>-->\n      <!--<a href=\"/user/register\">Register</a>-->\n      <!--<span>Welcome(TEST)!</span>-->\n      <!--<a href=\"/user/logout\">[Logout]</a>-->\n    <!--</header>-->\n    <app-navigation-user></app-navigation-user>\n    <router-outlet></router-outlet>\n    <footer>\n      SoftUni Wiki &copy; 2018\n    </footer>\n  </div>\n</div>\n</body>\n\n</html>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./404/404.component */ "./src/app/404/404.component.ts");
/* harmony import */ var _article_article_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article/article.module */ "./src/app/article/article.module.ts");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ "./src/app/interceptors/jwt.interceptor.ts");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "./src/app/interceptors/error.interceptor.ts");
/* harmony import */ var _navigation_article_navigation_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation-article/navigation-article.component */ "./src/app/navigation-article/navigation-article.component.ts");
/* harmony import */ var _navigation_user_navigation_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation-user/navigation-user.component */ "./src/app/navigation-user/navigation-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _404_404_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _navigation_article_navigation_article_component__WEBPACK_IMPORTED_MODULE_15__["NavigationArticleComponent"],
                _navigation_user_navigation_user_component__WEBPACK_IMPORTED_MODULE_16__["NavigationUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_9__["CustomFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"],
                _article_article_module__WEBPACK_IMPORTED_MODULE_12__["ArticleModule"]
            ],
            providers: [
                // AuthService, otiva v AuthModule
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _article_article_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article/article.module */ "./src/app/article/article.module.ts");
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./404/404.component */ "./src/app/404/404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'user/login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'user/register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    {
        path: 'article', loadChildren: function () { return _article_article_module__WEBPACK_IMPORTED_MODULE_5__["ArticleModule"]; }
    },
    { path: '**', component: _404_404_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/article/all-article/all-article.component.css":
/*!***************************************************************!*\
  !*** ./src/app/article/all-article/all-article.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/all-article/all-article.component.html":
/*!****************************************************************!*\
  !*** ./src/app/article/all-article/all-article.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to SoftUni Wiki!</h1>\n<section>\n  <h2>All articles</h2>\n  <h3 *ngIf=\"!articles\">Loading..</h3>\n  <div *ngIf=\"articles\" class=\"spacer\">\n    <ul *ngFor=\"let article of articles; let i = index\">\n      <li>\n        <a routerLink=\"/article/details/{{article._id}}\">{{i+1+(page-1)*10}}. {{article.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <div>\n    <div class=\"pagination\">\n      <p>Page {{page}} / {{totalCount}}</p>\n      <a *ngIf=\"page !== 1\" href=\"javascript:void(0)\" (click)=\"prevPage()\">&lt;</a>\n      <a *ngIf=\"!(articles.length === 0 || articles.length < 10)\" href=\"javascript:void(0)\"\n         (click)=\"nextPage()\">&gt;</a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/article/all-article/all-article.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/article/all-article/all-article.component.ts ***!
  \**************************************************************/
/*! exports provided: AllArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllArticleComponent", function() { return AllArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article.service */ "./src/app/article/article.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllArticleComponent = /** @class */ (function () {
    function AllArticleComponent(articleService, toastr, route, router) {
        this.articleService = articleService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.page = 1;
        this.totalCount = 0;
    }
    AllArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.page = +params['page'] || 1;
            _this.articleService.getAllArticle(_this.page).subscribe(function (data) {
                _this.articles = data.articles;
                _this.totalCount = Math.ceil(parseInt(data.totalCount, 10) / 10.0);
            });
        });
        // const url = this.getUrl(this.page);
        // this.articleService.getAllArticle(url).subscribe(data => {
        //   console.dir(data);
        //   this.articles = data.articles;
        // });
    };
    AllArticleComponent.prototype.prevPage = function () {
        if (this.page === 1) {
            return;
        }
        var url = this.getUrl(this.page - 1);
        this.articles = undefined;
        this.router.navigateByUrl(url);
    };
    AllArticleComponent.prototype.nextPage = function () {
        if (this.articles.length === 0 || this.articles.length < 10) {
            return;
        }
        var url = this.getUrl(this.page + 1);
        this.articles = undefined;
        this.router.navigateByUrl(url);
    };
    AllArticleComponent.prototype.getUrl = function (page) {
        return "article/all?page=" + page;
    };
    AllArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-article',
            template: __webpack_require__(/*! ./all-article.component.html */ "./src/app/article/all-article/all-article.component.html"),
            styles: [__webpack_require__(/*! ./all-article.component.css */ "./src/app/article/all-article/all-article.component.css")]
        }),
        __metadata("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AllArticleComponent);
    return AllArticleComponent;
}());



/***/ }),

/***/ "./src/app/article/article-details/article-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/article/article-details/article-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/article-details/article-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/article/article-details/article-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to SoftUni Wiki!</h1>\n<div *ngIf=\"article\"  class=\"spacer\">\n  <h2>{{article.title}}\n    <div *ngIf=\"authService.isAuthenticated()\" class=\"controls\">\n      <a routerLink=\"/article/edit/{{article._id}}\">[edit]</a>\n      <a routerLink=\"/article/history/{{article._id}}\">[history]</a>\n    </div>\n  </h2>\n  <article>\n    {{article.content}}\n  </article>\n</div>\n"

/***/ }),

/***/ "./src/app/article/article-details/article-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/article/article-details/article-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ArticleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailsComponent", function() { return ArticleDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article.service */ "./src/app/article/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_article_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/article.model */ "./src/app/article/models/article.model.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleDetailsComponent = /** @class */ (function () {
    function ArticleDetailsComponent(route, articleService, authService) {
        this.route = route;
        this.articleService = articleService;
        this.authService = authService;
        this.article = new _models_article_model__WEBPACK_IMPORTED_MODULE_3__["ArticleModel"]('', '', '');
        this.id = this.route.snapshot.params['id']; // Tova neshto moje da se vzeme i s observable
    }
    ArticleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getArticleDetails(this.id).subscribe(function (data) {
            // this.article.content = data.lastEdit.content;
            console.dir(data);
            _this.article.title = data.article.title;
            _this.article._id = data.article._id;
            _this.article.content = data.article.lastEdit.content;
        });
    };
    ArticleDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-details',
            template: __webpack_require__(/*! ./article-details.component.html */ "./src/app/article/article-details/article-details.component.html"),
            styles: [__webpack_require__(/*! ./article-details.component.css */ "./src/app/article/article-details/article-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ArticleDetailsComponent);
    return ArticleDetailsComponent;
}());



/***/ }),

/***/ "./src/app/article/article-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/article/article-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ArticleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleRoutingModule", function() { return ArticleRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _all_article_all_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-article/all-article.component */ "./src/app/article/all-article/all-article.component.ts");
/* harmony import */ var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-article/create-article.component */ "./src/app/article/create-article/create-article.component.ts");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/guards/auth.guard */ "./src/app/auth/guards/auth.guard.ts");
/* harmony import */ var _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-details/article-details.component */ "./src/app/article/article-details/article-details.component.ts");
/* harmony import */ var _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-article/edit-article.component */ "./src/app/article/edit-article/edit-article.component.ts");
/* harmony import */ var _history_article_history_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history-article/history-article.component */ "./src/app/article/history-article/history-article.component.ts");
/* harmony import */ var _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-details/edit-details.component */ "./src/app/article/edit-details/edit-details.component.ts");
/* harmony import */ var _search_article_search_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-article/search-article.component */ "./src/app/article/search-article/search-article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var articleRoutes = [
    { path: 'all', component: _all_article_all_article_component__WEBPACK_IMPORTED_MODULE_2__["AllArticleComponent"] },
    { path: 'search', component: _search_article_search_article_component__WEBPACK_IMPORTED_MODULE_9__["SearchArticleComponent"] },
    { path: 'details/:id', component: _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_5__["ArticleDetailsComponent"] },
    { path: 'details/edit/:id', component: _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_8__["EditDetailsComponent"], canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    // {path: 'my', component: MyFurnitureComponent},
    { path: 'create', component: _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_3__["CreateArticleComponent"], canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'history/:id', component: _history_article_history_article_component__WEBPACK_IMPORTED_MODULE_7__["HistoryArticleComponent"], canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'edit/:id', component: _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_6__["EditArticleComponent"], canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
];
var ArticleRoutingModule = /** @class */ (function () {
    function ArticleRoutingModule() {
    }
    ArticleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(articleRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], ArticleRoutingModule);
    return ArticleRoutingModule;
}());



/***/ }),

/***/ "./src/app/article/article.module.ts":
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/app/article/index.ts");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.service */ "./src/app/article/article.service.ts");
/* harmony import */ var _article_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-routing.module */ "./src/app/article/article-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-details/article-details.component */ "./src/app/article/article-details/article-details.component.ts");
/* harmony import */ var _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-article/edit-article.component */ "./src/app/article/edit-article/edit-article.component.ts");
/* harmony import */ var _history_article_history_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./history-article/history-article.component */ "./src/app/article/history-article/history-article.component.ts");
/* harmony import */ var _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-details/edit-details.component */ "./src/app/article/edit-details/edit-details.component.ts");
/* harmony import */ var _search_article_search_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-article/search-article.component */ "./src/app/article/search-article/search-article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _index__WEBPACK_IMPORTED_MODULE_2__["articleComponents"].concat([_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_6__["ArticleDetailsComponent"], _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_7__["EditArticleComponent"], _history_article_history_article_component__WEBPACK_IMPORTED_MODULE_8__["HistoryArticleComponent"], _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_9__["EditDetailsComponent"], _search_article_search_article_component__WEBPACK_IMPORTED_MODULE_10__["SearchArticleComponent"]]),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                // BrowserModule, // tuk se menajirat pipe -vete  , tozi triabva da go ima v glavnia modul
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _article_routing_module__WEBPACK_IMPORTED_MODULE_4__["ArticleRoutingModule"]
            ],
            providers: [_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"]]
            // exports: [
            //   CommonModule // tozi modul sadarja async pipovete i BrowserModule
            //   // BrowserModule
            // ]
        })
    ], ArticleModule);
    return ArticleModule;
}());



/***/ }),

/***/ "./src/app/article/article.service.ts":
/*!********************************************!*\
  !*** ./src/app/article/article.service.ts ***!
  \********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var host = 'https://softuni-wiki-server.herokuapp.com:443/';
// const host = 'http://localhost:1337/';
var createUrl = host + 'article/create';
var allUrl = host + 'article/all';
var searchUrl = host + 'article/search';
var lockUrl = host + 'article/lock/';
var unlockUrl = host + 'article/unlock/';
var detailsUrl = host + 'article/details/';
var deleteUrl = host + 'article/delete/';
// const articleById = 'http://localhost:5000/article/';
var articleByIdEdit = host + 'article/edit/';
var articleEditDetailsById = host + 'edit/';
var articleHistoryByIdEdit = host + 'article/history/';
var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
    }
    ArticleService.prototype.getHomePage = function () {
        return this.http.get(host);
    };
    ArticleService.prototype.createArticle = function (body) {
        return this.http.post(createUrl, body);
    };
    ArticleService.prototype.getAllArticle = function (page) {
        if (page === void 0) { page = 1; }
        return this.http.get(allUrl + ("?page=" + page));
    };
    ArticleService.prototype.searchArticle = function (page, searchText) {
        if (page === void 0) { page = 1; }
        if (searchText === void 0) { searchText = ''; }
        return this.http.get(searchUrl + ("?page=" + page + "&searchStr=" + searchText));
    };
    ArticleService.prototype.getArticleDetails = function (id) {
        return this.http.get(detailsUrl + id);
    };
    ArticleService.prototype.getArticleLock = function (id) {
        return this.http.get(lockUrl + id);
    };
    ArticleService.prototype.getArticleUnLock = function (id) {
        return this.http.get(unlockUrl + id);
    };
    ArticleService.prototype.deleteArticle = function (id) {
        return this.http.delete(deleteUrl + id);
    };
    // getArticleById(id: string) {
    //   return this.http.get<ArticleModel>(furnitureById + id);
    // }
    ArticleService.prototype.editArticleById = function (id, body) {
        return this.http.post(articleByIdEdit + id, body);
    };
    ArticleService.prototype.historyArticleById = function (id) {
        return this.http.get(articleHistoryByIdEdit + id);
    };
    ArticleService.prototype.articleEditDetailsById = function (id) {
        return this.http.get(articleEditDetailsById + id);
    };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/article/create-article/create-article.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/article/create-article/create-article.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/create-article/create-article.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/article/create-article/create-article.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to SoftUni Wiki!</h1>\n<section>\n  <h2>Create new article</h2>\n  <div class=\"spacer\">\n    <form #articleForm=\"ngForm\" (ngSubmit)=\"create()\">\n      <label>Article title</label>\n      <input type=\"text\" class=\"title\" id=\"articleTitle\" placeholder=\"Article Title\" name=\"title\" required\n             minlength=\"4\"\n             [(ngModel)]=\"bindingModel.title\"\n             #title=\"ngModel\">\n      <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-dark\">Title must be at least 4 symbols long</div>\n      <label>Content</label>\n      <textarea id=\"articleContent\" rows=\"5\" name=\"content\" required\n                minlength=\"10\"\n                [(ngModel)]=\"bindingModel.content\"\n                #content=\"ngModel\"\n      ></textarea>\n      <div [hidden]=\"content.valid || content.pristine\" class=\"alert alert-dark\">Content must be at least 10 symbols long</div>\n      <input type=\"submit\" [disabled]=\"articleForm.form.invalid\" value=\"Submit\">\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/article/create-article/create-article.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/article/create-article/create-article.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArticleComponent", function() { return CreateArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_create_article_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/create-article.model */ "./src/app/article/models/create-article.model.ts");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "./src/app/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateArticleComponent = /** @class */ (function () {
    function CreateArticleComponent(articleService) {
        this.articleService = articleService;
        this.bindingModel = new _models_create_article_model__WEBPACK_IMPORTED_MODULE_1__["CreateArticleModel"]('', '');
    }
    CreateArticleComponent.prototype.ngOnInit = function () {
    };
    CreateArticleComponent.prototype.create = function () {
        this.articleService.createArticle(this.bindingModel).subscribe();
    };
    CreateArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-article',
            template: __webpack_require__(/*! ./create-article.component.html */ "./src/app/article/create-article/create-article.component.html"),
            styles: [__webpack_require__(/*! ./create-article.component.css */ "./src/app/article/create-article/create-article.component.css")]
        }),
        __metadata("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], CreateArticleComponent);
    return CreateArticleComponent;
}());



/***/ }),

/***/ "./src/app/article/edit-article/edit-article.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article/edit-article/edit-article.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/edit-article/edit-article.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article/edit-article/edit-article.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to SoftUni Wiki!</h1>\n<section>\n  <h2>Edit article\n  <div *ngIf=\"authService.isAdmin()\" class=\"controls\">\n    <a href=\"javascript:void(0)\" (click)=\"deleteArticle()\">[Delete article]</a>\n    <a *ngIf=\"lockedStatus\" href=\"javascript:void(0)\" (click)=\"articleUnLock()\">[Unlock article]</a>\n    <a *ngIf=\"!lockedStatus\" href=\"javascript:void(0)\" (click)=\"articleLock()\">[Lock article]</a>\n  </div>\n  </h2>\n  <div *ngIf=\"bindingModel\" class=\"spacer\">\n    <form #articleForm=\"ngForm\" (ngSubmit)=\"edit()\">\n      <label>Article title</label>\n      <h3>{{bindingModel.title}}</h3>\n      <label>Content</label>\n      <textarea [disabled]=\"lockedStatus && !authService.isAdmin()\" id=\"articleContent\" rows=\"5\" name=\"content\" required\n                minlength=\"10\"\n                [(ngModel)]=\"bindingModel.content\"\n                #content=\"ngModel\"\n      ></textarea>\n      <div [hidden]=\"content.valid || content.pristine\" class=\"alert alert-dark\">Content must be at least 10 symbols long</div>\n      <input *ngIf=\"!lockedStatus || authService.isAdmin()\" type=\"submit\" [disabled]=\"articleForm.form.invalid\" value=\"Submit\">\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/article/edit-article/edit-article.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article/edit-article/edit-article.component.ts ***!
  \****************************************************************/
/*! exports provided: EditArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArticleComponent", function() { return EditArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article.service */ "./src/app/article/article.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_article_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/article.model */ "./src/app/article/models/article.model.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditArticleComponent = /** @class */ (function () {
    function EditArticleComponent(route, articleService, toastr, router, authService) {
        this.route = route;
        this.articleService = articleService;
        this.toastr = toastr;
        this.router = router;
        this.authService = authService;
        this.bindingModel = new _models_article_model__WEBPACK_IMPORTED_MODULE_4__["ArticleModel"]('', '', '');
    }
    EditArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getArticleDetails(this.route.snapshot.params['id']).subscribe(function (data) {
            console.dir(data);
            _this.bindingModel._id = data.article._id;
            _this.bindingModel.title = data.article.title;
            _this.bindingModel.content = data.article.lastEdit.content;
            _this.lockedStatus = data.article.lockedStatus;
        });
    };
    EditArticleComponent.prototype.edit = function () {
        var _this = this;
        this.articleService.editArticleById(this.bindingModel._id, this.bindingModel).subscribe(function () {
            _this.toastr.success('Edited Furniture', 'Success!');
            _this.router.navigate(['/article/details/' + _this.bindingModel._id]);
        });
    };
    EditArticleComponent.prototype.deleteArticle = function () {
        var _this = this;
        this.articleService.deleteArticle(this.bindingModel._id).subscribe(function () {
            _this.toastr.success('Deleted Article', 'Success!');
            _this.router.navigate(['/article/all']);
        });
    };
    EditArticleComponent.prototype.articleLock = function () {
        var _this = this;
        this.articleService.getArticleLock(this.bindingModel._id).subscribe(function () {
            _this.toastr.success('Lock Article', 'Success!');
            _this.router.navigate(['/article/details/' + _this.bindingModel._id]);
        });
    };
    EditArticleComponent.prototype.articleUnLock = function () {
        var _this = this;
        this.articleService.getArticleUnLock(this.bindingModel._id).subscribe(function () {
            _this.toastr.success('Unlock Article', 'Success!');
            _this.router.navigate(['/article/details/' + _this.bindingModel._id]);
        });
    };
    EditArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-article',
            template: __webpack_require__(/*! ./edit-article.component.html */ "./src/app/article/edit-article/edit-article.component.html"),
            styles: [__webpack_require__(/*! ./edit-article.component.css */ "./src/app/article/edit-article/edit-article.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], EditArticleComponent);
    return EditArticleComponent;
}());



/***/ }),

/***/ "./src/app/article/edit-details/edit-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article/edit-details/edit-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/edit-details/edit-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article/edit-details/edit-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to SoftUni Wiki!</h1>\n<div class=\"container\">\n  <div class=\"spacer\">\n    <h2> {{article.title}}\n    </h2>\n    <article>\n      {{articleHistory.content}}\n    </article>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/article/edit-details/edit-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article/edit-details/edit-details.component.ts ***!
  \****************************************************************/
/*! exports provided: EditDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDetailsComponent", function() { return EditDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "./src/app/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditDetailsComponent = /** @class */ (function () {
    function EditDetailsComponent(route, articleService) {
        this.route = route;
        this.articleService = articleService;
        this.id = this.route.snapshot.params['id']; // Tova neshto moje da se vzeme i s observable
    }
    EditDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.articleEditDetailsById(this.id).subscribe(function (data) {
            console.dir(data);
            _this.articleHistory = data.edit;
            _this.article = data.article;
        });
    };
    EditDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-details',
            template: __webpack_require__(/*! ./edit-details.component.html */ "./src/app/article/edit-details/edit-details.component.html"),
            styles: [__webpack_require__(/*! ./edit-details.component.css */ "./src/app/article/edit-details/edit-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], EditDetailsComponent);
    return EditDetailsComponent;
}());



/***/ }),

/***/ "./src/app/article/history-article/history-article.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/article/history-article/history-article.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/history-article/history-article.component.html":
/*!************************************************************************!*\
  !*** ./src/app/article/history-article/history-article.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to SoftUni Wiki!</h1>\n<section>\n  <h2>{{article.title}}</h2>\n  <div class=\"spacer\">\n    <h3>Edit hostory</h3>\n    <ul *ngFor=\"let articleHistory of articleHistoryLs;let i=index\">\n      <li>\n        <a routerLink=\"/article/details/edit/{{articleHistory._id}}\">{{i+1}}. {{i===0?\"Created On\":\"Updated On\"}}{{calcDate(articleHistory.creationDate)}}</a> by\n        <span class=\"author\">{{articleHistory.author.email}}</span>\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/article/history-article/history-article.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/article/history-article/history-article.component.ts ***!
  \**********************************************************************/
/*! exports provided: HistoryArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryArticleComponent", function() { return HistoryArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "./src/app/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryArticleComponent = /** @class */ (function () {
    function HistoryArticleComponent(route, articleService) {
        this.route = route;
        this.articleService = articleService;
        this.id = this.route.snapshot.params['id']; // Tova neshto moje da se vzeme i s observable
    }
    HistoryArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.historyArticleById(this.id).subscribe(function (data) {
            console.dir(data);
            _this.article = data.article;
            _this.articleHistoryLs = data.editLs;
        });
    };
    HistoryArticleComponent.prototype.calcDate = function (dateIsoFormat) {
        var date = new Date(dateIsoFormat);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dt = date.getDate();
        var hh = '' + date.getHours();
        if (hh.length === 1) {
            hh = '0' + hh;
        }
        var mm = '' + date.getMinutes();
        if (mm.length === 1) {
            mm = '0' + mm;
        }
        var ss = '' + date.getSeconds();
        if (ss.length === 1) {
            ss = '0' + ss;
        }
        var dtStr = '' + dt;
        if (dt < 10) {
            dtStr = '0' + dt;
        }
        var monthStr = '' + month;
        if (month < 10) {
            monthStr = '0' + month;
        }
        return dt + '-' + month + '-' + year + ' At ' + hh + ':' + mm + ':' + ss;
    };
    HistoryArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history-article',
            template: __webpack_require__(/*! ./history-article.component.html */ "./src/app/article/history-article/history-article.component.html"),
            styles: [__webpack_require__(/*! ./history-article.component.css */ "./src/app/article/history-article/history-article.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], HistoryArticleComponent);
    return HistoryArticleComponent;
}());



/***/ }),

/***/ "./src/app/article/index.ts":
/*!**********************************!*\
  !*** ./src/app/article/index.ts ***!
  \**********************************/
/*! exports provided: articleComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleComponents", function() { return articleComponents; });
/* harmony import */ var _all_article_all_article_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-article/all-article.component */ "./src/app/article/all-article/all-article.component.ts");
/* harmony import */ var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-article/create-article.component */ "./src/app/article/create-article/create-article.component.ts");
/* harmony import */ var _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-details/article-details.component */ "./src/app/article/article-details/article-details.component.ts");
/* harmony import */ var _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-article/edit-article.component */ "./src/app/article/edit-article/edit-article.component.ts");
/* harmony import */ var _history_article_history_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history-article/history-article.component */ "./src/app/article/history-article/history-article.component.ts");
/* harmony import */ var _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-details/edit-details.component */ "./src/app/article/edit-details/edit-details.component.ts");
/* harmony import */ var _search_article_search_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-article/search-article.component */ "./src/app/article/search-article/search-article.component.ts");







var articleComponents = [
    _all_article_all_article_component__WEBPACK_IMPORTED_MODULE_0__["AllArticleComponent"],
    _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_1__["CreateArticleComponent"],
    _edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_3__["EditArticleComponent"],
    _history_article_history_article_component__WEBPACK_IMPORTED_MODULE_4__["HistoryArticleComponent"],
    _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_5__["EditDetailsComponent"],
    _search_article_search_article_component__WEBPACK_IMPORTED_MODULE_6__["SearchArticleComponent"],
    _article_details_article_details_component__WEBPACK_IMPORTED_MODULE_2__["ArticleDetailsComponent"]
];


/***/ }),

/***/ "./src/app/article/models/article.model.ts":
/*!*************************************************!*\
  !*** ./src/app/article/models/article.model.ts ***!
  \*************************************************/
/*! exports provided: ArticleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModel", function() { return ArticleModel; });
var ArticleModel = /** @class */ (function () {
    function ArticleModel(_id, title, content) {
        this._id = _id;
        this.title = title;
        this.content = content;
    }
    return ArticleModel;
}());



/***/ }),

/***/ "./src/app/article/models/create-article.model.ts":
/*!********************************************************!*\
  !*** ./src/app/article/models/create-article.model.ts ***!
  \********************************************************/
/*! exports provided: CreateArticleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArticleModel", function() { return CreateArticleModel; });
var CreateArticleModel = /** @class */ (function () {
    function CreateArticleModel(title, content) {
        this.title = title;
        this.content = content;
    }
    return CreateArticleModel;
}());



/***/ }),

/***/ "./src/app/article/search-article/search-article.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/article/search-article/search-article.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/search-article/search-article.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/article/search-article/search-article.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to SoftUni Wiki!</h1>\n<section>\n  <h2>Articles Found</h2>\n  <h3 *ngIf=\"!articles\">Loading..</h3>\n  <div *ngIf=\"articles\" class=\"spacer\">\n    <ul *ngFor=\"let article of articles; let i = index\">\n      <li>\n        <a routerLink=\"/article/details/{{article._id}}\">{{i+1+(page-1)*10}}. {{article.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <div>\n    <div class=\"pagination\">\n      <p *ngIf=\"page !== 1 || !(articles.length === 0 || articles.length < 10)\">Page {{page}} / {{totalCount}}</p>\n      <a *ngIf=\"page !== 1\" href=\"javascript:void(0)\" (click)=\"prevPage()\">&lt;</a>\n      <a *ngIf=\"!(articles.length === 0 || articles.length < 10)\" href=\"javascript:void(0)\"\n         (click)=\"nextPage()\">&gt;</a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/article/search-article/search-article.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/article/search-article/search-article.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchArticleComponent", function() { return SearchArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article.service */ "./src/app/article/article.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchArticleComponent = /** @class */ (function () {
    function SearchArticleComponent(articleService, toastr, route, router) {
        this.articleService = articleService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.page = 1;
        this.searchText = '';
        this.totalCount = 0;
    }
    SearchArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.page = +params['page'] || 1;
            _this.searchText = params['searchStr'];
            _this.articleService.searchArticle(_this.page, _this.searchText).subscribe(function (data) {
                _this.articles = data.articles;
                _this.totalCount = Math.ceil(parseInt(data.totalCount, 10) / 10.0);
            });
        });
    };
    SearchArticleComponent.prototype.prevPage = function () {
        if (this.page === 1) {
            return;
        }
        var url = this.getUrl(this.page - 1);
        this.articles = undefined;
        this.router.navigateByUrl(url);
    };
    SearchArticleComponent.prototype.nextPage = function () {
        if (this.articles.length === 0 || this.articles.length < 10) {
            return;
        }
        var url = this.getUrl(this.page + 1);
        this.articles = undefined;
        this.router.navigateByUrl(url);
    };
    SearchArticleComponent.prototype.getUrl = function (page) {
        var url = "article/search?page=" + page;
        if (this.searchText) {
            url += "&searchStr=" + this.searchText;
        }
        return url;
    };
    SearchArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-article',
            template: __webpack_require__(/*! ./search-article.component.html */ "./src/app/article/search-article/search-article.component.html"),
            styles: [__webpack_require__(/*! ./search-article.component.css */ "./src/app/article/search-article/search-article.component.css")]
        }),
        __metadata("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchArticleComponent);
    return SearchArticleComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/app/auth/index.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: _index__WEBPACK_IMPORTED_MODULE_2__["authComponents"].slice(),
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"] // Triabva da go ima vav vseki podmodul
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var host = 'https://softuni-wiki-server.herokuapp.com:443/';
// const host = 'http://localhost:1337/';
var loginUrl = host + 'user/login';
var registerUrl = host + 'user/register';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.register = function (body) {
        return this.http.post(registerUrl, body);
    };
    AuthService.prototype.login = function (body) {
        return this.http.post(loginUrl, body);
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem('currentUser') !== null;
    };
    AuthService.prototype.isAdmin = function () {
        if (this.user) {
            return this.user.isAdmin;
        }
        return false;
    };
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            return currentUser;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/user/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/index.ts":
/*!*******************************!*\
  !*** ./src/app/auth/index.ts ***!
  \*******************************/
/*! exports provided: authComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authComponents", function() { return authComponents; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");


var authComponents = [
    _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
];


/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to SoftUni Wiki!</h1>\n<section>\n  <h2>Login</h2>\n  <div class=\"spacer\">\n    <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n      <label>Email:</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\" name=\"email\"\n             required\n             email\n             [(ngModel)]=\"model.email\"\n             #email=\"ngModel\">\n\n      <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-dark\">\n        Please provide a correct email address\n      </div>\n      <label>Password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" name=\"password\"\n             required\n             [(ngModel)]=\"model.password\"\n             #password=\"ngModel\"\n             minlength=\"4\">\n      <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-dark\">\n        Password must have at least 4 characters\n      </div>\n      <input type=\"submit\" [disabled]=\"loginForm.form.invalid\" value=\"Login\">\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/login.model */ "./src/app/auth/models/login.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.model = new _models_login_model__WEBPACK_IMPORTED_MODULE_2__["LoginModel"]('', '');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.authService
            .login(this.model)
            .subscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/models/login.model.ts":
/*!********************************************!*\
  !*** ./src/app/auth/models/login.model.ts ***!
  \********************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel(email, password) {
        this.email = email;
        this.password = password;
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/auth/models/register.model.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/models/register.model.ts ***!
  \***********************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
var RegisterModel = /** @class */ (function () {
    function RegisterModel(email, password, repeatedPassword) {
        this.email = email;
        this.password = password;
        this.repeatedPassword = repeatedPassword;
    }
    return RegisterModel;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to SoftUni Wiki!</h1>\n<section>\n  <h2>Register</h2>\n  <div class=\"spacer\">\n    <form (ngSubmit)=\"register()\" #registerForm=\"ngForm\">\n      <label>Email:</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\" name=\"email\"\n             required\n             email\n             [(ngModel)]=\"model.email\"\n             #email=\"ngModel\"\n            >\n      <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-dark\">\n        Please provide a correct email address\n      </div>\n      <label>Password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" required name=\"password\"\n             [(ngModel)]=\"model.password\"\n             #password=\"ngModel\"\n             minlength=\"4\">\n      <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-dark\">\n        Password must have at least 4 characters\n      </div>\n      <label>Repeat password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"repeatedPassword\" placeholder=\"Confirm Password\" required name=\"repeatedPassword\"\n             [(ngModel)]=\"model.repeatedPassword\"\n             #repeatedPassword=\"ngModel\">\n      <div [hidden]=\"password.value === repeatedPassword.value || repeatedPassword.pristine\" class=\"alert alert-dark\">\n        Passwords do not match!\n      </div>\n      <input type=\"submit\" [disabled]=\"registerForm.form.invalid\" value=\"Register\">\n    </form>\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_register_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/register.model */ "./src/app/auth/models/register.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
        this.model = new _models_register_model__WEBPACK_IMPORTED_MODULE_1__["RegisterModel"]('', '');
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        this.authService
            .register(this.model)
            .subscribe();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to SoftUni Wiki!</h1>\n<section id=\"featured\">\n  <h2>Latest article</h2>\n  <article>\n    <h3>{{lastArticle.title}}</h3>\n    <p>\n     {{lastArticle.content}}\n    </p>\n    <div class=\"controls\">\n      <a routerLink=\"/article/details/{{lastArticle._id}}\">Read more</a>\n    </div>\n  </article>\n</section>\n<section id=\"recent\">\n  <h2>Recently added articles</h2>\n  <ul *ngFor=\"let article of articles\">\n    <li>\n      <a routerLink=\"/article/details/{{article._id}}\">{{article.title}}</a>\n    </li>\n  </ul>\n</section>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article/article.service */ "./src/app/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(articleService) {
        this.articleService = articleService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getHomePage().subscribe(function (data) {
            console.dir(data);
            _this.lastArticle = data.article;
            _this.articles = data.articles;
            _this.lastArticle.content = data.displayContent;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_article_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/error.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Triabva da se dobavi CSS-a na toastr
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(toastr, router) {
        this.toastr = toastr;
        this.router = router;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            switch (err.status) {
                case 401:
                    _this.toastr.error(err.error.message, 'Warning!');
                    break;
                case 400:
                    var message = Object.keys(err.error.errors).map(function (e) { return err.error.errors[e]; }).join('\n');
                    _this.toastr.error(message, 'Warning!');
                    break;
            }
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            // return Observable.throw(err);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/jwt.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(toastr, router) {
        this.toastr = toastr;
        this.router = router;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && res.body.token) {
                _this.saveToken(res.body); // Triabva da se dobavi router i da se napravi redirect kum home primerno
                _this.toastr.success(res.body.message, 'Success!');
                _this.router.navigate(['/']);
            }
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && res.body.success && res.url.endsWith('register')) {
                _this.toastr.success(res.body.message, 'Success!');
                _this.router.navigate(['/user/login']);
            }
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && res.body.success && res.url.endsWith('create')) {
                _this.toastr.success(res.body.message, 'Success!');
                _this.router.navigate(['/']);
            }
        }));
    };
    JwtInterceptor.prototype.saveToken = function (data) {
        localStorage.setItem('currentUser', JSON.stringify({
            'username': data.user,
            'token': data.token,
            'isAdmin': data.isUserAuthorized
        }));
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/navigation-article/navigation-article.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/navigation-article/navigation-article.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation-article/navigation-article.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/navigation-article/navigation-article.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\n  <div class=\"center\">\n    <img class=\"logo\" src=\"../assets/img/logo.png\" alt=\"logo\">\n  </div>\n\n  <nav>\n    <a routerLink=\"/\">Main Page</a>\n    <a routerLink=\"/article/details/{{lastArticle._id}}\">Latest Article</a>\n    <a routerLink=\"/article/all\">All Articles</a>\n    <!--<form>-->\n      <!--<input type=\"text\">-->\n      <!--<input type=\"submit\" value=\"Search\">-->\n    <!--</form>-->\n    <div>\n      <input type=\"text\" [(ngModel)]=\"searchText\" name=\"searchText\"/>\n      <button class=\"btn\" (click)=\"search()\">Search</button>\n    </div>\n    <a routerLink=\"/article/create\">Create New Article</a>\n  </nav>\n</aside>\n"

/***/ }),

/***/ "./src/app/navigation-article/navigation-article.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/navigation-article/navigation-article.component.ts ***!
  \********************************************************************/
/*! exports provided: NavigationArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationArticleComponent", function() { return NavigationArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article/article.service */ "./src/app/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationArticleComponent = /** @class */ (function () {
    function NavigationArticleComponent(articleService, router) {
        this.articleService = articleService;
        this.router = router;
        this.searchText = '';
    }
    NavigationArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getHomePage().subscribe(function (data) {
            _this.lastArticle = data.article;
        });
    };
    NavigationArticleComponent.prototype.search = function () {
        this.router.navigateByUrl("article/search?searchStr=" + this.searchText);
    };
    NavigationArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-article',
            template: __webpack_require__(/*! ./navigation-article.component.html */ "./src/app/navigation-article/navigation-article.component.html"),
            styles: [__webpack_require__(/*! ./navigation-article.component.css */ "./src/app/navigation-article/navigation-article.component.css")]
        }),
        __metadata("design:paramtypes", [_article_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationArticleComponent);
    return NavigationArticleComponent;
}());



/***/ }),

/***/ "./src/app/navigation-user/navigation-user.component.css":
/*!***************************************************************!*\
  !*** ./src/app/navigation-user/navigation-user.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation-user/navigation-user.component.html":
/*!****************************************************************!*\
  !*** ./src/app/navigation-user/navigation-user.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <a *ngIf=\"!authService.isAuthenticated()\" routerLink=\"/user/login\">Login</a>\n  <a *ngIf=\"!authService.isAuthenticated()\" routerLink=\"/user/register\">Register</a>\n  <span *ngIf=\"authService.isAuthenticated()\">Welcome({{authService.user.username}})!</span>\n  <a *ngIf=\"authService.isAuthenticated()\"  href=\"javascript:void(0)\" (click)=\"logout()\">[Logout]</a>\n</header>\n"

/***/ }),

/***/ "./src/app/navigation-user/navigation-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/navigation-user/navigation-user.component.ts ***!
  \**************************************************************/
/*! exports provided: NavigationUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationUserComponent", function() { return NavigationUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationUserComponent = /** @class */ (function () {
    function NavigationUserComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    NavigationUserComponent.prototype.ngOnInit = function () {
    };
    NavigationUserComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/user/login']);
    };
    NavigationUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-user',
            template: __webpack_require__(/*! ./navigation-user.component.html */ "./src/app/navigation-user/navigation-user.component.html"),
            styles: [__webpack_require__(/*! ./navigation-user.component.css */ "./src/app/navigation-user/navigation-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavigationUserComponent);
    return NavigationUserComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\angular-demos\project-angular-softuni-wiki\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map