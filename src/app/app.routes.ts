import { Routes } from '@angular/router';

/**
 * Defines the application's main route configuration.
 *
 * - Redirects the root path ('') to the 'dock' route.
 * - Lazy-loads components for each route using dynamic imports:
 *   - 'dock': Loads the DockScreen component.
 *   - 'about': Loads the AboutScreen component.
 *   - 'data': Loads the DataScreen component.
 *   - 'translate': Loads the TranslateScreen component.
 *   - 'stepper': Loads the StepperScreen component.
 *   - 'not-found': Loads the NotFound component.
 * - Wildcard route ('**') redirects to 'not-found' for unmatched paths.
 *
 * @remarks
 * This configuration uses Angular's standalone component lazy loading via `loadComponent`.
 */
export const routes: Routes = [
    { path: '', redirectTo: 'dock', pathMatch: 'full' },
    { path: 'dock', loadComponent: () => import('./components/dock/dockScreen').then(m => m.DockScreen) },
    { path: 'about', loadComponent: () => import('./components/about-screen/about-screen').then(m => m.AboutScreen) },
    { path: 'data', loadComponent: () => import('./components/data-screen/data-screen').then(m => m.DataScreen) },
    { path: 'translate', loadComponent: () => import('./components/translate-screen/translate-screen').then(m => m.TranslateScreen) },
    {path:'stepper', loadComponent: () => import('./components/stepper-screen/stepper-screen').then(m => m.StepperScreen) },
    {path:'not-found', loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound) },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' },


];
