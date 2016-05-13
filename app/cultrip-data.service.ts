import { Injectable, Inject } from '@angular/core';

import { Join } from './models/join';
import { JOINS } from './mocks/mock-joins';

@Injectable()
export class CultripDataService {

  loadJoins() {
    return Promise.resolve(JOINS);
  }
}
