import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilComponent } from './profil/profil.component';
// Remplacer l’importation du CommonModule par cette ligne :
// mport { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProfilComponent],
  imports: [
   // CommonModule,
   SharedModule
  ]
})
export class ProfilModule { }
