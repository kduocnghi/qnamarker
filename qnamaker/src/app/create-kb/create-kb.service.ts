import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class CreateKbService {
  constructor(private httpClient: HttpClient) {

  }

  getProfile() {
    return this.httpClient.get('https://my-json-server.typicode.com/typicode/demo/db')
      .subscribe((data:any) => {
        data.json();
      });
  }
}
