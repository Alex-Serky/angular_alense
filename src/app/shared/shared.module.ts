import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    ReactiveFormsModule // Importez ce module
  ],
  exports: [
    CommonModule,
    NgxBootstrapModule,
    SidenavComponent, // Ajouter l'exportation de NgxBootstrap
    ReactiveFormsModule // Et exportez-le également
  ]
})
export class SharedModule { }
