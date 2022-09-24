import { Component, OnInit } from '@angular/core';
import { faUserGraduate, faAward, faSchool,faDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  icons = {
    StudentIcon: faUserGraduate,
    AwardsIcon: faAward,
    DeptIcon: faSchool,
    RevenueIcon: faDollar,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
