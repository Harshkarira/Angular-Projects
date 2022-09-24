import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { ProductListComponent } from './product-list/product-list.component';

// Routes => [{path:'',component=''}]
const routes:Routes = [
  {path:'students',component:StudentListComponent},
  {path:'product',component:ProductListComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
