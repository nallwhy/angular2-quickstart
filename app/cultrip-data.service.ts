import { Injectable, Inject } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { APP_CONFIG, Config } from './app.config';
import { User, Meeting, SubMeeting, Join } from './models';
// import { JOINS } from './mocks/mock-joins';

@Injectable()
export class CultripDataService {

  loading: boolean;

  constructor(
    private http: Http,
    @Inject(APP_CONFIG) private config: Config
  ) { }

  loadJoins(query: Object = {}): Observable<Join[]> {
    // return Promise.resolve(JOINS);

    // query = {
    //   guest_id: number,
    //   meeting_id: number,
    //   paid: boolean,
    //   refunded: boolean,
    //   refund_requested: boolean
    // }

    const params = new URLSearchParams();
    _.each(query, (value, key, object) => { params.set(key, value); });

    const joins$ = this.http.get(this.getApiEndPoint("/joins"), { search: params })
      .map(this.extractData)
      .map((data) => {
        return data.map((raw_join) => {
          return new Join(raw_join);
        })
      })
      .share();

    // const guests$ = joins$
    //   .switchMap(joins => {
    //     let guest_ids = _.unique(joins.map(join => join.guest_id));
    //     let params = new URLSearchParams();
    //     params.set("ids", guest_ids.toString());
    //     return this.loadUsers(params);
    //   });

    // const meetings$ = joins$
    //   .switchMap(joins => {
    //     const meeting_ids = joins.map(join => join.meeting_id);
    //     let params = new URLSearchParams();
    //     params.set("ids", meeting_ids.toString());
    //     // params.set("ids", meeting_ids.toString());

    //     return this.loadMeetings(params);
    //   });

    // return Observable
    //   .combineLatest(joins$, guests$, meetings$)
    //   .catch(this.handleError);
    return joins$.catch(this.handleError)
  }

  loadUsers(params: URLSearchParams = null): Observable<User[]> {
    const users$ = this.http.get(this.getApiEndPoint("/users/"), { search: params })
      .map(this.extractData)
      .share();

    return users$.catch(this.handleError);
  }

  loadMeetings(params: URLSearchParams = null): Observable<Meeting[]> {
    const meetings$ = this.http.get(this.getApiEndPoint("/meetings"), { search: params })
      .map(this.extractData)
      .share();

    return meetings$.catch(this.handleError);
  }

  confirmPaid(join_id: number, date: Date): Observable<Join[]> {
    const body = JSON.stringify({ date: date });

    const confirmPaid$ = this.http.put(this.getApiEndPoint(`/joins/${join_id}/confirm_paid`), body)
      .map(this.extractData)
      .share()
      .catch(this.handleError);

    return confirmPaid$;
  }

  confirmRefunded(join_id: number, date: Date): Observable<Join[]> {
    const body = JSON.stringify({ date: date });

    const confirmRefunded$ = this.http.put(this.getApiEndPoint(`/joins/${join_id}/confirm_refunded`), body)
      .map(this.extractData)
      .share()
      .catch(this.handleError);

    return confirmRefunded$;
  }

  // helper functions

  private getApiEndPoint(path: string): string {
    return this.config.apiEndPoint + path;
  }

  private extractData(response: Response) {
    if (response.status < 200 || response.status >= 300) {
      throw new Error('Bad response status: ' + response.status);
    }
    let body = response.json();
    // console.log(body.result);
    return body.result || {};
  }

  private handleError(error: any) {
    let errMsg = error.json() || error.status || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
