import { Component } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {
  num1=0
  num2=0
  resul=0
  operacion="ninguna"

  Sumar(num1:number, num2:number){
    num1+num2
  }
}
