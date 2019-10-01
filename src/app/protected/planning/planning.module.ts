import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlanningComponent } from './planning/planning.component';
import { PlanningWorkdayListComponent } from './planning-workday-list/planning-workday-list.component';
import { PlanningWorkdayItemComponent } from './planning-workday-item/planning-workday-item.component';
// Remplacer l’importation du CommonModule par cette ligne :
//import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PlanningComponent, PlanningWorkdayListComponent, PlanningWorkdayItemComponent],
  imports: [
    //CommonModule,
    SharedModule
  ]
})
export class PlanningModule { }
