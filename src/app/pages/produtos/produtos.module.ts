import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoEdicaoComponent } from './produto-edicao/produto-edicao.component';


@NgModule({
  declarations: [
    ProdutoListaComponent,
    ProdutoEdicaoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
