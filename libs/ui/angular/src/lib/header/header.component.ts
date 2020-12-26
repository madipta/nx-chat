import { Component } from '@angular/core';

@Component({
  selector: 'ng-chat-header',
  template: `
    <div class="flex flex-col flex-nowrap bg-green-800 text-white px-3 border-b-2 border-green-700">
      <div class="flex flex-row items-end py-2 mb-4">
        <h1 class="text-xl font-medium mr-auto">ApalahApp</h1>
        <ul class="text-sm font-medium text-gray-200">
          <li class="inline-block mx-2">search</li>
          <li class="inline-block ml-2">settings</li>
        </ul>
      </div>
      <div class="flex flex-row text-sm font-medium text-green-600">
        <div class="mr-2 flex-shrink-0">Cam</div>
        <div class="flex flex-row w-full text-center">
          <div class="mx-2 flex-grow text-gray-100 border-b-2 border-gray-100">Chats</div>
          <div class="mx-2 flex-grow">Status</div>
          <div class="ml-2 flex-grow">Calls</div>
        </div>
      </div>
    </div>
  `,
})
export class HeaderComponent {}
