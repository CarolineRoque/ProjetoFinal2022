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

  listarViagem(): Observable<Viagem[]> {
    return this.http.get<Viagem[]>(this.baseAPI);
  }

  inserir(viagem: Viagem): Observable<Viagem> {
    return this.http.post<Viagem>(this.baseAPI, viagem, httpOptions);
  }

  buscarPorId(id:number): Observable<Viagem> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.get<Viagem>(uri);  
  }

  editar(id: number, viagem: Viagem): Observable<Viagem> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.put<Viagem>(uri, viagem, httpOptions);    
  }

  deletar(id: number){
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.delete(uri);
  }
}
