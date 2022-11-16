import { Component } from '@angular/core';
import {ProcessService} from "./process.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstone-editor-fe';

  isCreatingStage: boolean = false;
  isCreatingTitle: boolean = false;
  isCreatingProcess: boolean = false;
  isViewingMain: boolean = true;
  isUpdating: boolean = false;
  isReviewing: boolean = false;


  constructor(private processService: ProcessService) {

    this.processService.$isCreatingStage.subscribe(
        isCreatingStage => {
          this.isCreatingStage = isCreatingStage;
        });

    this.processService.$isCreatingTitle.subscribe(
        isCreatingTitle => {
          this.isCreatingTitle = isCreatingTitle;
        });

    this.processService.$isCreatingProcess.subscribe(
        isCreatingProcess => {
          this.isCreatingProcess = isCreatingProcess;
        });


    this.processService.$isViewingMain.subscribe(
        isViewingMain => {
          this.isViewingMain = isViewingMain;
        });

    this.processService.$isUpdating.subscribe(
        isUpdating => {
          this.isUpdating = isUpdating;
        });
      this.processService.$isReviewing.subscribe(
          isReviewing => {
              this.isReviewing = isReviewing;
          });


  }
}

