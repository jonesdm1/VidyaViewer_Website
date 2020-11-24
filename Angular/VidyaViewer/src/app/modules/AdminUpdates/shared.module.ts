import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ThemeUpdateComponent } from './theme-update/theme-update.component';
import { ProductionCompaniesUpdateComponent } from './production-companies-update/production-companies-update.component';
import { VendorsUpdateComponent } from './vendors-update/vendors-update.component';
import { GameUpdateComponent } from './game-update/game-update.component';


@NgModule({
  declarations: [
    ThemeUpdateComponent,
    ProductionCompaniesUpdateComponent,
    VendorsUpdateComponent,
    GameUpdateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
