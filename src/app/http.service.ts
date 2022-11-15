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

  // createStage() {
  //   return this.httpClient.post(
  //       "http://localhost:8080/api/processes",
  //       IStageForm
  //   ) as Observable<IProcess>;
  //
  // }

}

