import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkdayComponent } from './workday/workday.component';
// Remplacer l’importation du CommonModule par cette ligne :
//import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WorkdayComponent],
  imports: [
    // CommonModule,
    SharedModule
  ]
})
export class WorkdayModule { }
