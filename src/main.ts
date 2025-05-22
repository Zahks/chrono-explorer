import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    provideHttpClient(),
     { provide: LOCALE_ID, useValue: 'fr-FR' } // ← ici la magie
  ]
}).catch(err => console.error(err));
