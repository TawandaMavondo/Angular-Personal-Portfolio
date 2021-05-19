import { Component, OnInit } from '@angular/core';
import { StringValueNode } from 'graphql';

type NavItem = {
  name: string,
  id: string
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
  isCollapsed = false;
  public navItems: NavItem[] = [
    {
      name: 'About Me',
      id: 'about-section'
    },
    {
      name: 'Experince',
      id: 'experience-section'
    },
    {
      name: 'Portfolio',
      id: 'portfolio-section'
    },
    {
      name: 'Contact',
      id: 'contact-section'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public scrollToSection(id: string): void {

    const element: HTMLElement = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

  }

}
