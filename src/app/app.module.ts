import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ContactViewComponent} from './components/contact/contact-view/contact-view.component';
import {ContactCreateComponent} from './components/contact/contact-create/contact-create.component';
import {ContactListComponent} from './components/contact/contact-list/contact-list.component';
import {ContactUpdateComponent} from './components/contact/contact-update/contact-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactViewComponent,
    ContactCreateComponent,
    ContactListComponent,
    ContactUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ToolbarModule,
    RadioButtonModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
