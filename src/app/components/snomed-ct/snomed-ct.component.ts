import { Component, OnInit } from '@angular/core';
import { MyorbService } from 'src/app/services/myorb.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-snomed-ct',
  templateUrl: './snomed-ct.component.html',
  styleUrls: ['./snomed-ct.component.scss']
})
export class SnomedCtComponent implements OnInit {
  gridData: [] = [];
  filterControl = new FormControl();

  constructor(private myOrb: MyorbService) { }

  ngOnInit() {
    this.getSnomedCT();
  }

  getSnomedCT(term = 'ultrasound head') {
    this.myOrb.getSnomeCT(term)
      .subscribe((response: any) => {
        this.gridData = response.items;
      });
  }
}
