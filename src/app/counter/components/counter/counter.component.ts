// import { Component } from "@angular/core";


// @Component({
//   selector: 'app-counter',
//   template: `<h1> Hola Counter </h1>`,

// })
// export class CounterComponent {
//   // templateUrl: './counter.component.html',
//   // styleUrl: ''
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1> Hola Counter </h1>
    <h3>Counter: {{counter}} </h3>
<button type="button" (click)="counterValue(1)" >+</button>
<button  type="button" (click)="reset()">Reset</button>
<button  type="button" (click)="counterValue(-1)">-</button>

  `
})

export class CounterComponent  {
  constructor() { }
  public counter: number = 0;


  counterValue(value:number):void{
    // if(this.counter >= 0){
      this.counter += value;
    // }else if(this.counter === 0 ){
      // alert("No puedes restar mas.")
    // }else{
      // this.counter -= value
    // }
  }

  // sum(value:number):void{
  //   this.counter += value
  // }

  reset():void{
    this.counter = 0;
  }

  // rest(value:number):void{
  //   if(this.counter === 0){
  //     alert("No puedes restar mas.")

  //   }else{
  //     this.counter -= value
  //   }
  // }


}
