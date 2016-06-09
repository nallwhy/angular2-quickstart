import { Component, provide } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS, RequestOptions } from '@angular/http'
import { CultripBaseRequestOptions } from './base-request-options'

import { JoinsComponent } from './joins.component';
import { CultripDataService } from './cultrip-data.service';

import { UserItem } from './items/user-item'
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ ROUTER_DIRECTIVES ],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(RequestOptions, { useClass: CultripBaseRequestOptions }),
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