import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{

  menuItems = [
    {linkId: 1, linkName: 'Home', linkUrl: '/'},
    {linkId: 2, linkName: 'Tasks', linkUrl: 'tasks'},
    {linkId: 3, linkName: 'Add Task', linkUrl: 'add'}
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

}
