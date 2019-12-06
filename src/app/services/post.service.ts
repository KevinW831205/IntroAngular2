import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators'
import { Observable } from 'rxjs-compat';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
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
