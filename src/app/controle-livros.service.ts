// controle-livros.service.ts
import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    new Livro(1, 1, 'Livro 1', 'Resumo do Livro 1', ['Autor 1', 'Autor 2']),
    new Livro(2, 2, 'Livro 2', 'Resumo do Livro 2', ['Autor 3', 'Autor 4']),
    new Livro(3, 3, 'Livro 3', 'Resumo do Livro 3', ['Autor 5']),
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = Math.max(...this.livros.map(l => l.codigo), 0) + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
