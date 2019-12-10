import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubLikeService extends DataService {
  constructor(http: HttpClient) { 
    let url = 'http://api.github.com/users/mosh-hamedani/followers';
    super(http, url);
  }
}
