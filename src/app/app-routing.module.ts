import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactViewComponent} from './components/contact/contact-view/contact-view.component';
import {ContactCreateComponent} from './components/contact/contact-create/contact-create.component';
import {ContactUpdateComponent} from './components/contact/contact-update/contact-update.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactViewComponent
  },
  {
    path: 'contacts/create',
    component: ContactCreateComponent
  },
  {
    path: 'contacts/update/:id',
    component: ContactUpdateComponent
  },
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: '**', redirectTo: '/contacts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
