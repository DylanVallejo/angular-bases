import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app';
  public counter: number = 0;


  sum(event?: MouseEvent){
    this.counter += 1
  }

  reset(event?: MouseEvent){
    this.counter = 0;
  }

  rest(event?: MouseEvent){
    this.counter -= 1
  }

}
