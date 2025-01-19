import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight],.appHighlight,#appHighlight'
})
export class HighlightDirective {

  constructor() { }

}
