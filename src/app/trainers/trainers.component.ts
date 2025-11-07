import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent {
  // You can add component logic here later
  trainers = [
    {
      id: 1,
      name: 'Waaaaaaaaalter White',
      role: 'Web Development',
      bio: 'Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut',
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      image: 'assets/img/trainers/trainer-1.jpg'
    },
    {
      id: 2,
      name: 'Sarah Jhinson',
      role: 'Marketing',
      bio: 'Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus',
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      image: 'assets/img/trainers/trainer-2.jpg'
    },
    {
      id: 3,
      name: 'William Anderson',
      role: 'Content',
      bio: 'Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara',
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      image: 'assets/img/trainers/trainer-3.jpg'
    }
  ];
}