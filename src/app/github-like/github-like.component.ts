import { Component, OnInit } from '@angular/core';
import { GithubLikeService } from '../services/github-like.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { combineLatest } from 'rxjs';
import {switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-github-like',
  templateUrl: './github-like.component.html',
  styleUrls: ['./github-like.component.css']
})
export class GithubLikeComponent implements OnInit {

  followers: any;

  constructor(
    private service: GithubLikeService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    /*
    this.route.paramMap
    .subscribe(params => {

    });

    this.route.queryParamMap
    .subscribe( params => {

    });
    */

    let obs = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(params => {
      let id = params[0].get('id');
      let page = params[1].get('page');
      return this.service.getAll();
    })
    .subscribe(followers => this.followers = followers);

    // obs.subscribe(params => {
    //   console.log(params)
    //   let id = params[0].get('id');
    //   let page = params[1].get('page');
    //   console.log(page);

    //   this.service.getAll()
    //   .subscribe(followers => this.followers = followers);
    // })
  }

}
