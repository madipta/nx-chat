import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactDto } from '@nx-chat/dto';
import { ContactsFacade } from '../../states/contacts/contacts.facade';

@Component({
  selector: 'app-chat-list',
  template: `
    <ng-chat-list
      [list]="contactList | async"
      (ChatSelected)="onChatSelected($event)"
    ></ng-chat-list>
    <div ng-chat-fab>
      <svg
        ng-chat-not-implemented
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="inline w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path
          d="M17,7H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm0,4H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm2-9H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
        />
      </svg>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
  contactList = this.contactsFacade.contacts$;

  constructor(
    private contactsFacade: ContactsFacade,
    private router: Router
  ) {}

  onChatSelected(contact: ContactDto) {
    this.contactsFacade.selectContact(contact);
    this.router.navigate(['/home/chat']);
  }
}
