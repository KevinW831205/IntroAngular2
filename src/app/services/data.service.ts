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
        try {
            return this.http.get(this.url);
        } catch (error) {
            this.handleError(error);
        }
    }

    get(id) {
        try {
            return this.http.get(this.url + '/' + id);
        } catch (error) {
            this.handleError(error);
        }
    }


    create(resource) {
        try {
            return this.http.post(this.url, JSON.stringify(resource));
        } catch (error) {
            this.handleError(error);
        }
    }

    update(resource) {
        try {
            this.http.patch(this.url + "/" + resource.id, JSON.stringify(resource));
        } catch (error) {
            this.handleError(error);
        }
    }

    delete(id) {
        try {
            return this.http.delete(this.url + "/" + id);
        } catch (error) {
            this.handleError(error);
        }

    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadInput(error.json()));
        }
        if (error.status === 404) {
            return Observable.throw(new NotFoundError(error));
        }
        return Observable.throw(new AppError(error));
    }
}
