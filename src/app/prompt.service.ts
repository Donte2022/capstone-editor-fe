import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {BehaviorSubject, first} from "rxjs";
import {ITitle} from "./interfaces/ITitle";
import {IPrompt} from "./interfaces/IPrompt";

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  $deleteThisStageSuccess = new BehaviorSubject<string | null>(null);
  private deleteStageSuccess = "Prompt deleted successfully"

  $deleteThisStageError = new BehaviorSubject<string | null>(null);
  private deleteStageFail = "Prompt fail to delete"

  constructor(private httpService: HttpService) {

  }

  deletePrompt(id: number) {

    this.httpService.deletePrompt(id)
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

  // newStage: string = "";
  //
  // updateThisStage(displayInfo: any) {
  //   console.log(displayInfo)
  //   this.newStage = displayInfo;
  // }
  //
  // constructor(private httpService: HttpService) {
  // }
  //
  // getTitle() {
  //   this.httpService.getTitles()
  // }
  //
  // deleteStage(id: number) {
  //
  //   this.httpService.deleteSelectedStage(id)
  //       .pipe(first()).subscribe({
  //     next: (deleteThisStageSuccess) => {
  //       console.log(id)
  //       this.$deleteThisStageSuccess.next(this.deleteIdSuccess)
  //     },
  //     error: (deleteThisStageError) => {
  //       console.log(deleteThisStageError)
  //       this.$deleteThisStageError.next(this.deleteStageFail)
  //     }
  //   })
  // }
  //
  // updateStage(updatePrompt: ITitle) {
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
  // }
  //

  createPrompt(createPrompt: IPrompt) {

    if (!createPrompt.prompt.length) {
      console.log ("Field is empty");
    }

    if (createPrompt.prompt.length)
    {
      console.log(createPrompt)
      console.log(createPrompt.prompt)
      const stage: IPrompt = {

        id: createPrompt.id,
        idOfTitle: createPrompt.idOfTitle,
        prompt: createPrompt.prompt,
        process: createPrompt.process
      }

      this.httpService.createPrompt(stage).subscribe({
        next: (newPrompt) => {

          console.log("Prompt was Created!")
          console.log(newPrompt)
        },
        error: (error) => {

          console.log("Fail to create Prompt!")
          console.log(error)
        },
      });
    }
    return true;
  }
}
