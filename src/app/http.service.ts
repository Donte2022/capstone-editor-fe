import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProcess} from "./interfaces/IProcess";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {

  }

  getTitles() {
    return this.httpClient.get(
        "http://localhost:8080/api/processes/titles"
    ) as Observable<IProcess>;
  }

  createNewTitle(title: IProcess) {
    return this.httpClient.post(
        "http://localhost:8080/api/processes",
        title
    ) as Observable<IProcess>;

  }

  deleteSelectedStage(iD:number) {
    return this.httpClient.delete(
        "http://localhost:8080/api/processes/" + iD,
    ) as Observable<IProcess>;

  }

  updateStage(updateThisStage: IProcess) {
    return this.httpClient.put(
        "http://localhost:8080/api/processes/" + `${updateThisStage.iD}`,
        {
          "dateCreated":updateThisStage.date,
          "processTitle": updateThisStage.title,
          "prompt": updateThisStage.prompt,
        }
    ) as Observable<IProcess>;

  }

    // createNewTitle(title: ITitle) {
    //
    // }
}

