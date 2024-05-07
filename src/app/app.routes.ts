import { Routes } from '@angular/router';
import { AccueilComponent  } from './accueil/accueil.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';


export const routes: Routes = [  { path: '', component: AccueilComponent },
{ path: 'Ajouter', component: AjouterEtudiantComponent},
{ path: 'Liste', component: ListeEtudiantsComponent },
{ path: 'Detail', component: DetailEtudiantComponent }
];
