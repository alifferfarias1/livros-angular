import { Injectable } from '@angular/core';
import { Livro } from './livro'; // Certifique-se de ajustar o caminho conforme a estrutura do seu projeto

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro>;

  constructor() {
    // Inicialize o vetor livros com pelo menos três elementos no formato JSON
    this.livros = [
      { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor 1'] },
      { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor 2'] },
      { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor 3'] },
      // Adicione mais elementos conforme necessário
    ];
  }

  // Método para obter todos os livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // Método para incluir um novo livro
  incluir(novoLivro: Livro): void {
    // Encontrar o código mais alto no vetor de livros
    const novoCodigo = Math.max(...this.livros.map(livro => livro.codigo)) + 1;

    // Atribuir o novo código ao livro e adicioná-lo ao vetor
    novoLivro.codigo = novoCodigo;
    this.livros.push(novoLivro);
  }

  // Método para excluir um livro com base no código
  excluir(codigoLivro: number): void {
    // Encontrar o índice do livro com o código fornecido
    const index = this.livros.findIndex(livro => livro.codigo === codigoLivro);

    // Remover o livro usando splice
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}