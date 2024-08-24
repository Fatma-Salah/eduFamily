import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { handelErrorInterceptor } from './core/interceptors/handel-error.interceptor';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { LanguageInterceptor } from './core/interceptors/languageInterceptor';
import { CacheInterceptor } from './core/interceptors/cacheInterceptor';
import { LoadingInterceptor } from './core/interceptors/loadingInterceptor';
import { TimingInterceptor } from './core/interceptors/timingInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
{provide:HTTP_INTERCEPTORS,useClass:LanguageInterceptor,multi:true},
{provide:HTTP_INTERCEPTORS,useClass:authInterceptor,multi:true},
{provide:HTTP_INTERCEPTORS,useClass:CacheInterceptor,multi:true},
{provide:HTTP_INTERCEPTORS,useClass:handelErrorInterceptor,multi:true},
{provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true},
{provide:HTTP_INTERCEPTORS,useClass:TimingInterceptor,multi:true},
  ],
  
};
