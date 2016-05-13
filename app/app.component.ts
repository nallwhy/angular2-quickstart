import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { JoinsComponent } from './joins.component';
import { CultripDataService } from './cultrip-data.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ ROUTER_DIRECTIVES ],
  providers: [
    ROUTER_PROVIDERS,
    CultripDataService
  ]
})
@RouteConfig([
  {
    path: '/joins',
    name: 'Joins',
    component: JoinsComponent
  }
])
export class AppComponent { }