/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';

import { SnomedTableGridComponent } from './snomed-table-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('SnomedTableGridComponent', () => {
  let component: SnomedTableGridComponent;
  let fixture: ComponentFixture<SnomedTableGridComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [SnomedTableGridComponent],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnomedTableGridComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dataTablesOptions() function', () => {
    component.gridData = [];
    fixture.detectChanges();
    let datatablesOptionsSpy = spyOn(component, 'dataTablesOptions').and.callThrough();
    component.ngOnChanges({
      gridData: new SimpleChange('', '', false)
    });
    fixture.detectChanges();
    expect(datatablesOptionsSpy).toHaveBeenCalled();
  });

  it('should call openDialog() function', () => {
    const openDialogSpy = spyOn(component.dialog, 'open');
    component.openDialog({ height: '50%', width: '60%', data: [{}, {}] });
    expect(openDialogSpy).toHaveBeenCalled();
  });
});
