import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../Services/translate-service';

@Pipe({
  name: 'translation',
  pure: false
})
/**
 * A custom Angular pipe that transforms a translation key into its localized string
 * using the provided {@link TranslateService}.
 *
 * @example
 *   {{ 'HELLO_WORLD' | translation }}
 *
 * @remarks
 * This pipe is intended to be used in Angular templates to display translated text
 * based on the current language set in the application.
 *
 * @see TranslateService
 */
export class TranslationPipe implements PipeTransform {
  /**
   * Initializes a new instance of the class with the provided TranslateService.
   * @param translateService An instance of TranslateService used for handling translations.
   */
  constructor(private translateService: TranslateService) {}

  /**
   * Transforms a translation key into its corresponding localized string value.
   *
   * @param key - The translation key to look up.
   * @returns The localized string associated with the provided key.
   */
  transform(key: string): string {
    return this.translateService.getValueByKey(key);
    // return this.translateService.getKeyByValues(key);
  }
}
