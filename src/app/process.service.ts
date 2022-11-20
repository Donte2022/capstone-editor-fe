import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {BehaviorSubject, first} from "rxjs";
import {ITitle} from "./interfaces/ITitle";
import {IStage} from "./interfaces/IStage";
import {IProcess} from "./interfaces/IProcess";

@Injectable({
  providedIn: 'root'
})
export class ProcessService {


  $createThisStageError = new BehaviorSubject<string | null>(null);
  private createStageError = "Stage fail to create. Please try again later"
  $createThisStageSuccess = new BehaviorSubject<string | null>(null);
  private creatStageSuccess = "Stage created!"
  $deleteThisStageError = new BehaviorSubject<string | null>(null);
  private deleteStageFail = "Stage fail to delete. Please try again later";
  $deleteThisStageSuccess = new BehaviorSubject<string | null>(null);
  private deleteStageSuccess = "Stage successfully deleted!";
  $updateThisStageSuccess = new BehaviorSubject<string | null>(null);
  private updateStageSuccess = "Update was successful!";
  $updateThisStageError = new BehaviorSubject<string | null>(null);
  private updateStageFail = "Stage fail to update. Please try again later";

  $isCreatingStage = new BehaviorSubject<boolean>(false);
  $isCreatingTitle = new BehaviorSubject<boolean>(false);
  $isCreatingProcess = new BehaviorSubject<boolean>(false);
  $isViewingMain = new BehaviorSubject<boolean>(false);
  $isUpdating = new BehaviorSubject<boolean>(false);
  $isReviewing = new BehaviorSubject<boolean>(false);
  $isManagingProcess = new BehaviorSubject<boolean>(false);
  $isUpdatingPrompt = new BehaviorSubject<boolean>(false);

   newStage: string = "";

  updateThisStage(displayInfo: any) {
    console.log(displayInfo)
    this.newStage = displayInfo;
  }

  constructor(private httpService: HttpService) {
  }


  deleteStage(id: number) {

    this.httpService.deleteSelectedStage(id)
        .pipe(first()).subscribe({
      next: (deleteThisStageSuccess) => {
        console.log(id)
        this.$deleteThisStageSuccess.next(this.deleteStageSuccess)
      },
      error: (deleteThisStageError) => {
        console.log(deleteThisStageError)
        this.$deleteThisStageError.next(this.deleteStageFail)
      }
    })
  }

  updateStage(updateThisStage: IProcess) {
    this.httpService.updateStage(updateThisStage)
        .pipe(first()).subscribe({
      next: (updateThisStageSuccess) => {
        console.log(updateThisStage)
        this.$updateThisStageSuccess.next(this.updateStageSuccess)
      },
      error: (updateThisStageError) => {
        console.log(updateThisStageError)
        this.$updateThisStageError.next(this.updateStageFail)
      }
    })
  }

  createStage(newStage: IStage) {

    if (!newStage.stageTitle.length) {
      console.log ("Field is empty");
    }

    if (newStage.stageTitle.length)
    {
      console.log(newStage)
      console.log(newStage.stageTitle)
      const stage: IStage = {

        // id: newStage.id,
        startDate: newStage.startDate,
        endDate: newStage.endDate,
        stageTitle: newStage.stageTitle,
        description: newStage.description
        // prompt: newStage.prompt,
      }

      this.httpService.createNewStage(stage).subscribe({
      next: (stage) => {

        console.log("Title was Created!")
        console.log(stage)
        this.$createThisStageSuccess.next(this.creatStageSuccess)
      },
        error: (error) => {

        console.log("Fail to create!")
          console.log(error)
          this.$createThisStageError.next(this.createStageError)
        },
      });
    }
    return true;
  }


}
