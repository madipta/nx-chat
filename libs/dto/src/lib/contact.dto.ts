import { UserDto } from "./user.dto";

export class ContactDto extends UserDto {
  channel: string;
}