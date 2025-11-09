import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

    events = [
    {
      id: 1,
      title: 'Introduction to wobldesign',
      date: 'Sunday, September 26th at 7:00 pm',
      description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/img/events-1.jpg'
    },
    {
      id: 2,
      title: 'Marketing Strategies',
      date: 'Sunday, November 15th at 7:00 pm',
      description: 'Sed ut perspiciatis unde omnis liet natus errori sit voluptatem doloremque laudantium, totam rem aperiam, esque ipsa quae ab illo intercedere veritatis et quasi architecto bestae vitae dicta sunt explicabo.',
      image: 'assets/img/events-2.jpg'
    }
  ];
}