import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private swiper: any;

  // Statistics data
  stats = [
    { count: 1232, label: 'Students' },
    { count: 64, label: 'Courses' },
    { count: 42, label: 'Events' },
    { count: 15, label: 'Trainers' }
  ];

  // Testimonials data
  testimonials = [
    {
      id: 1,
      name: 'Saul Goodman',
      position: 'Ceo & Founder',
      image: 'assets/img/testimonials/testimonials-1.jpg',
      text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
    {
      id: 2,
      name: 'Sara Wilsson',
      position: 'Designer',
      image: 'assets/img/testimonials/testimonials-2.jpg',
      text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
    },
    {
      id: 3,
      name: 'Jena Karlis',
      position: 'Store Owner',
      image: 'assets/img/testimonials/testimonials-3.jpg',
      text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
    },
    {
      id: 4,
      name: 'Matt Brandon',
      position: 'Freelancer',
      image: 'assets/img/testimonials/testimonials-4.jpg',
      text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
    },
    {
      id: 5,
      name: 'John Larson',
      position: 'Entrepreneur',
      image: 'assets/img/testimonials/testimonials-5.jpg',
      text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
    }
  ];

  ngAfterViewInit() {
    this.initializeAnimations();
    this.initializeTestimonialsSlider();
  }

  ngOnDestroy() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
  }

  private initializeAnimations() {
    this.animateCounters();
  }

  private animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target')!;
      const increment = target / 200;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current).toString();
          setTimeout(updateCounter, 10);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCounter();
    });
  }

  private initializeTestimonialsSlider() {
    // Simple custom slider implementation
    setTimeout(() => {
      this.setupCustomSlider();
    });
  }

  private setupCustomSlider() {
    const slider = document.querySelector('.testimonials-slider') as HTMLElement;
    const slides = document.querySelectorAll('.swiper-slide');
    const pagination = document.querySelector('.swiper-pagination') as HTMLElement;

    if (!slider || slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create pagination dots
    if (pagination) {
      pagination.innerHTML = '';
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'swiper-pagination-bullet';
        if (i === 0) dot.classList.add('swiper-pagination-bullet-active');
        dot.addEventListener('click', () => this.goToSlide(i, slider, pagination));
        pagination.appendChild(dot);
      }
    }

    // Auto slide
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      this.goToSlide(currentSlide, slider, pagination);
    }, 5000);
  }

  private goToSlide(index: number, slider: HTMLElement, pagination: HTMLElement) {
    const slides = document.querySelectorAll('.swiper-slide');
    const wrapper = slider.querySelector('.swiper-wrapper') as HTMLElement;
    const dots = pagination.querySelectorAll('.swiper-pagination-bullet');
    
    const translateX = -index * 100;
    wrapper.style.transform = `translateX(${translateX}%)`;
    
    // Update active dot
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('swiper-pagination-bullet-active');
      } else {
        dot.classList.remove('swiper-pagination-bullet-active');
      }
    });
  }
}