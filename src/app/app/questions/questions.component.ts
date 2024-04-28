import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GformServiceService } from '../service/gform-service.service';
import { questionTypeEnum } from '../Common/enum/questionTypeEnum';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  filter_source_type_value = null;
  questionTypeEnum=questionTypeEnum;
  questions: any;

mainQuestions:any;
  constructor(
    private _gormservice: GformServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.questions = this._gormservice.getQuestions();
     this._gormservice.getQuestions().subscribe((questions) => {
        this.questions = questions;
        this.mainQuestions=JSON.parse(JSON.stringify(this.questions));
    });
      
  }

  currentQuestionNo: number = 0;
  userAnswers: { [key: number]: any } = {};
  answer = '';
  selectedAnswer:any = [];

  optionClicked(options: any, questionIndex: any) {
    this.userAnswers[questionIndex] = [options];
  }
  onCheckBoxChange(event:any,option:string,questionIndex:any)
  {
    if(!this.userAnswers[questionIndex])
    {
      this.userAnswers[questionIndex]=[];
    }
    if(event.checked)
    {
      this.userAnswers[questionIndex].push(option);
    }
    else
    {
      this.userAnswers[questionIndex]=this.userAnswers[questionIndex].filter((e:string) => e !== option);
    }
  }
  preQues() {
    if (this.currentQuestionNo + 1 > 0) {
      this.currentQuestionNo--;
    }
  }

  clear(questionId:any)
  {
    this.userAnswers[questionId]=[];
    if(this.questions[this.currentQuestionNo].questionType==this.questionTypeEnum.rankingBasedChoice)
    {
      this.questions[this.currentQuestionNo].options=JSON.parse(JSON.stringify(this.mainQuestions[this.currentQuestionNo].options));
    }
  }

  submitAnswers() {
    console.log('User Answers:', this.userAnswers);
    if (this.currentQuestionNo + 1 < this.questions.length) {
      this.currentQuestionNo++;
    } else {
      this._gormservice.userAnswer = this.userAnswers;
      this.router.navigateByUrl('/submit');
    }
  }

  checkAnswer() {
    this.questions.forEach((question: any) => {
      const selectedOption = question.selectedOption;
      const correctAnswer = question.correctAnswer;
      const isCorrect = this.compareArray(selectedOption, correctAnswer);
      console.log('Question:', question.question);
      console.log('selectedoption', selectedOption);
      console.log('iscorrect:', isCorrect);
    });
  }

  compareArray(arr1: any[], arr2: any[]): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((option) => arr2.includes(option));
  }

  

  
  drop(event: CdkDragDrop<string[]>,questionId:any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.userAnswers[questionId]=this.questions[this.currentQuestionNo].options;
  }
}
