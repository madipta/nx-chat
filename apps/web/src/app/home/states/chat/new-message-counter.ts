export interface ChannelMessageCount {
  channel: string;
  count: number;
}

export class NewMessageCounter {
  static set(initial: ChannelMessageCount[], channel: string, count: number) {
    let list = [...initial];
    const index = list.findIndex((v) => v.channel === channel);
    if (index >= 0) {
      list.splice(index, 1);
    }
    list.push({ channel, count });
    return list;
  }
  static reset(initial: ChannelMessageCount[], channel: string) {    
    return this.set(initial, channel, 0);
  }
  static add(initial: ChannelMessageCount[], channel: string, count = 1) {
    const list = [...initial];
    const index = list.findIndex((v) => v.channel === channel);
    if (index >= 0) {
      count = list[index].count + count;
      list.splice(index, 1);
    }
    list.push({ channel, count });
    return list;
  }
}
