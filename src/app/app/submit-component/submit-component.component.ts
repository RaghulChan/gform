import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { GformServiceService } from '../service/gform-service.service';
import { questionTypeEnum } from '../Common/enum/questionTypeEnum';

@Component({
  selector: 'app-submit-component',
  templateUrl: './submit-component.component.html',
  styleUrls: ['./submit-component.component.css'],
})
export class SubmitComponentComponent implements OnInit {
  point: number = 0;
  questionTypeEnum=questionTypeEnum;
  constructor(private _submitservice: GformServiceService) {}
  questions: any;
  // questions = this._submitservice.getQuestionsData();
  userAnswers: { [key: number]: string } = this._submitservice.userAnswer;
  ngOnInit() {
    this._submitservice.getQuestions().subscribe((questions) => {
      this.questions = questions;
    });
  }
  getResult(userAnswer: any, answer: any,questionType:any) {
    if (questionType==this.questionTypeEnum.multipleChoice && userAnswer? userAnswer.length==answer.length &&  answer.filter((element:any) => userAnswer.includes(element)).length==answer.length:userAnswer == answer+'') {
      this.point++;
      return 'correct';
    } else {
      return 'incorrect';
    }
  }
}
