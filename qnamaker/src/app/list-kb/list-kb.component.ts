import {Component, OnInit} from '@angular/core';
import {AppKBService} from '../appKB.service';

@Component({
  selector: 'app-list-kb',
  templateUrl: './list-kb.component.html',
  styleUrls: ['./list-kb.component.css'],
  providers:[AppKBService]
})
export class ListKbComponent implements OnInit {
  dataKB;
  isloadDing = false;

  constructor(private API: AppKBService) {
  }

  ngOnInit() {
    this.API.demoKBforUser()
      .then(res => {
        this.dataKB = res;
        console.log(this.dataKB);
        this.isloadDing = true;
      });
  }


  checkPublic(data) {
    if ('lastPublishedTimestamp' in data)
      return 'Publish';
    else
      return 'Not Publish';
  }

  deleteKB(idKB) {
    this.API.demoDeleteKB(idKB)
      .then(res => {
        console.log(res);
        location.reload();
      })
      .catch(error => console.log(error));
  }

}
