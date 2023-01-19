import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FetchServiceService} from './fetch-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BdayDisplayComponent } from './bday-display/bday-display.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    BdayDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
