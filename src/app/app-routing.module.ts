import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'Ajouter', component: AjouterEtudiantComponent},
  { path: 'Liste', component: ListeEtudiantsComponent },
  { path: 'Detail', component: DetailEtudiantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
