import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Viagem } from '../../../app/viagem';
import { ViagemApiService } from '../../../app/viagem-api.service';

@Component({
  selector: 'app-viagens',
  templateUrl: './form-viagens.component.html',
  styleUrls: ['./form-viagens.component.scss']
})

export class FormViagensComponent  implements OnInit {
    id!: number;
    mensagem = "";
    viagem = new Viagem();
    botaoAcao = "Salvar";

    selecionarLista: Array <any> = []

    constructor(
      private viagemApiService: ViagemApiService,
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient
    ) { }
  
    ngOnInit(): void {
      this.listar();

      this.id = this.route.snapshot.params['id'];
      this.mensagem = "";
      console.log(this.route.snapshot.params['id']);
      if(this.id) {

      this.viagemApiService.buscarPorId(this.id).subscribe(data => {
        const categoria = this.selecionarLista.find(categoria => categoria._id === data.nomeCategoria);
        this.viagem= data
        this.viagem.categoria = categoria.nomeCategoria
        console.log("Viag33", this.viagem)
      })

      this.botaoAcao= "Editar";      
      console.log("Viagem", this.viagem);
      }
    }
    listar() {
      this.http.get<any>('http://localhost:3000/categoria/').subscribe(data => {
        console.log(data)
        for( let item in data ){
          this.selecionarLista.push(data[item])
        } 
      })
    }

    private estaInserindo() {
      return !this.id;
    }
  
    salvar() {
      if(this.estaInserindo()) {
        this.viagemApiService.inserir(this.viagem).subscribe(viagem => {
          console.log("Viagem Cadastrada", viagem);
          this.mensagem = this.viagem.nome_destino, 
          this.viagem.dia_primeiro_dia,
          this.viagem.noite_primeiro_dia,
          this.viagem.dia_segundo_dia,
          this.viagem.noite_segundo_dia,
          this.viagem.local_hospedagem,
          this.viagem.gasto_total,
          this.viagem.foto_destino1,
          this.viagem.nomeCategoria
          + " cadastrado com sucesso!";
          this.viagem = new Viagem();
        });
  
      }
      else {
        console.log("Select lista Viagem", this.viagem)
        this.viagemApiService.editar(this.id, this.viagem).subscribe(viagem => {
        this.mensagem = this.viagem.nome_destino,
       this.viagem.dia_primeiro_dia,
          this.viagem.noite_primeiro_dia,
          this.viagem.dia_segundo_dia,
          this.viagem.noite_segundo_dia,
          this.viagem.local_hospedagem,
          this.viagem.gasto_total,
          this.viagem.foto_destino1,
          this.viagem.nomeCategoria
         + " editado com sucesso!";
        });
        this.router.navigate(['/tabela']);
      }
    }
  
    cancelar() {
      this.router.navigate(['/tabela']);
    }
  }