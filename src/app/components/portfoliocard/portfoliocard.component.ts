import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-portfoliocard',
  templateUrl: './portfoliocard.component.html',
  styleUrls: ['./portfoliocard.component.scss']
})
export class PortfolioCardComponent implements OnInit {
  public faExternalLinkAlt = faExternalLinkAlt;
  public faGithub = faGithub;
  public faFolder = faFolder;
  constructor() { }

  ngOnInit(): void {
  }

}
