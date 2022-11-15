import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private httpService: HttpService) {
  }

  getTitle() {
    this.httpService.getTitles()
  }
}
