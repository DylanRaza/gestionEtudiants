import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Assurez-vous d'importer les composants et les modules que vous avez créés
import { ReactiveFormsModule } from '@angular/forms'; // Pour les formulaires réactifs
import { AppRoutingModule } from './app-routing.module'; // Pour le routage


import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIcon
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
