import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
})
export class DatabindingComponent implements OnInit{
    // all instance variable are mandatory to be 
    //initilize else to be undefined
    name: string;
    site:  string;
    siteName: string
    constructor(){
      this.name = "Angular123999";
      this.site = "http://google.com";
      this.siteName = "Google";
    }
      ngOnInit(): void {
        console.log("from ngOnInit() method.....")
      }

      Greet():void{
        alert(`Hello ${this.name}`);
        console.log("from Greet method....")
      }
}
