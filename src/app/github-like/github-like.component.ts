import { Component, OnInit } from '@angular/core';
import { GithubLikeService } from '../services/github-like.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-like',
  templateUrl: './github-like.component.html',
  styleUrls: ['./github-like.component.css']
})
export class GithubLikeComponent implements OnInit {

  followers: any;

  constructor(
    private service : GithubLikeService,
    private route : ActivatedRoute
    
    ) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {

    });

    this.route.queryParamMap
    .subscribe( params => {

    });

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
