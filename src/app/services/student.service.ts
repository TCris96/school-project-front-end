import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../common/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Student[] = [];
  url = environment.classbookApiUrl + "/students";

  constructor(private http:HttpClient) { }

  getStudents():Observable<any>{
   return this.http.get(this.url);
  }


}

