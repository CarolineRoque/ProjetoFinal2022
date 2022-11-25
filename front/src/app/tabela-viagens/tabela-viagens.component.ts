import { Component, Input, OnInit } from '@angular/core';
import { Viagem } from '../viagem';
import { ViagemApiService } from '../viagem-api.service';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'tabela-viagens',
  templateUrl: './tabela-viagens.component.html',
  styleUrls: ['./tabela-viagens.component.css']
})
export class TabelaViagensComponent implements OnInit {
  titulo = "Tabela de Viagens";
  nomePesquisado = "";
  lista: Viagem[] = []
  
  constructor(private servico: ViagemApiService) {
    this.listar();
  }

  ngOnInit(): void {
  }

  listar() {
    this.servico.listar().subscribe(
      (data) => {
        this.lista = data;
      }
    )
  }



  deletar(id: number){
    this.servico.deletar(id);
  }

}
