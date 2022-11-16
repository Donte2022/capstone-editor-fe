import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../process.service";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {


  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
  }

  generateStage() {
    console.log("Generating Stage")
    this.processService.$isCreatingProcess.next(true);
    this.processService.$isUpdating.next(false);
    this.processService.$isViewingMain.next(false);
    this.processService.$isCreatingStage.next(false);
    this.processService.$isCreatingTitle.next(false);


  }
}
