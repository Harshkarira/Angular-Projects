import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { Student } from '../shared/interfaces/student.interface';
import { StudentsService } from '../students.service';
import {faUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  selectedStudent!:Student;
  students!:Student[]
  userIcon = faUser
  constructor(private loggerService: LoggerService, private studentService: StudentsService) { }

  ngOnInit(): void {
    this.getStudentDetails();
  }
  viewDetails(student: Student){
    this.selectedStudent = student;
    // this.loggerService.log(student);
    this.studentService.log(student)
  }
  getStudentDetails():void{
    // this.students = this.loggerService.fetchStudents()
    this.students = this.studentService.fetchStudents();
  }
}
