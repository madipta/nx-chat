import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-view',
  template: `
    <div class="max-w-screen-sm pb-12 mx-auto">
      <ng-chat-detail [messages]="messages"></ng-chat-detail>
    </div>
    <div class="absolute bottom-0 left-0 right-0">
      <div class="flex w-full max-w-screen-sm px-1 mx-auto mb-2">
        <div class="flex-grow flex items-end bg-white px-3 py-2 rounded-3xl shadow mr-1">
          <svg 
            (tap)="notImplemented()"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" stroke="#aaa" stroke-width="2"
            class="w-6 h-6"
            viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="13"/><g stroke-linejoin="round" stroke-miterlimit="10"><path d="M10.7 19c1.4 1.2 3.3 2 5.3 2s3.9-.8 5.3-2M12 12v5"/><path d="M20 12v5"/></g>
          </svg>
          <div
            #placeholder
            (tap)="placeholderClick()"
            class="text-gray-400 w-full mx-3">Type a Message</div>
          <div
            #message
            (blur)="messageBlur()"
            contenteditable="true"
            class="hidden w-full text-gray-700 max-h-32 focus:outline-none mx-3 overflow-y-auto"></div>
        </div>
        <div class="flex-none flex items-end justify-center">
          <svg 
            (tap)="notImplemented()"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            [ngClass]="{ 'hidden': isEdit }"
            class="bg-green-700 text-white w-10 h-10 p-1 rounded-full shadow-lg"
            viewBox="-4 -3 24 24">
            <path d="M8 11a3 3 0 0 0 3-3V3a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zm5-3V6h-1v1.844c0 1.92-1.282 3.688-3.164 4.071A4.01 4.01 0 0 1 4 8V6H3v2a5.01 5.01 0 0 0 4 4.899V15H5v1h6v-1H9v-2.101A5.01 5.01 0 0 0 13 8z"/>
          </svg>
          <svg 
            (tap)="sendMessage()"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            [ngClass]="{ 'hidden': !isEdit }"
            class="bg-green-700 text-white w-10 h-10 p-2 rounded-full shadow-lg"
            viewBox="0 0 32 32">
            <path d="M29.3 2.6c-.3-.2-.7-.3-1-.2L3 11.7c-.4.1-.7.5-.7.9s.3.8.7.9l10.2 3.8 10-10c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-9.8 9.8 6.6 10.6c.2.3.5.5.8.5h.2c.4-.1.7-.4.8-.7l6.2-25.2c.3-.4.2-.8-.1-1.1z"/>
          </svg>
        </div>
      </div>
    </div>
  `,
})
export class ChatViewComponent implements AfterViewInit  {
  @ViewChild("placeholder") placeholdeRef: ElementRef;
  @ViewChild("message") messageRef: ElementRef;
  private placeholder: HTMLElement;
  private message: HTMLElement;
  isEdit = false;

  messages = [
    {
      body: 'some looooooooooooooooooooooooooooooooooooooong message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'hmm',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      reply: true,
      body: 'some reply ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some sample message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      reply: true,
      body: 'some reply message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      reply: true,
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'lorem ipsum apalah apa kek iyalah iya dong ada deh ada aja...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: `
        bla bla...bla bla...bla bla...bla bla...bla bla...bla 
        bla...bla bla...bla bla...bla bla...bla bla...bla bla...
        bla bla...bla bla...bla bla...bla bla...bla bla...
        bla bla...bla bla...bla bla...bla bla...bla bla...`,
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      reply: true,
      body: `
        bla bla...bla bla...bla bla...bla bla...bla bla...bla 
        bla...bla bla...bla bla...bla bla...bla bla...bla bla...
        bla bla...bla bla...bla bla...bla bla...bla bla...
        bla bla...bla bla...bla bla...bla bla...bla bla...`,
      date: 'yesterday',
      at: '1:49 PM',
    },
  ];

  ngAfterViewInit(): void {
    this.placeholder = this.placeholdeRef.nativeElement as HTMLElement;
    this.message = this.messageRef.nativeElement as HTMLElement;
  }

  private toggleMessageInput() {
    this.placeholder.classList.toggle('hidden');
    this.message.classList.toggle('hidden');
  }

  notImplemented() {
    alert('Not Implemented.');
  }

  sendMessage() {
    const text = this.message.innerText.trim();
    if (text) {
      alert(`SEND: ${text}`);
      this.toggleMessageInput();
      this.message.innerText = '';
      this.isEdit = false;
    }
  }

  placeholderClick() {
    this.toggleMessageInput();
    this.message.focus();
    this.isEdit = true;
  }

  messageBlur() {
    const text = this.message.innerText.trim();
    if (!text) {
      this.toggleMessageInput();
      this.isEdit = false;
    }
  }
}
