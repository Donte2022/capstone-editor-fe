import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ProcessComponent } from './process/process.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProcessDisplayComponent } from './process-display/process-display.component';
import { MainComponent } from './main/main.component';
import { TitleComponent } from './title/title.component';
import { SummaryComponent } from './summary/summary.component';
import { ResultsComponent } from './results/results.component';
import { UpdateComponent } from './updateStage/update.component';
import { NewStageComponent } from './new-stage/new-stage.component';
import { PromptComponent } from './prompt/prompt.component';
import { UpdatePromptComponent } from './update-prompt/update-prompt.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    PromptComponent,
    UpdatePromptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      CommonModule,
      HttpClientModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
