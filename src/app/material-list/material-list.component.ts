import { Component, OnInit, Input } from '@angular/core';
import { HttpsRequestsService } from '../https-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.less']
})
export class MaterialListComponent {
  @Input() materials: IMaterial[];
  list_title = '试一哈中文';

  constructor(private http_service: HttpsRequestsService, private router: Router) { 
  }

  ngOnInit() {
  	 this.http_service.getAvailableMaterials().subscribe(data => {
       this.materials=data;
       localStorage.setItem('current_material', JSON.stringify(data));
     })
  }

  refreshList() {
    this.materials = JSON.parse(localStorage.getItem('current_materials'));
  }

}
