import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Contact} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private  http: HttpClient) {
  }

  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(environment.BASE_URL, contact).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Contact[]> {
    return this.http.get<Contact[]>(environment.BASE_URL).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Contact> {
    const url = `${environment.BASE_URL}/${id}`;
    return this.http.get<Contact>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(contact: Contact): Observable<Contact> {
    const url = `${environment.BASE_URL}/${contact.id}`;
    return this.http.put<Contact>(url, contact).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    return EMPTY;
  }
}
