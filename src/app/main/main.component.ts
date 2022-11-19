import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../process.service";
import {PromptService} from "../prompt.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  createFailMessage: string | null = null;
  createSuccessMessage: string | null = null;
  deleteFailMessage: string | null = null;
  deleteSuccessMessage: string | null = null;
  updateFailMessage: string | null = null;
  updateSuccessMessage: string | null = null;

  onDestroy = new Subject();

  constructor(private processService: ProcessService,
              private promptService: PromptService) {

    this.processService.$createThisStageError.pipe(takeUntil(this.onDestroy)).subscribe(
        createFailMessage => this.createFailMessage = createFailMessage);

    this.processService.$createThisStageSuccess.pipe(takeUntil(this.onDestroy)).subscribe(
        createSuccessMessage => this.createSuccessMessage = createSuccessMessage);

    this.processService.$deleteThisStageError.pipe(takeUntil(this.onDestroy)).subscribe(
        deleteFailMessage => this.deleteFailMessage = deleteFailMessage);

    this.processService.$deleteThisStageSuccess.pipe(takeUntil(this.onDestroy)).subscribe(
        deleteSuccessMessage => this.deleteSuccessMessage = deleteSuccessMessage);

    this.processService.$updateThisStageError.pipe(takeUntil(this.onDestroy)).subscribe(
        deleteIdFail => this.updateFailMessage = deleteIdFail);

    this.processService.$updateThisStageSuccess.pipe(takeUntil(this.onDestroy)).subscribe(
        deleteIdSuccess => this.updateSuccessMessage = deleteIdSuccess);

    this.processService.$updateThisStageSuccess.pipe(takeUntil(this.onDestroy)).subscribe(
        deleteIdSuccess => this.updateSuccessMessage = deleteIdSuccess);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }


    createStage() {
      this.processService.$isCreatingProcess.next(false);
      this.processService.$isUpdating.next(false);
      this.processService.$isViewingMain.next(false);
      this.processService.$isCreatingStage.next(false);
      this.processService.$isCreatingTitle.next(true);

    }
}
