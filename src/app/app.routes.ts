import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dock', pathMatch: 'full' },
    { path: 'dock', loadComponent: () => import('./dock/dockScreen').then(m => m.DockScreen) },
    { path: 'about', loadComponent: () => import('./about-screen/about-screen').then(m => m.AboutScreen) },
    { path: 'data', loadComponent: () => import('./data-screen/data-screen').then(m => m.DataScreen) },
    { path: 'translate', loadComponent: () => import('./translate-screen/translate-screen').then(m => m.TranslateScreen) },
    {path:'not-found', loadComponent: () => import('./not-found/not-found').then(m => m.NotFound) },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' },


];
