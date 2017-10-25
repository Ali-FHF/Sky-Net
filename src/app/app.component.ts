import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'], 
  template: `
  <div class="container-fluid">

<div class="row">
  <div class="col-md-12 loan-header"><h1>{{title}}</h1></div>
</div>
</div>
<user-root></user-root>
<edit-loan-record></edit-loan-record>
<fhfuser-root></fhfuser-root>
  `
  
})
export class AppComponent {
  title = 'Loan Details';
}
