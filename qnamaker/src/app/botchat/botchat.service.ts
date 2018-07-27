import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
export interface Answer {
  questions: string[];
  answer: string;
  score: number;
  id: number;
  source: string;
  metadata: {
    name: string,
    value: string
  };
}
@Injectable()
export class BotchatService {
  constructor(private httpClient: HttpClient) {}

  getProfile(value): Observable<Answer[]> {
    const host = 'https://nccqnamaker.azurewebsites.net';
    const endpoint_key = '48017124-1d09-4990-a32b-dd072c77e685';
    const kb = 'ddfb54e4-e4b8-4d62-81dd-00f83573e9d9';
    const method = '/qnamaker/knowledgebases/' + kb + '/generateAnswer';
    const url = host + method;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Content-Length': value.length + '',
      'Authorization': 'EndpointKey ' + endpoint_key
    });
    const body = {
      'question':value
    };
    console.log(value);
    return this.httpClient.post<Answer[]>(url, body , {headers});
  }
}
