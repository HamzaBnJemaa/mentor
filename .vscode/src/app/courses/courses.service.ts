import { Injectable } from '@angular/core';
import { Course } from '../shared/models/course.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      title: 'Website Design',
      description: 'Learn modern web development with the latest technologies.',
      descriptionLong: 'This comprehensive course will teach you everything you need to know about modern website design. You\'ll learn HTML5, CSS3, JavaScript, and responsive design principles to create beautiful, functional websites.',
      image: 'assets/course-1.jpg',
      instructor: 'Antonio',
      price: 169,
      rating: 4.8,
      students: 50,
      category: 'Web Development',
      duration: '8 weeks',
      lessons: 32,
      level: 'Beginner',
      language: 'English',
      requirements: [
        'Basic computer skills',
        'Internet connection',
        'Text editor (Visual Studio Code recommended)'
      ],
      whatYouWillLearn: [
        'HTML5 and CSS3 fundamentals',
        'Responsive web design',
        'JavaScript basics',
        'Working with frameworks',
        'Deployment and hosting'
      ]
    },
    // Add more courses as needed
  ];

  constructor() { }

  getCourseById(id: number) {
    const course = this.courses.find(c => c.id === id);
    return of(course);
  }

  getAllCourses() {
    return of([...this.courses]);
  }
}
