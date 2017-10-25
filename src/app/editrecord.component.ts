import { Component } from '@angular/core';
import {Loan} from './loan';
import {LoanService} from './loan.service'; 

@Component({
  selector: 'edit-loan-record',
  styleUrls: [ './editrecord.component.scss' ],  
  template:`
<h1>{{title}}</h1>
    <h2>My Policies</h2>
    <ul class="loans">
      <li *ngFor="let loan of loans"
        [class.selected]="loan === selectedLoan"
        (click)="onSelect(loan)">
        <span class="badge">{{loan.insuranceUnderwriter}}</span> {{loan.policy}}
      </li>
    </ul>
    <loan-detail [loan]="selectedLoan"></loan-detail>
  `
})


export class EditRecordComponent  {

  title= 'Edit Records'; 
  loans : Loan[]; 


  selectedLoan: Loan; 

  constructor(private loanService: LoanService) {}

 getLoans(): void {
    this.loans = this.loanService.getLoans(); 
  }

ngOnInit(): void {

  this.getLoans(); 
}

onSelect(loan:Loan): void {

  this.selectedLoan = loan; 
}



}



