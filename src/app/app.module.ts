import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Assurez-vous d'importer les composants et les modules que vous avez créés
import { ReactiveFormsModule } from '@angular/forms'; // Pour les formulaires réactifs
import { AppRoutingModule } from './app-routing.module'; // Pour le routage

// Importez vos composants ici
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeEtudiantsComponent,
    AjouterEtudiantComponent
    // Autres composants
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
    // Autres modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
