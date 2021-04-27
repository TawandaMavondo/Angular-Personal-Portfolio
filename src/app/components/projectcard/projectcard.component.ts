import { Component, OnInit } from '@angular/core';
import {  faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.scss']
})
export class ProjectcardComponent implements OnInit {
  public faExternalLinkAlt = faExternalLinkAlt;
  public faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
