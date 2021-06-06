import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StringValueNode } from 'graphql';

type NavItem = {
  name: string,
  id: string,
  href?: string
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
  isCollapsed = false;
  visible = false;
  private drawerButton: Element;

  public open(): void {
    if (this.drawerButton.classList.contains("ham-box-open")) {
      return;
    }
    this.drawerButton.classList.add('ham-box-open');
    this.visible = true;
  }

  public close(): void {
    if (this.drawerButton.classList.contains("ham-box-open")) {
      this.drawerButton.classList.remove('ham-box-open');
    }
    this.visible = false;
  }

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
      name: 'Blog',
      id: 'blog-section',
      href: '/blog'
    }
  ];

  constructor(
    private viewPortScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.drawerButton = document.querySelector('.hamburger');
  }

  public scrollToSection(id: string): void {


    const element: HTMLElement = document.getElementById(id);
    // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.viewPortScroller.setHistoryScrollRestoration('auto');
    this.viewPortScroller.scrollToPosition([1, 400])

  }

}
