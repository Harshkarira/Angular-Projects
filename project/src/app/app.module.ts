import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MediumOverflowModule } from './medium-overflow/medium-overflow.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewBlogsComponent } from './medium-overflow/medium-content/view-blogs/view-blogs.component';
import { ViewProfileComponent } from './shared/components/sidenav/view-profile/view-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddpostComponent } from './addpost/addpost.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBlogsComponent,
    ViewProfileComponent,
    AddpostComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    MediumOverflowModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
