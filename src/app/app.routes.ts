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
  {
    path: 'courses',
    loadComponent: () => import('./courses/courses.component').then(c => c.CoursesComponent)
  },
  {
    path: 'course-details/:id',
    loadComponent: () => import('./course-details/course-details.component').then(c => c.CourseDetailsComponent)
  },
  {
    path: 'events',
    loadComponent: () => import('./event/events.component').then(c => c.EventsComponent)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pricing/pricing.component').then(c => c.PricingComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(c => c.ContactComponent)
  },
  { path: '**', redirectTo: 'home' }
];
