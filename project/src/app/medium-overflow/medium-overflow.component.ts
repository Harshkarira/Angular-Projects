import { Component, OnInit } from '@angular/core';
import { faComment, faHeart} from '@fortawesome/free-solid-svg-icons';
import { MediumService } from '../medium.service';
import { cards } from '../shared/interfaces';

@Component({
  selector: 'app-medium-overflow',
  templateUrl: './medium-overflow.component.html',
  styleUrls: ['./medium-overflow.component.css']
})
export class MediumOverflowComponent implements OnInit {

  icons = {
    likeIcon: faHeart,
    commentIcon: faComment
  }
  constructor(private mediumservice: MediumService) { }
  
  

  sideNavCollapse = true;
  navbarCollapse = false;

  ngOnInit(): void {
    this.getcards();
  }
  getcards(){
    this.cards = this.mediumservice.fetchcards();
  }
  cards !: cards[]

}
