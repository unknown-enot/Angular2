System.register(['./pagination.component', './users.service', './spinner.component', 'angular2/http', "angular2/core", "./post.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var pagination_component_1, users_service_1, spinner_component_1, http_1, core_1, post_service_1;
    var PostsComponent;
    return {
        setters:[
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.users = [];
                    this.posts = [];
                    this.pagedPosts = [];
                    this.pageSize = 10;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.loadPosts();
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (res) { return _this.users = res; });
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.isPostsLoading = true;
                    this._postService.getPosts(filter)
                        .subscribe(function (posts) {
                        _this.posts = posts;
                        _this.pagedPosts = _.take(_this.posts, _this.pageSize); //this.getPostsInPage(1);
                    }, null, function () { return _this.isPostsLoading = false; });
                };
                PostsComponent.prototype.reloadPosts = function (filter) {
                    this.currentPost = null;
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.selectPost = function (post) {
                    var _this = this;
                    this.currentPost = post;
                    this.isCommentsLoading = true;
                    this._postService.getPostComments(post.id)
                        .subscribe(function (comments) { return _this.currentPost.comments = comments; }, null, function () { return _this.isCommentsLoading = false; });
                };
                PostsComponent.prototype.onPageChanged = function (page) {
                    var startingIndex = (page - 1) * this.pageSize;
                    this.pagedPosts = _.take(_.rest(this.posts, startingIndex), this.pageSize); //this.getPostsInPage(page);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/post.component.html',
                        styles: ["\n        .posts li { cursor: default; }\n        .posts li:hover { background: #ecf0f1; } \n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n            background-color: #ecf0f1;\n            border-color: #ecf0f1; \n            color: #2c3e50;\n        }\n    "],
                        providers: [post_service_1.PostService, users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
            ;
        }
    }
});
//# sourceMappingURL=posts.component.js.map