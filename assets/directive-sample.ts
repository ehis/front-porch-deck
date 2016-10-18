import { Directive, Input, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[chart]'
})
export class ChartDirective {
  public chart;

  @Input()
  set chartOptions(value) {
      //...
  }

  constructor(public el: ElementRef) {
  }
}

