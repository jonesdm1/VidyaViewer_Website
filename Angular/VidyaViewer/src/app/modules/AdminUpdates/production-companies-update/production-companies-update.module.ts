import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridList} from '@angular/material/grid-list';
import { ProductionCompaniesUpdateComponent } from './production-companies-update.component';


@NgModule({
  declarations: [
    ProductionCompaniesUpdateComponent
  ],
  imports: [
    CommonModule,
    MatGridList
  ]
})
export class ProductionCompaniesUpdateModule { }
