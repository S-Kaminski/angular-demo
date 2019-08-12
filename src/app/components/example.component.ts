import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    template: '<h1>Example component</h1>'
  })
export class ExampleComponent {
    title = 'Something something';
    constructor(){
        console.log('Nothing to see here.');
      }
}