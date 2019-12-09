import { Component, OnInit } from '@angular/core';
import { GithubLikeService } from '../services/github-like.service';

@Component({
  selector: 'app-github-like',
  templateUrl: './github-like.component.html',
  styleUrls: ['./github-like.component.css']
})
export class GithubLikeComponent implements OnInit {

  followers: any;

  constructor(private service : GithubLikeService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
