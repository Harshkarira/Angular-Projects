import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Entry } from '../shared/components/interfaces/entry.interface';

@Component({
  selector: 'app-practise-reactive-form',
  templateUrl: './practise-reactive-form.component.html',
  styleUrls: ['./practise-reactive-form.component.css']
})
export class PractiseReactiveFormComponent implements OnInit {
  employeeForm: any;
  values=['poor','fair','good','excellent']

  constructor() { }
  employeeform!:FormGroup;
  entries:Entry[]=[]

  ngOnInit(): void {
    this.createform();
    console.warn(this.employeeForm)
  }
  createform(){
    this.employeeForm = new FormGroup({
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      contact: new FormControl('',[Validators.required]),
      source: new FormControl(''),
      rating: new FormGroup({
        exterior: new FormControl(''),
        interior: new FormControl(''),
        location: new FormControl(''),
        price: new FormControl(''),
        amenities: new FormControl(''),
      }),
      mostliked: new FormControl(''),
      leastliked: new FormControl(''),
    })
  }
  delete(index:number){
    this.entries.splice(index,1) //splice delete krta hai
  }
  
  onSubmit(employeeForm:any):void{
    console.log("submitted",employeeForm)
  }
  employee = {
    firstname:'',
    lastname:'',
    email:'',
    contact:'',
    source:'',
    rating:'',
    mostliked:'',
    leastliked:'',
  }
  
  
  submitForm(){
    console.warn(this.employeeForm.value),
    console.warn(this.employeeForm)
    this.entries.push(this.employeeForm.value)
    console.log(this.entries)
  }

}
