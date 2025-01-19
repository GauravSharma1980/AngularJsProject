import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',

})
export class PipeComponent implements OnInit{
  name:string = 'Grs';
  employees: any[];

  public ngOnInit(): void {
      
  }
  constructor(){
   this.employees = [
    { code: 'emp01', name: 'Gaurav', salary: 1000 },
    { code: 'emp02', name: 'Saurav', salary: 10000 },
    { code: 'emp03', name: 'Ganga', salary: 9000 },
    { code: 'emp04', name: 'Shaurya', salary: 8000 }
    ]
  }
}
