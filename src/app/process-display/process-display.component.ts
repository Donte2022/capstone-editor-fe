import {Component,OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {first} from "rxjs";
import {IProcess} from "../interfaces/IProcess";
import {ProcessService} from "../process.service";
import {ITitle} from "../interfaces/ITitle";

@Component({
  selector: 'app-process-display',
  templateUrl: './process-display.component.html',
  styleUrls: ['./process-display.component.css']
})
export class ProcessDisplayComponent implements OnInit {

  latestProcessList!: ITitle[];

  constructor(private httpService: HttpService,
              private processService: ProcessService) {

    this.httpService.getTitles()
        .pipe(first()).subscribe({
      next: (data) => {
        console.log(data)
        // @ts-ignore
        this.latestProcessList = data;
        console.log(this.latestProcessList)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
  }

    // Edit(updateThisStage: ITitle) {
    //     console.log("editing")
    //   console.log(updateThisStage)
    //   this.processService.updateStage(updateThisStage);
    // }

  Delete(id: number) {
    console.log("deleting")
    console.log(id)
    this.processService.deleteStage(id);
  }

  Results() {
    console.log("getting results")
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(false);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
    this.processService.$isReviewing.next(true);

  }

  addProcess() {
    console.log("adding process")
    this.processService.$isCreatingProcess.next(true);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(false);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
  }

  editStage(displayInfo: ITitle) {
    this.processService.$isCreatingProcess.next(false);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(false);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);
    this.processService.$isUpdating.next(true);
    // @ts-ignore
    this.processService.updateThisStage(displayInfo);
    console.log(displayInfo)

  }
}
