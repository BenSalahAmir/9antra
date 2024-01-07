import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cour } from 'src/app/Model/cour';
import { CourService } from 'src/app/service/cour.service';

@Component({
  selector: 'app-liste-cours-back',
  templateUrl: './liste-cours-back.component.html',
  styleUrls: ['./liste-cours-back.component.css']
})
export class ListeCoursBackComponent {

  cours: Cour[] = [];

  constructor(private courService: CourService,private router: Router) {}

  ngOnInit(): void {
    this.courService.getAllCour().subscribe(
      (data) => {
        this.cours = data;
      },
      (error) => {
        console.error('Impossible obtenir des cours', error);
      }
    );
  }


  getNomFichierImage(path: string): string {
    const pathParts = path.split('/');
    return pathParts[pathParts.length - 1];
  }
  



  supprimercour(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce cours ?')) {
      this.courService.supprimercour(id).subscribe(
        () => {
          console.log('Cours supprimé avec succès');
          this.cours = this.cours.filter(cour => cour.id !== id);
          this.router.navigate(['/admin/liste']);
          window.location.reload();
        },
        (error) => {
          console.error('Échec de la suppression du cours', error);
        }
      );
    }
  }
  
  

}
