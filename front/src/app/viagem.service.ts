import { Injectable } from '@angular/core';
import { Viagem } from './viagem';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {
  listaViagens: Viagem[] = [
    {_id:1, nome_destino:"Viagem1", manha_primeiro_dia: "Teste"},

    //{_id:4, nome_destino:"Produto 4", preco: 50},
  ];

  constructor() { }

  inserir(viagem: Viagem) {
    this.listaViagens.push(viagem);
  }

  listar() {
    return this.listaViagens;
  }

  buscarPorId(id:number): Viagem{
    const viagem = this.listaViagens.find(viagem => viagem._id === id);
    return viagem ?viagem :new Viagem();
  }

  editar(id: number, viagem: Viagem) {
    const indice = this.getIndice(id);
    if(indice >=0)
      this.listaViagens[indice] = viagem;
  }

  deletar(id: number) {
    const indice = this.getIndice(id);
    if(indice >=0) 
      this.listaViagens.splice(indice,1);    
  }

  private getIndice(id: number) {
    return this.listaViagens.findIndex(viagem => viagem._id === id);
  }
}
