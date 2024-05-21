import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/components/counter/counter.component';
// import { HeroComponent } from './heroes/components/hero/hero.component';
// import { ListComponent } from './heroes/components/list/list.component';
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/components/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // HeroComponent,
    // ListComponent
  ],
  // lso Module van en los import
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
