import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../process.service";

@Component({
  selector: 'app-new-stage',
  templateUrl: './new-stage.component.html',
  styleUrls: ['./new-stage.component.css']
})
export class NewStageComponent implements OnInit {

  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
  }


  deleteStage() {

  }

    exitApp() {
      this.processService.$isCreatingProcess.next(false);
      this.processService.$isUpdating.next(false);
      this.processService.$isViewingMain.next(false);
      this.processService.$isCreatingStage.next(false);
      this.processService.$isCreatingTitle.next(false);
      this.processService.$isReviewing.next(false);
    }
}
