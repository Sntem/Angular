import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {PostsComponent} from "./posts/posts.component";

const appRoutes:Routes =[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
  path:'posts',
    component:PostsComponent
  }
]

@NgModule({
imports:[
  RouterModule.forRoot(appRoutes)
],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{

}
