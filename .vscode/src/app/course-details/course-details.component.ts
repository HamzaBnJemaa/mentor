import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course$ = of<any>(null);

  private courses = [
    {
      id: '1',
      title: 'Website Design',
      description: 'Et architecto provident deleniti facere repellat nobis iste.',
      descriptionLong:
        'Learn how to design stunning and responsive websites using modern web technologies. This course covers design principles, color theory, and UX fundamentals.',
      image: 'assets/course-1.jpg',
      instructor: 'Antonio',
      price: 169,
      category: 'Web Development',
      students: 50,
      duration: '3 Weeks'
    },
    {
      id: '2',
      title: 'Search Engine Optimization',
      description: 'Et architecto provident deleniti facere repellat nobis iste.',
      descriptionLong:
        'Master SEO strategies to boost your website ranking. Learn keyword optimization, analytics, and content structure for better visibility.',
      image: 'assets/course-2.jpg',
      instructor: 'Lana',
      price: 250,
      category: 'Marketing',
      students: 35,
      duration: '4 Weeks'
    },
    {
      id: '3',
      title: 'Copywriting',
      description: 'Et architecto provident deleniti facere repellat nobis iste.',
      descriptionLong:
        'Learn the art of persuasive writing for ads, landing pages, and brand messaging. This course helps you communicate effectively through words.',
      image: 'assets/course-3.jpg',
      instructor: 'Brandon',
      price: 180,
      category: 'Content',
      students: 20,
      duration: '2 Weeks'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.course$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        const course = this.courses.find(c => c.id === id);
        return of(course);
      })
    );
  }
}
