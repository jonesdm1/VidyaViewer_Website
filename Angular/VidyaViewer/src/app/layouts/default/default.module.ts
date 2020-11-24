import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav'
import { ThemesListComponent } from '../../modules/themes-list/themes-list.component';
import { ThemesComponent } from '../../modules/themes-list/themes/themes.component';
import { GamesListComponent } from '../../modules/games-list/games-list.component';
import { GamesComponent } from '../../modules/games-list/games/games.component';
import { ProductionCompaniesListComponent } from 'src/app/modules/production-companies-list/production-companies-list.component';
import { ProductionCompaniesComponent } from 'src/app/modules/production-companies-list/production-companies/production-companies.component';
import { VendorsListComponent } from 'src/app/modules/vendors-list/vendors-list.component';
import { VendorsComponent } from 'src/app/modules/vendors-list/vendors/vendors.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ThemesListComponent,
    ThemesComponent,
    GamesListComponent,
    GamesComponent,
    ProductionCompaniesListComponent,
    ProductionCompaniesComponent,
    VendorsListComponent,
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
