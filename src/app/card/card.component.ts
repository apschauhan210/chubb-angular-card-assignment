import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() plan: string = "";
  @Input() price: string = "";
  @Input() users: string = "";
  @Input() isBold: boolean = true;
  @Input() storage: string = "";
  @Input() unlimited_private_projects: Array<string> = [];
  @Input() dedicated_phone_support: Array<string> = [];
  @Input() subdomain: Array<string> = [];
  @Input() unlimited: string = "";
  @Input() monthly_status_reports: Array<string> = [];

}
