import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {BehaviorSubject, first} from "rxjs";
import {IProcess} from "./interfaces/IProcess";
import {ITitle} from "./interfaces/ITitle";

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  $deleteThisStageError = new BehaviorSubject<string | null>(null);
  $deleteThisStageSuccess = new BehaviorSubject<string | null>(null);
  private deleteIdSuccess = "Stage fail to delete. Please try again later";
  private deleteStageFail = "Stage successfully deleted!";
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

  constructor(private httpService: HttpService) {
  }

  getTitle() {
    this.httpService.getTitles()
  }

  deleteStage(iD: number) {

    this.httpService.deleteSelectedStage(iD)
        .pipe(first()).subscribe({
      next: (deleteThisStageSuccess) => {
        console.log(iD)
        this.$deleteThisStageSuccess.next(this.deleteIdSuccess)
      },
      error: (deleteThisStageError) => {
        console.log(deleteThisStageError)
        this.$deleteThisStageError.next(this.deleteStageFail)
      }
    })
  }

  // updateStage(updateThisStage: ITitle) {
  //   this.httpService.updateStage(updateThisStage)
  //       .pipe(first()).subscribe({
  //     next: (updateThisStageSuccess) => {
  //       console.log(updateThisStage)
  //       this.$updateThisStageSuccess.next(this.updateStageSuccess)
  //     },
  //     error: (updateThisStageError) => {
  //       console.log(updateThisStageError)
  //       this.$updateThisStageError.next(this.updateStageFail)
  //     }
  //   })
  //
  // }

  newTitle(newStage: ITitle) {

    if (!newStage.title.length) {
      console.log ("Field is empty");
    }

    if (newStage.title.length)
    {
      console.log(newStage)
      console.log(newStage.title)
      const stage: ITitle = {

        id: newStage.id,
        startDate: newStage.startDate,
        endDate: newStage.endDate,
        title: newStage.title,
        description: newStage.description
        // prompt: newStage.prompt,
      }

      this.httpService.createNewTitle(stage).subscribe({
      next: (stage) => {

        console.log("title Created")
        console.log(stage)
      },
        error: (error) => {

        console.log("title fail to create!")
          console.log(error)
        },
      });
    }
    return true;

  }
}
