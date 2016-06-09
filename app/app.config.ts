import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface Config {
  environment: string,
  apiEndPoint: string,
  token: string,
}

export const CONFIG: Config = {
  // local
  environment: 'local',
  apiEndPoint: 'http://localhost:3000/api/v1',
  token: '8vIqGmapUnr1XlgcXu5qOQ'

  // staging
  // environment: 'staging',
  // apiEndPoint: 'https://api-cultrip.herokuapp.com/api/v1'
}