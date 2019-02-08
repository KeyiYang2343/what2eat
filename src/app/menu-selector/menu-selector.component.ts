import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-selector',
  templateUrl: './menu-selector.component.html',
  styleUrls: ['./menu-selector.component.less']
})
export class MenuSelectorComponent {
  materials: IMaterial[];
  menus: IMenu[];
  
  constructor() { }

  ngOnInit() {
  }

}
