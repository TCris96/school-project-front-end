import { Component, OnInit } from '@angular/core';
import { classroom, WebService } from 'src/app/web.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  data:classroom[]=[];
  columnsToDisplay = ['id', 'name', 'email']

  constructor(private web: WebService) { }

  ngOnInit(): void {
  }

}
