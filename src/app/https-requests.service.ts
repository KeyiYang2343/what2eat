import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpsRequestsService {
  private readonly BASE_URL = environment.apiEndpoint;

  constructor(protected http: HttpClient) {}

  public getAvailableMaterials() {
  	return this.http.get<IMaterial[]>(`${this.BASE_URL}/available_materials/`)
  }

  public modifyMaterials(materials: IMaterial[]) {
  	return this.http.post<IMaterial[]> (`${this.BASE_URL}/add_new/`, materials)
  }

  public getMenus() {
  	return this.http.get<IMenu[]> (`${this.BASE_URL}/menus/`)
  }
}
