import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Viagem } from '../viagem';
import { ViagemApiService } from '../viagem-api.service';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'form-viagens',
  templateUrl: './form-viagens.component.html',
  styleUrls: ['./form-viagens.component.css']
})
export class FormViagensComponent implements OnInit {
  id!: number;
  mensagem = "";
  viagem = new Viagem();
  botaoAcao = "Cadastrar";

  constructor(
    private viagemApiService: ViagemApiService,
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.mensagem = "";
    console.log("ID", this.id);
    if(this.id) {
      this.botaoAcao= "Editar";      
      console.log("Viagem", this.viagem);
    }
  }

  private estaInserindo() {
    return !this.id;
  }

  salvar() {
    if(this.estaInserindo()) {
      this.viagemApiService.inserir(this.viagem).subscribe(viagem => {
        console.log("Viagem Cadastrada", viagem);
        this.mensagem = this.viagem.nome_destino + " cadastrado com sucesso!";
        this.viagem = new Viagem();
      });

    }
    else {
      this.viagemApiService.editar(this.id, this.viagem);
      this.mensagem = this.viagem.nome_destino + " editado com sucesso!";

    }
  }

  cancelar() {
    //Ir para a rota '/tabela'
    this.router.navigate(['/tabela']);
  }
}
