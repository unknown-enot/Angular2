import { PaginationComponent } from './pagination.component';
import { UsersService } from './users.service';
import { SpinnerComponent } from './spinner.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Component, OnInit } from "angular2/core";
import { PostService } from "./post.service";
import { Post } from './post';

@Component({
    templateUrl: 'app/post.component.html',
    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `],
    providers: [PostService,UsersService, HTTP_PROVIDERS],
    directives: [SpinnerComponent, PaginationComponent]

})
export class PostsComponent implements OnInit{
    users = [];
    posts = [];
    isPostsLoading;
    currentPost;
    isCommentsLoading;
    pagedPosts = [];
    pageSize = 10;
    
    constructor(
        private _postService: PostService,
        private _userService: UsersService){

    }

    ngOnInit(){
        this.loadUsers();
        this.loadPosts();
        
    }

    private loadUsers(){
        this._userService.getUsers()
            .subscribe(
                res => this.users = res
            );
        
    }

    private loadPosts(filter?){
        this.isPostsLoading = true;
        this._postService.getPosts(filter)
            .subscribe(
                posts => {
                    this.posts = posts;
                    this.pagedPosts = _.take(this.posts, this.pageSize);  //this.getPostsInPage(1);
                },
                null,
                () => this.isPostsLoading = false
            );
    }

    reloadPosts(filter){
        this.currentPost = null;    
        
        this.loadPosts(filter);
    }

    selectPost(post){
        this.currentPost = post;

        this.isCommentsLoading = true;
        this._postService.getPostComments(post.id)
            .subscribe(
                comments => this.currentPost.comments = comments,
                null,
                () => this.isCommentsLoading = false
            );
    }

    onPageChanged(page){
        var startingIndex = (page-1)*this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts,startingIndex), this.pageSize);//this.getPostsInPage(page);
    }

    
    // private getPostsInPage(page){
    //     var result = [];

    //     var startingIndex = (page-1)*this.pageSize;
    //     var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

    //     for (var i = startingIndex; i < endIndex; i++)
    //         result.push(this.posts[i]);

    //     return result;
    // }
    
};
