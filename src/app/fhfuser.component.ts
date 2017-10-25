import { Component } from '@angular/core';
import { FHFUserService } from './fhfuser.service';

@Component({
  selector: 'fhfuser-root',
  template:`


<div class="flex-grid">

<div class="col feature-flex-item">
  <img src="'../../assets/images/applicant.png">
<h3>Applicant</h3>
  <p *ngFor="let user of users | async ">User ID : {{user.userid}}<br>
    Login URL  : {{user.login_url}} 
  </p>

</div>

</div>



  `
})

export class FHFUserComponent {

	users; 

	constructor(private fhfuserService: FHFUserService) {

		this.users = fhfuserService.getUsers(); 
	}

}
