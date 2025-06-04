import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { provideHttpClient } from '@angular/common/http';

/**
 * Application-wide configuration object for Angular's dependency injection system.
 *
 * @remarks
 * This configuration sets up essential providers for the application, including:
 * - Global error listeners for browser environments.
 * - Zoneless change detection for improved performance.
 * - Router configuration with predefined routes.
 * - HTTP client services for making HTTP requests.
 * - Asynchronous animations support.
 * - PrimeNG UI library with a specified theme preset (Lara).
 *
 * @see {@link ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Lara,
      }
    }),
  ]
};
