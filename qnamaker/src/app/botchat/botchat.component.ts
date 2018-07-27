import { Component, OnInit } from '@angular/core';
import {Answer, BotchatService} from './botchat.service';

@Component({
  selector: 'app-botchat',
  templateUrl: './botchat.component.html',
  styleUrls: ['./botchat.component.css'],
  providers: [BotchatService]
})
export class BotchatComponent implements OnInit {
  answer = [];
  public data: Array<Answer> = [];
  constructor(private botservice: BotchatService) { }

  ngOnInit() {}
  onclick(question) {
    this.botservice.getProfile(question).subscribe(value => {
        this.answer.push({'answer': value.answers[0].answer + '' , 'question': question});
    });
  }
}
