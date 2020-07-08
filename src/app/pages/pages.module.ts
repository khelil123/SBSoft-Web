import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule, 
    HomeModule,
    PagesRoutingModule,
    NgbModule
  ]
})
export class PagesModule { }
