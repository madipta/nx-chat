import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  GetCallHistory() {
    return [
      {
        name: 'Vincent Mangano',
        date: 'yesterday',
        photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
        isVideo: true,
      },
      {
        name: 'Salvatore Gravano',
        date: 'December 13 1:03 PM',
        photoUrl: 'https://randomuser.me/api/portraits/men/79.jpg',
        isVideo: false,
      },
      {
        name: 'Giuseppe Masseria',
        date: 'December 5 2:12 PM',
        photoUrl: 'https://randomuser.me/api/portraits/men/82.jpg',
        isVideo: false,
      },
    ];
  }
}
