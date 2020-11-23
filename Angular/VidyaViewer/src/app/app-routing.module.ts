import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ThemesListComponent } from './modules/themes-list/themes-list.component';
import { ThemesComponent } from './modules/themes-list/themes/themes.component';
import { GamesListComponent } from './modules/games-list/games-list.component';
import { GamesComponent } from './modules/games-list/games/games.component';
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
        path: 'themes-list',
        component: ThemesListComponent,
        children:[
          {
            path: 'theme-specific',
            component: ThemesComponent,
            children:[
              {
                  path: 'games-list',
                  component: GamesListComponent,
                  children: [
                    {
                      path: 'game',
                      component: GamesComponent
                    }
                  ]
              }
            ]
          }
        ]
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
