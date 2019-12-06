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
export class DataService {


    constructor(private http: HttpClient, private url) {
    
    }

    // error test 
    // return Observable.throw(new AppError())


    getAll() {
        return this.http.get(this.url)
        .catch(this.hanldeError);
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .catch(this.hanldeError)
    }

    update(resource) {
        return this.http.patch(this.url + "/" + resource.id, JSON.stringify(resource))
            .catch(this.hanldeError)
    }

    delete(id) {
        return this.http.delete(this.url + "/" + id)
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
