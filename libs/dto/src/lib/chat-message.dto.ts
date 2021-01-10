import { UserDto } from "./user.dto";

export class ChatMessageDto {
  id?: string;
  sender: UserDto;
  message: string;
  channel: string;
  at?: string;
}
