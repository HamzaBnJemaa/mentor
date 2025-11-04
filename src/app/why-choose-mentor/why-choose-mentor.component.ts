import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Feature {
  icon: string
  title: string
  description: string
}

@Component({
  selector: "app-why-choose-mentor",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./why-choose-mentor.component.html",
  styleUrls: ["./why-choose-mentor.component.css"],
})
export class WhyChooseMentorComponent {
  topFeatures: Feature[] = [
    {
      icon: "📊",
      title: "Corporis voluptates sit",
      description: "Consequuntur sunt aut quasi enim aliquam quae harum nis ut aliquip",
    },
    {
      icon: "⏱️",
      title: "Ullamco laboris nisi",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      icon: "🖼️",
      title: "Labore consequatur",
      description: "Aut suscipit cum nemo delenit aut omnis. Doloribus ut maiores omnis facere",
    },
  ]

  bottomFeatures: Feature[] = [
    { icon: "📦", title: "Lorem Ipsum", description: "Voluptatum deleniti atque corrupti quos dolores" },
    { icon: "📈", title: "Dolor Sitema", description: "Minim veniam, quis nostrud exercitation ullamco" },
    { icon: "📅", title: "Sed perspiciatis", description: "Duis aute irure dolor in reprehenderit in" },
    { icon: "🖥️", title: "Magni Dolores", description: "Excepteur sint occaecat cupidatat non proident" },
    { icon: "💾", title: "Nemo Enim", description: "At vero eos et accusamus et iusto odio dignissimos" },
    { icon: "⏰", title: "Eiusmod Tempor", description: "Et harum quidem rerum facilis est et expedita" },
    { icon: "🔍", title: "Miidela Terin", description: "Excepteur sint occaecat cupidatat non proident" },
    { icon: "🔐", title: "Pira Neve", description: "Duis aute irure dolor in reprehenderit in" },
    { icon: "⚓", title: "Dirada Pack", description: "Excepteur sint occaecat cupidatat non proident" },
    { icon: "🎯", title: "Moton Ideal", description: "At vero eos et accusamus et iusto odio dignissimos" },
    { icon: "📻", title: "Verdo Park", description: "Quis autem vel eum iure reprehenderit qui" },
    { icon: "🌿", title: "Flavor Nivel", description: "At vero eos et accusamus et iusto odio dignissimos" },
  ]
}
