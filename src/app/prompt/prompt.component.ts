import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {first, Subject, takeUntil} from "rxjs";
import {IProcess} from "../interfaces/IProcess";
import {IPrompt} from "../interfaces/IPrompt";
import {ProcessService} from "../process.service";
import {PromptService} from "../prompt.service";

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

  onDestroy = new Subject();


  constructor(private httpService: HttpService,
              private promptService: PromptService) {

    this.promptService.$deleteThisStageError.pipe(takeUntil(this.onDestroy)).subscribe(
        deletePromptErrorMessage => this.deletePromptErrorMessage = deletePromptErrorMessage);

    this.promptService.$deleteThisStageSuccess.pipe(takeUntil(this.onDestroy)).subscribe(
        deletePromptSuccessMessage => this.deletePromptSuccessMessage = deletePromptSuccessMessage);

    // this.promptService.$updateThisStageSuccess.pipe(takeUntil(this.onDestroy)).subscribe(
    //     deleteIdSuccess => this.updateSuccessMessage = deleteIdSuccess);
    //
    // this.promptService.$updateThisStageSuccess.pipe(takeUntil(this.onDestroy)).subscribe(
    //     deleteIdSuccess => this.updateSuccessMessage = deleteIdSuccess);


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
    console.log("deleting this prompt with id")
    console.log(id)
    this.promptService.deletePrompt(id);

  }

  ngOnDestroy(): void{
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }
}
