import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProcess} from "./interfaces/IProcess";
import {ITitle} from "./interfaces/ITitle";
import {IPrompt} from "./interfaces/IPrompt";
import {ICompete} from "./interfaces/ICompete";

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
        "http://localhost:8080/api/stage",
        title
    ) as Observable<ITitle>;
  }

  deleteSelectedStage(id:number) {
    return this.httpClient.delete(
        "http://localhost:8080/api/titles/" + id,
    ) as Observable<ITitle>;

  }

  updateStage(updateThisStage: ITitle) {
    return this.httpClient.put(
        "http://localhost:8080/api/titles/" + `${updateThisStage.id}`,
        {
          "endDate": updateThisStage.endDate,
          "startDate":updateThisStage.startDate,
          "title": updateThisStage.stageTitle,
          "description":updateThisStage.description
          // "prompt": updateThisStage.prompt,
        }
    ) as Observable<IProcess>;

  }

    createPrompt(createPrompt: IPrompt) {
      return this.httpClient.post(
          "http://localhost:8080/api/prompt",
          createPrompt
      ) as Observable<IPrompt>;

    }

    updatePrompt(updatePrompt: IPrompt){
      return this.httpClient.put(
          "http://localhost:8080/api/prompt" + `${updatePrompt}`,
          {
                    "idOfTitle": updatePrompt.idOfTitle,
                  "prompt": updatePrompt.prompt
          }
      ) as Observable<IPrompt>
    }

    deletePrompt(id:number) {
      return this.httpClient.delete(
          "http://localhost:8080/api/prompt" + id,
      ) as Observable<IPrompt>;
    }

    getCompletedStage() {
      return this.httpClient.get(
          "http://localhost:8888/api/completedstage/all"
      ) as Observable<ICompete>;
    }
}

