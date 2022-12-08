import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Categoria } from '../../../app/categoria';
import { CategoriaApiService } from '../../../app/categoria-api.service';


@Component({
  selector: 'tabela-viagens',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: any[] = new Array().fill({id: -1, src: '', title: '', subtitle: ''});
  find_slides: any[] = new Array().fill({id: -1, src: '', title: '', subtitle: ''});
  render= false;
  render2= false;
  lista: Categoria[] = [];
  pesquisa_viagem: string = "";

  constructor(private http: HttpClient, private router: Router, private servico: CategoriaApiService) { 
    
    this.listarCategoria();
  }
  ngOnInit(): void {
    this.listar()

  }
  listarCategoria() {
    this.servico.listarCategoria().subscribe(
      (data) => {
        this.lista = data;
      }
    )}

  listar() {
    this.http.get<any>('http://localhost:3000/api/viagens/').subscribe(data => {
      this.render=true
      for( let item in data ){
       const categoria = this.lista.find(categoria => categoria._id === data[item].nomeCategoria);
        let innerItem= { 
        id: item,
        src: data[item].foto_destino1,
        title: data[item].nome_destino,
        subtitle: categoria?.nomeCategoria,
        idViagem: data[item]._id
        }
      this.slides.push(innerItem)
      } 
    }) 
  }

  buscaViagem(){
    this.render = false
    console.log(this.pesquisa_viagem)
    const busca_Viagem = this.slides.find(busca_Viagem => busca_Viagem.title.includes(this.pesquisa_viagem));
    console.log(busca_Viagem)
    this.find_slides.push(busca_Viagem)
    this.render2 = true
  }

  limparPesquisa(){
    this.find_slides = []
    this.render2 = false;
    this.render = true;
    this.pesquisa_viagem = "";
  }

  detalhe(id:string) {
    this.router.navigate(['/detalheViagem/' + id]);
  }
}