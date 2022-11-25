import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viagem } from './viagem';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ViagemApiService {

  baseAPI = "http://localhost:3000/api/viagens";

  constructor(private http: HttpClient) { }

  listar(): Observable<Viagem[]> {
    return this.http.get<Viagem[]>(this.baseAPI);
  }

  inserir(viagem: Viagem): Observable<Viagem> {
    return this.http.post<Viagem>(this.baseAPI, viagem, httpOptions);
  }

  buscarPorId(id:number){
  }

  editar(id: number, viagem: Viagem) {
  }

  deletar(id: number) {
  }
}
