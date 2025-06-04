import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from './Services/translate-service'; // Import the service

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
/**
 * The root application component responsible for initializing translations,
 * managing language changes, and controlling the display of child components.
 *
 * This component loads and caches translations at startup, and provides a method
 * to change the application's language at runtime. It also handles manual change
 * detection to ensure the UI updates correctly after language changes.
 *
 * @remarks
 * - Uses `TranslateService` to manage translations and language switching.
 * - Uses `ChangeDetectorRef` to manually trigger change detection when needed.
 * - Controls the visibility of a child component to force UI refresh on language change.
 */
export class App {
  /**
   * Determines whether the child component should be displayed.
   * Set to `true` to show the child component, or `false` to hide it.
   */
  showChild: boolean = true;

  /**
   * Initializes the App component and loads translations at startup.
   * 
   * @param translateService - Service responsible for handling translations and caching them.
   */
  /**
   * Initializes the App component.
   * 
   * @param translateService - Service responsible for loading and managing translations.
   * @param cdr - Change detector reference used to manually trigger change detection.
   * 
   * Loads and caches translations at application startup.
   */
  constructor(private translateService: TranslateService,
    private cdr: ChangeDetectorRef) {
    this.translateService.loadAndCacheTranslations();
    // Load translations at app startup
  }
  /**
   * Changes the application's language by updating the current language in the translation service,
   * reloading and caching the translations, and triggering a UI refresh.
   *
   * This method temporarily hides a child component, then shows it again after a short delay
   * to ensure that the UI reflects the new language. It also manually triggers change detection.
   *
   * @param arg0 - The language code to switch to (e.g., 'en', 'fr', 'es').
   */
  changeLanguage(arg0: string) {
    this.translateService.currentLanguage(arg0);
    this.translateService.loadAndCacheTranslations();
    this.showChild = false;
    setTimeout(() => {
      this.showChild = true;
      this.cdr.detectChanges(); // Manually trigger change detection
    }, 500);
  }

  // This is the main application component.
  // It serves as the root component for the Angular application.
  // The RouterOutlet directive is used to display routed components.
  // The templateUrl and styleUrl properties point to the HTML and CSS files for this component.
}
