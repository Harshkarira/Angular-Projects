import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
// import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'student',component:StudentListComponent},
  {path:'teachers',component:TeacherListComponent},
  // {path:'test',component:TestComponent},
  {path:'test',component:ReactiveFormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
