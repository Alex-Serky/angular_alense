import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
// Importez ce module :
import { LoginRoutingModule } from './login/login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    LoginRoutingModule // Et ajouter-le !
  ]
})
export class LoginModule { }
