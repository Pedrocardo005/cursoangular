
// Criamos a pasta e o arquivo
// component indica que é um componente
// Classe segue o cammelcase

// Pega da pasta angular a pasta core lá do node_modules
import { Component } from "@angular/core";

// Serve para indicar que é um componente
@Component({
    // Vai ser o nome da tag
    selector: 'meu-primeiro-component',
    // Com crase vira uma string gigante
    // É o que vai sair na tela
    template: `
        <p>Meu primeiro component com Angular 2!</p>
    `
})
export class MeuPrimeiroComponent {}