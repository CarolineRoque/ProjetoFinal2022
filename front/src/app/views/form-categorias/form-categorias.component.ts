import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    this.mensagem = "";

    if(this.id) {
      this.botaoAcao= "Editar";      
    }
  }

  salvar() {
    if(!this.id) {
      this.categoriaApiService.inserir(this.categoria).subscribe(categoria => {
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