import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalcActionsComponent } from './calc-actions/calc-actions.component';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CommonModule, FormsModule, CalcActionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  primerValor: number | undefined;
  segundoValor: number | undefined;
  resultado: string = "";

  onPrimerValorChange(event: any){
    this.primerValor = event.target.value;
  }

  onSegundoValorChange(event: any){
    this.segundoValor = event.target.value;
  }

  mostrarResultado(resultado: string){
    this.resultado = resultado;
  }

  borrar(){
    this.primerValor = undefined;
    this.segundoValor = undefined;
    this.resultado = "";
  }
}
