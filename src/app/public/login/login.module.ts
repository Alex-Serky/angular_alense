import { NgModule } from '@angular/core';
// Remplacer l’importation du CommonModule par cette ligne :
//import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    SharedModule
  ]
})
export class LoginModule { }
