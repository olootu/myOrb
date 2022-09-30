import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnomedCtComponent } from './snomed-ct.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SnomedCtRoutingModule } from './snomed-ct-routing.module';
import { SnomedTableGridComponent } from './snomed-table-grid/snomed-table-grid.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SnomedCtRoutingModule
  ],
  declarations: [SnomedCtComponent, SnomedTableGridComponent]
})
export class SnomedCtModule { }
