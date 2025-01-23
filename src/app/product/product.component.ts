import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit{
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
