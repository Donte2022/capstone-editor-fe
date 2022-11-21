import { Component, OnInit } from '@angular/core';
import * as Process from "process";
import {ProcessService} from "../process.service";
import {first} from "rxjs";
import {HttpService} from "../http.service";
import {ITitle} from "../interfaces/ITitle";
import {ICompete} from "../interfaces/ICompete";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  completedStageList!: ICompete[];

  constructor(private processService: ProcessService,
              private httpService: HttpService) {

    this.httpService.getCompletedStage()
        .pipe(first()).subscribe({
      next: (data) => {
        console.log(data)
        // @ts-ignore
        this.completedStageList = data;
        console.log(this.completedStageList)
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
  }

  mainMenu() {
    console.log("Back to main")
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(true);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
    this.processService.$isManagingProcess.next(false);
    this.processService.$isReviewing.next(false);
    this.processService.$isUpdatingPrompt.next(false);



  }
}
