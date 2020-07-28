import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {Router, CanDeactivate, RouteParams } from 'angular2/router';

import { BasicValidators } from './basicValidators';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
    templateUrl: '/app/user-form.component.html',
    providers: [UsersService]
})
export class UserFormComponent implements OnInit, CanDeactivate{
    title: string;
    user = new User();
    userForm: ControlGroup;

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _routeParams: RouteParams,
        private _usersService: UsersService){
            this.userForm = fb.group({
                name: ['', Validators.required],
                email: ['', Validators.compose([
                    Validators.required,
                    BasicValidators.email
                ])],
                phone: [],
                address: fb.group({
                    street: [],
                    suite: [],
                    city: [],
                    zipcode: []
                })
            });
        }
    
    ngOnInit(){
        var id = this._routeParams.get("id");

        this.title = id ? "Edit User" : "New User";

        if(!id)
            return;
        
        this._usersService.getUser(id)
                        .subscribe(
                            user => this.user = user,
                            response => {
                                if(response.status == 404) {
                                    this._router.navigate(['NotFound']);
                                }
                            }
                        );

    }

    routerCanDeactivate(next, previous){
        if(this.userForm.dirty){
            return confirm ("You have unsaved changes. Are you sure?");
        }

        return true;
    }

    save(){
        var result;
        if(this.user.id)
            result = this._usersService.updateUser(this.user);
        else
            result=this._usersService.addUser(this.user)
        result.subscribe(x => {
                this._router.navigate(['Users']);        
            });       
    }
}