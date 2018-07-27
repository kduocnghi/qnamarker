import {Component, OnInit} from '@angular/core';
import {AppQnaService} from '../app-qna.service';

@Component({
  selector: 'app-qn-a-kb',
  templateUrl: './qn-a-kb.component.html',
  styleUrls: ['./qn-a-kb.component.css'],
  providers: [AppQnaService]
})
export class QnAKbComponent implements OnInit {
  isloadDing = false;
  QnA;

  constructor(private APIqna: AppQnaService) {
  }

  ngOnInit() {
    this.APIqna.QnAofKB('3154ce1d-d328-467b-ad3f-f6694f055461', 'Test')
      .then(res => {
        this.QnA = res;
        console.log(this.QnA);
        this.isloadDing = true;
      });
  }

}
