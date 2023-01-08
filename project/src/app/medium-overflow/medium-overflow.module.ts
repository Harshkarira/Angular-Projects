import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumOverflowComponent } from './medium-overflow.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MediumHeaderComponent } from './medium-header/medium-header.component';
import { MediumContentComponent } from './medium-content/medium-content.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MediumOverflowComponent,
    MediumHeaderComponent,
    MediumContentComponent,
    AddpostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
})
export class MediumOverflowModule { }
