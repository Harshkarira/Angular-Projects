import { Component, OnInit } from '@angular/core';
import { MediumService } from 'src/app/medium-overflow/medium.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  constructor(private mediumService: MediumService) { }

  ngOnInit(): void {
    this.fetchBlog()
  }
  fetchBlog():void{
    this.mediumService.fetchblog("slugh").subscribe((data:any)=>console.warn(data))
  }

}
