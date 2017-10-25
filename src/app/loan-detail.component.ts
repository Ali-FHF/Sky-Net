import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; 
import { Location } from '@angular/common';
import { Loan } from './loan';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'loan-detail',
  template: `
    <div *ngIf="loan">
      <h2>{{loan.insuranceUnderwriter}} is your Insurance Under Writer ! </h2>
      <div><label>Policy Number </label>{{loan.policy}}</div>
      <div>
        <label>Policy Notes </label>
        <input [(ngModel)]="loan.policyNotes" placeholder="Policy Notes"/>
      </div>
    </div>
  `
})


export class LoanDetailComponent implements OnInit {
@Input() loan: Loan; 


ngOnInit() {}


}





