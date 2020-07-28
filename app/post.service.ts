import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';


@Injectable()
export class PostService{
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http : Http){
        
    }

    getPosts(filter?) : Observable<Post[]> {

        var url = this._url;

        if(filter && filter.userId){
            url += "?userId=" + filter.userId;
        }
        return this._http.get(url)
            .map(res => res.json());
    }

    getPostComments(postId){
        return this._http.get(this._url + "/" + postId + "/comments")
            .map(res => res.json());
    }
}