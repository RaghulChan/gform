import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GformServiceService {
  constructor() {}
  login: any[] = [
    {
      id: 1,
      name: 'chandru',
      point: 40,
    },
  ];

  userAnswer = {};
  questions: any[] = [
    {
      id: 1,
      question: 'What purpose does the ngModel directive serve?',
      options: [
        'Handling HTTP request',
        'Data binding for both input and output',
        'Listening to DOM events',
        'Controlling animation',
      ],
      answer: 'Data binding for both input and output',
    },
    {
      id: 2,
      question: 'How can you generate a new service using Angular CLI?',
      options: [
        'ng create service my-service',
        'ng generate service my-service',
        'ng new service my-service',
        'ng add service my-service',
      ],
      answer: 'ng generate service my-service',
    },
    {
      id: 3,
      question: 'What is the use of Angular Directives?',
      options: [
        'To inject services',
        'To initialize component services',
        'To manipulate the Dom elements',
        'To store data',
      ],
      answer: 'To manipulate the Dom elements',
    },
    {
      id: 4,
      question:
        'Which Angular decorator is used for making a class a root module?',
      options: ['@Module()', '@Component()', '@Directive()', '@NgModule()'],
      answer: '@NgModule()',
    },
    {
      id: 5,
      question: 'Which is the correct syntax for an Angular Event binding?',
      options: [
        '{click}=”doSomething()”',
        'on-click=”doSomething()”',
        '(click)=”doSomething()”',
        'click[]=”doSomething()”',
      ],
      answer: '(click)=”doSomething()”',
    },
    {
      id: 6,
      question: 'Which command is used to install Angular CLI globally?',
      options: [
        'npm install @angular/cli',
        'npm global install @angular/cli',
        'npm install -g @angular/cli',
        'npm -install @angular/cli',
      ],
      answer: 'npm install -g @angular/cli',
    },
    {
      id: 7,
      question: 'How do you define a route in Angular?',
      options: [
        'Using <a> tags',
        'Using the Router service',
        'Using the Routes array',
        'Using the @Route() decorator',
      ],
      answer: 'Using the Routes array',
    },
    {
      id: 8,
      question:
        'Whats the primary purpose of the ngOnInit lifecycle hook in Angular components?',
      options: [
        'Initialization and data retrieval',
        'Destruction of instances',
        'Manipulation of the views DOM',
        'Handling of user input',
      ],
      answer: 'Initialization and data retrieval',
    },
    {
      id: 9,
      question: 'Which decorator allows you to define styles for a component?',
      options: [
        '@Style()',
        '@ViewStyle()',
        '@ComponentStyle()',
        '@Component({styles: …})',
      ],
      answer: '@Component({styles: …})',
    },
    {
      id: 10,
      question: 'What is the purpose of the async pipe in Angular?',
      options: [
        'To make asynchronous HTTP requests',
        'To automatically unsubscribe from observables or promises',
        'To pause the execution of the application',
        'To run change detection asynchronously',
      ],
      answer: 'To automatically unsubscribe from observables or promises',
    },
  ];
  getQuestionsData() {
    return this.questions;
  }
}
