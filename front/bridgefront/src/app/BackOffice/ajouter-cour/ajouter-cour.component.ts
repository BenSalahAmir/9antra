import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cour } from 'src/app/Model/cour';
import { CourService } from 'src/app/service/cour.service';

@Component({
  selector: 'app-ajouter-cour',
  templateUrl: './ajouter-cour.component.html',
  styleUrls: ['./ajouter-cour.component.css']
})
export class AjouterCourComponent {
cour: Cour = new Cour();
fichierSelectionne: File | null = null;
constructor(
  private courService: CourService,
  private router: Router
) {}

onSoumettre(formulaire: NgForm) {
  if (formulaire.valid && this.fichierSelectionne) {
    this.courService.ajoutercour(this.cour, this.fichierSelectionne).subscribe(
      response => {
        alert('Cours ajouté avec succès !');
        this.router.navigate(['/admin/liste']);
        formulaire.reset();
      },
      error => {
        console.error('Erreur lors de l\'ajout du cours', error);
        alert('Échec de l\'ajout du cours.');
      }
    );
  } else {
    alert('Veuillez remplir correctement tous les champs.');
  }
}

surChangementFichier(event: any) {
  if (event.target.files.length > 0) {
    this.fichierSelectionne = event.target.files[0];
  }
}
}