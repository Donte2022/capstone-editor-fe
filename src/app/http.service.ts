import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProcess} from "./interfaces/IProcess";
import {ITitle} from "./interfaces/ITitle";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {

  }

  getTitles() {
    return this.httpClient.get(
        "http://localhost:8080/api/titles/all"
    ) as Observable<ITitle>;
  }

  createNewTitle(title: ITitle) {
    return this.httpClient.post(
        "http://localhost:8080/api/titles",
        title
    ) as Observable<ITitle>;

  }

  deleteSelectedStage(id:number) {
    return this.httpClient.delete(
        "http://localhost:8080/api/processes/" + id,
    ) as Observable<IProcess>;

  }

  updateStage(updateThisStage: IProcess) {
    return this.httpClient.put(
        "http://localhost:8080/api/processes/" + `${updateThisStage.id}`,
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

