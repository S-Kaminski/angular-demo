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
  status: boolean;

  constructor(){
    console.log('[TEST]Constructor into log');
    this.getUserStatus();
  }
  displayAuthor(){
    return this.author;
  }
  getUserStatus(){
    this.status = true;
  }
  buttonClicked(){
    alert('Welcome' + name);
  }
}