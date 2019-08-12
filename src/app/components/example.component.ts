import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    templateUrl: '<h1>Example component</h1>'
  })
export class ExampleComponent {
    title = 'Something something';
    constructor(){
        console.log('Welp...');
      }
}