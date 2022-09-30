import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnomedCtComponent } from './snomed-ct.component';

const routes: Routes = [
  { path: '', component: SnomedCtComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SnomedCtRoutingModule { }