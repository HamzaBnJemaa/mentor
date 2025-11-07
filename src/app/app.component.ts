import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      margin: 0;
      padding: 0;
    }
    
    app-navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
    }
    
    main {
      flex: 1;
      width: 100%;
      overflow-y: auto;
      padding: 20px;
      box-sizing: border-box;
    }
    
    app-footer {
      width: 100%;
      margin-top: auto;
    }
  `
  ]
})
export class AppComponent {
  title = 'Mentor';
}
