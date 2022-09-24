import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../shared/interfaces/student.interface';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  @Input() selectedStudent!: Student
  constructor() { }

  ngOnInit(): void {
  }

}
