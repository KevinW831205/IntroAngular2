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
  constructor(http: HttpClient) {
    http.get("http://jsonplaceholder.typicode.com/posts")
      .subscribe(response => {
        this.posts = response;
      })
  }

  ngOnInit() {
  }

}
