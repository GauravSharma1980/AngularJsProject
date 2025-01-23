import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit{
 id: number | undefined;
 name: string | undefined;

 constructor(private route:ActivatedRoute){

 }

 ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id = param['id'];
      this.name = param['name'];
    });
  }
}