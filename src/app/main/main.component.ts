import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../process.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
  }


    createStage() {
      this.processService.$isCreatingProcess.next(false);
      this.processService.$isUpdating.next(false);
      this.processService.$isViewingMain.next(false);
      this.processService.$isCreatingStage.next(false);
      this.processService.$isCreatingTitle.next(true);

    }
}
