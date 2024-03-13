import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { QuestionsComponent } from './questions/questions.component';
import { SubmitComponentComponent } from './submit-component/submit-component.component';
import { NotComponent } from './not/not.component';
import { StartComponent } from './start/start.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    QuestionsComponent,
    SubmitComponentComponent,
    StartComponent,
    NotComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    AppRoutingModule,
    MatDividerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
