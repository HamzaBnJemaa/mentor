import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Mentor</h3>
            <p>
              A leading platform for online education and professional development.
              Transform your career with our expert-led courses.
            </p>
          </div>
          
          <div class="footer-section">
            <h3>Useful Links</h3>
            <ul>
              <li><a routerLink="/home">Home</a></li>
              <li><a routerLink="/about">About us</a></li>
              <li><a routerLink="/courses">Courses</a></li>
              <li><a routerLink="/trainers">Trainers</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>123 Education Street</li>
              <li>Learning City, 12345</li>
              <li>Phone: +1 234 567 8900</li>
              <li>Email: info@mentorplatform.com</li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates and special offers.</p>
            <div class="newsletter-form">
              <input type="email" placeholder="Enter your email">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{currentYear}} Mentor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #2c3e50;
      color: white;
      padding: 60px 0 20px;
      margin-top: 60px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-section h3 {
      color: #fff;
      margin-bottom: 20px;
      font-size: 1.2rem;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin-bottom: 10px;
    }

    .footer-section a {
      color: #ecf0f1;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section a:hover {
      color: #3498db;
    }

    .newsletter-form {
      display: flex;
      gap: 10px;
      margin-top: 15px;
    }

    .newsletter-form input {
      flex: 1;
      padding: 8px 12px;
      border: none;
      border-radius: 4px;
    }

    .newsletter-form button {
      background: #3498db;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .newsletter-form button:hover {
      background: #2980b9;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}