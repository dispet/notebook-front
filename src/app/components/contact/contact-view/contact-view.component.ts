import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/contacts/create']);
  }

}
