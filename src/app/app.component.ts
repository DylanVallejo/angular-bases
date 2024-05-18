import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app';
  public counter: number = 0;


  counterValue(value:number):void{
    console.log(value)
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
