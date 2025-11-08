import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Course {
  image: string
  category: string
  title: string
  price: string
  description: string
  instructor: string
  students: number
  likes: number
}

@Component({
  selector: "app-popular-courses",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./popular-courses.component.html",
  styleUrls: ["./popular-courses.component.css"],
})
export class PopularCoursesComponent {
  courses: Course[] = [
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      category: "Web Development",
      title: "Website Design",
      price: "$169",
      description:
        "Et architecto provident delenti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      instructor: "Antonio",
      students: 50,
      likes: 65,
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-adf4078cead0?w=400&h=300&fit=crop",
      category: "Marketing",
      title: "Search Engine Optimization",
      price: "$250",
      description:
        "Et architecto provident delenti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      instructor: "Lana",
      students: 35,
      likes: 42,
    },
    {
      image: "https://images.unsplash.com/photo-1516534775068-bb57100d4b39?w=400&h=300&fit=crop",
      category: "Content",
      title: "Copywriting",
      price: "$180",
      description:
        "Et architecto provident delenti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      instructor: "Brandon",
      students: 20,
      likes: 85,
    },
  ]
}
