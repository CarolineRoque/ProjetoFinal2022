import { Component, OnInit } from '@angular/core';
import { Viagem } from '../../../app/viagem';
import { ViagemApiService } from '../../../app/viagem-api.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-viagem',
  templateUrl: './detalhe-viagem.component.html',
  styleUrls: ['./detalhe-viagem.component.scss']
})
export class DetalheViagemComponent implements OnInit {

  titulo = "Roteiro completo para um final de semana incrível";
  lista: Viagem[] = []
  id!: number;
  mensagem = "";
  viagem = new Viagem();


  constructor(private viagemApiService: ViagemApiService, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pegarId();
  }

  pegarId(){
    this.id = this.route.snapshot.params['id'];
    this.mensagem = "";
    if(this.id) {

    this.viagemApiService.buscarPorId(this.id).subscribe(data => {
      this.viagem= data
    })
  }
}
  voltar() {
    this.router.navigate(['/home']);
  }
}