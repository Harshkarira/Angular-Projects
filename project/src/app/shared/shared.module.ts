import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
  ],
  exports: [
    SidenavComponent,
    AppRoutingModule,
    NgbModule,
  ]
})
export class SharedModule { }
