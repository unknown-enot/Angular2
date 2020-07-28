import { Router, RouteParams } from 'angular2/router';
import { Component } from "angular2/core";


@Component({
    template: `
        <h1>Archieves</h1>
        {{ year }} / {{ month }}
    `
})
export class ArchieveComponent{
    year:number;
    month:number;

    constructor(private _routeParams: RouteParams){
        this.year = parseInt(_routeParams.get("year"));
        this.month = parseInt(_routeParams.get("month"));
    }
}