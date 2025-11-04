import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Agent {
  name: string
  title: string
  bio: string
  image: string
  social: Array<{ icon: string; link: string }>
}

@Component({
  selector: "app-agents",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./agents.component.html",
  styleUrls: ["./agents.component.css"],
})
export class AgentsComponent {
  agents: Agent[] = [
    {
      name: "Walter White",
      title: "Web Development",
      bio: "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      social: [
        { icon: "𝕏", link: "#" },
        { icon: "f", link: "#" },
        { icon: "📷", link: "#" },
        { icon: "in", link: "#" },
      ],
    },
    {
      name: "Sarah Jhinson",
      title: "Marketing",
      bio: "Repellat fugit adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop",
      social: [
        { icon: "𝕏", link: "#" },
        { icon: "f", link: "#" },
        { icon: "📷", link: "#" },
        { icon: "in", link: "#" },
      ],
    },
    {
      name: "William Anderson",
      title: "Content",
      bio: "Voluptos necessitatibus occaecati quia. Eorum totam consequuntur qui porro et laborum toro des clara",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop",
      social: [
        { icon: "𝕏", link: "#" },
        { icon: "f", link: "#" },
        { icon: "📷", link: "#" },
        { icon: "in", link: "#" },
      ],
    },
  ]
}
