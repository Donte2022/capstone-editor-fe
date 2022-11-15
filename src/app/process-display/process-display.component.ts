import {Component, Input, OnInit} from '@angular/core';
import {IProcess} from "../interfaces/IProcess";

@Component({
  selector: 'app-process-display',
  templateUrl: './process-display.component.html',
  styleUrls: ['./process-display.component.css']
})
export class ProcessDisplayComponent implements OnInit {

  @Input() process!: IProcess;

  constructor() { }

  ngOnInit(): void {
  }

    Edit() {
        console.log("editing")
    }

  Delete() {
    console.log("deleting")
  }

  Results() {
    console.log("getting results")
  }
}
