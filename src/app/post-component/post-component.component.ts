import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})

export class PostComponentComponent implements OnInit {
  posts;
  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPost()
      .subscribe(response => {
        this.posts = response;
      }, error => {
        alert("An unexpected error occured");
        console.log(error);
      })
  }

  createPost(inputTitle: HTMLInputElement) {
    let post = { title: inputTitle.value }
    inputTitle.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
      }, error => {
        alert("An unexpected error occured");
        console.log(error);
      })
  }

  updatePost(post) {
    // this.http.put(this.url+"/"+post.id,post)
    console.log(post)
    this.service.updatePost(post, post.id)
      .subscribe(response => {
        console.log(response)
      }, error => {
        alert("An unexpected error occured");
        console.log(error);
      })
  }

  deletePost(post) {
    console.log(post)
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1)
      }, error => {
        alert("An unexpected error occured");
        console.log(error);
      })
  }

}
