import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {path: 'students' ,component: StudentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
