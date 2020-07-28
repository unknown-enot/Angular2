import { Http } from 'angular2/http';
import { Injectable } from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    private _baseUrl = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http){
        
    }

    private getUserUrl(userId){
        return this._baseUrl + "/" + userId;
    }

    getUsers(){
        return this._http.get(this._baseUrl)
            .map(res => res.json());
    }

    getUser(userId){
        return this._http.get(this.getUserUrl(userId))
            .map(res => res.json());
    }

    addUser(user){
        return this._http.post(this._baseUrl, JSON.stringify(user))
            .map(res => res.json());
    }

    updateUser(user){
        return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
            .map(res => res.json());
    }

    deleteUser(user){
        return this._http.delete(this.getUserUrl(user.id))
            .map(res => res.json());
    }
}
