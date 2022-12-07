import { Component, OnInit } from '@angular/core';
import { Viagem } from '../../../app/viagem';
import { ViagemApiService } from '../../viagem-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabela-viagens',
  templateUrl: './tabela-viagens.component.html',
  styleUrls: ['./tabela-viagens.component.scss']
})
export class TabelaViagensComponent implements OnInit {
  titulo = "Tabela de Viagem";
  nomePesquisado = "";
  lista: Viagem[] = []


  constructor(private servico: ViagemApiService, private http: HttpClient) {
    this.listarViagem();
  }

  ngOnInit(): void {
  }


  listarViagem() {
    this.servico.listarViagem().subscribe(
      (data) => {
        this.lista = data;
      }
    )
  }

  deletar(id: number){
    this.servico.deletar(id).subscribe(res => {
      this.listarViagem();
      console.log(res);
    });
  }
}