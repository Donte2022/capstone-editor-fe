import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProcessComponent } from './process/process.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProcessDisplayComponent } from './process-display/process-display.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessComponent,
    ProcessDisplayComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
