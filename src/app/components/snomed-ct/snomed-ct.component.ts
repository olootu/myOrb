import { Component, OnInit } from '@angular/core';
import { MyorbService } from 'src/app/services/myorb.service';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-snomed-ct',
  templateUrl: './snomed-ct.component.html',
  styleUrls: ['./snomed-ct.component.scss']
})
export class SnomedCtComponent implements OnInit {
  gridData: [] = [];
  filterControl = new FormControl('', [Validators.minLength(3)]);
  subscription: Subscription;

  constructor(private myOrb: MyorbService) { }

  ngOnInit() {
    this.getSnomedCT();
    this.subscription = this.filterControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
      .subscribe(value => {
        if (value.length > 2) {
          this.getSnomedCT(value);
        }
      })
  }

  getSnomedCT(term = 'ultrasound head') {
    this.myOrb.getSnomeCT(term)
      .subscribe((response: any) => {
        this.gridData = response.items;
      });
  }
  get formfilterControl(): any {
    return this.filterControl;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }
}
