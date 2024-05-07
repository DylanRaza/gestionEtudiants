import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  private etudiants: Personne[] = [
    new Personne(1, 'Doe', 'John', new Date('2022-01-15'), true, 'assets/images/john.jpg'),
    new Personne(2, 'Smith', 'Jane', new Date('2022-05-20'), false, 'assets/images/jane.jpg'),
    // Ajoutez d'autres étudiants selon le besoin
  ];

  constructor() { }

  // Récupérer tous les étudiants
  getEtudiants(): Personne[] {
    return this.etudiants;
  }

  // Récupérer un étudiant par ID
  getEtudiantById(id: number): Personne | undefined {
    return this.etudiants.find(etudiant => etudiant.id === id);
  }

  // Ajouter un nouvel étudiant
  addEtudiant(etudiant: Personne): void {
    this.etudiants.push(etudiant);
  }
}
