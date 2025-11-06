import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var AOS: any;

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface BottomFeature {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-why-choose-mentor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-mentor.component.html',
  styleUrls: ['./why-choose-mentor.component.css']
})
export class WhyChooseMentorComponent implements AfterViewInit {
  
  features: Feature[] = [
    {
      icon: 'bx bx-receipt',
      title: 'Corporis voluptates sit',
      description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip'
    },
    {
      icon: 'bx bx-cube-alt',
      title: 'Ullamco laboris ladore pan',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
    },
    {
      icon: 'bx bx-images',
      title: 'Labore consequatur',
      description: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere'
    }
  ];

  bottomFeatures: BottomFeature[] = [
    { icon: 'ri-store-line', title: 'Lorem Ipsum' },
    { icon: 'ri-bar-chart-box-line', title: 'Dolor Sitema' },
    { icon: 'ri-calendar-todo-line', title: 'Sed perspiciatis' },
    { icon: 'ri-paint-brush-line', title: 'Magni Dolores' },
    { icon: 'ri-database-2-line', title: 'Nemo Enim' },
    { icon: 'ri-gradienter-line', title: 'Eiusmod Tempor' },
    { icon: 'ri-file-list-3-line', title: 'Midela Teren' },
    { icon: 'ri-price-tag-2-line', title: 'Pira Neve' },
    { icon: 'ri-anchor-line', title: 'Dirada Pack' },
    { icon: 'ri-disc-line', title: 'Moton Ideal' },
    { icon: 'ri-base-station-line', title: 'Verdo Park' },
    { icon: 'ri-fingerprint-line', title: 'Flavor Nivelanda' }
  ];

  // Icon colors matching the original template
  getIconColor(index: number): string {
    const colors = [
      '#ffbb2c', '#5578ff', '#e80368', '#e361ff',
      '#47aeff', '#ffa76e', '#11dbcf', '#4233ff',
      '#b2904f', '#b20969', '#ff5828', '#29cc61'
    ];
    return colors[index % colors.length];
  }

  ngAfterViewInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
}