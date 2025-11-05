import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Declare external libraries
declare var AOS: any;
declare var PureCounter: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private swiper: any;

  ngAfterViewInit() {
    this.initializeAnimations();
    this.initializeSwiper();
  }

  ngOnDestroy() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
  }

  private initializeAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    // Initialize PureCounter
    if (typeof PureCounter !== 'undefined') {
      new PureCounter();
    }
  }

  private initializeSwiper() {
    // Initialize Swiper for testimonials
    const testimonialsSwiper = document.querySelector('.testimonials-slider');
    if (testimonialsSwiper) {
      import('swiper/element/bundle').then((SwiperModule) => {
        const Swiper = (window as any).Swiper;
        
        this.swiper = new Swiper('.testimonials-slider', {
          speed: 600,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20
            }
          }
        });
      }).catch(error => {
        console.error('Error loading Swiper:', error);
      });
    }
  }
}