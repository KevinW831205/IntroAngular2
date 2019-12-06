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
    this.service.getAll()
      .subscribe(
        response => {
          this.posts = response;
        })
  }

  create(inputTitle: HTMLInputElement) {
    let post = { title: inputTitle.value }
    this.posts.splice(0, 0, post);
    inputTitle.value = '';
    this.service.create(post)
      .subscribe(
        response => {
          post['id'] = response['id'];
        },
        (error: AppError) => {
          this.posts.splice(0,1);
          if(error instanceof BadInput){
            console.log("bad input")
            // this.form.setErrors(error.originalError)
          } else {
            throw error;
          }
        })
  }

  update(post) {
    // this.http.put(this.url+"/"+post.id,post)
    console.log(post)
    this.service.update(post)
      .subscribe(
        response => {
          console.log(response)
        })
  }

  deletePost(post) {
    console.log(post)
    this.service.delete(post.id)
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
