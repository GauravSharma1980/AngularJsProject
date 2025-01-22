import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirComponent } from './dir/dir.component';
import { PipeComponent } from './pipe/pipe.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
   {path: '',component: DatabindingComponent,pathMatch:'full'},
   {path: 'dir',component:DirComponent},
   {path: 'pipe',component:PipeComponent},
   
   {path: 'product/:id',component:ProductComponent},
   {path: 'product',component:ProductComponent},
   {path: 'category',component:CategoryComponent},
   
   {path: 'notfound',component:NotfoundComponent},
   {path: '**',redirectTo:'notfound'}//must be the last route only
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
