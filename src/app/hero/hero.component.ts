import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { CoursesComponent } from "../courses/courses.component"
import { TrainersComponent } from "../trainers/trainers.component"

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, CoursesComponent, TrainersComponent],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent {}
