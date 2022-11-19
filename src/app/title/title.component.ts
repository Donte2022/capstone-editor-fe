import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../process.service";
import {NgForm} from "@angular/forms";
import {ITitle} from "../interfaces/ITitle";
import {IProcess} from "../interfaces/IProcess";
import {IStage} from "../interfaces/IStage";

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

    createStage(newStage: NgForm) {
    console.log(newStage)
    console.log("saving info")
      this.processService.$isCreatingProcess.next(false);
      this.processService.$isUpdating.next(false);
      this.processService.$isViewingMain.next(true);
      this.processService.$isCreatingStage.next(false);
      this.processService.$isCreatingTitle.next(false);
    this.processService.createStage(
        newStage.value as IStage
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
