import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-display',
  templateUrl: './process-display.component.html',
  styleUrls: ['./process-display.component.css']
})
export class ProcessDisplayComponent implements OnInit {

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
