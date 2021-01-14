import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';
import { ContactsFacade } from '../../main/contacts/state/contacts.facade';
import { ChatFacade } from '../state/chat.facade';

@Component({
  selector: 'app-chat-view',
  template: `
    <div class="max-w-screen-sm mx-auto">
      <div class="leading-tight text-center text-xs text-gray-500 pt-1">
        you are: {{ host.name }}
      </div>
      <ng-chat-detail [messages]="messages" [host]="host"></ng-chat-detail>
    </div>
    <div class="absolute bottom-0 left-0 right-0">
      <div class="flex w-full max-w-screen-sm px-1 mx-auto mb-2">
        <div
          class="flex-grow flex items-end bg-white px-3 py-2 rounded-3xl shadow mr-1"
        >
          <svg
            ng-chat-not-implemented
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#aaa"
            stroke-width="2"
            class="w-6 h-6"
            viewBox="0 0 32 32"
          >
            <circle cx="16" cy="16" r="13" />
            <g stroke-linejoin="round" stroke-miterlimit="10">
              <path d="M10.7 19c1.4 1.2 3.3 2 5.3 2s3.9-.8 5.3-2M12 12v5" />
              <path d="M20 12v5" />
            </g>
          </svg>
          <div
            #placeholder
            (tap)="placeholderClick()"
            class="text-gray-400 w-full mx-3"
          >
            Type a Message
          </div>
          <div
            #inputMessage
            (blur)="messageBlur()"
            contenteditable="true"
            class="hidden w-full text-gray-700 break-all max-h-32 focus:outline-none mx-3 overflow-y-auto"
          ></div>
        </div>
        <div class="flex-none flex items-end justify-center">
          <svg
            ng-chat-not-implemented
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            [ngClass]="{ hidden: isEdit }"
            class="bg-green-700 text-white w-10 h-10 p-1 rounded-full shadow-lg"
            viewBox="-4 -3 24 24"
          >
            <path
              d="M8 11a3 3 0 0 0 3-3V3a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zm5-3V6h-1v1.844c0 1.92-1.282 3.688-3.164 4.071A4.01 4.01 0 0 1 4 8V6H3v2a5.01 5.01 0 0 0 4 4.899V15H5v1h6v-1H9v-2.101A5.01 5.01 0 0 0 13 8z"
            />
          </svg>
          <svg
            (tap)="sendMessage()"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            [ngClass]="{ hidden: !isEdit }"
            class="bg-green-700 text-white w-10 h-10 p-2 rounded-full shadow-lg"
            viewBox="0 0 32 32"
          >
            <path
              d="M29.3 2.6c-.3-.2-.7-.3-1-.2L3 11.7c-.4.1-.7.5-.7.9s.3.8.7.9l10.2 3.8 10-10c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-9.8 9.8 6.6 10.6c.2.3.5.5.8.5h.2c.4-.1.7-.4.8-.7l6.2-25.2c.3-.4.2-.8-.1-1.1z"
            />
          </svg>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatViewComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('placeholder') placeholdeRef: ElementRef;
  @ViewChild('inputMessage') inputMessageRef: ElementRef;
  private placeholder: HTMLElement;
  private inputMessage: HTMLElement;
  private unsubscribe$ = new Subject<void>();
  host = this.authService.CurrentUser();
  channel = '';
  isEdit = false;
  messages = [];

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private chatFacade: ChatFacade,
    private contactsFacade: ContactsFacade,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    const contact = await this.contactsFacade.getSelectedContact();
    if (! contact) {
      this.router.navigate(['/home/main']);
      return;
    }
    this.channel = contact.channel;
    this.chatFacade
      .getSelectedMessages(this.channel)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.messages = res;
        this.cdr.markForCheck();
      });
  }

  ngAfterViewInit(): void {
    this.placeholder = this.placeholdeRef.nativeElement as HTMLElement;
    this.inputMessage = this.inputMessageRef.nativeElement as HTMLElement;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private toggleMessageInput() {
    this.placeholder.classList.toggle('hidden');
    this.inputMessage.classList.toggle('hidden');
  }

  sendMessage() {
    const text = this.inputMessage.innerText.trim();
    if (text) {
      this.chatFacade.sendChat({
        sender: this.host,
        message: text,
        channel: this.channel,
      });
      // firefox bug hacks
      this.inputMessage.innerHTML = '&nbsp;';
      this.inputMessage.focus();
    }
  }

  placeholderClick() {
    this.toggleMessageInput();
    this.inputMessage.focus();
    // firefox bug hacks
    this.inputMessage.innerHTML = '&nbsp;';
    this.isEdit = true;
  }

  messageBlur() {
    const text = this.inputMessage.innerText.trim();
    if (!text) {
      this.toggleMessageInput();
      this.isEdit = false;
    }
  }
}
