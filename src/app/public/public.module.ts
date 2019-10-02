import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule, // Importer le SharedModule plutôt que le CommonModule
    PublicRoutingModule,
    HomeModule,
    RegisterModule
  ]
})
export class PublicModule { }
