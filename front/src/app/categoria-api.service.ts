import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaApiService {

  baseAPI = "http://localhost:3000/categoria";

  constructor(private http: HttpClient) { }

  listarCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseAPI);
  }

  inserir(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.baseAPI, categoria, httpOptions);
  }

  buscarPorId(id:number): Observable<Categoria> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.get<Categoria>(uri);  
  }

  editar(id: number, categoria: Categoria): Observable<Categoria> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    console.log("URI", categoria)
    return this.http.put<Categoria>(uri, categoria, httpOptions);    
  }

  deletar(id: number){
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.delete(uri);
  }
}