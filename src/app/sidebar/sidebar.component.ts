import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

@Input() categoryName:string="";
@Output() shivu=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSearchClick(searchTerm)
  {
    //console.log("child:"+searchTerm);
    this.shivu.emit(searchTerm);
  }

}
