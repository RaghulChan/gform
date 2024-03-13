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
  questions: any=[
    {
      "id": 1,
      "question": "How can you generate a new component using Angular CLI?",
      "questionType":4,
      "options": [
        "assets/createComponent2.png",
        "assets/createComponent1.png",
        "assets/createComponent4.png",
        "assets/createComponent3.png"
      ],
      "answer": "assets/createComponent1.png"
    },
    {
      "id": 2,
      "question": "What purpose does the ngModel directive serve?",
      "questionType":1,
      "options": [
        "Handling HTTP request",
        "Data binding for both input and output",
        "Listening to DOM events",
        "Controlling animation"
      ],
      "answer": "Data binding for both input and output"
    },
    {
      "id": 3,
      "question": "What is the use of Angular Directives?",
      "questionType":1,
      "options": [
        "To inject services",
        "To initialize component services",
        "To manipulate the Dom elements",
        "To store data"
      ],
      "answer": "To manipulate the Dom elements"
    },
    {
      "id": 4,
      "question": "Which Angular decorator is used for making a class a root module?",
      "questionType":1,
      "options": ["@Module()", "@Component()", "@Directive()", "@NgModule()"],
      "answer": "@NgModule()"
    },
    {
      "id": 5,
      "question": "Which is the correct syntax for an Angular Event binding?",
      "questionType":1,
      "options": [
        "{click}=”doSomething()”",
        "on-click=”doSomething()”",
        "(click)=”doSomething()”",
        "click[]=”doSomething()”"
      ],
      "answer": "(click)=”doSomething()”"
    },
    {
      "id": 6,
      "question": "Which command is used to install Angular CLI globally?",
      "questionType":1,
      "options": [
        "npm install @angular/cli",
        "npm global install @angular/cli",
        "npm install -g @angular/cli",
        "npm -install @angular/cli"
      ],
      "answer": "npm install -g @angular/cli"
    },
    {
      "id": 7,
      "question": "How do you define a route in Angular?",
      "questionType":1,
      "options": [
        "Using <a> tags",
        "Using the Router service",
        "Using the Routes array",
        "Using the @Route() decorator"
      ],
      "answer": "Using the Routes array"
    },
    {
      "id": 8,
      "question": "Whats the primary purpose of the ngOnInit lifecycle hook in Angular components?",
      "questionType":1,
      "options": [
        "Initialization and data retrieval",
        "Destruction of instances",
        "Manipulation of the views DOM",
        "Handling of user input"
      ],
      "answer": "Initialization and data retrieval"
    },
    {
      "id": 9,
      "question": "Which decorator allows you to define styles for a component?",
      "questionType":2,
      "options": [
        "@Style()",
        "@ViewStyle()",
        "@ComponentStyle()",
        "@Component({styles: …})"
      ],
      "answer": ["@Component({styles: …})", "@Style()"]
    },
    {
      "id": 10,
      "question": "What is the purpose of the async pipe in Angular?",
      "questionType":2,
      "options": [
        "To make asynchronous HTTP requests",
        "To automatically unsubscribe from observables or promises",
        "To pause the execution of the application",
        "To run change detection asynchronously"
      ],
      "answer": [
        "To automatically unsubscribe from observables or promises",
        "To pause the execution of the application",
        "To run change detection asynchronously"
      ]
    }
  ];
  constructor(
    private _gormservice: GformServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.questions = this._gormservice.getQuestionsData();
    // this._gormservice.getQuestions().subscribe((questions) => {
    //    this.questions = questions;
    // });
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
