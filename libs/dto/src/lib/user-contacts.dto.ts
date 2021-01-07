import { ContactDto } from "./contact.dto";

export class UserContactsDto {
  userId: string;
  contacts: ContactDto[];
}