import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
  }
  title = 'angular-demo';
  name = 'Welcome fellow GitHub code-peeker';
  author = 'S-Kaminski';
  inputText: string;
  status: boolean;
  posts: object[];
  user = {
    username: '',
    password: ''
  };

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
  onSubmit(form1: NgForm){
    alert('Submitted');
    this.user.username = form1.value.username;
    this.user.password = form1.value.password
    console.log('Username: ' + this.user.username);
    console.log('Password: ' + this. user.password);
    console.log(this.user);
  }
}