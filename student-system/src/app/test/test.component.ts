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
    firstname:'Harsh',
    lastname:'Karira',
    standard:'X',
  }

  ngOnInit(): void {
  }

}
