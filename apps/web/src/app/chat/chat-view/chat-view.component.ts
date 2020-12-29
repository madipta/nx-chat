import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-view',
  template: `
    <div class="pb-12 mx-auto">
      <ng-chat-detail></ng-chat-detail>
      <div class="flex absolute bottom-0 left-0 right-0 p-2 mr-3">
        <div class="flex-grow flex items-center bg-white px-2 py-2 rounded-full shadow-lg mr-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="text-gray-400 w-5 h-5 mt-1"
            viewBox="0 0 24 24">
            <path d="M17,7H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm0,4H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm2-9H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"/>
          </svg>
          <input type="text" placeholder="Type a message" class="ml-2">
        </div>
        <div class="flex-none flex items-center justify-center bg-green-700 w-10 rounded-full shadow-lg">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="text-white w-5 h-5"
            viewBox="0 0 24 24">
            <path d="M17,7H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm0,4H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm2-9H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"/>
          </svg>
        </div>
      </div>
    </div>
  `
})
export class ChatViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
