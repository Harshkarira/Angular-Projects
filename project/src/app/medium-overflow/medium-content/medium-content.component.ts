import { Component, OnInit } from '@angular/core';
import { BlogData } from 'src/app/shared/BlogData';
//import { MediumService } from 'src/app/medium.service';
import { cards } from 'src/app/shared/interfaces';
import { MediumService } from '../medium.service';

@Component({
  selector: 'app-medium-content',
  templateUrl: './medium-content.component.html',
  styleUrls: ['./medium-content.component.css']
})
export class MediumContentComponent implements OnInit {
  blogsData!: BlogData[];


  constructor(private mediumservice: MediumService) { }

  ngOnInit(): void {
    this.fetchBlogs();
    // this.getcards();
  }
  // getcards(){
  //   this.cards = this.mediumservice.fetchcards();
  // }
  // cards!: cards[]

  fetchBlogs():void {
    this.mediumservice.fetchblogs().subscribe((value:BlogData[])=> {
      this.blogsData = value;
    });
  }

}
