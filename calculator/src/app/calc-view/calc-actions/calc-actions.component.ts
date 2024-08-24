import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {
  @Input() primerValor: number | undefined;
  @Input() segundoValor: number | undefined;
  @Output() resultadoEmitido = new EventEmitter<string>();
  @Output() eventoBorrado = new EventEmitter<void>();

  sumar(){
    if(this.primerValor !== undefined && this.segundoValor !== undefined){
      let aux = Number(this.primerValor) + Number(this.segundoValor);
      this.resultadoEmitido.emit(aux.toString());
    }
  }

  restar(){
    if(this.primerValor !== undefined && this.segundoValor !== undefined){
      let aux = this.primerValor - this.segundoValor;
      this.resultadoEmitido.emit(aux.toString());
    }
  }

  multiplicar(){
    if(this.primerValor !== undefined && this.segundoValor !== undefined){
      let aux = this.primerValor * this.segundoValor;
      this.resultadoEmitido.emit(aux.toString());
    }
  }

  potenciar(){
    if(this.primerValor !== undefined && this.segundoValor !== undefined){
      let aux = Math.pow(this.primerValor, this.segundoValor);
      this.resultadoEmitido.emit(aux.toString());
    }
  }

  dividir(){
    if(this.primerValor !== undefined && this.segundoValor !== undefined){
      let aux = this.primerValor / this.segundoValor;
      this.resultadoEmitido.emit(aux.toString());
    }
  }

  borrar(){
    this.eventoBorrado.emit();
  }

}
