import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumOverflowComponent } from './medium-overflow.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MediumHeaderComponent } from './medium-header/medium-header.component';
import { MediumContentComponent } from './medium-content/medium-content.component';



@NgModule({
  declarations: [
    MediumOverflowComponent,
    MediumHeaderComponent,
    MediumContentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
  ],
})
export class MediumOverflowModule { }
