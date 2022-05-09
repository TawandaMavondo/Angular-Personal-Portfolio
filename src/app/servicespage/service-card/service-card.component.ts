import { Component, Input, OnInit } from '@angular/core';
import {
  faExternalLinkAlt,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { ServiceCard } from '../servicespage.component';
@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent implements OnInit {
  public faExternalLinkAlt = faExternalLinkAlt;
  public faGithub = faGithub;
  public faFolder = faFolder;
  public faCode = faLaptopCode;

  @Input()
  public cardDetails: ServiceCard;
  constructor() { }

  ngOnInit(): void {
    console.log('Nodejs')
  }
}
