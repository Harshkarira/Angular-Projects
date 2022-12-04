import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  standards = ['V','VI','VII','VIII','IX','X']
  student={
    firstname:'',
    lastname:'',
    standard:'',
  }

  ngOnInit(): void {
  }
  onSubmit(studentForm:any){
    console.log("hi, this is submitted",studentForm)
  }
  resetForm(studentForm:any){
    studentForm.reset();
    console.log("value reseted successfullyy",studentForm)

  }
}
