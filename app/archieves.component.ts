import { RouterLink } from 'angular2/router';
import { Component, OnInit } from "angular2/core";
import { ArchieveService } from "./achieve.service";


@Component({
    selector: 'archieves',
    template: `
        <h1>Home Page</h1>
        <ul>
            <li *ngFor="#archieve of archieves">
                <a [routerLink]="['Archieve', {year: archieve.year, month: archieve.month} ]">{{ archieve.year }}/{{ archieve.month }}</a>
            </li>
        </ul>
    `,
    providers:[ArchieveService],
    directives:[RouterLink]
})
export class ArchievesComponent{
    archieves = [];
        
    constructor(private _archieveService: ArchieveService){
        
    }

    ngOnInit(){
        this.archieves = this._archieveService.getArchieves();
        
    }
}