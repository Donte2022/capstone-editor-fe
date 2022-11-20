import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {ProcessService} from "../process.service";
import {ITitle} from "../interfaces/ITitle";
import {IProcess} from "../interfaces/IProcess";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    // @ts-ignore
    updatedStage = {
        id: "",
        stageTitle: "",
        endDate: "",
        startDate: "",
        description: ""};

  constructor(private httpService: HttpService,
              private processService: ProcessService) {
    // @ts-ignore
      this.updatedStage = this.processService.newStage;
  }

  ngOnInit(): void {
  }

    cancel() {
        this.processService.$isCreatingProcess.next(false);
        this.processService.$isUpdating.next(false);
        this.processService.$isViewingMain.next(true);
        this.processService.$isCreatingStage.next(false);
        this.processService.$isCreatingTitle.next(false);

    }

    submitUpdateStage(updatedStageData: IProcess) {
      console.log("sending update")
        console.log(updatedStageData)
        this.processService.$isCreatingProcess.next(false);
        this.processService.$isUpdating.next(false);
        this.processService.$isViewingMain.next(true);
        this.processService.$isCreatingStage.next(false);
        this.processService.$isCreatingTitle.next(false);
        this.processService.$isUpdatingPrompt.next(false);
        this.processService.updateStage(updatedStageData);

    }
}

