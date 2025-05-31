import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
  
})
/**
 * Service for handling language translation in the application.
 * 
 * This service manages the current language, loads translation files dynamically,
 * and provides utility methods for working with translation key-value pairs.
 * 
 * @example
 * // Set the current language to French
 * translateService.currentLanguage('fr');
 * 
 * // Load the current translation file
 * translateService.loadTranslation().subscribe(translations => {
 *   // Use translations
 * });
 * 
 * @remarks
 * Translation files are expected to be located in `/assets/translation/` and named
 * according to the language code (e.g., `en.json`, `fr.json`).
 * 
 * @public
 */
export class TranslateService {
  /**
   * The current language code used for translations.
   * Defaults to 'en' (English).
   */
  language: string = 'en'; 

/**
 * Initializes a new instance of the service with the provided HttpClient.
 * @param http The HttpClient instance used to make HTTP requests.
 */
constructor(private http: HttpClient) { } 

/**
 * Sets the current language for the application and loads the corresponding translations.
 *
 * @param lang - The language code to set as the current language (e.g., 'en', 'fr', 'es').
 */
 currentLanguage(lang: string): void {
  this.language = lang;
  this.loadTranslation(); 
}

  /**
   * Loads the translation file from public/assets/translate/ for the current language.
   *
   * Constructs the URL to the translation JSON file based on the `language` property,
   * and performs an HTTP GET request to retrieve its contents.
   *
   * @returns An `Observable` that emits the translation data as an object.
   */
  private loadTranslation(): Observable<any> {
    const url = `/assets/translation/${this.language}.json`;
    return this.http.get<any>(url);
  }

  // // Example method showing how to use the loaded translation
  // useTranslation() {
  //   this.loadTranslation().subscribe(json => {
  //     const key = this.getKeyByValue(json, 'Hello');
  //     // key will be the key whose value is 'Hello', or undefined if not found
  //   });
  // }

  // // Dummy jsonToKeyValuePairs method for illustration
  // private jsonToKeyValuePairs(json: any): Array<{ key: string, value: string }> {
  //   const pairs: Array<{ key: string, value: string }> = [];
  //   for (const key in json) {
  //     if (json.hasOwnProperty(key)) {
  //       pairs.push({ key, value: json[key] });
  //     }
  //   }
  //   return pairs;
  // }

  /**
   * Retrieves the key associated with the specified value from the loaded translations.
   *
   * @param value - The value to search for within the translation entries.
   * @returns The key corresponding to the provided value, or `undefined` if not found.
   */
  public getKeyByValue( value: string): string {
    
    const entry = Object.entries(this.loadTranslation()).find(([_, v]) => v === value);
    return entry ? entry[0] : '';
  }

  /**
   * Returns an Observable emitting the key for a given value from the translation file.
   * @param value - The value to search for.
   * @returns Observable<string | undefined>
   */
  public getKeyByValueFromObservable(value: string): Observable<string | undefined> {
    return this.loadTranslation().pipe(
      map(json => {
        const entry = Object.entries(json).find(([_,v ]) => v === value);
        return entry ? entry[0] : undefined;
      })
    );
  }
  public getValueByKeyFromObservable(key: string): Observable<string | undefined> {
    return this.loadTranslation().pipe(
      map(json => json[key])
    );
  }
  
}
