import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { APP_CONFIG, Config } from './app.config';
import { Join } from './models/join';
import { JOINS } from './mocks/mock-joins';

@Injectable()
export class CultripDataService {

  constructor(
    private http: Http,
    @Inject(APP_CONFIG) private config: Config
  ) {}

  loadJoins() {
    return Promise.resolve(JOINS);
  }
}
