import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "http://jsonplaceholder.typicode.com/posts";


  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }

  updatePost(val, targetid) {
    return this.http.patch(this.url + "/" + targetid, JSON.stringify(val))
  }

  deletePost(targetid) {
    return this.http.delete(this.url + "/" + targetid)
  }

}
