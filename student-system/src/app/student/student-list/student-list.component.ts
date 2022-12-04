import { Component, OnInit } from '@angular/core';
import { faUserGraduate, faAward, faSchool,faDollar } from '@fortawesome/free-solid-svg-icons';
import { Student } from 'src/app/shared/interface/student.interface';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  madestudents!: Student[]
  students!:Student[]
  icons = {
    StudentIcon: faUserGraduate,
    AwardsIcon: faAward,
    DeptIcon: faSchool,
    RevenueIcon: faDollar,
  }
  constructor(public studentservice:StudentService) { }

  ngOnInit(): void {
    this.getstudent()
  }

  getstudent(){
    this.madestudents = this.studentservice.fetchstudents()
  }

}
