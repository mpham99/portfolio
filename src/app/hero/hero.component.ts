import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  scrollY: number = 0;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
    });
  }
}
