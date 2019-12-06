import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  // private url = "http://jsonplaceholder.typicode.com/posts"
  // +"brokenurlsdfsfdsfsd1!!?/sd";


  constructor(http: HttpClient) { 
    super(http, "http://jsonplaceholder.typicode.com/posts");
  }


}
