import { Component, OnInit } from '@angular/core';
import { HttpsRequestsService } from '../https-requests.service';

@Component({
  selector: 'app-material-input-box',
  templateUrl: './material-input-box.component.html',
  styleUrls: ['./material-input-box.component.less']
})
export class MaterialInputBoxComponent implements OnInit {
  
  to_send: IMaterial[];
  materials: IMaterial[]=JSON.parse(localStorage.getItem('current_material'));
  SelectedMaterial: string;
  uAmount: number;
  uMaterial: string;

  constructor(private http_service: HttpsRequestsService) { }

  ngOnInit() {
  }

  OnSubmit() {
    if (!this.uAmount) {
      alert("请输入数量");
    } else if (!this.SelectedMaterial) {
      if (!this.uMaterial) {alert("请输入名称");}
      else {this.to_send = [{name: this.uMaterial, amount: this.uAmount}];}
    } else {
      this.to_send = [{name: this.SelectedMaterial, amount: this.uAmount}];
    }
    if (this.to_send) {
      console.log("call api");
      console.log(this.to_send);
      this.http_service.modifyMaterials(this.to_send).subscribe((data: IMaterial[]) => {
        localStorage.setItem('current_material', JSON.stringify(data));
        console.log(data);
        this.materials = data;
      });
      this.to_send = undefined;
    }
  }

}
