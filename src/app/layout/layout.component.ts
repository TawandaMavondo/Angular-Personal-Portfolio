import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';
type NavItem = {
  name: string;
  id: string;
  href?: string;
};
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(300)]),
      transition(':leave', [animate(500)]),
    ]),
  ],
})
export class LayoutComponent implements OnInit {
  constructor(private viewPortScroller: ViewportScroller) {}
  isCollapsed = false;
  visible = false;
  // tslint:disable-next-line: member-ordering
  private drawerButton: Element;

  public drawerBodyStyles = {
    backgroundColor: '#021126',
  };

  public navItems: NavItem[] = [
    {
      name: 'About Me',
      id: 'about-section',
    },
    {
      name: 'Experince',
      id: 'experience-section',
    },
    {
      name: 'Portfolio',
      id: 'portfolio-section',
    },
    {
      name: 'Blog',
      id: 'blog-section',
      href: '/blog',
    },
  ];
  ngOnInit(): void {
    this.drawerButton = document.querySelector('.hamburger');
  }

  public toggleDrawer(): void {
    if (this.drawerButton.classList.contains('ham-box-open')) {
      this.close();
      return;
    }
    this.drawerButton.classList.add('ham-box-open');
    this.visible = true;
  }

  public close(): void {
    if (this.drawerButton.classList.contains('ham-box-open')) {
      this.drawerButton.classList.remove('ham-box-open');
    }
    this.visible = false;
  }
}
