import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "./http.service";
import {BehaviorSubject, first} from "rxjs";
import {IProcess} from "./interfaces/IProcess";

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

  updateStage(updateThisStage: IProcess) {
    this.httpService.updateStage(updateThisStage)
        .pipe(first()).subscribe({
      next: (updateThisStageSuccess) => {
        this.$updateThisStageSuccess.next(this.updateStageSuccess)
      },
      error: (updateThisStageError) => {
        console.log(updateThisStageError)
        this.$updateThisStageError.next(this.updateStageFail)
      }
    })

  }
}
