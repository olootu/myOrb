import { Component, OnInit } from '@angular/core';
import { MyorbService } from 'src/app/services/myorb.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-snomed-ct',
  templateUrl: './snomed-ct.component.html',
  styleUrls: ['./snomed-ct.component.scss']
})
export class SnomedCtComponent implements OnInit {
  gridData: [] = [];
  subscription: Subscription;

  constructor(private http: MyorbService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.http.getEmployees()
      .subscribe(res => {
        this.gridData = res;
      })
  }

  logData() {
    console.log(this.gridData);
  }
}
