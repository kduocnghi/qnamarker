import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';


const URL = 'https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases/';

const headers = new Headers({
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': 'dae58ee2cedd4755a4ffcaa4f6da8f48'
});

@Injectable()

export class AppQnaService {

  constructor(private http: Http) {
  }

  QnAofKB(KBid, environment) {
    return this.http.get(URL + KBid + '/' + environment + '/qna', {headers})
      .toPromise()
      .then(res => res.json()).catch(err => console.log(err));
  }

}
