import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  GetUserChatList() {
    return [
      {
        chatId: '1',
        name: 'Vincent Mangano',
        lastActive: 'yesterday',
        newMessageCount: 5,
        photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
        lastMessage: 'Money talks. The more money, the louder it talks.',
      },
      {
        chatId: '2',
        name: 'Carlo Gambino',
        lastActive: 'yesterday',
        newMessageCount: 25,
        photoUrl: 'https://randomuser.me/api/portraits/men/66.jpg',
        lastMessage: 'Everybody you fight is not your enemy and everybody that helps you is not your friend.',
      },
      {
        chatId: '3',
        name: 'Salvatore Gravano',
        lastActive: 'yesterday',
        newMessageCount: 123,
        photoUrl: 'https://randomuser.me/api/portraits/men/79.jpg',
        lastMessage: 'Don\'t ever take sides with anyone against the family.'
      },
      {
        chatId: '4',
        name: 'Giuseppe Masseria',
        lastActive: 'yesterday',
        newMessageCount: 1231,
        photoUrl: 'https://randomuser.me/api/portraits/men/82.jpg',
        lastMessage: 'Blood makes you related. Loyalty makes you family.',
      },
      {
        chatId: '5',
        name: 'Anthony Anastasio',
        lastActive: 'yesterday',
        newMessageCount: 8,
        photoUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
        lastMessage: 'Knowledge will give you power but character will give you respect.',
      },
      {
        chatId: '6',
        name: 'Vincent Gigante',
        lastActive: 'yesterday',
        newMessageCount: 65,
        photoUrl: 'https://randomuser.me/api/portraits/men/40.jpg',
        lastMessage: 'I don\'t trust words, I even question actions but I never doubt patterns',
      },
      {
        chatId: '7',
        name: 'Alessandro Vollero',
        lastActive: 'yesterday',
        newMessageCount: 907,
        photoUrl: 'https://randomuser.me/api/portraits/men/29.jpg',
        lastMessage: 'No one gives it to you. You have to take it.',
      },
      {
        chatId: '8',
        name: 'Charlie Luciano',
        position: 'Lucky',
        lastActive: 'yesterday',
        newMessageCount: 4,
        photoUrl: 'https://randomuser.me/api/portraits/men/71.jpg',
        lastMessage: 'Keep your friends close and your enemy closer..',
      },
    ];
  }

  GetChat(chatId: string/*hostId: number, guestId: number*/) {
    return [
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
    ]
  }
}
