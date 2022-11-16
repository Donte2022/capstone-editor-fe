import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../process.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
  }

    cancel() {
    console.log("canceling Stage")
      this.processService.$isCreatingProcess.next(false);
      this.processService.$isUpdating.next(false);
      this.processService.$isViewingMain.next(true);
      this.processService.$isCreatingStage.next(false);
      this.processService.$isCreatingTitle.next(false);

    }

  submit() {
    console.log("Submitting Stage")
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(true);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
  }
}
