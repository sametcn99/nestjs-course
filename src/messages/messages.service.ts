import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  create(content: string) {
    return this.messagesRepo.create(content);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  findOne(id: number) {
    return this.messagesRepo.findOne(id);
  }
}
