import { Component, OnInit } from '@angular/core';
import * as Process from "process";
import {ProcessService} from "../process.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
  }

  mainMenu() {
    console.log("Back to main")
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(true);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
  }
}
