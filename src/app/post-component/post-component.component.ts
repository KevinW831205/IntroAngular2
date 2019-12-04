import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})

export class PostComponentComponent implements OnInit {

  posts;
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      })
  }

  ngOnInit() {
  }

  createPost(inputTitle: HTMLInputElement) {
    let post = { title: inputTitle.value }
    inputTitle.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0,0, post);
      })
  }

  updatePost(post){
    // this.http.put(this.url+"/"+post.id,post)
    console.log(1)
    this.http.patch(this.url+"/"+post.id, JSON.stringify({isRead : true}))
      .subscribe(response =>{
        console.log(response)
      })

  }

}
