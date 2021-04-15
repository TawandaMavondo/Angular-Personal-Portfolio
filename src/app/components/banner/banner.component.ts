import { Component, OnInit } from '@angular/core';
import * as typed from 'typed.js';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  private readonly strings = [
    'I build things for the Web.',
    'I build software for fun.',
    'I build scalable backend services.'
  ];
  constructor() { }

  ngOnInit(): void {
    const options: typed.TypedOptions = {
      strings: this.strings,
      backSpeed: 50,
      typeSpeed: 100,
      backDelay: 500,
      showCursor: false,
      cursorChar: '|',
      loop: true
    }
    // tslint:disable-next-line: no-unused-expression
    new typed.default('.typing', options);
  }

}
