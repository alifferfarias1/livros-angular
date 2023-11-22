import { Injectable } from '@angular/core';
import { Editora } from './editora'; // Certifique-se de ajustar o caminho conforme a estrutura do seu projeto

@Injectable({
  providedIn: 'root'
})
// controle-editora.service.ts

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Array<Editora>;

  constructor() {
    // Inicialize o vetor editoras com pelo menos três elementos no formato JSON
    this.editoras = [
      { codEditora: 1, nome: 'Editora A' },
      { codEditora: 2, nome: 'Editora B' },
      { codEditora: 3, nome: 'Editora C' },
      // Adicione mais elementos conforme necessário
    ];
  }

  // Método para obter todas as editoras
  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  // Método para obter o nome da editora com base no código da editora
  getNomeEditora(codEditora: number): string {
    const editoraEncontrada = this.editoras.find((e) => e.codEditora === codEditora);

    // Verifique se a editora foi encontrada
    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    } else {
      // Retorne uma string indicando que a editora não foi encontrada
      return 'Editora não encontrada';
    }
  }}