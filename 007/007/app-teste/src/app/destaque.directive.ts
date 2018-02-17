import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.destaque('blue');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.destaque(null);
  }

  private destaque(cor:string){
    this.el.nativeElement.style.backgroundColor = cor;
  }



}
