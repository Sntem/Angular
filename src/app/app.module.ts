import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import {UserService} from "./users/user.service";
import {PostService} from "./posts/post.service";
import {FormsModule} from "@angular/forms";
import {ModalComponent} from "./shared/modal/modal.component";
import {AuthService} from "./shared/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    HeaderComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService,PostService,AuthService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
