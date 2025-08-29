import { Component } from '@angular/core';
import { Jogador } from './shared/jogador.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { PainelComponent } from './painel/painel.component';
import { TopoComponent } from './topo/topo.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        InicioComponent,
        PainelComponent,
        TopoComponent
    ]
})
export class AppComponent {
  public jogoEmAndamento: boolean = false
  public tipoEncerramento: string = ''
  public jogador?: Jogador
  public jogoIniciado: boolean = false
  
  public iniciarJogo(jogador: Jogador): void {
    this.jogador = jogador;
    this.jogoIniciado = true;
    this.jogoEmAndamento = true;
    this.tipoEncerramento = '';
  }

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;
  }

  public reiniciarJogo(): void {
    this.jogoIniciado = false;
    this.jogoEmAndamento = false;
    this.tipoEncerramento = '';
    this.jogador = undefined;
  }

}