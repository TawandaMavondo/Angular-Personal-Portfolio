import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.scss']
})
export class ProjectCardComponent implements OnInit {
  public faExternalLinkAlt = faExternalLinkAlt;
  public faGithub = faGithub;

  @Input()
  public reverse: boolean;

  @Input()
  public technologies: string;

  @Input()
  public description: string;

  @Input()
  public title: string;

  @Input()
  public githubLink: string;


  @Input()
  public externalLink: string;

  @Input()
  public imageUrl: string;



  constructor() { }

  ngOnInit(): void {
  }

}
