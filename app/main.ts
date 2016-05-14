import { provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http'
import { APP_CONFIG, Config, CONFIG } from './app.config';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS, provide(APP_CONFIG, { useValue: CONFIG })]);