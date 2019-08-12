import { Component } from '@angular/core';

@Component({
    selector: 'app-exampleManually',
    templateUrl: '<h1>Example component</h1>'
  })
export class ExampleManuallyComponent {
    title = 'Something something';
    constructor(){
        console.log('Nothing to see here');
      }
}