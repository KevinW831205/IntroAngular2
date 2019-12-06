import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators'
import { Observable } from 'rxjs-compat';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "http://jsonplaceholder.typicode.com/posts"
  // +"brokenurlsdfsfdsfsd1!!?/sd";


  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.url)
      .catch(this.hanldeError);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch(this.hanldeError)
  }

  updatePost(val, targetid) {
    return this.http.patch(this.url + "/" + targetid, JSON.stringify(val))
      .catch(this.hanldeError)
  }

  deletePost(targetid) {
    return this.http.delete(this.url + "/" + targetid)
      .catch(this.hanldeError);
  }


  private hanldeError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError(error));
    }
    return Observable.throw(new AppError(error));
  }
}
