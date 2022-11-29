import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../process.service";
import {IProcess} from "../interfaces/IProcess";
import {FormGroup, NgForm} from "@angular/forms";
import {PromptService} from "../prompt.service";
import {ITitle} from "../interfaces/ITitle";
import {IPrompt} from "../interfaces/IPrompt";

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  title = "stageForm"
  // stageForm!: FormGroup;

  // public people: IProcess =  [{
  //   "iD": iD,
  //   "startDate": startDate,
  //   "endDate":endDate,
  //   "title": title,
  //   "prompt": prompt
  // }
  // ];
  // public textarea = {};

  constructor(private processService: ProcessService,
              private promptService: PromptService) {
  }

  ngOnInit(): void {

  }

  booleanPrompt: String = "";
  booleanPrompt2: String = "";
  multipleChoicePrompt: String = "";
  multipleChoicePrompt2: String = "";
  multipleChoicePrompt3: String = "";
  multipleChoicePrompt4: String = "";

  showTrueFalse = false;
  showMultiple = false;

  CreatePrompt() {
    console.log("creating prompt")

  }

  CreateProcess() {
    console.log("creating Process")

  }

  toggleMultipleChoice() {
    console.log("showing Multiple choice")
    this.showMultiple = true;
    this.showTrueFalse = false;
    this.multipleChoicePrompt = "";
    this.multipleChoicePrompt2 = "";
    this.multipleChoicePrompt3 = "";
    this.multipleChoicePrompt4 = "";
  }

  toggleTrueFalse() {
    this.showTrueFalse = true;
    this.showMultiple = false;
    this.booleanPrompt = "";
    this.booleanPrompt2 = "";
  }


  Cancel() {
    console.log("cancel Prompt")
    console.log("going back to process management page")
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(false);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
    this.processService.$isManagingProcess.next(true);
    this.processService.$isReviewing.next(false);
    this.processService.$isUpdatingPrompt.next(false);
  }

  savePrompt(createPrompt: NgForm) {
    console.log("saving")
    console.log(createPrompt)
    this.promptService.createPrompt(
        createPrompt.value as IPrompt)
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(false);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
    this.processService.$isUpdatingPrompt.next(false);
    this.processService.$isReviewing.next(false);
    this.processService.$isManagingProcess.next(true);
  }

  deleteProcess() {
    console.log("deleting something")

  }
}
