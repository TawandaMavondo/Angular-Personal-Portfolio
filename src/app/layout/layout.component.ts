import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
type NavItem = {
  name: string,
  id: string,
  href?: string
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger("fade",
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ])
  ]
})

export class LayoutComponent implements OnInit {
  isCollapsed = false;
  visible = false;
  private drawerButton: Element;
  private didScroll: boolean;
  private lastScroll = 0;
  private deltaOffset = 5;
  private headerHeight = 0;
  private headerElement: Element;


  public drawerBodyStyles = {
    backgroundColor: '#021126',
  }


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
    private viewPortScroller: ViewportScroller,
  ) { }

  ngOnInit(): void {
    this.drawerButton = document.querySelector('.hamburger');
    this.headerElement = document.querySelector('.app-header');
    this.headerHeight = this.headerElement.clientHeight;

    setInterval(() => {
      if (this.didScroll) {
        this.hasScrolled();
        this.didScroll = false;
        console.log(this.didScroll);
      }
    }, 250)

  }

  public scrollToSection(id: string): void {


    const element: HTMLElement = document.getElementById(id);
    // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.viewPortScroller.setHistoryScrollRestoration('auto');
    this.viewPortScroller.scrollToPosition([1, 400])

  }




  @HostListener('window:scroll', ['$event'])
  private onWindowsScroll(e) {
    // this.didScroll = true;
    console.log("scrolled");
    // this.hasScrolled()
  }

  private hasScrolled() {
    let st = window.pageYOffset;

    if (Math.abs(this.lastScroll - st) <= this.deltaOffset) {
      return
    }
    if (st > this.lastScroll && st > this.headerHeight) {
      this.headerElement.classList.add("nav-up");
    } else {
      if (st + window.innerHeight < document.body.clientHeight) {
        this.headerElement.classList.remove('nav-up')
      }
    }
    this.lastScroll = st;
  }


}
