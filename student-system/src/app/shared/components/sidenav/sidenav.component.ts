import { Component, OnInit } from '@angular/core';
import { faDashboard, faUserGraduate, faChalkboardTeacher, faRulerVertical, faBookReader, faSearch, faComment, faBell, faSignOut, faBookOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  icons = {
    dashboardIcon: faDashboard,
    userGraduateIcon: faUserGraduate,
    userTeacher: faChalkboardTeacher,
    userStd: faRulerVertical,
    subjects: faBookReader,
    testIcon: faBookOpen,
    searchIcon: faSearch,
    commentIcon: faComment,
    bell: faBell,
    exit: faSignOut,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
