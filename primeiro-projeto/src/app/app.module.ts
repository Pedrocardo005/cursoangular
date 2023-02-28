import { NgModule } from '@angular/core';
// Prepara a aplicação para rodar em um navegador
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

// Decorator que indica que é um module
@NgModule({
  // Coloca componentes, diretivas e pipes
  declarations: [
    AppComponent,
    // Depois de exportar o component, é preciso colocar aqui
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  // Outros módulos que serão usados ficam aqui
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Tudo declarado no export, poderá ser utilizado pelos componentes em declarations
    CursosModule
  ],
  // Serviços que serão vistos pelos modules ficam aqui dentro. Aqui é global
  providers: [],
  // Componente que será instanciado quando iniciar a aplicação. O principal. Só tem aqui
  bootstrap: [AppComponent]
})
export class AppModule { }
