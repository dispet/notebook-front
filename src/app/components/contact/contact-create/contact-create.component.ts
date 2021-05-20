import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {ContactService} from '../contact.service';
import {Contact} from '../contact.model';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact: Contact = {
    emailnum: 0,
    phonenum: 0,
    arrPhone: [''],
    arrEmail: ['']
  };

  constructor(private contactService: ContactService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  createContact(): void {
    this.contact.phone = this.contact.arrPhone.join(';');
    this.contact.email = this.contact.arrEmail.join(';');
    this.contactService.create(this.contact).pipe(first()).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }

  // tslint:disable-next-line:typedef
  trackByFn(item, id) {
    return item;
  }

  cancel(): void {
    this.router.navigate(['/contacts']);
  }

  addPhone(): void {
    this.contact.arrPhone.push('');
  }

  addEmail(): void {
    this.contact.arrEmail.push('');
  }
}
