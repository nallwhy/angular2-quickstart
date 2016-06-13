import 'underscore/underscore-min'
import { provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from '@angular/common';
import './add-rxjs-operators';
import { APP_CONFIG, Config, CONFIG } from './app.config';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [provide(APP_CONFIG, { useValue: CONFIG }), provide(APP_BASE_HREF, { useValue: '/' })]);