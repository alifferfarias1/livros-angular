import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora'; // Importe a classe Editora
import { Livro } from '../livro'; // Importe a classe Livro

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
})
export class LivroListaComponent implements OnInit {
  editoras: Editora[] = []; // Defina o tipo explicitamente como Editora[]
  livros: Livro[] = []; // Defina o tipo explicitamente como Livro[]

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir(codigo: number): void {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome(codEditora: number): string {
    return this.servEditora.getNomeEditora(codEditora);
  }
}