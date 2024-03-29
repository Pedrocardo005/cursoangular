import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // Pode usar desse jeito ao invés de colocar o decorator, mas loiane recomendou o decorator
  // pois facilita a leitura
  // outputs: ['mudouValor']
})
export class OutputPropertyComponent {

  @Input() valor: number = 0;

  // Um evento foi criado
  // O decorator faz com que o evento possa ser exposto
  @Output() mudouValor = new EventEmitter();

  // Associa a variável do template e do input
  @ViewChild('campoInput')
  campoValorInput!: ElementRef;

  incrementa(){    
    this.campoValorInput.nativeElement.value++;
    // Dispara o evento e passa um valor
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
