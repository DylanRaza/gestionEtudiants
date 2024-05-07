// src/app/components/liste-etudiants/liste-etudiants.component.ts
import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { EtudiantsService } from '../service/etudiants.service';

@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css'],
  standalone: true,
  imports: []
})
export class ListeEtudiantsComponent implements OnInit {
  etudiants: Personne[] = [];

  constructor(private etudiantsService: EtudiantsService) { }

  ngOnInit(): void {
    this.etudiants = this.etudiantsService.getEtudiants();
  }
 
  }

