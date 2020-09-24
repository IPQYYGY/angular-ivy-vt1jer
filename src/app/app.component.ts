import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    dateFormat = 'yyyy/MM/dd';
 
  /**
   * 表格数据
   */
  listOfData = [
    {
      id: `1`,
      name: `卷毛`,
      age: '18',
      address: `London, Park Lane no`,
    },
    {
      id: `2`,
      name: `卷毛2`,
      age: '18',
      address: `London, Park Lane no`,
    },
  ];
}
