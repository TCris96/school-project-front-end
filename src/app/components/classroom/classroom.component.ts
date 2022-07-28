import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/services/student.service';
import { classroom, WebService } from 'src/app/web.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})

// const STUDENTS_VALUE: Student[]=[{cnp:123,firstName:'Stefan',lastName:'Popa',grade:7,age:26},{id:2,cnp:345,firstName:'Stefan',lastName:'Popa',grade:7,age:26}];
export class ClassroomComponent implements OnInit {

  students:Student[] = [];
  data:classroom[]=[];
  displayedColumns = ['id', 'name', 'email'];

  constructor(private web: WebService, private studentService: StudentService) { 
    this.web.GetClassroom().subscribe(x => {
      x=this.data
    })
  }

  ngOnInit(): void {
    this.getStudents();
    this.web.GetClassroom();
  }

  getStudents(){
    this.studentService.getStudents().subscribe(response =>{
      this.students=response
    } 
    )
  }

}
