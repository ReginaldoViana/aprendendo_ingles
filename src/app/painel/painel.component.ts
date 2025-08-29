import { Component, OnInit, EventEmitter, Output, OnDestroy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Palavra } from '../shared/frase.model'
import { PALAVRAS } from './frases-mock'
import Swal from 'sweetalert2'
import { ProgressoComponent } from '../progresso/progresso.component';
import { TentativasComponent } from '../tentativas/tentativas.component';

@Component({
    selector: 'app-painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ProgressoComponent,
        TentativasComponent
    ]
})
export class PainelComponent implements OnInit, OnDestroy {

  @Input() quantidadePalavras: number = 5;
  
  public palavras: Palavra[] = [];
  public instrucao: string = 'Traduza a palavra:'
  public resposta: string = ''

  public rodada: number = 0
  public palavraAtual!: Palavra
  public progresso: number = 0
  public tentativas: number = 5

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
  }

  ngOnInit(): void {
    // Embaralha as palavras e pega apenas a quantidade selecionada
    this.palavras = PALAVRAS
      .sort(() => Math.random() - 0.5)
      .slice(0, this.quantidadePalavras);
    this.atualizaRodada();
  }

  ngOnDestroy(): void{}

  public atualizarResposta(resposta: Event):void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {
    if(this.palavraAtual.palavraPtbr.toLowerCase() === this.resposta.toLowerCase()) {
      // Troca a palavra
      this.rodada++

      // Barra de progresso
      this.progresso += (100 / this.palavras.length)

      // Caso de vitória
      if(this.rodada === this.palavras.length) {
        Swal.fire({
          title: 'Parabéns!',
          text: 'Você completou o jogo! 🎉',
          icon: 'success',
          confirmButtonText: 'Jogar novamente',
          confirmButtonColor: '#28a745',
          showConfirmButton: true,
          allowOutsideClick: false
        }).then(() => {
          this.encerrarJogo.emit('vitória')
        })
      } else {
        // Atualiza para próxima palavra
        this.atualizaRodada()
        Swal.fire({
          title: 'Parabéns!',
          text: 'Você acertou a palavra!',
          icon: 'success',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#28a745'
        })
      }
    } else {
      // Diminuir tentativas
      this.tentativas--

      if(this.tentativas === 0) {
        Swal.fire({
          title: 'Game Over!',
          text: 'Você perdeu todas as tentativas.',
          icon: 'error',
          confirmButtonText: 'Tentar novamente',
          confirmButtonColor: '#dc3545',
          showConfirmButton: true,
          allowOutsideClick: false
        }).then(() => {
          this.encerrarJogo.emit('derrota')
        })
      } else {
        Swal.fire({
          title: 'Ops!',
          text: `Palavra incorreta! Você ainda tem ${this.tentativas} tentativa${this.tentativas === 1 ? '' : 's'}`,
          icon: 'error',
          confirmButtonText: 'Tentar novamente',
          confirmButtonColor: '#dc3545'
        })
      }
    }
  }

  public atualizaRodada(): void {
    // Define a palavra da rodada
    this.palavraAtual = this.palavras[this.rodada]

    // Limpar campo de texto
    this.resposta = ''
  }

}
