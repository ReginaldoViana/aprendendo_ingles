import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Jogador } from '../shared/jogador.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class InicioComponent {
  @Output() iniciar = new EventEmitter<Jogador>();

  jogador: Jogador = {
    nome: '',
    quantidadePalavras: 5
  };

  iniciarJogo(): void {
    this.iniciar.emit(this.jogador);
  }
}
