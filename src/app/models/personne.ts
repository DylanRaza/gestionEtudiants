// src/app/models/personne.ts
export class Personne {
    constructor(
      public id: number,
      public nom: string,
      public prenom: string,
      public dateAdmission: Date,
      public inscrit: boolean,
      public photoUrl?: string  // Optionnel si vous voulez ajouter des photos
    ) {}
  }
  