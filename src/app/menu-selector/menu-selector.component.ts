import { Component, OnInit } from '@angular/core';
import { HttpsRequestsService } from '../https-requests.service';


@Component({
  selector: 'app-menu-selector',
  templateUrl: './menu-selector.component.html',
  styleUrls: ['./menu-selector.component.less']
})
export class MenuSelectorComponent {
  materials: IMaterial[];
  menus: IMenu[];

  constructor(private httpsRequestsService: HttpsRequestsService) { }

  ngOnInit() {
  	this.httpsRequestsService.getMenus().subscribe( data => {
  		this.menus = data;
  	});
  }

}
