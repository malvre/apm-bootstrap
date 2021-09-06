import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoEdicaoComponent } from './produto-edicao/produto-edicao.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
  {
    path: 'lista',
    component: ProdutoListaComponent,
  },
  {
    path: 'novo',
    component: ProdutoEdicaoComponent,
  },
  {
    path: 'editar/:id',
    component: ProdutoEdicaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
