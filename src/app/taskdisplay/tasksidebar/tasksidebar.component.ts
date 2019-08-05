import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasksidebar',
  templateUrl: './tasksidebar.component.html',
  styleUrls: ['./tasksidebar.component.css']
})
export class TasksidebarComponent implements OnInit {

@Input() categoryName:string="";
@Output() shivu=new EventEmitter();

  constructor() { }

  ngOnInit() 
  {
    
  }

  onSearchTask(searchTerm){
    this.shivu.emit(searchTerm);
}
}
