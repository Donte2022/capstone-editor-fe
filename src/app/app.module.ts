import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProcessComponent } from './process/process.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProcessDisplayComponent } from './process-display/process-display.component';
import { MainComponent } from './main/main.component';
import { TitleComponent } from './title/title.component';
import { SummaryComponent } from './summary/summary.component';
import { ResultsComponent } from './results/results.component';
import { UpdateComponent } from './update/update.component';
import { NewStageComponent } from './new-stage/new-stage.component';
import { PromptComponent } from './prompt/prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessComponent,
    ProcessDisplayComponent,
    MainComponent,
    TitleComponent,
    SummaryComponent,
    ResultsComponent,
    UpdateComponent,
    NewStageComponent,
    PromptComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
