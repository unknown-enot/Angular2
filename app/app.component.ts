import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { NavBarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';
import { PostsComponent } from './posts.component';


@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/users/new', name: 'NewUser', component: UserFormComponent },
    { path: '/user/:id', name: 'EditUser', component: UserFormComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/notfound', name: 'NotFound', component: NotFoundComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template:`
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives:[ROUTER_DIRECTIVES, NavBarComponent]
})
export class AppComponent{

}

















// import { Component } from 'angular2/core';
// import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

// import { ArchievesComponent } from './archieves.component';
// import { ArchieveComponent } from './archieve.component';


/* import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { AlbumsComponent } from './albums.component';
import { AlbumComponent } from './album.component';
import { ContactComponent } from './contact.component';

@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
    { path: '/albums/:id', name: 'Album', component: AlbumComponent},
    { path: '/contact', name: 'Contact', component: ContactComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Albums']}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
} */
// @RouteConfig([
//     { path: '/archieves', name: 'Archieves', component: ArchievesComponent, useAsDefault: true },
//     { path: '/archieves/:year/:month', name: 'Archieve', component: ArchieveComponent },
//     { path: '/*other', name: 'Other', redirectTo: ['Archieves'] }
// ])
// @Component({
//     selector: 'my-app',
//     template: `
//         <router-outlet></router-outlet>
//     `,
//     directives:[ROUTER_DIRECTIVES]
    
// })
// export class AppComponent{
    
// }