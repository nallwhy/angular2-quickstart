import { Inject, Injectable } from '@angular/core';
// import { APP_CONFIG, Config } from './app.config';
import { BaseRequestOptions, URLSearchParams, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class CultripBaseRequestOptions extends BaseRequestOptions {
  // constructor(
  //   @Inject(APP_CONFIG) private config: Config) {
  //   super();
  // }
  merge(options?: RequestOptionsArgs): RequestOptions {
    options.search = options.search || new URLSearchParams();
    (options.search as URLSearchParams).set("api_token", "8vIqGmapUnr1XlgcXu5qOQ");
    // options.search = new URLSearchParams(`api_token=${config.token}`); // TODO: app_config injection

    options.headers = options.headers || new Headers();
    options.headers.set("Content-Type", "application/json");
    
    const result = super.merge(options);
    result.merge = this.merge;
    return result;
  }
} 