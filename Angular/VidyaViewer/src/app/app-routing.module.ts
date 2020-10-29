import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ThemesComponent } from './modules/themes/themes.component';
import { ProductionCompaniesComponent } from './modules/production-companies/production-companies.component';
import { VendorsComponent } from './modules/vendors/vendors.component';

const routes: Routes =
  [{
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'themes',
        component: ThemesComponent
      },
      {
        path: 'production_companies',
        component: ProductionCompaniesComponent
      },
      {
        path: 'vendors',
        component: VendorsComponent
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
