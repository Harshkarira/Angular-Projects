import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { ToastService } from 'src/app/shared/components/toasts/toast.service';
import { MediumService } from '../medium.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
})
export class AddpostComponent implements OnInit {
 
  constructor(private mediumservice:MediumService, private ngbCalendar:NgbCalendar, private toastservice: ToastService) { }
  createPostForm!:FormGroup
  todayDate!:NgbDateStruct;
  categories:any;
  selectedCategory:any;

  validSlug = false;
  ngOnInit(): void {
    this.todayDate=this.ngbCalendar.getToday()
    this.getCategories();
    this.createForm();

  }
  icons={
    date:faCalendar
  }

  createForm(){
    this.createPostForm=new FormGroup({
      title:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      category:new FormControl(),
      scheduleDate:new FormControl(this.todayDate),
      Slug:new FormControl('')
    })
  }
  submitForm(){
    this.validateSlug();
    console.log(this.createPostForm)
  }
  getCategories():void {
    this.mediumservice.getCategories().subscribe((data)=> {
      this.categories = data;
    })
  }

  selectCategory(categories:any){
    console.warn(categories)
    this.createPostForm.patchValue({
      category: categories.CategoryId
    })
    this.selectedCategory = categories.Categoryname
    console.warn(this.createPostForm.value)
  }

  validateSlug(){
    const Slug = this.createPostForm.get('Slug')?.value;
    this.mediumservice.validateSlug(Slug).subscribe((value:any)=>{
      this.validSlug = value.validSlug
      console.warn(this.validSlug)

      if(this.validSlug){
        //insert logic
      }
      else{
        //error
        this.toastservice.show({textOrTpl:'invalid slug',classname:'bg-danger',delay:5000})
        alert("error")
      }
    });

    
  }

  tags=['tag1','foo','tag2','tag1']
  // search : OperatorFunction<string, string[]> = (text$:Observable<string>)=>{
  //   text$.pipe(
  //     map((value)=>this.tags.filter((elem:any)=>elem===value))
  //   )
  // }


}
