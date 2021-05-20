import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {ContactService} from '../contact.service';
import {Contact} from '../contact.model';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit{
  contact: Contact = {};

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  // tslint:disable-next-line:typedef
  trackByFn(item, id){
    return item;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.readById(id).pipe(first()).subscribe(contact => {
      this.contact = contact;
      this.contact.arrPhone = contact.phone.split(';');
      this.contact.arrEmail = contact.email.split(';');
    });
  }

  updateContact(): void {
    this.contact.phone = this.contact.arrPhone.join(';');
    this.contact.email = this.contact.arrEmail.join(';');
    this.contactService.update(this.contact).pipe(first()).subscribe(() => {
            this.router.navigate(['/contacts']);
    });
  }

  cancel(): void {
    this.router.navigate(['/contacts']);
  }

  addPhone(): void{
    this.contact.arrPhone.push('');
  }

  addEmail(): void{
    this.contact.arrEmail.push('');
  }
}
