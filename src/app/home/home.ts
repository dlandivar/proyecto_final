import { Component, OnInit } from '@angular/core';
import { forumPost } from '../app';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForumsService } from '../forums.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(private forumService: ForumsService) { }

  forum: forumPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  
  forums: forumPost[] = [];

  ngOnInit() {
    // Initialize the forums array or fetch it from a service
    this.forumService.getForums().subscribe(data => {
      this.forums = data;
      console.log('Forums loaded:', data);
    });
    console.log('algo');
  }

  

  onSubmit(forum: forumPost) {
    console.log('Form submitted:', forum);
    forum.userId = 1; // Assuming a static userId for this example  
    forum.id = this.forums.length + 1; // Simple ID generation for example purposes
    this.forumService.addForum(forum).subscribe(newForum => {
      this.forums.unshift(newForum);
      console.log('New forum added:', newForum);
    });
  } 
}
