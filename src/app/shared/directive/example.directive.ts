import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "red";
   }

}
