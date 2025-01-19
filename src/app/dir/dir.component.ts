import { Component, OnInit ,Renderer2,ElementRef} from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
})
export class DirComponent implements OnInit {
 num: number;
 alphabet: string;
 color:string ;
 colors: string[]
 constructor(private render2:Renderer2,private elementRef:ElementRef){
  this.num = 10;
  this.colors = ['red','blue','green','yellow'];
  this.color =''; 
  this.alphabet = 'a';
 }

 ngOnInit():void{
  console.log("ngOnInt....")
 }

 createElement(){
  alert("from createElement....");
  this.elementRef = this.render2.createElement('p');
  const txt =  this.render2.createText('Hello, Renderer 2');
  this.render2.appendChild(this.elementRef,txt);
  this.render2.appendChild(this.elementRef.nativeElement.querySelector('#container'), this.elementRef);
  this.render2.addClass(this.elementRef, 'example-class');
  this.render2.setStyle(this.elementRef, 'color', 'blue');
 }
 removeElement() { 
  alert("removeElement....");
  if (this.elementRef) { 
    this.render2.removeChild(this.elementRef.nativeElement.querySelector('#container'), this.elementRef); 
    //this.elementRef = null; 
  } }
}
