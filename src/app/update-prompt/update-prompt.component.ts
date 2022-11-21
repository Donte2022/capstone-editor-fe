import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {ProcessService} from "../process.service";
import {PromptService} from "../prompt.service";
import {IStage} from "../interfaces/IStage";
import {IProcess} from "../interfaces/IProcess";
import {IPrompt} from "../interfaces/IPrompt";

@Component({
  selector: 'app-update-prompt',
  templateUrl: './update-prompt.component.html',
  styleUrls: ['./update-prompt.component.css']
})
export class UpdatePromptComponent implements OnInit {

  latestStageList!: IStage[];

  updatedStage = {
    id: "",
    stageTitle: "",
    endDate: "",
    startDate: "",
    description: ""
  };


  updatedProcess = {
    id: "",
    idOfTitle: "",
    process: "",
    prompt: ""
  };

  oldProcessInfo!: IPrompt[];

  constructor(private processService: ProcessService,
              private promptService: PromptService) {

    // @ts-ignore
    this.updatedProcess = this.promptService.editPrompt;

    // @ts-ignore
    this.latestStageList = this.processService.newStage;
  }

  ngOnInit(): void {
  }

  onCancel() {
    console.log("back to main")

    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(false);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
    this.processService.$isManagingProcess.next(true);
  }

  submitUpdatedProcess(updatedProcessData: IPrompt) {
    console.log("saving changes")
    console.log(updatedProcessData)
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(false);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
    this.processService.$isManagingProcess.next(true);
    this.promptService.updatePrompt(updatedProcessData);
  }
}