import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faExternalLinkAlt,
  faMobileAlt,
  faLaptopCode,
  faCode,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';

export type ServiceCard = {
  icon: IconDefinition;
  title: string;
  description: string;
};
@Component({
  selector: 'app-servicespage',
  templateUrl: './servicespage.component.html',
  styleUrls: ['./servicespage.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  public cards: ServiceCard[] = [
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
    // {
    //   icon: faCode,
    //   title: 'SaaS Products',
    //   description:
    //      'Software-as-a-Service (SaaS) development services cover design, implementation, deployment, and maintenance of multi-tenancy applications. I am the developer  you can trust with delivery, revamp, support, and growth of your SaaS product',
    // },
  ];

  constructor() {}

  ngOnInit(): void {}
}
