import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleManuallyComponent } from './components/exampleManually.component';
import { ExampleComponent } from './components/cliExample/example/example.component'

@NgModule({
  declarations: [
    AppComponent,
    ExampleManuallyComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
