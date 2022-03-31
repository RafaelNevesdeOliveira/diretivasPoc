import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hightlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor: string = 'white';
  @Input('hightlight') highlightColor: string = 'yellow';

  private backgroundColor: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
