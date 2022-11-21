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
              private promptService: PromptService) { }

  ngOnInit(): void {
    // this.stageForm = new FormGroup({
    //   stageTitle: new FormGroup(null),
    //   startDate: new FormGroup(null),
    //   endDate: new FormGroup(null),
    //   description: new FormGroup(null),
    //   process: new FormGroup(null),
    //   prompt: new FormGroup(null),
    //   prompt2: new FormGroup(null)
    //
    // });
  }

  //   this.stageForm = new FormGroup<IProcess>()
  // }
  prompt: String ="";
  prompt2: String ="";
  prompt3: String ="";

  CreatePrompt() {
    console.log("creating prompt")

  }

  CreateProcess() {
    console.log("creating Process")

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

  addRadio() {
    let row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
    <br>
    <div>
    <div>
    <span> Prompt text #1: </span>
    <input type="text">
    </div>
    <input type="radio">
    </div>
    <br>
    <div>
    <div>
    <span> Prompt text #2: </span>
    <input type="text">
    </div>
    <input type="radio">
    </div>`;

    // @ts-ignore
    document.querySelector('.showRadioField').appendChild(row);
  }

  savePrompt(createPrompt: NgForm) {
    console.log("saving")
    console.log(createPrompt)
    this.promptService.createPrompt(
        createPrompt.value as IPrompt)

  }

  addMultiple() {

    let row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
    <br>
    
    <div>
    <div>
    <span class="input-group-text" id="basic-addon02"> Prompt Multiple text #1: </span>
    <input ngModel name="prompt" class="form-control" aria-label="prompt" type="text">
    </div>
    
    <input type="radio">
    </div>
    <br>
    
    <div>
    <div>
    <span class="input-group-text" id="basic-addon01"> Prompt Multiple text #2: </span>
    <input ngModel name="prompt" class="form-control" aria-label="prompt" type="text">
    </div>
    
    <input type="radio">
    <div>
    <br>
    
    <div>
    <div>
    <span> Prompt Multiple text #3: </span>
    <input type="text">
    </div>
    
    <input type="radio">
    </div>
    <br>
    
    <div>
    <div>
    <span> Prompt Multiple text #4: </span>
    <input type="text">
    </div>
    
    <input type="radio">
    </div>
    </div>`;
    // @ts-ignore
    document.querySelector('.showMultiField').appendChild(row);
  }

  deleteProcess() {
    console.log("deleting something")

  }

  // updateProcess() {
  //   console.log("updating prompt")
  //   console.log(updateThisPropmt)
  //   this.
  //
  // }
}
