import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent {

  // Expõe a propriedade para o seletor.
  // Se o nome da variável for diferente da propriedade, então coloca o nome da propriedade aqui
  // Dê preferência de usar o decorator do que colocar lá em cima.
  // @Input('nome') 
  nomeCurso: string = '';

}
