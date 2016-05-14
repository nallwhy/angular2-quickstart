import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface Config {
  apiEndPoint: string
}

export const CONFIG: Config = {
  apiEndPoint: 'https://api-cultrip.herokuapp.com/api/v1'
}