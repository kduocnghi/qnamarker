import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

const URL = '';
const headers = new Headers({
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': 'dae58ee2cedd4755a4ffcaa4f6da8f48'
});

@Injectable()
export class AppKBService {

  constructor(private http: Http) {

  }

  demoKBforUser() {
    return this.http.get('https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases', {headers})
      .toPromise()
      .then(res => res.json()).catch(err => console.log(err));

  }

  demoDeleteKB(idKB) {
    return this.http.delete('https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases/' + idKB, {headers})
      .toPromise()
      .then(res => res.json()).catch(err => console.log(err));
  }


}
