import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { FHFUser } from './fhf';


@Injectable()
export class FHFUserService {

	constructor(private http: Http){}

	getUsers(): Observable<FHFUser[]> {

		let username: string = 'rest_auth_user'; 
		let password: string = 'R3sT@u1HUs3R'; 
		let headers: Headers = new Headers(); 
		const baseUrl: string = 'https://apisdev.firsthelpfinancial.com/ords/mapping/user/';

	 headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
      headers.append("Content-Type", "application/x-www-form-urlencoded");

		return this.http.get(baseUrl,{headers:headers})
		.map((res: Response) => res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server Error' )); 
	}
}
