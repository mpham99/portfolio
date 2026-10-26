import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('scrollBar') scrollBar!: ElementRef;
  isMenuOpen = false;
  scrollProgress = 0;

  constructor() { }

  ngOnInit(): void {
    this.updateScrollProgress();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.updateScrollProgress();
  }

  updateScrollProgress(): void {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (window.scrollY / windowHeight) * 100;

    if (this.scrollBar) {
      this.scrollBar.nativeElement.style.width = this.scrollProgress + '%';
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}

