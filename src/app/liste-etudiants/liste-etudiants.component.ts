
import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { EtudiantsService } from '../service/etudiants.service';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatIconModule,
  ],
})
export class ListeEtudiantsComponent implements OnInit {
  etudiants: Personne[] = [];
  dataSource = new MatTableDataSource(this.etudiants);
  columnsToDisplay = ["nom", "prenom", "dateAdmission", "inscrit"];

  constructor(private etudiantsService: EtudiantsService) { }

  ngOnInit(): void {
    this.etudiants = this.etudiantsService.getEtudiants();

    console.log(this.etudiants)
    this.dataSource = new MatTableDataSource(this.etudiants);
  }
 
  }
