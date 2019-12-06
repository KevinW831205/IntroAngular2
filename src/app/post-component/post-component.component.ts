import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { throwError } from 'rxjs';

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
      .subscribe(
        response => {
          this.posts = response;
        })
  }

  createPost(inputTitle: HTMLInputElement) {
    let post = { title: inputTitle.value }
    inputTitle.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if(error instanceof BadInput){
            console.log("bad input")
            // this.form.setErrors(error.originalError)
          } else {
            throw error;
          }
        })
  }

  updatePost(post) {
    // this.http.put(this.url+"/"+post.id,post)
    console.log(post)
    this.service.updatePost(post, post.id)
      .subscribe(
        response => {
          console.log(response)
        })
  }

  deletePost(post) {
    console.log(post)
    this.service.deletePost(345)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1)
        },
        (error: AppError) => {
          if(error instanceof NotFoundError){
            alert('This post has already been deleted.')
          } else {
            throw error;
          }
        });
  }

}
