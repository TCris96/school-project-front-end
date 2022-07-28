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
export class ClassroomComponent implements OnInit {

  students:Student[] = [];
  data:classroom[]=[];
  columnsToDisplay = ['id', 'name', 'email']

  constructor(private web: WebService,private studentService: StudentService) { }

  ngOnInit(): void {
  }

  getStudents(){
    this.studentService.getStudents().subscribe(response =>{
      response = this.students
    } 
    )
  }

}
