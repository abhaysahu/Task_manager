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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "./src/app/pages/task-view/task-view.component.ts");
/* harmony import */ var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/new-list/new-list.component */ "./src/app/pages/new-list/new-list.component.ts");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "./src/app/pages/new-task/new-task.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/edit-list/edit-list.component */ "./src/app/pages/edit-list/edit-list.component.ts");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "./src/app/pages/edit-task/edit-task.component.ts");










var routes = [
    { path: '', redirectTo: '/lists', pathMatch: "full" },
    { path: 'new-list', component: _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_4__["NewListComponent"] },
    { path: 'edit-list/:listId', component: _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_8__["EditListComponent"] },
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"] },
    { path: 'signup', component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__["SignupPageComponent"] },
    { path: 'lists', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__["TaskViewComponent"] },
    { path: 'lists/:listId', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__["TaskViewComponent"] },
    { path: 'lists/:listId/new-task', component: _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__["NewTaskComponent"] },
    { path: 'lists/:listId/edit-task/:taskId', component: _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "./src/app/pages/task-view/task-view.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/new-list/new-list.component */ "./src/app/pages/new-list/new-list.component.ts");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "./src/app/pages/new-task/new-task.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _web_req_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web-req.interceptor */ "./src/app/web-req.interceptor.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/edit-list/edit-list.component */ "./src/app/pages/edit-list/edit-list.component.ts");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "./src/app/pages/edit-task/edit-task.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__["TaskViewComponent"],
                _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_7__["NewListComponent"],
                _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__["NewTaskComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"],
                _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__["SignupPageComponent"],
                _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_12__["EditListComponent"],
                _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_13__["EditTaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _web_req_interceptor__WEBPACK_IMPORTED_MODULE_10__["WebReqInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-request.service */ "./src/app/web-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(webService, http, webRequestService, router) {
        this.webService = webService;
        this.http = http;
        this.webRequestService = webRequestService;
        this.router = router;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.webRequestService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log("LOGGED IN!");
        }));
    };
    AuthService.prototype.signup = function (email, password) {
        var _this = this;
        return this.webRequestService.signup(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log("Successfully signed up and now logged in!");
        }));
    };
    AuthService.prototype.logout = function () {
        this.removeSession();
        this.router.navigate(['/login']);
    };
    AuthService.prototype.getAccessToken = function () {
        return localStorage.getItem('x-access-token');
    };
    AuthService.prototype.getRefreshToken = function () {
        return localStorage.getItem('x-refresh-token');
    };
    AuthService.prototype.getUserId = function () {
        return localStorage.getItem('user-id');
    };
    AuthService.prototype.setAccessToken = function (accessToken) {
        localStorage.setItem('x-access-token', accessToken);
    };
    AuthService.prototype.setSession = function (userId, accessToken, refreshToken) {
        console.log(accessToken);
        console.log(refreshToken);
        localStorage.setItem('user-id', userId);
        localStorage.setItem('x-access-token', accessToken);
        localStorage.setItem('x-refresh-token', refreshToken);
    };
    AuthService.prototype.removeSession = function () {
        localStorage.removeItem('user-id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
    };
    AuthService.prototype.getNewAccessToken = function () {
        var _this = this;
        return this.http.get(this.webService.ROOt_URL + "/users/me/access-token", {
            headers: {
                'x-refresh-token': this.getRefreshToken(),
                '_id': this.getUserId()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.setAccessToken(res.headers.get('x-access-token'));
        }));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_request_service__WEBPACK_IMPORTED_MODULE_3__["WebRequestService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _web_request_service__WEBPACK_IMPORTED_MODULE_3__["WebRequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/pages/edit-list/edit-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-list/edit-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n    <div class=\"modal-box\">\n      <h1 class=\"title\">\n        Edit list\n      </h1>\n  \n      <input #listTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter list name...\">\n      <br><br>\n      <div class=\"buttons is-right\">\n        <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n        <button class=\"button is-primary has-text-white is-medium\" (click)=\"updateList(listTitleInput.value)\">Save</button>\n      </div>\n  \n      \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/edit-list/edit-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-list/edit-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtbGlzdC9lZGl0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/edit-list/edit-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-list/edit-list.component.ts ***!
  \********************************************************/
/*! exports provided: EditListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListComponent", function() { return EditListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditListComponent = /** @class */ (function () {
    function EditListComponent(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
    }
    EditListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.listId = params.listId;
        });
    };
    EditListComponent.prototype.updateList = function (title) {
        var _this = this;
        this.taskService.updateList(this.listId, title).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/lists', _this.listId]);
        });
    };
    EditListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-list',
            template: __webpack_require__(/*! ./edit-list.component.html */ "./src/app/pages/edit-list/edit-list.component.html"),
            styles: [__webpack_require__(/*! ./edit-list.component.scss */ "./src/app/pages/edit-list/edit-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditListComponent);
    return EditListComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n    <div class=\"modal-box\">\n      <h1 class=\"title\">\n        Edit task\n      </h1>\n  \n      <input #taskTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter task name...\">\n      <br><br>\n      <div class=\"buttons is-right\">\n        <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n        <button class=\"button is-primary has-text-white is-medium\" (click)=\"updateTask(taskTitleInput.value)\">Save</button>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtdGFzay9lZGl0LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.ts ***!
  \********************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditTaskComponent = /** @class */ (function () {
    function EditTaskComponent(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
    }
    EditTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.listId = params.listId;
            _this.taskId = params.taskId;
        });
    };
    EditTaskComponent.prototype.updateTask = function (title) {
        var _this = this;
        this.taskService.updateTask(this.listId, this.taskId, title).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/lists', _this.listId]);
        });
    };
    EditTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-task',
            template: __webpack_require__(/*! ./edit-task.component.html */ "./src/app/pages/edit-task/edit-task.component.html"),
            styles: [__webpack_require__(/*! ./edit-task.component.scss */ "./src/app/pages/edit-task/edit-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditTaskComponent);
    return EditTaskComponent;
}());



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n    <div class=\"white-box\">\n  \n      <h1 class=\"title has-text-primary\">Login</h1>\n      \n      <div class=\"field\">\n        <p class=\"control has-icons-left has-icons-right\">\n          <input #emailInput class=\"input has-background-light\" type=\"email\" placeholder=\"Email\">\n          <span class=\"icon is-small is-left\">\n            <i class=\"fas fa-envelope\"></i>\n          </span>\n        </p>\n      </div>\n      <div class=\"field\">\n        <p class=\"control has-icons-left\">\n          <input #pwInput class=\"input has-background-light\" type=\"password\" placeholder=\"Password\">\n          <span class=\"icon is-small is-left\">\n            <i class=\"fas fa-lock\"></i>\n          </span>\n        </p>\n      </div>\n      <div class=\"field\" style=\"display: flex; justify-content: flex-end;\">\n        <p class=\"control\">\n          <button class=\"button is-success has-text-white\" (click)=\"onLoginButtonClicked(emailInput.value, pwInput.value)\">\n            Login\n          </button>\n        </p>\n      </div>\n  \n      <br>\n  \n      <p class=\"has-text-grey\">Not got an account? <a routerLink=\"/signup\">Sign up</a> now!</p>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-contest {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n\n.white-box {\n  padding: 35px;\n  background: white;\n  border-radius: 5px;\n  width: 350px;\n  max-width: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9GOlxcQW5ndWxhclxcdGFzayBtYW5lZ2VyXFxmcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luLXBhZ2VcXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZC1jb250ZXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ud2hpdGUtYm94IHtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.onLoginButtonClicked = function (email, password) {
        var _this = this;
        this.authService.login(email, password).subscribe(function (res) {
            if (res.status === 200) {
                // we have logged in successfully
                _this.router.navigate(['/lists']);
            }
            console.log(res);
        });
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-list/new-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/new-list/new-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n    <div class=\"modal-box\">\n      <h1 class=\"title\">\n        Create a new list\n      </h1>\n  \n      <input #listTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter list name...\">\n      <br><br>\n      <div class=\"buttons is-right\">\n        <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n        <button class=\"button is-primary has-text-white is-medium\" (click)=\"createList(listTitleInput.value)\">Create</button>\n      </div>\n  \n      \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/new-list/new-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/new-list/new-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-contest {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n\n.modal-box {\n  min-height: 200px;\n  width: 100%;\n  max-width: 580px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3LWxpc3QvRjpcXEFuZ3VsYXJcXHRhc2sgbWFuZWdlclxcZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxuZXctbGlzdFxcbmV3LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUloQjtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3LWxpc3QvbmV3LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQtY29udGVzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5tb2RhbC1ib3gge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNTgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/new-list/new-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-list/new-list.component.ts ***!
  \******************************************************/
/*! exports provided: NewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListComponent", function() { return NewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewListComponent = /** @class */ (function () {
    function NewListComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    NewListComponent.prototype.ngOnInit = function () {
    };
    NewListComponent.prototype.createList = function (title) {
        var _this = this;
        this.taskService.createList(title).subscribe(function (list) {
            console.log(list);
            //Now we navigate to /lists/response._id
            _this.router.navigate(['/lists', list._id]);
        });
    };
    NewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-list',
            template: __webpack_require__(/*! ./new-list.component.html */ "./src/app/pages/new-list/new-list.component.html"),
            styles: [__webpack_require__(/*! ./new-list.component.scss */ "./src/app/pages/new-list/new-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewListComponent);
    return NewListComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-task/new-task.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n    <div class=\"modal-box\">\n      <h2 class=\"title\">\n        Create a new task\n      </h2>\n  \n      <input #taskTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter task name...\">\n      <br><br>\n      <div class=\"buttons is-right\">\n        <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n        <button class=\"button is-primary has-text-white is-medium\" (click)=\"createTask(taskTitleInput.value)\">Create</button>\n      </div>\n  \n      \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/new-task/new-task.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-contest {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n\n.modal-box {\n  min-height: 200px;\n  width: 100%;\n  max-width: 580px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3LXRhc2svRjpcXEFuZ3VsYXJcXHRhc2sgbWFuZWdlclxcZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxuZXctdGFza1xcbmV3LXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUloQjtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3LXRhc2svbmV3LXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQtY29udGVzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5tb2RhbC1ib3gge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNTgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/new-task/new-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.ts ***!
  \******************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(taskService, router, route) {
        this.taskService = taskService;
        this.router = router;
        this.route = route;
    }
    NewTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.listId = params['listId'];
            console.log(_this.listId);
        });
    };
    NewTaskComponent.prototype.createTask = function (title) {
        var _this = this;
        this.taskService.createTask(title, this.listId).subscribe(function (newtask) {
            console.log(newtask);
            _this.router.navigate(['../'], { relativeTo: _this.route });
            //Now we navigate to /lists/response._id
        });
    };
    NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__(/*! ./new-task.component.html */ "./src/app/pages/new-task/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.scss */ "./src/app/pages/new-task/new-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n  <div class=\"white-box\">\n\n    <h1 class=\"title has-text-primary\">SIGN UP</h1>\n    \n    <div class=\"field\">\n      <p class=\"control has-icons-left has-icons-right\">\n        <input #emailInput class=\"input has-background-light\" type=\"email\" placeholder=\"Email\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-envelope\"></i>\n        </span>\n      </p>\n    </div>\n\n    <div class=\"field\">\n      <p class=\"control has-icons-left\">\n        <input #pwInput class=\"input has-background-light\" type=\"password\" placeholder=\"Password\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-lock\"></i>\n        </span>\n      </p>\n    </div>\n\n    <div class=\"field\" style=\"display: flex; justify-content: flex-end;\">\n      <p class=\"control\">\n        <button class=\"button is-success has-text-white\" (click)=\"onSignupButtonClicked(emailInput.value, pwInput.value)\">\n          Sign up\n        </button>\n      </p>\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-contest {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n\n.white-box {\n  padding: 35px;\n  background: white;\n  border-radius: 5px;\n  width: 350px;\n  max-width: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwLXBhZ2UvRjpcXEFuZ3VsYXJcXHRhc2sgbWFuZWdlclxcZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxzaWdudXAtcGFnZVxcc2lnbnVwLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVkLWNvbnRlc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi53aGl0ZS1ib3gge1xyXG4gICAgcGFkZGluZzogMzVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
  \************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    SignupPageComponent.prototype.ngOnInit = function () {
    };
    SignupPageComponent.prototype.onSignupButtonClicked = function (email, password) {
        var _this = this;
        this.authService.signup(email, password).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/lists']);
        });
    };
    SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-page',
            template: __webpack_require__(/*! ./signup-page.component.html */ "./src/app/pages/signup-page/signup-page.component.html"),
            styles: [__webpack_require__(/*! ./signup-page.component.scss */ "./src/app/pages/signup-page/signup-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SignupPageComponent);
    return SignupPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/task-view/task-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-contest\">\n  <div class=\"task-manager-container\">\n\n    <div class=\"sidebar has-background-white\">\n      <h1 class=\"title has-text-primary\">\n        Lists\n      </h1>\n\n      <div class=\"list-menu\">\n\n        <a class=\"list-menu-item\" *ngFor=\"let list of lists\" [routerLink]=\"['/lists', list._id]\" routerLinkActive=\"is-active\">\n          <p>\n            {{ list.title }}\n          </p>\n        </a>\n\n      </div>\n      <button class=\"button is-primary has-text-white\" routerLink=\"/new-list\">+ New List</button>\n    </div>\n\n    <div class=\"task-list-container has-background-light\">\n      <div *ngIf= \"tasks\">\n        <div class=\"top-bar\">\n          <h1 class=\"title has-text-primary\">\n            Tasks\n          </h1>\n          <div class=\"dropdown is-hoverable is-right\">\n            <div class=\"dropdown-trigger\">\n              <button class=\"button\" aria-haspopup=\"true\" aria-controls=\"dropdown-menu4\">\n                <span class=\"icon is-small\">\n                  <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n            </div>\n\n            <div class=\"dropdown-menu\" id=\"dropdown-menu4\" role=\"menu\">\n              <div class=\"dropdowm-content\">\n                <a [routerLink]=\"['/edit-list', selectedListId]\" class=\"dropdown-item\">\n                  Edit\n                </a>\n                <a (click)=\"onDeleteListClick()\" class=\"dropdown-item has-text-danger\">\n                  Delete\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      \n            <!-- Task Element -->\n            <div class=\"task\" *ngFor=\"let task of tasks\" (click)=\"onTaskClick(task)\" [ngClass]=\"{ 'completed': task.completed }\">\n                <div class=\"task-text\">\n                  <p>{{ task.title }}</p>\n                </div>\n                <div class=\"task-buttons\">\n      \n                  <button class=\"button\" [routerLink]=\"['/lists', selectedListId, 'edit-task', task._id]\">\n                    <div class=\"icon\">\n                      <i class=\"fas fa-edit\"></i>\n                    </div>\n                  </button>\n      \n                  <button class=\"button is-danger\" (click)=\"onDeleteTaskClick(task._id)\" style=\"margin-left: 10px;\">\n                    <div class=\"icon\">\n                      <i class=\"fas fa-trash\"></i>\n                    </div>\n                  </button>\n      \n                </div>\n              </div>\n\n            <h3 class=\"empty-state-text\" *ngIf=\"tasks.length === 0\">There are no tasks here Click to add</h3>\n      \n      \n            <button routerLink=\"./new-task\" class=\"circle-add-button button is-primary\">\n              <img src=\"../../../assets/plus-icon.svg\">\n            </button>\n      </div>\n\n      <div *ngIf=\"!tasks\">\n        <h3 class = \"empty-state-text\">Plzz select a list from sidebar</h3>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/task-view/task-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml {\n  background: linear-gradient(to right top, #44ddd0, #27d7a1); }\nhtml, body {\n  height: 100%; }\n.centered-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n.modal-box {\n  min-height: 200px;\n  width: 100%;\n  max-width: 580px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px; }\n.title {\n  font-family: 'Lato';\n  font-size: 24px;\n  text-transform: uppercase;\n  letter-spacing: 2px; }\n.white-box {\n  padding: 35px;\n  background: white;\n  border-radius: 5px;\n  width: 350px;\n  max-width: 350px; }\n.centered-contest {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n.task-manager-container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  max-width: 800px;\n  max-height: 530px; }\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  background: white;\n  padding: 42px;\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px; }\n.title {\n  font-family: 'Lato';\n  font-size: 24px;\n  text-transform: uppercase;\n  letter-spacing: 1px; }\n.task-list-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 42px;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px; }\n.task-list-container .top-bar {\n    margin-bottom: 20px;\n    display: flex; }\n.task-list-container .top-bar .title {\n      flex-grow: 1;\n      margin: 0; }\n.list-menu {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  flex-grow: 1; }\n.list-menu .list-menu-item {\n    display: flex;\n    align-items: center;\n    padding: 10px 15px;\n    border-radius: 5px;\n    width: 100%;\n    color: #5f5f5f;\n    margin-bottom: 6px; }\n.list-menu .list-menu-item:hover {\n      background: #f8f8f8; }\n.list-menu .list-menu-item.is-active {\n      background-color: #cff8ef;\n      color: #006450; }\n.task {\n  display: flex;\n  background: white;\n  padding: 15px 20px;\n  border-radius: 5px;\n  margin-top: 10px;\n  align-items: center; }\n.task:not(.complete) {\n    cursor: pointer;\n    transition: box-shadow 0.2s ease, transform 0.2s ease; }\n.task:not(.complete):active {\n      transform: scale(0.95); }\n.task:not(.complete):hover {\n      box-shadow: 0 0 0 5px #eeeeee; }\n.task:not(.complete):hover .task-buttons {\n        opacity: 1;\n        transform: scale(1); }\n.task.completed {\n    text-decoration: line-through;\n    opacity: 0.8; }\n.task .task-text {\n    display: flex;\n    flex-grow: 1; }\n.task .task-buttons {\n    transition: opacity 0.2s, transform 0.2s;\n    opacity: 0;\n    transform: scale(0.85); }\n.circle-add-button {\n  position: absolute;\n  bottom: 35px;\n  right: 35px;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%; }\n.empty-state-text {\n  font-size: 20px;\n  color: #777;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFzay12aWV3L0Y6XFxBbmd1bGFyXFx0YXNrIG1hbmVnZXJcXGZyb250ZW5kL3NyY1xcbWFpbi1zdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFzay12aWV3L0Y6XFxBbmd1bGFyXFx0YXNrIG1hbmVnZXJcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcdGFzay12aWV3XFx0YXNrLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsa0ZBQVk7QUF5Qlo7RUFDSSwyREFBNkQsRUFBQTtBQUdqRTtFQUNJLFlBQVksRUFBQTtBQUdoQjtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtBQUdqQjtFQUNJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FDL0RwQjtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFHaEI7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7QUFHckI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBRXRCLFlBQVk7RUFDWixpQkFBaUI7RUFFakIsYUFBYTtFQUViLDRCQUE0QjtFQUM1QiwrQkFBK0IsRUFBQTtBQUduQztFQUNJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFFYiw2QkFBNkI7RUFDN0IsZ0NBQWdDLEVBQUE7QUFScEM7SUFZUSxtQkFBbUI7SUFDbkIsYUFBYSxFQUFBO0FBYnJCO01BZVksWUFBWTtNQUNaLFNBQVMsRUFBQTtBQU1yQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtBQUpoQjtJQU9RLGFBQWE7SUFFYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUVsQixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQixFQUFBO0FBZjFCO01Ba0JZLG1CRHBFRyxFQUFBO0FDa0RmO01Bc0JZLHlCQUF5QjtNQUN6QixjRDNFZ0IsRUFBQTtBQ2dGNUI7RUFDSSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBRWhCLG1CQUFtQixFQUFBO0FBUHZCO0lBVVEsZUFBZTtJQUNmLHFEQUFxRCxFQUFBO0FBWDdEO01BY1ksc0JBQXNCLEVBQUE7QUFkbEM7TUFrQlksNkJBQTZCLEVBQUE7QUFsQnpDO1FBcUJnQixVQUFVO1FBQ1YsbUJBQW1CLEVBQUE7QUF0Qm5DO0lBNkJRLDZCQUE2QjtJQUM3QixZQUFZLEVBQUE7QUE5QnBCO0lBbUNRLGFBQWE7SUFDYixZQUFZLEVBQUE7QUFwQ3BCO0lBd0NRLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1Ysc0JBQXNCLEVBQUE7QUFJOUI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBSXRCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stdmlldy90YXNrLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwJyk7XHJcblxyXG5cclxuJHR1cnF1b2lzZTogIzQ0ZGRkMDtcclxuJGdyZWVuOiAjMjdkN2ExO1xyXG4kbGlnaHQtZ3JlZW46ICM0NWY2OWU7IFxyXG4kZGFyay1ncmVlbjogcmdiKDAsIDEwMCwgODApO1xyXG5cclxuJGxpZ2h0OiAjZjhmOGY4O1xyXG5cclxuXHJcbi8vIFVwZGF0ZSBCdWxtYSdzIGdsb2JhbCB2YXJpYWJsZXNcclxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4kcHJpbWFyeTogJGdyZWVuO1xyXG5cclxuJGxpbms6ICR0dXJxdW9pc2U7XHJcblxyXG5cclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcblxyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG5cclxuaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAkdHVycXVvaXNlLCAkZ3JlZW4pO1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNlbnRlcmVkLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwtYm94IHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDU4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4ud2hpdGUtYm94IHtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgXHJcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9tYWluLXN0eWxlcy5zY3NzJztcclxuXHJcbi5jZW50ZXJlZC1jb250ZXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGFzay1tYW5hZ2VyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTMwcHg7XHJcbn0gXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgICBwYWRkaW5nOiA0MnB4O1xyXG5cclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4udGFzay1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHBhZGRpbmc6IDQycHg7XHJcblxyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuXHJcblxyXG4gICAgLnRvcC1iYXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ubGlzdC1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZsZXgtZ3JvdzogMTsgXHJcblxyXG4gICAgLmxpc3QtbWVudS1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjNWY1ZjVmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuaXMtYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjhlZjtcclxuICAgICAgICAgICAgY29sb3I6ICRkYXJrLWdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRhc2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAmOm5vdCguY29tcGxldGUpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICBcclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggI2VlZWVlZTtcclxuXHJcbiAgICAgICAgICAgIC50YXNrLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLnRhc2stdGV4dFxyXG4gICAgJi5jb21wbGV0ZWQgIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC50YXNrLXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC50YXNrLWJ1dHRvbnMge1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdHJhbnNmb3JtIDAuMnM7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2lyY2xlLWFkZC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzNXB4O1xyXG4gICAgcmlnaHQ6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIFxyXG59XHJcblxyXG4uZW1wdHktc3RhdGUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/task-view/task-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.ts ***!
  \********************************************************/
/*! exports provided: TaskViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function() { return TaskViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TaskViewComponent = /** @class */ (function () {
    function TaskViewComponent(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
    }
    TaskViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.listId) {
                _this.selectedListId = params.listId;
                _this.taskService.getTasks(params.listId).subscribe(function (tasks) {
                    _this.tasks = tasks;
                });
            }
            else {
                _this.tasks = undefined;
            }
        });
        this.taskService.getLists().subscribe(function (lists) {
            _this.lists = lists;
        });
    };
    TaskViewComponent.prototype.onTaskClick = function (task) {
        this.taskService.complete(task).subscribe(function () {
            console.log("compeleted");
            task.completed = !task.completed;
        });
    };
    TaskViewComponent.prototype.onDeleteListClick = function () {
        var _this = this;
        this.taskService.deleteList(this.selectedListId).subscribe(function (res) {
            _this.router.navigate(['/lists']);
            console.log(res);
        });
    };
    TaskViewComponent.prototype.onDeleteTaskClick = function (id) {
        var _this = this;
        this.taskService.deleteTask(this.selectedListId, id).subscribe(function (res) {
            _this.tasks = _this.tasks.filter(function (val) { return val._id !== id; });
            //this.router.navigate(['/lists'])
            console.log(res);
        });
    };
    TaskViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-view',
            template: __webpack_require__(/*! ./task-view.component.html */ "./src/app/pages/task-view/task-view.component.html"),
            styles: [__webpack_require__(/*! ./task-view.component.scss */ "./src/app/pages/task-view/task-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TaskViewComponent);
    return TaskViewComponent;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "./src/app/web-request.service.ts");



var TaskService = /** @class */ (function () {
    function TaskService(webReqService) {
        this.webReqService = webReqService;
    }
    TaskService.prototype.createList = function (title) {
        return this.webReqService.post('lists', { title: title });
    };
    TaskService.prototype.updateList = function (id, title) {
        return this.webReqService.patch("lists/" + id, { title: title });
    };
    TaskService.prototype.deleteList = function (id) {
        return this.webReqService.delete("lists/" + id);
    };
    TaskService.prototype.createTask = function (title, listId) {
        return this.webReqService.post("lists/" + listId + "/tasks", { title: title });
    };
    TaskService.prototype.deleteTask = function (listId, taskId) {
        return this.webReqService.delete("lists/" + listId + "/tasks/" + taskId);
    };
    TaskService.prototype.updateTask = function (listId, taskId, title) {
        // We want to send a web request to update a list
        return this.webReqService.patch("lists/" + listId + "/tasks/" + taskId, { title: title });
    };
    TaskService.prototype.getLists = function () {
        return this.webReqService.get('lists');
    };
    TaskService.prototype.getTasks = function (listId) {
        return this.webReqService.get("lists/" + listId + "/tasks");
    };
    TaskService.prototype.complete = function (task) {
        return this.webReqService.patch("lists/" + task._listId + "/tasks/" + task._id, {
            completed: !task.completed
        });
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/web-req.interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/web-req.interceptor.ts ***!
  \****************************************/
/*! exports provided: WebReqInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebReqInterceptor", function() { return WebReqInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var WebReqInterceptor = /** @class */ (function () {
    function WebReqInterceptor(authService) {
        this.authService = authService;
        this.accessTokenRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    WebReqInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        request = this.addAuthHeader(request);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log(error);
            if (error.status === 401) {
                return _this.refreshAccessToken()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
                    request = _this.addAuthHeader(request);
                    return next.handle(request);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                    console.log(err);
                    _this.authService.logout();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    WebReqInterceptor.prototype.refreshAccessToken = function () {
        var _this = this;
        if (this.refreshingAccessToken) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                _this.accessTokenRefreshed.subscribe(function () {
                    // this code will run when the access token has been refreshed
                    observer.next();
                    observer.complete();
                });
            });
        }
        else {
            this.refreshingAccessToken = true;
            // we want to call a method in the auth service to send a request to refresh the access token
            return this.authService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                console.log("Access Token Refreshed!");
                _this.refreshingAccessToken = false;
                _this.accessTokenRefreshed.next();
            }));
        }
    };
    WebReqInterceptor.prototype.addAuthHeader = function (request) {
        // get the access token
        var token = this.authService.getAccessToken();
        if (token) {
            // append the access token to the request header
            return request.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return request;
    };
    WebReqInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], WebReqInterceptor);
    return WebReqInterceptor;
}());



/***/ }),

/***/ "./src/app/web-request.service.ts":
/*!****************************************!*\
  !*** ./src/app/web-request.service.ts ***!
  \****************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


//import { HttpClient } from 'selenium-webdriver/http';

var WebRequestService = /** @class */ (function () {
    function WebRequestService(http) {
        this.http = http;
        this.ROOt_URL = 'http://localhost:3000';
    }
    WebRequestService.prototype.get = function (url) {
        return this.http.get(this.ROOt_URL + "/" + url);
    };
    WebRequestService.prototype.post = function (url, payload) {
        return this.http.post(this.ROOt_URL + "/" + url, payload);
    };
    WebRequestService.prototype.patch = function (url, payload) {
        return this.http.patch(this.ROOt_URL + "/" + url, payload);
    };
    WebRequestService.prototype.delete = function (url) {
        return this.http.delete(this.ROOt_URL + "/" + url);
    };
    WebRequestService.prototype.login = function (email, password) {
        return this.http.post(this.ROOt_URL + "/users/login", {
            email: email,
            password: password
        }, {
            observe: 'response'
        });
    };
    WebRequestService.prototype.signup = function (email, password) {
        return this.http.post(this.ROOt_URL + "/users", {
            email: email,
            password: password
        }, {
            observe: 'response'
        });
    };
    WebRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebRequestService);
    return WebRequestService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\task maneger\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map