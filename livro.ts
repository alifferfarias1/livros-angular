import { Editora } from './editora'; // Importando a classe Editora

export class Livro {
  // Definindo os campos da classe
  public codigo: number;
  public codEditora: number;
  public titulo: string;
  public resumo: string;
  public autores: string[];

  // Construtor da classe
  constructor(
    codigo: number,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[]
  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }}
