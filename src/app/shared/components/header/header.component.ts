import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container">
        <nav class="navbar">
          <a routerLink="/" class="brand">Mentor</a>
          
          <div class="nav-links">
            <a routerLink="/home" routerLinkActive="active">Home</a>
            <a routerLink="/about" routerLinkActive="active">About</a>
            <a routerLink="/courses" routerLinkActive="active">Courses</a>
            <a routerLink="/trainers" routerLinkActive="active">Trainers</a>
            <a routerLink="/events" routerLinkActive="active">Events</a>
            <a routerLink="/pricing" routerLinkActive="active">Pricing</a>
            <a routerLink="/contact" routerLinkActive="active">Contact</a>
          </div>

          <button class="get-started-btn">Get Started</button>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
    }

    .brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: #007bff;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 20px;
    }

    .nav-links a {
      color: #333;
      text-decoration: none;
      padding: 5px 10px;
      transition: color 0.3s ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #007bff;
    }

    .get-started-btn {
      background: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .get-started-btn:hover {
      background: #0056b3;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
    }
  `]
})
export class HeaderComponent { }