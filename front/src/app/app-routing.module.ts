import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabelaViagensComponent } from './tabela-viagens/tabela-viagens.component';
import { FormViagensComponent } from './form-viagens/form-viagens.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const rotas: Routes = [
  { path: 'tabela', component: TabelaViagensComponent },
  { path: 'novo', component: FormViagensComponent },
  { path: 'edit/:id', component: FormViagensComponent},
  { path: '', redirectTo: '/tabela', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
