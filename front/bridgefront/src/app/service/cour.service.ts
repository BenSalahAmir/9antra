import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cour } from '../Model/cour';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  constructor(private http: HttpClient) {}
  private apiUrl = environment.apiUrl;


  getAllCour(): Observable<Cour[]> {
return this.http.get<Cour[]>(`${this.apiUrl}/all`);
}


ajoutercour(cour: Cour, file: File): Observable<Cour> {
  const formData: FormData = new FormData();
  formData.append('file', file, file.name);
  formData.append('title', cour.title);
  formData.append('price', cour.price.toString());
  return this.http.post<Cour>(`${this.apiUrl}/ajouter`, formData);
}


supprimercour(id: number): Observable<any> {
return this.http.delete(`${this.apiUrl}/supprimer/${id}`);
}

getCourById(id: number): Observable<Cour> {
return this.http.get<Cour>(`${this.apiUrl}/${id}`);
}


modifierCour(course: Cour, file: File | null, id: number): Observable<Cour> {
  const formData: FormData = new FormData();
  formData.append('title', course.title);
  formData.append('price', course.price.toString());
  if (file) {
    formData.append('file', file, file.name);
  }
  return this.http.put<Cour>(`${this.apiUrl}/modifier/${id}`, formData);
}



}
