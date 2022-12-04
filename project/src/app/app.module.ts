import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MediumOverflowModule } from './medium-overflow/medium-overflow.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    MediumOverflowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
