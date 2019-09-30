import { NgModule } from '@angular/core';
// Remplacer l’importation du CommonModule par cette ligne :
// import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    PublicRoutingModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    SharedModule // Importer le SharedModule plutôt que le CommonModule
  ]
})
export class PublicModule { }
