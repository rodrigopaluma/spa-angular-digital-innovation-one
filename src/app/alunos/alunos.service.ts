import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Aluno } from '../models/aluno.model';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  URL = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) { }

  save(aluno: any): Observable<any> {
    return this.http.post<any>(`${this.URL}`, aluno).pipe(take(1));
  }

  update(aluno: any): Observable<any> {
    return this.http.put<any>(`${this.URL}/${aluno.id}`, aluno).pipe(take(1));
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/${id}`).pipe(take(1));
  }

  findAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.URL}`).pipe(take(1));
  }
}
