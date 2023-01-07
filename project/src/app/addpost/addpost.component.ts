import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MediumService } from '../medium-overflow/medium.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
})
export class AddpostComponent implements OnInit {

  constructor(private mediumservice:MediumService) { }
  createPostForm!:FormGroup
  categories:any;
  selectedCategory:any;

  ngOnInit(): void {
    this.getCategories();
    this.createForm();
  }

  createForm(){
    this.createPostForm=new FormGroup({
      title:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      category:new FormControl(),
      scheduleDate:new FormControl()
    })
  }
  submitForm(){
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

}
