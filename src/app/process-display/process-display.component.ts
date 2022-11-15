import {Component,OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {first} from "rxjs";
import {IProcess} from "../interfaces/IProcess";

@Component({
  selector: 'app-process-display',
  templateUrl: './process-display.component.html',
  styleUrls: ['./process-display.component.css']
})
export class ProcessDisplayComponent implements OnInit {

  // @Input() process!: IProcess;
  latestProcessList!: IProcess[];

  constructor(private httpService: HttpService) {

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
