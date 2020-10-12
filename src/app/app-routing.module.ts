import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingformarrayComponent } from './bindingformarray/bindingformarray.component';
import { FormArray1Component } from './form-array1/form-array1.component';

export const routers = [BindingformarrayComponent, FormArray1Component];
const routes: Routes = [
  { path: 'form', component: FormArray1Component },
  { path: 'bind', component: BindingformarrayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
