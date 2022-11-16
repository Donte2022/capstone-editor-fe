import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../process.service";
import {NgForm} from "@angular/forms";
import {ITitle} from "../interfaces/ITitle";
import {IProcess} from "../interfaces/IProcess";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  // public stageInfo: ITitle = [{
  //   iD: iD,
  //   title: title,
  //   startDate: startDate,
  //   endDate: endDate,
  //   description: description
  // }];

  // public newStage: ITitle = [{
  //   iD: newStage.iD,
  //     title: title,
  //     startDate: startDate,
  //     endDate: endDate,
  //     description: description
  // }];

  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
  }

  generateStage(newStage:NgForm) {
    console.log("Generating Stage")
    console.log(newStage)
    // this.newStage = newStage;
    // console.log(this.stageInfo)
    this.processService.$isCreatingProcess.next(true);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(false);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);


  }

    stageTitle(newStage: NgForm) {
    console.log(newStage)
      this.processService.$isCreatingProcess.next(false);
      this.processService.$isUpdating.next(false);
      this.processService.$isViewingMain.next(true);
      this.processService.$isCreatingStage.next(false);
      this.processService.$isCreatingTitle.next(false);
    this.processService.newTitle(
        newStage.value as ITitle
    );

    }

  cancel() {
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(true);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
  }
}
