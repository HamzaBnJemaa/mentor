import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { 
        path: 'home',
        loadComponent: () => import('./features/home/home').then(m => m.HomeComponent),
        data: { title: 'Home' }
      },
      { 
        path: 'about',
        loadComponent: () => import('./features/about/about').then(m => m.AboutComponent),
        data: { title: 'About Us' }
      },
      { 
        path: 'courses',
        loadComponent: () => import('./features/courses/courses').then(m => m.CoursesComponent),
        data: { title: 'Courses' }
      },
      { 
        path: 'course-details/:id',
        loadComponent: () => import('./features/course-details/course-details').then(m => m.CourseDetailsComponent),
        data: { title: 'Course Details' }
      },
      { 
        path: 'events',
        loadComponent: () => import('./features/events/events').then(m => m.EventsComponent),
        data: { title: 'Events' }
      },
      { 
        path: 'trainers',
        loadComponent: () => import('./features/trainers/trainers').then(m => m.TrainersComponent),
        data: { title: 'Trainers' }
      },
      { 
        path: 'pricing',
        loadComponent: () => import('./features/pricing/pricing').then(m => m.PricingComponent),
        data: { title: 'Pricing' }
      },
      { 
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent),
        data: { title: 'Contact Us' }
      },
      { path: '**', redirectTo: 'home' }
    ]
  }
];
