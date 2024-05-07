import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantsService } from '../service/etudiants.service';
import { Personne } from '.././models/personne';

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css']
})
export class DetailEtudiantComponent implements OnInit {
  etudiant: Personne | undefined;


  constructor(
    private route: ActivatedRoute, 
    private etudiantsService: EtudiantsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Conversion de l'ID de string à number
      this.etudiant = this.etudiantsService.getEtudiantById(id);
    });
  }
}
