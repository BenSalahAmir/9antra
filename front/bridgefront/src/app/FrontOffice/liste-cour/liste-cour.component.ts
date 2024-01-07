import { Component } from '@angular/core';
import { Cour } from 'src/app/Model/cour';
import { CourService } from 'src/app/service/cour.service';

@Component({
  selector: 'app-liste-cour',
  templateUrl: './liste-cour.component.html',
  styleUrls: ['./liste-cour.component.css']
})
export class ListeCourComponent {


  cours: Cour[] = [];


  constructor(private courService: CourService) {}

  ngOnInit(): void {
      
    this.courService.getAllCour().subscribe(
      (cours) => {
        this.cours = cours;
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    );
  }

  getImageFileName(path: string): string {
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1];
    return fileName;
  }


}
