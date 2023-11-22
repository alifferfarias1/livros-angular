import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LivroListaComponent } from '../app/livro-lista/livro-lista.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [AppComponent, LivroListaComponent],
  imports: [BrowserModule],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [LivroListaComponent],
  
})
export class AppModule {}