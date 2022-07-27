import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path: 'students' ,component: StudentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
