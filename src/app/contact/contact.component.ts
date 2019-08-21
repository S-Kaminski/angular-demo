import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  posts: object;

  constructor(private http: HttpClient) { } 

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;
    });
  }

}
