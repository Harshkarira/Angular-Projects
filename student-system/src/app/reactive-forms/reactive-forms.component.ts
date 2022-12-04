import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { faTachographDigital } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }
  
  studentForm!:FormGroup;
  standards=["V","VI","VII","VIII","IX","X"]
  ngOnInit(): void {
    this.createform();
  }
  databasevalues={
    firstname:'dbFname',
    lastname:'dbLname'
  }
  createform(){
    this.studentForm=new FormGroup({
      firstname: new FormControl('Haresh',[Validators.required]),
      lastname: new FormControl('Karira',[Validators.required]),
      std: new FormControl('V')
    })
  }
  get formControls(){
    return this.studentForm.controls;
  }
  // set formControls(value){

  // }
  updateName(){
    // set value will require all attributes like firstname lastname and std
    this.studentForm.patchValue({
      ...this.databasevalues,
      std:'X'
    })

    this.studentForm.get("firstname")?.setValue("Harsh")

  }
  submitForm(){
    console.warn(this.studentForm.value),
    console.warn(this.studentForm),
    console.log(this.studentForm.get('firstname')?.value)
    //console.log(this.studentForm.controls['firstname'].value) //it will give an error bcuz we would access value of something that is null or undefined.
    console.log(this.studentForm.controls['firstname']?.value)
  }
}
