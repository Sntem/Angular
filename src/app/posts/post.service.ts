import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PostModelWithTotal} from "./postWithTotal.model";

const URI = 'http://localhost:3000'

@Injectable()
export class PostService{
  constructor(private http: HttpClient) {
  }

  fetchPosts(){
    return this.http.get<PostModelWithTotal>(URI+'/feed/posts')
  }

  createPost(postData:{title:string,content:string}){
   return  this.http.post(URI+'/feed/create',postData)
  }
}
