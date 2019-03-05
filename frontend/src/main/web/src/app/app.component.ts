import { Component } from '@angular/core';
import {TreeviewItem} from "ngx-treeview";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  treeConfig = {
    hasAllCheckBox: false,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
  };

  treeMenu = new TreeviewItem({
    text: 'Offerings', value: 1, children: [
      {
        text: 'Group 1', value: 11, children: [
          { text: 'Node 1', value: 111 },
          { text: 'Node 2', value: 112 }
        ]
      },
      {
        text: 'Group 2', value: 12, children: [
          { text: 'Node 3', value: 121 },
          { text: 'Node 4', value: 122 }
        ]
      }
    ]
  });
}
