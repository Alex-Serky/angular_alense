import { NgModule } from '@angular/core';
// Remplacer l’importation du CommonModule par cette ligne :
//import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    //CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
