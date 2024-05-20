import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";


// para que una clase sea un modulo agregamos el decorador module
@NgModule({
  declarations: [
    CounterComponent
  ],
  // el no exportar el modulo nos permitira utilizarlo solo en un scope exportarlo
  // nos permite usarlo globalmente
  exports: [
    CounterComponent
  ]

})
export class CounterModule {}
