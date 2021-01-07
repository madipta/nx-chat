import { UserDto } from "./user.dto";

export class ChatMessageDto {
  sender: UserDto;
  message: string;
  channel: string;
  at: string;
}
