import { Pipe, PipeTransform } from '@angular/core';
import { Viagem } from './viagem';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaViagens: Viagem[], valor?: string): Viagem[] {
    const nome = valor ?valor :"";
    console.log(nome);
    return listaViagens.filter(
      (viagem) => 
        viagem.nome_destino.toLocaleLowerCase().includes(nome.toLowerCase())
    );
  }

}
