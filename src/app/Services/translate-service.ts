import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  private translationsCache: { [key: string]: string } | null = null;

  /**
   * Initializes a new instance of the service with the provided HttpClient.
   * @param http The HttpClient instance used to make HTTP requests.
   */
  constructor(private http: HttpClient) {
    this.currentLanguage(this.language);
    // Load translations for the default language
  }

  /**
   * Sets the current language for the application and loads the corresponding translations.
   *
   * @param lang - The language code to set as the current language (e.g., 'en', 'fr', 'es').
   */
  currentLanguage(lang: string): void {
    this.language = lang;
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
  /**
   * Loads the translation file for the current language and caches the translations.
   *
   * This method calls `loadTranslation()` to fetch the translations and stores them
   * in the `translationsCache` property for later use.
   */
  public loadAndCacheTranslations(): void {
    this.loadTranslation().subscribe(json => {
      this.translationsCache = json;
    });
  }

  /**
   * Retrieves the translation value for a given key from the `translationsCache` object.
   *
   * @param key - The key for which to retrieve the translation value.
   * @returns The translation value associated with the provided key if found; returns an empty string if not found.
   */
  public getValueByKey(key: string): string {
    if (this.translationsCache && this.translationsCache[key]) {
      return this.translationsCache[key];
    }
    return '';
  }

  /**
   * Retrieves the key from the `translationsCache` object that corresponds to the given value.
   *
   * @param value - The value to search for within the `translationsCache`.
   * @returns The key associated with the provided value if found; returns an empty string if not found,
   *          or 'l' if the `translationsCache` is not initialized.
   */
  public getKeyByValues(value: string): string {
    if (!this.translationsCache) {
      return 'l';
    }
    const entry = Object.entries(this.translationsCache).find(([_, v]) => v === value);
    return entry ? entry[0] : '';
  }
}
