import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  // Toda vairável precisa ser inicializada
  nomePortal: string;

  cursos: string[];

  // Faz a injeção de dependência no construtor
  // Ao fazer isso, a cursosService vira um atributo da classe do componente
  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';

    // Injeção de dependência o angular instancia pra gente usar a classe sem a gente 
    // precisar fazer a instanciação
    // var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();
  }
}
