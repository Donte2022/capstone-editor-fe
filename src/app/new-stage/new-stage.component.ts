import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../process.service";

@Component({
  selector: 'app-new-stage',
  templateUrl: './new-stage.component.html',
  styleUrls: ['./new-stage.component.css']
})
export class NewStageComponent implements OnInit {

  constructor(private processService: ProcessService) { }

  ngOnInit(): void {
  }


  deleteStage() {

  }
}
