import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  name = 'Welcome fellow GitHub code-peeker';
  author = 'S-Kaminski';
  inputText: string;
  status: boolean;
  posts: object[];

  constructor(){
    console.log('[TEST]Constructor into log');
    this.getUserStatus();
    this.posts = [
      { title: 'Post1' },
      { title: 'Post2' },
      { title: 'Post3' },
      { title: 'Post4' },
      { title: 'Post5' }
    ];
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
  mouseOverBox(){
    console.log('Mouse is over the black box!');
  }
  keyDown(){
    console.log('Key down!');
  }
}