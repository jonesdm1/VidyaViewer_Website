import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog/dialog-config';
import { ThemeUpdateComponent } from 'src/app/modules/AdminUpdates/theme-update/theme-update.component';
import { ProductionCompaniesUpdateComponent } from 'src/app/modules/AdminUpdates/production-companies-update/production-companies-update.component';
import { VendorsUpdateComponent } from 'src/app/modules/AdminUpdates/vendors-update/vendors-update.component';
import { GameUpdateComponent } from 'src/app/modules/AdminUpdates/game-update/game-update.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public themesUpdateDialog: MatDialog, public productionCoUpdateDialog: MatDialog,
     public vendorsUpdateDialog: MatDialog, public gamesAddOrUpdateDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onThemesUpdate()
  {
    this.themesUpdateDialog.open(ThemeUpdateComponent);
  }

  onProductionCompaniesUpdate()
  {
    this.productionCoUpdateDialog.open(ProductionCompaniesUpdateComponent);
  }

  onVendorsUpdate()
  {
    this.vendorsUpdateDialog.open(VendorsUpdateComponent);
  }

  onAddAndEditGames()
  {
    this.gamesAddOrUpdateDialog.open(GameUpdateComponent);
  }

}
