import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ems';
  name = 'harsh';
  inputname: any;
  studentdata = [
    {
      "id": 1,
      "first_name": "Griff",
      "last_name": "Bradd",
      "email": "gbradd0@yellowbook.com",
      "gender": "Male",
      "username": "gbradd0",
      "contact": "994-133-3896"
    }, {
      "id": 2,
      "first_name": "Antony",
      "last_name": "Tremathack",
      "email": "atremathack1@hugedomains.com",
      "gender": "Male",
      "username": "atremathack1",
      "contact": "253-646-9373"
    }, {
      "id": 3,
      "first_name": "Geoffry",
      "last_name": "Pretti",
      "email": "gpretti2@tiny.cc",
      "gender": "Male",
      "username": "gpretti2",
      "contact": "577-711-5321"
    }, {
      "id": 4,
      "first_name": "Bari",
      "last_name": "Yong",
      "email": "byong3@twitter.com",
      "gender": "Female",
      "username": "byong3",
      "contact": "951-157-1379"
    }, {
      "id": 5,
      "first_name": "Rhys",
      "last_name": "Howling",
      "email": "rhowling4@amazon.co.uk",
      "gender": "Male",
      "username": "rhowling4",
      "contact": "130-813-8195"
    },{
      "id": 6,
      "first_name": "Ruddie",
      "last_name": "Paolicchi",
      "email": "rpaolicchi5@phoca.cz",
      "gender": "Male",
      "username": "rpaolicchi5",
      "contact": "427-390-5528",
    }]
    clicked() {
      this.inputname='Harshhhhhhh'
      console.log('clicked');
    }
    isSpecial = true;
    my_class = true;
  }
