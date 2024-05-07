import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccueilComponent, ListeEtudiantsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionEtudiants';
}
