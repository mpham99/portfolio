import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTypingAnimation]'
})
export class TypingAnimationDirective implements OnInit {
  @Input() typeSpeed: number = 50;
  @Input() startDelay: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const text = this.el.nativeElement.textContent;
    this.el.nativeElement.textContent = '';

    setTimeout(() => {
      this.typeText(text, 0);
    }, this.startDelay);
  }

  private typeText(text: string, index: number): void {
    if (index < text.length) {
      this.el.nativeElement.textContent += text.charAt(index);
      setTimeout(() => {
        this.typeText(text, index + 1);
      }, this.typeSpeed);
    }
  }
}
