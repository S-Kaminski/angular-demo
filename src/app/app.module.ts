import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example.component';
import { Example2Component } from './components/exampleCLI/example2/example2.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    Example2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
