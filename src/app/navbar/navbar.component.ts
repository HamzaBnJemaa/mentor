import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Router, RouterLink, RouterLinkActive } from "@angular/router"

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  mobileMenuOpen = false

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.closeMobileMenu();
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false
  }
}
