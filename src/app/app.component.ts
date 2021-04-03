import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  numero1:number=0;
  numero2:number=0;
  resultadoSuma:number=0;
  resultadoResta:number=0;
  resultadoMultiplicacion:number=0;
  resultadoDivision:number=0;

  sumar(event:Event):void{
    this.resultadoSuma=this.numero1+this.numero2;
  }
  restar(event:Event):void{
    this.resultadoResta=this.numero1-this.numero2;
  }
  multiplicar(event:Event):void{
    this.resultadoMultiplicacion=this.numero1*this.numero2;
  }
  dividir(event:Event):void{
    
      this.resultadoDivision=this.numero1/this.numero2;

  }

}
