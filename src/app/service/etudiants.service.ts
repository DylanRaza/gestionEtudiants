import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  private etudiants: Personne[] = [
    new Personne( 'Doe', 'John', new Date('2022-01-15'), true,),
    new Personne( 'Smith', 'Jane', new Date('2022-05-20'), false,),
    // Ajoutez d'autres étudiants selon le besoin
  ];

  constructor() { }

  // Récupérer tous les étudiants
  getEtudiants(): Personne[] {
    return this.etudiants;
  }


  }

  