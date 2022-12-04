import { Injectable } from '@angular/core';
import { Student } from './shared/interface/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [{
    "first_name": "Harsh",
    "last_name": "Karira",
    "email": "kariraharsh27@gmail.com",
    "contact":"9988223456"
},{
    "first_name": "Antony",
    "last_name": "Tremathack",
    "email": "atremathack1@hugedomains.com",
    "contact": "253-646-9373"
},{
    
    "first_name": "Geoffry",
    "last_name": "Pretti",
    "email": "gpretti2@tiny.cc",
    "contact": "577-711-5321"
},{
    "first_name": "Bari",
    "last_name": "Yong",
    "email": "byong3@twitter.com",
    "contact": "951-157-1379"
}, {
    "first_name": "Rhys",
    "last_name": "Howling",
    "email": "rhowling4@amazon.co.uk",
    "contact": "130-813-8195"
},{
    "first_name": "Ruddie",
    "last_name": "Paolicchi",
    "email": "rpaolicchi5@phoca.cz",
    "contact": "427-390-5528"
  }]


  constructor() { }
  fetchstudents(){
    return this.students
  }
}
