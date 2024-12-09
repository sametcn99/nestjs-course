import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // This is a bad practice
    this.messagesRepo = new MessagesRepository();
  }

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
