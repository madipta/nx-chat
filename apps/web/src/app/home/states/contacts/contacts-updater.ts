import { ChatMessageDto, ContactDto } from '@nx-chat/dto';

export class ContactsUpdater {
  static newUnreadMessage(contacts: ContactDto[], chat: ChatMessageDto) {
    const list = [...contacts];
    const index = list.findIndex((c) => c.userId === chat.sender.userId);
    if (index >= 0) {
      const c = list[index];
      const msgCount = c.newMessageCount ? c.newMessageCount + 1 : 1;
      list[index] = {
        ...c,
        lastMessage: chat.message,
        newMessageCount: msgCount,
      };
    }
    return list;
  }
  static newMessage(contacts: ContactDto[], chat: ChatMessageDto) {
    const list = [...contacts];
    const index = list.findIndex((c) => c.userId === chat.sender.userId);
    if (index >= 0) {
      const c = list[index];
      list[index] = {
        ...c,
        lastMessage: chat.message,
      };
    }
    return list;
  }
  static resetMessageCount(contacts: ContactDto[], contact: ContactDto) {
    const list = [...contacts];
    const index = list.findIndex((c) => c.userId === contact.userId);
    if (index >= 0) {
      const c = list[index];
      list[index] = {
        ...c,
        newMessageCount: 0,
      };
    }
    return list;
  }
}
