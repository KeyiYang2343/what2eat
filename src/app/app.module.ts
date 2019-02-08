import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpsRequestsService } from './https-requests.service';
import { MaterialInputBoxComponent } from './material-input-box/material-input-box.component';
import { MenuSelectorComponent } from './menu-selector/menu-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialListComponent,
    MaterialInputBoxComponent,
    MenuSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpsRequestsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
