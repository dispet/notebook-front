import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-read',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  displayedColumns = ['id', 'name', 'email', 'phone', 'action'];

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.read().pipe(first()).subscribe(contacts => {
      this.contacts = contacts;
      this.contacts.forEach((contact) => {
          contact.arrPhone = contact.phone.split(';');
          contact.arrEmail = contact.email.split(';');
        }
      );
    });
  }

}
