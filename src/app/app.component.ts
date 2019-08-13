import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  name = 'fellow GitHub code-peeker';
  author = 'S-Kaminski';
  inputText: string;
  status: boolean;

  constructor(){
    console.log('[TEST]Constructor into log');
    this.getUserStatus();
  }
  displayAuthor(){
    return this.author;
  }
  getUserStatus(){
    this.status = false;
  }
  buttonClicked(){
    alert('Welcome' + name);
  }
  mouseOverBox(){
    console.log('Mouse is over the black box!');
  }
  keyDown(){
    console.log('Key down!');
  }
}