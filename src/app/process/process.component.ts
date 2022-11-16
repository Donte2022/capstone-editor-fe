import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../process.service";

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {



    public people  =  [{}
    ];

  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
  }

  CreatePrompt() {
    console.log("creating prompt")

  }

  CreateProcess() {
    console.log("creating Process")

  }

  Cancel() {
    console.log("cancel Prompt")
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(true);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);

  }

  addInput() {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
    <br>
    <input type="text">`;
    // @ts-ignore
    document.querySelector('.showInputField').appendChild(row);
  }

  addRadio() {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
    <br>
    <input type="radio">`;
    // @ts-ignore
    document.querySelector('.showRadioField').appendChild(row);
  }

  addTextarea() {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
    <br>
    <textarea>`;
    // @ts-ignore
    document.querySelector('.showTextareaField').appendChild(row);
  }
}
