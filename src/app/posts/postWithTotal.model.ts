import {PostModel} from "./post.model";

export interface PostModelWithTotal{
  posts:PostModel[],
  totalItems:number
}
