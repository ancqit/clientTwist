import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from './Services/translate-service'; // Import the service

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  showChild: boolean = true;

  /**
   * Initializes the App component and loads translations at startup.
   * 
   * @param translateService - Service responsible for handling translations and caching them.
   */
  constructor(private translateService: TranslateService,
    private cdr: ChangeDetectorRef) {
    this.translateService.loadAndCacheTranslations();
    // Load translations at app startup
  }
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
