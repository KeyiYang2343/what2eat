import { Component, OnInit } from '@angular/core';
import { HttpsRequestsService } from '../https-requests.service';

@Component({
  selector: 'app-material-input-box',
  templateUrl: './material-input-box.component.html',
  styleUrls: ['./material-input-box.component.less']
})
export class MaterialInputBoxComponent implements OnInit {
  
  to_send: IMaterial[];
  materials: IMaterial[];

  constructor(private http_service: HttpsRequestsService) { }

  ngOnInit() {
  }

  OnSubmit(uName: string, uAmount: number) {
    if (!uAmount) {
      alert("请输入数量");
    } else if (!uName) {
      alert("请输入名称");
    } else {
      this.to_send = [{name: uName, amount: uAmount}];
      console.log("call api");
      console.log(this.to_send);
      this.http_service.modifyMaterials(this.to_send).subscribe((data: IMaterial[]) => {
        localStorage.setItem('current_material', JSON.stringify(data));
        console.log(data);
        this.materials = data;
      });
    }
  }

}
