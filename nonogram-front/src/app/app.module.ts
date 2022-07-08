import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NonogramTableComponent } from './nonogram-table/nonogram-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NonogramTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(title: Title) {
    title.setTitle("Solve nonograms!");
  }
}
