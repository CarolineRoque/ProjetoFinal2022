import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../../app/categoria';
import { CategoriaApiService } from '../../../app/categoria-api.service';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.component.html',
  styleUrls: ['./form-categorias.component.scss']
})
export class FormCategoriasComponent implements OnInit {

  id!: number;
  mensagem = "";
  categoria = new Categoria();
  botaoAcao = "Salvar";


  constructor(
    private categoriaApiService: CategoriaApiService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient 
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.mensagem = "";
    console.log("ID", this.id);
    if(this.id) {
      this.botaoAcao= "Editar";      
      console.log("Categoria", this.categoria);
    }
  }

  salvar() {
    if(!this.id) {
      this.categoriaApiService.inserir(this.categoria).subscribe(categoria => {
        console.log("Categoria Cadastrada", categoria);
        this.mensagem = this.categoria.nomeCategoria
        + " cadastrado com sucesso!";
        this.categoria = new Categoria();
      });
    }
    else {
      this.categoriaApiService.editar(this.id, this.categoria).subscribe(categoria => {
        this.mensagem = this.categoria.nomeCategoria,
        + " editado com sucesso!";
      });
      this.router.navigate(['/tabelaCategoria']);
    }
  }
  cancelar() {
    this.router.navigate(['/home']);
  }
}