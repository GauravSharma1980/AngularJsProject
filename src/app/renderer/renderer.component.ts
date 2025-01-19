import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html'
})
export class RendererComponent {
  private element: any;
  constructor(private renderer:Renderer2,private el:ElementRef){
  }

  createElement() {
    alert("create Element");
     this.element = this.renderer.createElement('p');
     const text = this.renderer.createText('Hello, Renderer2!');
      this.renderer.appendChild(this.element, text); this.renderer.appendChild(this.el.nativeElement.querySelector('#container'),
       this.element);
        //this.renderer.addClass(this.element, 'example-class'); 
        this.renderer.setStyle(this.element, 'color', 'blue'); 
      } 
     
      removeElement() {
        alert("removeElement");
         if (this.element) {
           this.renderer.removeChild(this.el.nativeElement.querySelector('#container'), this.element); this.element = null; 
          }
        }
}
