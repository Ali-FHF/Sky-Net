import { Injectable } from '@angular/core';
import {LOANSDATA} from './mock-loans';
import { Loan } from './loan';

@Injectable()
export class LoanService {
	getLoans(): Loan[] {
		return LOANSDATA;
	}
}
