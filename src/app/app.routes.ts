import { Routes } from '@angular/router';

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
