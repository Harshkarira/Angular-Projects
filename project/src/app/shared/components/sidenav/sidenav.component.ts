import { Component, OnInit } from '@angular/core';
import { faDashboard, faUserGraduate, faChalkboardTeacher, faRulerVertical, faBookReader, faSearch, faComment, faBell, faSignOut, faBookOpen, faClose} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }
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
    close: faClose,
  }

  sideNavCollapse = true;
  navbarCollapse = false;

  ngOnInit(): void {
  }

}
