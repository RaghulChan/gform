import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { GformServiceService } from '../service/gform-service.service';

@Component({
  selector: 'app-submit-component',
  templateUrl: './submit-component.component.html',
  styleUrls: ['./submit-component.component.css'],
})
export class SubmitComponentComponent implements OnInit {
  point:number=0;
  constructor(private _submitservice: GformServiceService) {}

  questions = this._submitservice.getQuestionsData();
  userAnswers: { [key: number]: string } = this._submitservice.userAnswer;
  ngOnInit() {
    
  }
  getResult(userAnswer:any,answer:any)
  {
    if (userAnswer === answer) {
      this.point++;
      return 'correct';
    }
    else
    {
      return 'incorrect'
    }
  }
}
