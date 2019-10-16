import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  // …
 // C’est dans ce tableau que l’on importe les routes de notre application :
  declarations: [
    AppComponent
  ],
  imports: [
    // 1. On importe les routes du AppRoutingModule en premier,
  // qui ont leur propre ordre définit dans le fichier de ce module.
    BrowserModule,
    // 2. On importe le CoreModule, qui lui-même importé des modules de routes.
  // Les routes définies dans ce module sont importées en deuxième.
    CoreModule, // On importe d’abord nos “vraies” routes...
    AppRoutingModule, // et ensuite la route générique en dernier !
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
