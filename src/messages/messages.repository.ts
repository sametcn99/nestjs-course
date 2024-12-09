import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: number) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id - 1];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(message: string) {
    const contents = await readFile('messages.json', 'utf-8');
    let messages = JSON.parse(contents);

    if (!Array.isArray(messages)) {
      messages = [];
    }

    const newMessage = { id: messages.length + 1, message };
    messages.push(newMessage);
    await writeFile('messages.json', JSON.stringify(messages, null, 2));
    return newMessage;
  }
}
