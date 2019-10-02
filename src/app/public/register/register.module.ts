import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';
// Remplacer l’importation du CommonModule par cette ligne :
//import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    //CommonModule,
    SharedModule
  ]
})
export class RegisterModule { }
