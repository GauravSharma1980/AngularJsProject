import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import MyComponent from './my.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DirComponent } from './dir/dir.component';
import { RendererComponent } from './renderer/renderer.component';
import { PipeComponent } from './pipe/pipe.component';
import { TimeChangePipePipe } from './time-change-pipe.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './account/profile/profile.component';
import { MembershipComponent } from './account/membership/membership.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    DatabindingComponent,
    DirComponent,
    RendererComponent,
    PipeComponent,
    TimeChangePipePipe,
    NotfoundComponent,
    ProductComponent,
    CategoryComponent,
    AccountComponent,
    ProfileComponent,
    MembershipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
