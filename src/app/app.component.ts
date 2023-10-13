import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularwithbootstrap';
  plan = [
    {
      plan:"FREE",
      price:"0",
      users:"Single User",
      isBold: false,
      storage:"5",
      unlimited_private_projects:["text-muted","fas fa-times"],
      dedicated_phone_support:["text-muted","fas fa-times"],
      subdomain:["text-muted","fas fa-times"],
      unlimited:"",
      monthly_status_reports:["text-muted","fas fa-times"]
    },
    {
      plan:"PLUS",
      price:"9",
      users:"5 Users",
      isBold: true,
      storage:"50",
      unlimited_private_projects:["","fas fa-check"],
      dedicated_phone_support:["","fas fa-check"],
      subdomain:["","fas fa-check"],
      unlimited:"",
      monthly_status_reports:["text-muted","fas fa-times"]
    },
    {
      plan:"PRO",
      price:"49",
      users:"Unlimited Users",
      isBold: true,
      storage:"150",
      unlimited_private_projects:["","fas fa-check"],
      dedicated_phone_support:["","fas fa-check"],
      subdomain:["","fas fa-check"],
      unlimited:"Unlimited ",
      monthly_status_reports:["","fas fa-check"]
    }

  ]

}
