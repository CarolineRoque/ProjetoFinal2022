import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../../app/categoria';
import { CategoriaApiService } from '../../../app/categoria-api.service';

@Component({
  selector: 'tabela-viagens',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: any[] = new Array().fill({id: -1, src: '', title: '', subtitle: ''});
  render= false;
  nomePesquisado = "";
  lista: Categoria[] = [];

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
        console.log(data[item])
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
  detalhe(id:string) {
    console.log(id)
    this.router.navigate(['/detalheViagem/' + id]);
    
  }
}