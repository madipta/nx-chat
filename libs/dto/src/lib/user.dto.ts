export class UserDto {
  userId: string;
  username: string;
  name: string;
  photoUrl: string;
  lastActive?: string;
  newMessageCount?: number;
  lastMessage?: string;
}