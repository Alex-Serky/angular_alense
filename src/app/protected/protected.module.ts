import { NgModule } from '@angular/core';
// Remplacer l’importation du CommonModule par cette ligne :
//import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ParametersModule } from './parameters/parameters.module';
import { PlanningModule } from './planning/planning.module';
import { ProfilModule } from './profil/profil.module';
import { WorkdayModule } from './workday/workday.module';
import { ProtectedComponent } from './protected.component';

@NgModule({
  declarations: [ProtectedComponent],
  imports: [
    //CommonModule,
    SharedModule,
    ProtectedRoutingModule,
    DashboardModule,
    ParametersModule,
    PlanningModule,
    ProfilModule,
    WorkdayModule
  ]
})
export class ProtectedModule { }
