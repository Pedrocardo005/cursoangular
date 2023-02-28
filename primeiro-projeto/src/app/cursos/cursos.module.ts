import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [
    // Aqui que coloca o componente
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    // Contém as partes mais comuns para o angular2
    CommonModule
  ],
  // Diz quais são as coisas a serem expostas
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
