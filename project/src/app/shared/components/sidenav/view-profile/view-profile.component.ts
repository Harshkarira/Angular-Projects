import { Component, OnInit } from '@angular/core';
import { MediumService } from 'src/app/medium-overflow/medium.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(private mediumService:MediumService) { }

  ngOnInit(): void {
    this.fetchProfile();
  }

  fetchProfile():void{
    this.mediumService.fetchProfile("1").subscribe((data:any)=>console.warn(data))
  }

}
