import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EventService {
    constructor(private http: Http) { }

    getCurrentEvents() {
        return this.http.get('api/events/current')
            .map(res => res.json())
            .catch(err => Observable.throw(err))
    }
}