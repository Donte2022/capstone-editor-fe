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


  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
  }

  generateStage(newStage:NgForm) {

    this.processService.$isCreatingProcess.next(true);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(false);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
  }

    createStage(newStage: NgForm) {
      this.processService.$isCreatingProcess.next(false);
      this.processService.$isUpdating.next(false);
      this.processService.$isViewingMain.next(true);
      this.processService.$isCreatingStage.next(false);
      this.processService.$isCreatingTitle.next(false);
    this.processService.createStage(newStage.value as IStage);
    }

  cancel() {
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(true);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
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
