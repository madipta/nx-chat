import { Routes } from "@angular/router";
import { CallListComponent } from "./call-list/call-list.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { MainComponent } from "./main.component";
import { PhotoComponent } from "./photo/photo.component";
import { StatusListComponent } from "./status-list/status-list.component";

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: ContactsComponent },
      { path: 'status', component: StatusListComponent },
      { path: 'calls', component: CallListComponent },
      { path: 'photo', component: PhotoComponent },
    ],
  },
];