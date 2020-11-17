import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav'
import { ThemesComponent } from '../../modules/themes/themes.component';
import { ProductionCompaniesComponent } from '../../modules/production-companies/production-companies.component';
import { VendorsComponent } from '../../modules/vendors/vendors.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ThemesComponent,
    ProductionCompaniesComponent,
    VendorsComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
  ]
})
export class DefaultModule { }
