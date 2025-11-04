import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home',
    loadComponent: () => import('./hero/hero.component').then(c => c.HeroComponent)
  },
  { 
    path: 'agents',
    loadComponent: () => import('./agents/agents.component').then(c => c.AgentsComponent)
  },
  { path: '**', redirectTo: 'home' }
];
