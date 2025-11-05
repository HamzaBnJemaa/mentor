import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home',
    loadComponent: () => import('./hero/hero.component').then(c => c.HeroComponent)
  },
  { 
    path: 'about',
    loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)
  },
  { 
    path: 'agents',
    loadComponent: () => import('./agents/agents.component').then(c => c.AgentsComponent)
  },
  { 
    path: 'trainers',
    loadComponent: () => import('./trainers/trainers.component').then(c => c.TrainersComponent)
  },
  { path: '**', redirectTo: 'home' }
];
