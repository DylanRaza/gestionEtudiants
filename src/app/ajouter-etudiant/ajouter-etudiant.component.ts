import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {
  etudiantForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.etudiantForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateAdmission: ['', Validators.required],
      inscrit: [false, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.etudiantForm.valid) {
      console.log('Étudiant ajouté', this.etudiantForm.value);
    }
  }
}
