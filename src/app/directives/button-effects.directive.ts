import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[ButtonEffects]'
})
export class ButtonEffectsDirective implements OnInit {
  constructor(private el: ElementRef) {

  }

  @HostListener('mouseover')
  onMouseEnter() {
    this.changeElementColor1();
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.changeElementColor2();
  }

  ngOnInit() {
    this.changeElementColor3();
  }

  changeElementColor1() {
    this.el.nativeElement.style.background = 'linear-gradient(90deg, rgb(211, 47, 82) 0%, rgb(221, 155, 162) 100%)';
  }
  changeElementColor2() {
    this.el.nativeElement.style.background = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  }
  changeElementColor3() {
    this.el.nativeElement.style.background = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  }

}
