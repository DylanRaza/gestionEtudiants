// src/app/models/personne.ts
export class Personne {
    constructor(
      public nom: string,
      public prenom: string,
      public dateAdmission: Date,
      public inscrit: boolean,
      
    ) {}
  }
  