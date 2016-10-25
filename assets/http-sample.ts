import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
  constructor(private http: Http) { }

  getCurrentEvents(): Observable<any> {
    return this.http.get('api/events/current')
      .map(res => res.json())
  }
}
