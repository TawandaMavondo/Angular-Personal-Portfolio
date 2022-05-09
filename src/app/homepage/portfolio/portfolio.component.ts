import { Component, Input, OnInit } from '@angular/core';
import { faCloud, faLaptopCode, faMobileAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ServiceCard } from 'src/app/servicespage/servicespage.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public cards = 10;
  constructor() { }
  public serviceCards: ServiceCard[] = [
    {
      icon: faLaptopCode,
      title: 'Web Applications',
      description:
        'Web app development services help design, build, and evolve web-based software. Having delivered 15+ web projects, I am the one you can trust with the engineering of impactful and efficient corporate and customer-facing web apps',
    },
    {
      icon: faMobileAlt,
      title: 'Mobile Applications',
      description:
        'Mobile app development services cover end-to-end development of mobile apps, from business analysis and UI/UX design to mobile application testing and deployment or online market publication.',
    },
    {
      icon: faCloud,
      title: 'Cloud Applications',
      description:
        'Cloud app development implies building apps that run in the cloud and may leverage cloud features and services offered by cloud vendors.I have quickly and reliably delivers cloud-native and cloud-only apps that efficiently employ all cloud capabilities.',
    },
  ];
  public card = this.serviceCards[0];


  ngOnInit(): void {
  }

}
