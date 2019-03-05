import { Component } from '@angular/core';
import {TreeviewItem} from "ngx-treeview";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  nodes = [
    {
      id: 1,
      name: 'Group 1',
      children: [
        { id: 11, name: 'Node 1' },
        { id: 12, name: 'Node 2' }
      ]
    },
    {
      id: 2,
      name: 'Group 2',
      children: [
        { id: 21, name: 'Node 3' },
        { id: 22, name: 'Node 4' }
      ]
    }
  ];
  options = {};

 constructor(){
 }

}
