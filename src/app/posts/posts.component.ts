import {Component, OnInit} from '@angular/core';
import {PostService} from "./post.service";

import {HttpClient} from "@angular/common/http";
import {PostModel} from "./post.model";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  constructor(private http: HttpClient, private postService: PostService) {
  }

  postsToRender: PostModel[] = [];

  userPost = {
    firstName: '',
    lastName: '',
    email: '',
    content: '',
    title: ''
  }

  ngOnInit(): void {
    this.postService.fetchPosts().subscribe(postRes => {

      this.postsToRender = postRes.posts
      console.log(postRes.posts)
    })
  }

  onSubmit(form: NgForm) {
    console.log(form)
    this.userPost.firstName = form.value.firstName
    this.userPost.lastName = form.value.lastName
    this.userPost.email = form.value.email;
    this.userPost.content = form.value.content;
    this.userPost.title = form.value.title;

    this.postService.createPost({
      title: this.userPost.title,
      content: this.userPost.content,

    }).subscribe(res=>{
      console.log(res)
    })
  }
}
