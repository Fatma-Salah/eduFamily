import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {
  private _currentLanguage: string = 'en'; // Default language

   getcurrentLanguage(): string {

    return localStorage.getItem('lang')|| this._currentLanguage;
  }
 
  setcurrentLanguage(lang: string) {
    localStorage.setItem('lang',lang)
  }
  
}
