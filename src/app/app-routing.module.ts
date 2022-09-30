import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/snomed-ct', pathMatch: 'full' },
  {
    path: 'snomed-ct',
    loadChildren: () => import('../app/components/snomed-ct/snomed-ct.module').then(m => m.SnomedCtModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
