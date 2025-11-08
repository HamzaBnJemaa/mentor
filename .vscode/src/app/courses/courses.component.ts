import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    {
      id: 1,
      title: 'Website Design',
      description: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
      image: 'assets/course-1.jpg',
      instructor: 'Antonio',
      price: 169,
      category: 'Web Development',
      students: 50,
      rating: 65
    },
    {
      id: 2,
      title: 'Search Engine Optimization',
      description: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
      image: 'assets/course-2.jpg',
      instructor: 'Lana',
      price: 250,
      category: 'Marketing',
      students: 35,
      rating: 42
    },
    {
      id: 3,
      title: 'Copywriting',
      description: 'Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.',
      image: 'assets/course-3.jpg',
      instructor: 'Brandon',
      price: 180,
      category: 'Content',
      students: 20,
      rating: 85
    }
  ];
}