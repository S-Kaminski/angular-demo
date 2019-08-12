import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamplemanuallyComponent } from './components/exampleManually.component';
import { ExampleComponent } from './components/cliExample/example/example.component'

@NgModule({
  declarations: [
    AppComponent,
    ExamplemanuallyComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
