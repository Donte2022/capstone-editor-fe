import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {first, Subject, takeUntil} from "rxjs";
import {IProcess} from "../interfaces/IProcess";
import {IPrompt} from "../interfaces/IPrompt";
import {ProcessService} from "../process.service";
import {PromptService} from "../prompt.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

  latestPromptList!: IPrompt[];
  latestStageList!: IProcess[];

  deletePromptErrorMessage: string | null = null;
  deletePromptSuccessMessage: string | null = null;
  updatePromptErrorMessage: string | null = null;
  updatePromptSuccessMessage: string | null = null;
  createPromptErrorMessage: string | null = null;
  createPromptSuccessMessage: string | null = null;

  onDestroy = new Subject();
  stageID: number| undefined;


  constructor(private httpService: HttpService,
              private promptService: PromptService,
              private processService: ProcessService) {


    this.promptService.$deleteThisStageError.pipe(takeUntil(this.onDestroy)).subscribe(
        deletePromptErrorMessage => this.deletePromptErrorMessage = deletePromptErrorMessage);

    this.promptService.$deleteThisStageSuccess.pipe(takeUntil(this.onDestroy)).subscribe(
        deletePromptSuccessMessage => this.deletePromptSuccessMessage = deletePromptSuccessMessage);

    this.promptService.$updateThisPromptError.pipe(takeUntil(this.onDestroy)).subscribe(
        updatePromptErrorMessage => this.updatePromptErrorMessage = updatePromptErrorMessage);

    this.promptService.$updateThisPromptSuccess.pipe(takeUntil(this.onDestroy)).subscribe(
        updatePromptSuccessMessage => this.updatePromptSuccessMessage = updatePromptSuccessMessage);

    this.promptService.$createThisPromptError.pipe(takeUntil(this.onDestroy)).subscribe(
        createPromptErrorMessage => this.createPromptErrorMessage = createPromptErrorMessage);

    this.promptService.$createThisPromptSuccess.pipe(takeUntil(this.onDestroy)).subscribe(
        createPromptSuccessMessage => this.createPromptSuccessMessage = createPromptSuccessMessage);



    this.httpService.getPrompt()
        .pipe(first()).subscribe({
      next: (data) => {
        console.log(data)
        // @ts-ignore
        this.latestPromptList = data;
        console.log(this.latestPromptList)
      },
      error: (err) => {
        console.log(err)
      }
    })

    this.httpService.getStages()
        .pipe(first()).subscribe({
      next: (data) => {
        console.log(data)
        // @ts-ignore
        this.latestStageList = data;
        console.log(this.latestStageList)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
  }

  deletePrompt(id: number) {
    console.log(id)
    this.promptService.deletePrompt(id);

  }

  ngOnDestroy(): void{
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }

  updatePrompt(promptInfo: IPrompt) {
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(false);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
    this.processService.$isUpdatingPrompt.next(true);
    this.processService.$isReviewing.next(false);
    this.processService.$isManagingProcess.next(false);
    this.promptService.oldPromptData(promptInfo);

  }

  mainMenu() {
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(true);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
    this.processService.$isUpdatingPrompt.next(false);
    this.processService.$isReviewing.next(false);
    this.processService.$isManagingProcess.next(false);
  }

    addPrompt() {
      this.processService.$isCreatingProcess.next(true);
      this.processService.$isUpdating.next(false);
      this.processService.$isViewingMain.next(false);
      this.processService.$isCreatingStage.next(false);
      this.processService.$isCreatingTitle.next(false);
      this.processService.$isUpdatingPrompt.next(false);
      this.processService.$isReviewing.next(false);
      this.processService.$isManagingProcess.next(false);
    }
}
