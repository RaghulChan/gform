import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitComponentComponent } from './submit-component/submit-component.component';
import { QuestionsComponent } from './questions/questions.component';
import { NotComponent } from './not/not.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: 'question',
    component: QuestionsComponent,
  },
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'submit',
    component: SubmitComponentComponent,
  },
  {
    path: '**',
    component: NotComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
