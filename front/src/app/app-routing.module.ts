import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { FormViagensComponent } from './views/form-viagens/form-viagens.component';
import { TabelaViagensComponent } from './views/tabela-viagens/tabela-viagens.component';
import { FormCategoriasComponent } from './views/form-categorias/form-categorias.component';
import { TabelaCategoriasComponent } from './views/tabela-categorias/tabela-categorias.component';
import { DetalheViagemComponent } from './views/detalhe-viagem/detalhe-viagem.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      { path: 'tabela', component: TabelaViagensComponent },
      { path: 'novo',  component: FormViagensComponent },
      { path: 'edit/:id', component: FormViagensComponent},
      { path: 'tabelaCategoria', component: TabelaCategoriasComponent },
      { path: 'novaCategoria',  component: FormCategoriasComponent },
      { path: 'editCategoria/:id', component: FormCategoriasComponent},
      { path: 'detalheViagem/:id', component: DetalheViagemComponent},
      {
        path: 'home',
        loadChildren: () =>
          import('./views/home/home.module').then((m) => m.HomeModule)
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
