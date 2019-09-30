import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
// Remplacer l’importation du CommonModule par cette ligne :
// mport { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
   // CommonModule,
   SharedModule
  ]
})
export class ProfilModule { }
