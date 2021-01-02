import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() { }

  GetMyStatus() {
    return {
      name: 'Vincent Mangano',
      photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
      lastDate: 'yesterday',
    };
  }

  GetRecentStatus() {
    return [
      {
        name: 'Vincent Mangano',
        photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
        lastDate: 'yesterday',
      },
    ];
  }

  GetViewedStatus() {
    return [
      {
        name: 'Vincent Mangano',
        photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
        lastDate: 'yesterday',
      },
      {
        name: 'Vincent Mangano',
        photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
        lastDate: 'yesterday',
      },
    ];
  }

  GetMutedStatus() {
    return [
      {
        name: 'Vincent Mangano',
        photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
        lastDate: 'yesterday',
      },
    ];
  }
}
