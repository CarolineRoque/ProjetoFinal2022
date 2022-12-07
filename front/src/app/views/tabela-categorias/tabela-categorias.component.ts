import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../app/categoria';
import { CategoriaApiService } from '../../../app/categoria-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabela-categorias',
  templateUrl: './tabela-categorias.component.html',
  styleUrls: ['./tabela-categorias.component.scss']
})
export class TabelaCategoriasComponent implements OnInit {

  titulo = "Tabela de Categorias";
  lista: Categoria[] = []

  constructor(private servico: CategoriaApiService, private http: HttpClient) {
    this.listarCategoria();
  }
  ngOnInit(): void {
  }

  listarCategoria() {
    this.servico.listarCategoria().subscribe(
      (data) => {
        this.lista = data;
      }
    )
  }
  deletar(id: number){
    this.servico.deletar(id).subscribe(res => {
      this.listarCategoria();
      console.log(res);
    });
  }
}