import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { WhyChooseMentorComponent } from "../why-choose-mentor/why-choose-mentor.component"
import { CoursesComponent } from "../courses/courses.component"

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, WhyChooseMentorComponent, CoursesComponent],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent {}
