import { Component } from "@angular/core";

@Component({

    selector:   'app-my',
    template : `<h1> My First Component </h1>
                     My Name is {{name}}`
})

export default class MyComponent{
  name: string;
  constructor(){
    this.name = "Gaurav";
  }
}